import { Controller, Get, Render } from '@nestjs/common';

@Controller('login')
export class LoginRenderController {
  @Get('')
  @Render('login')
  public login() {}
}
