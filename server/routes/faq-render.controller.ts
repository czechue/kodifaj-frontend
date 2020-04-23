import { Controller, Get, Render } from '@nestjs/common';

@Controller('faq')
export class FaqRenderController {
  @Get('')
  @Render('faq')
  public faq() {}
}
