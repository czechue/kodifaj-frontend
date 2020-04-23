//todo: fix ? operator here

export class CreateSolutionBodyDto {
  readonly repo?: string;
  readonly demo?: number;
  readonly comment?: string;
  readonly phase?: string;
  readonly taskId?: string;
}

export class CreateSolutionDto extends CreateSolutionBodyDto {
  readonly _user?: string;
}
