export interface JwTokenData {

    email:string,
    role?:string,

}

export interface JwTokenExpires {
    expiredAt:number
}