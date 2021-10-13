import {
  CATEGORY_DELETED_SUCCESS,
    PATH_INICIAL, PATH_PARAM_ID
  } from '../constants/constants'
  import * as middleware from './middleware'
  import { BaseRouter } from './BaseRouter'
  import * as express from 'express'
import { CategoryController } from '../controllers/CategoryController'
import { createCategoryValidations, updateCategoryValidations } from '../expressValidations/categoryValidation'
import { validationResult } from 'express-validator'
import ExpressValidatorError from '../errors/ExpressValidatorError'
import { getByIdValidations } from '../expressValidations/newsValidations'

  export class CategoryRouter extends BaseRouter {
    private categoryController: CategoryController
  
    constructor() {
      super()
      this.categoryController = new CategoryController()
      this.buildRoutes();
    }
  
    public async getAllCategories(req: express.Request, res: express.Response) {
      const categories = await this.categoryController.getCategories();
  
      return res.status(200).json(categories)
    }

    public async getCategoryById(req: express.Request, res: express.Response) {


      const categories = await this.categoryController.getCategoryById(req.params.id);
  
      return res.status(200).json(categories)
    }

    public async createCategory(req: express.Request, res: express.Response){
      const error = validationResult(req);
      if (!error.isEmpty()) {
        throw new ExpressValidatorError(error.array());
      }

      const category = await this.categoryController.createCategory(req.body);

      return res.status(200).json(category)
    }

    public async deleteCategory(req: express.Request, res: express.Response){
      const error = validationResult(req);
      if (!error.isEmpty()) {
        throw new ExpressValidatorError(error.array());
      }

      const id = req.params.id;

      await this.categoryController.deleteCategoryById(id);

      return res.status(200).json({msg: CATEGORY_DELETED_SUCCESS})
    }

    public async updateCategory(req: express.Request, res: express.Response){
      const error = validationResult(req);
      if (!error.isEmpty()) {
        throw new ExpressValidatorError(error.array());
      }

      const id = Number(req.params.id);
      const category = req.body;

      const categoryUpdate = await this.categoryController.updateCategory(id, category);

      return res.status(200).json(categoryUpdate);
    }

    private buildRoutes() {
      this.router.get(
        PATH_INICIAL,
        middleware.checkAdmin,
        this.getAllCategories.bind(this)
      )
      this.router.get(
        PATH_INICIAL + ":id",
        middleware.checkAdmin,
        getByIdValidations,
        this.getCategoryById.bind(this)
      )
      this.router.post(
        PATH_INICIAL,
        createCategoryValidations,
        this.createCategory.bind(this)
      )
      this.router.delete(
        PATH_PARAM_ID,
        getByIdValidations,
        this.deleteCategory.bind(this)
      );
      this.router.put(
        PATH_PARAM_ID,
        updateCategoryValidations,
        this.updateCategory.bind(this)
      );
    }
  }
  