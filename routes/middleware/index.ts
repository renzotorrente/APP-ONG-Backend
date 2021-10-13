import * as express from 'express'
import { TOKEN_HEADER_NAME, TOKEN_INVALID, DUMMY_ADMIN_ID } from '../../constants/constants'
import { IsValid, IsAdmin } from '../../jwt'

export const checkToken = async ( req:express.Request ,res:express.Response ,next:express.NextFunction ) => {

    const rs = IsValid(req.headers[TOKEN_HEADER_NAME]?.split(" ")[1])

    if(!rs){
        return res.status(401).json({error: TOKEN_INVALID})
    }else{
        next()
    }

    
}

export const checkAdmin = async ( req:express.Request ,res:express.Response ,next:express.NextFunction ) => {

    const rs = IsAdmin(req.headers[TOKEN_HEADER_NAME]?.split(" ")[1])

    if(!rs){
        return res.status(401).json({error: TOKEN_INVALID})
    }else{
        next()
    }

}