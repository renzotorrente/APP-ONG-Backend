import { 
  INVALID_EMAIL_FORMAT_MESSAGE,
  REQUIRED_EMAIL_MESSAGE,
  REQUIRED_FIRST_NAME_MESSAGE,
  REQUIRED_ID_NUMBER_MESSAGE,
  REQUIRED_LAST_NAME_MESSAGE,
  REQUIRED_PASSWORD_MESSAGE, 
  REQUIRED_ROLE_MESSAGE} from "../constants/constants";
import { body, param } from "express-validator";

export const registerValidations = [
  body("email").notEmpty().withMessage(REQUIRED_EMAIL_MESSAGE).isEmail().withMessage(INVALID_EMAIL_FORMAT_MESSAGE),
  body("firstName").notEmpty().withMessage(REQUIRED_FIRST_NAME_MESSAGE),
  body("lastName").notEmpty().withMessage(REQUIRED_LAST_NAME_MESSAGE),
  body("password").notEmpty().withMessage(REQUIRED_PASSWORD_MESSAGE)
]

export const updateUserValidations = [
  param('id').isNumeric().withMessage(REQUIRED_ID_NUMBER_MESSAGE),
  body("role").notEmpty().withMessage(REQUIRED_ROLE_MESSAGE),
  body("firstName").notEmpty().withMessage(REQUIRED_FIRST_NAME_MESSAGE),
  body("lastName").notEmpty().withMessage(REQUIRED_LAST_NAME_MESSAGE),
]
