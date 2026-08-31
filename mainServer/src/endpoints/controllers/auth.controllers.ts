import { User } from "../../models/user.model.js";
import type { ExpressRequest, ExpressResponse } from "../../types/express.js"
import { catchError } from "../../utils/controllerCatchingError.js";
import { controllerResponse } from "../../utils/controllerResponse.js"
import { OTP_Functionalities } from "../../utils/OTPFunctionalities.js";
import { hashPassword } from "../../utils/PasswordFunctionalities.js";
import { sendMail } from "../../utils/sendMail.js";
import { generateAccessToken, generateRefreshToken } from "../../utils/tokens.js";
import jwt from "jsonwebtoken";

export const registerController = async(req:ExpressRequest, res:ExpressResponse) => {
    try{    
        const {username, email, password} = req.body;
        if(!email || !password) return controllerResponse(res,"Email & Password Are Required", 400, false); 
         
        const hashedPassword = await hashPassword(password); // Don't Stored The Plain PassWord

        const {otp, otpExpiryDate} = OTP_Functionalities();
        
        const newUser = new User({username, email, password: hashedPassword, otp, otpExpiryDate});
        
        await newUser.save();
        
        await sendMail(
            email, 
            "Welcome to Our App",
            "Thanks for registering!",
            `<h1>Hello ${username}</h1><p>Welcome aboard 🚀</p>`
        )

        return controllerResponse(res, "User Registered Successfully & Please Verify Your Email", 201, true);

    }catch (error:unknown) { catchError(res, error, "-RegisterController-") }
    
}
export const sendOtp = async(req:ExpressRequest, res:ExpressResponse) => {
    try{    
        const { email,  } = req.body;
        const {otp, otpExpiryDate} = OTP_Functionalities();

        const user = await User.findOne({email});

        user.otp = otp;

        user.otpExpiryDate = otpExpiryDate;

        await user.save();

        await sendMail(
            email, 
            "Welcome to Our App",
            "Thanks for registering!",
            `<h1>Hello ${user?.username}</h1><p>Welcome aboard 🚀</p>`
        )
        

        return controllerResponse(res, "OTP Sent Successfully", 200, true);
    }catch (error:unknown) { catchError(res, error, "-SendOTP-") }
}

export const VerifyOTP_Registration_Process = async(req:ExpressRequest, res:ExpressResponse) => {
    try{    
        const { email, otp } = req.body;
        if(!email ) return controllerResponse(res,"Email Is Required", 400, false); 
        
        const user = await User.findOne({email});

        const {OTP_Verification} = OTP_Functionalities();

        const {success, status, message} = OTP_Verification(otp, user.otp , user.otpExpiryDate )

        if(!success) return controllerResponse(res, message, status, success)

        const accessToken = generateAccessToken(user._id.toString(), "USER");
        const refreshToken = generateRefreshToken(user._id.toString(), "USER")
        
        res.cookie("refreshToken", refreshToken, {
            httpOnly:true,
            secure:true, 
            sameSite:"none"
        })
        
        return controllerResponse(res, message, status, success, {accessToken});
    }catch (error:unknown) { catchError(res, error, "-VerifyOTP-") }
}


export const refreshTokenController = async (req: ExpressRequest, res: ExpressResponse) => {
    try {
        const refreshToken = req.cookies.refreshToken;
        if (!refreshToken) return controllerResponse(res, "No refresh token provided", 401, false);

        const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET as string) as { id: string };

        const newAccessToken = generateAccessToken(decoded.id, "USER");

        return controllerResponse(res, "New access token issued", 200, true, { accessToken: newAccessToken });
    } catch (error: unknown) {
        return controllerResponse(res, "Refresh token invalid or expired. Please login again.", 401, false);
    }
};

export const loginController = async (req: ExpressRequest, res: ExpressResponse) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
        return controllerResponse(res, "Email & Password Are Required", 400, false);
        }

        const user = await User.findOne({ email });
        if (!user) {
        return controllerResponse(res, "User not found", 404, false);
        }

        const isPasswordValid = await VerifyPassword(password, user.password);
        if (!isPasswordValid) {
        return controllerResponse(res, "Invalid password", 401, false);
        }

        const accessToken = generateAccessToken(user._id.toString(), user.role || "USER");
        const refreshToken = generateRefreshToken(user._id.toString());

        // Save refresh token in DB
        user.refreshToken = refreshToken;
        await user.save();

        // Send refresh token in HttpOnly cookie
        res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: "None",
        });

        return controllerResponse(res, "Login successful", 200, true, { accessToken });
    } catch (error: unknown) {
        catchError(res, error, "-LoginController-");
    }
};