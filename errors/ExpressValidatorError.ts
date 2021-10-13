import { ValidationError } from "express-validator";
import { BaseError } from "./BaseError";

class ExpressValidatorError extends BaseError {

  errors: ValidationError[]

  constructor(errors:ValidationError[]){
    super("ValidationError", 400, ExpressValidatorError.name);
    this.errors = [...errors]
  }
}

export default ExpressValidatorError;