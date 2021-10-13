import { Category } from "../models/entities/Category";
import { CategoriesDTO } from "../models/dtos/CategoriesDTO";
import { DatabaseError } from "../errors/DatabaseError";
import { ICategory } from "../interface/ICategory";
import { NotFoundError } from "../errors/NotFoundError";
import { NOT_FOUND_CATEGORY } from "../constants/constants";

export class CategoryQuerys {

  public async getCategories():Promise<CategoriesDTO[]> {
    const contacts = await Category.findAll({
        attributes: ['name','id','description']
    });
    return contacts;
  }

  public async getCategoryById(id:string):Promise<CategoriesDTO>{
    console.log(id);
    const category = await Category.findOne<Category>({ where: { id: id } });
    if (!category) throw new NotFoundError(NOT_FOUND_CATEGORY);
    return new CategoriesDTO(category);
  }

  public async createCategory(category:ICategory):Promise<CategoriesDTO>{
    try {
      const newCategory = new Category(category);
      await newCategory.save();
  
      return newCategory;
    } catch (error) {
      throw new DatabaseError(error);
    }
  }

  public async  deleteCategory(id:string){
    const categorydelete = await Category.findOne({where: { id: id }, });
    if(!categorydelete)throw new NotFoundError(NOT_FOUND_CATEGORY);
    categorydelete.destroy();
    return true;
  }

  public async updateCategoryQuery (id: number, category: ICategory): Promise<CategoriesDTO> {
    const categoryDB = await Category.findOne({where:{id:id}});

    if(!categoryDB){
      throw new NotFoundError(NOT_FOUND_CATEGORY)
    }

    categoryDB.name = category.name;
    if( category.description != undefined ){
      categoryDB.description = category.description;
    }
    await categoryDB.save();

    return categoryDB;

}
}
