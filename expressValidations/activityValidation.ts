import { REQUIRED_CONTENT_MESSAGE, REQUIRED_ID_NUMBER_MESSAGE, REQUIRED_NAME_MESSAGE } from "../constants/constants";
import { body, param } from "express-validator";


export const createActivityValidations = [
    body("name").notEmpty().withMessage(REQUIRED_NAME_MESSAGE),
    body("content").notEmpty().withMessage(REQUIRED_CONTENT_MESSAGE),
]

export const updateActivityValidations = [
    param('id').isNumeric().withMessage(REQUIRED_ID_NUMBER_MESSAGE),
    body("name").notEmpty().withMessage(REQUIRED_NAME_MESSAGE),
    body("content").notEmpty().withMessage(REQUIRED_CONTENT_MESSAGE),
]