import type { ExpressResponse } from "../types/express.js";

export const controllerResponse = (
    res:ExpressResponse, 
    message:string, 
    status:number, 
    success:boolean,
    restDt?:Object
) => 
{
    return res.status(status).json({
        message,
        success:success,
        ...restDt
    })
}