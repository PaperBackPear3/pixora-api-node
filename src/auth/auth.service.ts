import { Injectable } from '@nestjs/common';
import { UserDTO } from './dto/user';

@Injectable()
export class AuthService {
  getHello(): string {
    return 'Hello Auth!';
  }

  login(userDTO: UserDTO): string {
    // Implement login logic here
    return `User ${userDTO.email} logged in  ${userDTO.password}`;
  }

  register(userDTO: UserDTO): string {
    // Implement registration logic here
    return `User ${userDTO.email} registered  ${userDTO.password}`;
  }

  logout(email: string): string {
    // Implement logout logic here
    return `User ${email} logged out`;
  }
}
