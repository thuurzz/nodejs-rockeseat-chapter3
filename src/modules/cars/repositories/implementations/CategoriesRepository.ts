import { Category } from "../../entities/Category";
import { ICreateCategotyDTO, ICategoryRepository } from "../ICategoriesRepository";

class CategoriesRepository implements ICategoryRepository {

  private categories: Category[];

  private static INSTANCE: CategoriesRepository;

  private constructor() {
    this.categories = [];
  }

  public static getInstance(): CategoriesRepository {
    if (!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository();
    }
    return this.INSTANCE;
  }


  create({ name, description }: ICreateCategotyDTO): void {

    const category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at: new Date()
    });

    this.categories.push(category);
  }

  list(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category {
    const category = this.categories.find(category => category.name === name)
    return category;
  }
}


export { CategoriesRepository }
