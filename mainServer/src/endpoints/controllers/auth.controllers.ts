import { User } from "../../models/user.model.js";
import type { ExpressRequest, ExpressResponse } from "../../types/express.js"
import { catchError } from "../../utils/controllerCatchingError.js";
import { controllerResponse } from "../../utils/controllerResponse.js"
import { hashPassword } from "../../utils/PasswordFunctionalities.js";

export const registerController = async(req:ExpressRequest, res:ExpressResponse) => {
    try{    
        const {username, email, password} = req.body;
        if(!email || !password) return controllerResponse(res,"Email & Password Are Required", 400, false); 
         
        const hashedPassword = await hashPassword(password); // Don't Stored The Plain PassWord
        
        const newUser = new User({username, email, password: hashedPassword});
        
        await newUser.save();

        return controllerResponse(res, "User Registered Successfully", 201, true);

    }catch (error:unknown) { catchError(res, error, "-RegisterController-") }
    
}

export const sendOTP = async(req:ExpressRequest, res:ExpressResponse) => {
    try{    
        const { email } = req.body;
        if(!email ) return controllerResponse(res,"Email Is Required", 400, false); 
         
        
        return controllerResponse(res, "User Registered Successfully", 201, true);
    }catch (error:unknown) { catchError(res, error, "-SendOTP-") }
    
}