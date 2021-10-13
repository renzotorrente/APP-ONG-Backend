import { DatabaseError } from './DatabaseError'
import { NotFoundError } from './NotFoundError'
import {
  DatabaseError as SequelizeError,
  ValidationError as SequelizeValidationError,
} from 'sequelize'
import ExpressValidatorError from './ExpressValidatorError'
import { InternalServerError } from './InternalServerError'
import * as express from 'express'

export const errorHandler: express.ErrorRequestHandler = (error, req, res, next) => {
  if (error instanceof DatabaseError) {
    console.error(error)
    return res.status(500).json(error)
  }

  if (error instanceof ExpressValidatorError) {
    console.error(JSON.stringify(error.errors))
    return res.status(400).json(error.errors)
  }
  
  if (error instanceof SequelizeError) {
    console.error(error.message)
    return res.status(500).json(new DatabaseError(error.message))
  }
  if (error instanceof NotFoundError) {
    console.error(error)
    return res.status(404).json(error)
  }
  console.error(error.message)
  return res.status(500).json(new InternalServerError(error.message))
}
