import { ExpressResponse } from "../types/expressType.js";

export const Return = (
    // Parameters
    res:ExpressResponse, 
    isSuccess:boolean, 
    statusCode:number,
    message:string, 
    rest?:Object 
) => 
{
    
    return res.status(statusCode).json({
        message:message,
        success:isSuccess,
        data:{ ...rest }
    })

}