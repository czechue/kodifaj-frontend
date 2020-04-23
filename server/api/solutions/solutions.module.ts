import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SolutionsController } from './solutions.controller';
import { SolutionsService } from './solutions.service';
import { SolutionSchema } from './schemas/solutions.schema';
import { TaskSchema } from '../tasks/schemas/task.schema';
import { TasksService } from '../tasks/tasks.service';
import { UserSchema } from '../users/schemas/user.schema';
import { UsersService } from '../users/users.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Solution', schema: SolutionSchema },
      { name: 'Task', schema: TaskSchema },
      { name: 'User', schema: UserSchema },
    ]),
  ],
  controllers: [SolutionsController],
  providers: [SolutionsService, TasksService, UsersService],
})
export class SolutionsModule {}
