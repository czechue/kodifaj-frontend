import { Controller, Get, Render } from '@nestjs/common';

@Controller('')
export class HomeRenderController {
  @Get('')
  @Render('Index')
  public index() {}
}
