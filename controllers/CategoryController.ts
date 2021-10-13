import { ICategory } from "../interface/ICategory";
import { CategoryQuerys } from "../querys/CategoryQuerys";


export class CategoryController {
    private query: CategoryQuerys;

    constructor(){
        this.query= new CategoryQuerys();
    }

    public async getCategories(){
        const categories = await this.query.getCategories();
        return categories;
    }

    public async createCategory(category:ICategory){
        const newCategory = await this.query.createCategory(category);
        return newCategory;
    }

    public async deleteCategoryById(id:string){
        return await this.query.deleteCategory(id);
    }

    public async updateCategory(id:number, category:ICategory){
        return await this.query.updateCategoryQuery(id,category);
    }

    public async getCategoryById(id:string){
        return await this.query.getCategoryById(id);
    }
}