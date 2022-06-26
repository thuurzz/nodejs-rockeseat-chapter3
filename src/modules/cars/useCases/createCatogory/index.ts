import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategotyUseCase";


const categoriesRepository = CategoriesRepository.getInstance();

const createCategoryUsecase = new CreateCategoryUseCase(categoriesRepository);

const createCategoryController = new CreateCategoryController(createCategoryUsecase);

export { createCategoryController }
