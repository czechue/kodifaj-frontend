import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from './interfaces/task.interface';
import { CreateTaskDto } from './dto/create-task.dto';
import { User } from '../users/interfaces/user.interface';

@Injectable()
export class TasksService {
  constructor(
    @InjectModel('Task') private readonly taskModel: Model<Task>,
    @InjectModel('User') private readonly userModel: Model<User>,
  ) {}

  async findAll(): Promise<Task[]> {
    return await this.taskModel.find().populate('_user', 'login').exec();
  }

  async findOne(id: string): Promise<Task | null> {
    return await this.taskModel
      .findById(id)
      .populate('_user')
      .populate({ path: '_solutions', model: 'Solution', populate: '_user' });
  }

  async create(task: CreateTaskDto): Promise<Task | void> {
    const createdTask = new this.taskModel(task);
    try {
      await this.userModel.findByIdAndUpdate(task._user, {
        $push: { _tasks: createdTask._id },
      });
      await createdTask.save();
      return createdTask;
    } catch (e) {
      console.log('error');
    }
  }

  async update(taskId: string, updatedTask: CreateTaskDto): Promise<Task | null | void> {
    try {
      return await this.taskModel.findByIdAndUpdate(taskId, updatedTask);
    } catch (e) {
      console.log('error');
    }
  }
}
