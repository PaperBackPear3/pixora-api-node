import { Logger } from '@nestjs/common';
import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
  //   namespace: 'chats',
  cors: {
    origin: 'http://localhost:5173',
  },
})
export class ChatGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  private readonly logger = new Logger(ChatGateway.name);
  @WebSocketServer()
  server: Server;
  afterInit() {
    this.logger.log('Initialized');
  }

  handleConnection(client: any) {
    const { sockets } = this.server.sockets;
    this.logger.log(`Client id: ${client.id} connected`);
    this.logger.debug(`Number of connected clients: ${sockets.size}`);
  }

  handleDisconnect(client: any) {
    this.logger.log(`Cliend id:${client.id} disconnected`);
  }

  /*user sends message from client.
   * event name: new_message_event
   * server listend to that event
   * server saves the message on DB
   * server emits new_message_delivered to the sender client
   * server emits new_message_event to the receiver
   */

  @SubscribeMessage('new_message_event')
  handleEvent(@MessageBody() data: any, @ConnectedSocket() client: Socket) {
    this.logger.log('data', data);
    client.emit('new_message_event', data);
  }
}
