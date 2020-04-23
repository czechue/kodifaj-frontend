import { Body, Controller, Get, Param, Post, Put, Req } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './interfaces/task.interface';
import { RequestWithUser } from '../common/interfaces/requestWithUser.interface';
import { TaskBodyDto } from './dto/task-body.dto';

@Controller('api/tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get('')
  findAll(): Promise<Task[]> {
    return this.tasksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Task | null> {
    return this.tasksService.findOne(id);
  }

  @Post('')
  create(@Body() taskBodyDto: TaskBodyDto, @Req() req: RequestWithUser) {
    const authorId = req?.user?._id;

    if (authorId) {
      const createTaskDto = {
        ...taskBodyDto,
        reviewCount: 1,
        _user: authorId,
      };

      this.tasksService.create(createTaskDto);
    }
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() taskBodyDto: TaskBodyDto, @Req() req: RequestWithUser) {
    const userId = req?.user?._id;

    if (userId) {
      this.tasksService.update(id, taskBodyDto);
    }
  }
}
