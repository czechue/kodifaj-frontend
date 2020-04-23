import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Solution } from './interfaces/solutions.interface';
import { CreateSolutionDto } from './dto/create-solution.dto';
import { Task } from '../tasks/interfaces/task.interface';
import { User } from '../users/interfaces/user.interface';

@Injectable()
export class SolutionsService {
  constructor(
    @InjectModel('Solution') private readonly solutionModel: Model<Solution>,
    @InjectModel('Task') private readonly taskModel: Model<Task>,
    @InjectModel('User') private readonly userModel: Model<User>,
  ) {}

  async findOne(id: string): Promise<Solution | null> {
    return await this.solutionModel.findOne({ _id: id });
  }

  async create(solution: CreateSolutionDto): Promise<Solution[] | void> {
    const createdSolution = new this.solutionModel(solution);

    try {
      await this.taskModel.findByIdAndUpdate(solution.taskId, {
        $push: { _solutions: createdSolution._id },
      });
      await this.userModel.findByIdAndUpdate(solution._user, {
        $push: { _solutions: createdSolution._id },
      });
      await createdSolution.save();
      return await this.solutionModel.find({ _task: solution.taskId }).populate('_user');
    } catch (e) {
      return console.log(e);
    }
  }
}
