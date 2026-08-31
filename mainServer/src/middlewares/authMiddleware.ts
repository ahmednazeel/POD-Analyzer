import type { ExpressRequest, ExpressResponse } from "../types/express.js";
import { controllerResponse } from "../utils/controllerResponse.js";
import jwt from "jsonwebtoken";
const authorizedTo = (roles:string[] =[]) => {
    return (req:ExpressRequest, res:ExpressResponse, next: Function) =>{
        const authHeader = req.headers.authorization;

        if(!authHeader) return controllerResponse(res, "No Token Provided", 401, false);

        const token = authHeader.split(" ")[1];

        try{
            const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY) as {id:string, role:string};
            if(roles.length && !roles.includes(decoded.role)) return controllerResponse(res, "Forbidden: Insufficient Role",403, false);
            
            req.user= decoded;
            
            next()
            
        }catch(e) {
            console.log("Problem In AuthorizationMiddleware **authMiddleware** File IN (middlewares) Folder ");

            controllerResponse(res, e.message, 401, false);
        }
    } 
}