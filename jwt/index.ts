import {
  DUMMY_ADMIN_ID,
  DUMMY_NUMBER,
  TOKEN_SESION_EXPIRED_TIME,
} from "../constants/constants";
import { JwTokenData } from "interface/JwTokenData";
import * as jwt from "jwt-simple";
import * as moment from "moment";
import config from "./config";
import { RoleEnum } from "../models/enums/RoleEnum";

export const LoginToken = (dataToken: JwTokenData) => {
  const payload = {
    ...dataToken,
    role:dataToken.role,
    createdAt: moment().unix(),
    expiredAt: moment().add(TOKEN_SESION_EXPIRED_TIME, "minutes"),
  };

  const jwtEncoded = jwt.encode(payload, config.SECRET_W_LOGIN)

  return { token: jwtEncoded, role:payload.role}
};

export const IsValid = (token: any): boolean => {
  if (!token) {
    return false;
  }

  let payload

  try {
    payload = jwt.decode(token,config.SECRET_W_LOGIN);
  } catch (err) {
    return false;
  }

  if (payload.expiredAt < moment().unix()) {
    return false;
  }

  return true;
};

export const IsAdmin = (token: any): boolean => {

  if (!token) {
    return false;
  }

  let payload

  try {
    payload = jwt.decode(token,config.SECRET_W_LOGIN);
  } catch (err) {
    return false;
  }

  if (payload.role === RoleEnum.ADMIN) {
    return true;
  }

  return false;
};

export const DecodeToken = (token: any) => {
  
  const dt = jwt.decode(token, config.SECRET_W_LOGIN, true);
  
  return dt;

};
