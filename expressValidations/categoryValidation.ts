import { REQUIRED_ID_NUMBER_MESSAGE, REQUIRED_NAME_MESSAGE } from "../constants/constants";
import { body, param } from "express-validator";


export const createCategoryValidations = [
    body("name").notEmpty().withMessage(REQUIRED_NAME_MESSAGE),
]

export const updateCategoryValidations = [
    param('id').isNumeric().withMessage(REQUIRED_ID_NUMBER_MESSAGE),
    body("name").notEmpty().withMessage(REQUIRED_NAME_MESSAGE)
]