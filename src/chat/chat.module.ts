import { Module } from '@nestjs/common';
import { ChatGateway } from './chat.gateway';

@Module({
  //   controllers: [AppController],
  providers: [ChatGateway],
})
export class ChatModule {}
