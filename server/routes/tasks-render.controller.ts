import { Controller, Get, Param, Render } from '@nestjs/common';

@Controller('tasks')
export class TasksRenderController {
  @Get('')
  @Render('tasks')
  public tasks() {}

  @Get('new')
  @Render('tasks/new')
  public createTask() {}

  @Get(':id')
  @Render('tasks/[id]')
  public task(@Param('id') id: string) {
    return { id };
  }

  @Get(':id/edit')
  @Render('tasks/edit')
  public editTask(@Param('id') id: string) {
    return { id };
  }
}
