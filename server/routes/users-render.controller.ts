import { Controller, Get, Param, Render } from '@nestjs/common';

@Controller('users')
export class UsersRenderController {
  @Get('')
  @Render('users')
  public users() {}

  @Get(':id')
  @Render('users/[id]')
  public user(@Param('id') id: string) {
    return { id };
  }
}
