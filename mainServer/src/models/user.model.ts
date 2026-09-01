import mongoose, { Schema } from "mongoose";
import type { UserDataType } from "../types/models/user.js";

const UserSchema = new Schema<UserDataType>({
    username:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true},  
    otp:{type:String },
    otpExpiryDate: { type: Date }, 
    role:{type:String, enum:["USER", "ADMIN"]},
    refreshToken:{type:String,}
})

export const User = mongoose.model<UserDataType>("User", UserSchema)