 import { Request, Response } from 'express';
import { CreateCategoryUseCase } from './CreateCategotyUseCase'

class CreateCategoryController {
  constructor(private createCategoryUsecase: CreateCategoryUseCase) { }

  handle(request: Request, res: Response): Response {
    const { name, description } = request.body;

    this.createCategoryUsecase.execute({name, description});

    return res.status(201).send();
  }

}

export { CreateCategoryController }
