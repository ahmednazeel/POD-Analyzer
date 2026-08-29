import mongoose, { Schema } from "mongoose";
import { UserDataType } from "../types/models/user.js";

const UserSchema = new Schema<UserDataType>({
    username:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true},  
    
})

export const User = mongoose.model<UserDataType>("User", UserSchema)