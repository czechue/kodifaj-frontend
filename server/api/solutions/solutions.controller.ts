import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { SolutionsService } from './solutions.service';
import { Solution } from './interfaces/solutions.interface';
import { CreateSolutionBodyDto } from './dto/create-solution.dto';
import { RequestWithUser } from '../common/interfaces/requestWithUser.interface';

@Controller('api/solutions')
export class SolutionsController {
  constructor(private readonly solutionsService: SolutionsService) {}

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Solution | null> {
    return this.solutionsService.findOne(id);
  }

  @Post('')
  create(
    @Body() createSolutionBodyDto: CreateSolutionBodyDto,
    @Req() req: RequestWithUser,
  ): Promise<Solution[] | void> | void {
    // todo: use middleware or smth to allow this endpoint only to specific users
    const authorId = req?.user?._id;

    if (authorId) {
      const createSolutionDto = {
        ...createSolutionBodyDto,
        _task: createSolutionBodyDto.taskId,
        _user: authorId,
      };

      return this.solutionsService.create(createSolutionDto);
    }
  }
}
