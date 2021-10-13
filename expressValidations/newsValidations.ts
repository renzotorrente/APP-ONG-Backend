import { body, param } from "express-validator";
import {
  REQUIRED_NAME_MESSAGE,
  REQUIRED_CONTENT_MESSAGE,
  REQUIRED_IMAGE_MESSAGE,
  REQUIRED_CATEGORY_ID_MESSAGE,
  INVALID_IMAGE_URL_MESSAGE,
  REQUIRED_ID_NUMBER_MESSAGE} from '../constants/constants'
export const createNewsValidations = [
  body("name").notEmpty().withMessage(REQUIRED_NAME_MESSAGE),
  body("content").notEmpty().withMessage(REQUIRED_CONTENT_MESSAGE),
  body("categoryId").notEmpty().withMessage(REQUIRED_CATEGORY_ID_MESSAGE)
]

export const getByIdValidations = [
  param('id').isNumeric().withMessage(REQUIRED_ID_NUMBER_MESSAGE)
]