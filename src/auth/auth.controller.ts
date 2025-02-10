import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDTO } from './dto/user';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('')
  getHello(): string {
    return this.authService.getHello();
  }

  @Post('/login')
  login(@Body() userDTO: UserDTO): string {
    return this.authService.login(userDTO);
  }

  @Post('/register')
  register(@Body() userDTO: UserDTO): string {
    return this.authService.register(userDTO);
  }

  @Post('/logout')
  logout(@Body() userDTO: UserDTO): string {
    return this.authService.logout(userDTO.email);
  }
}
