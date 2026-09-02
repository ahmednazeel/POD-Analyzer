

type Roles = "USER" | "ADMIN";
type plan = "BASIC" | "NONE"
export interface UserDataType {
    username:string;
    email:string;
    password:string;
    plan?:string;
    otp?:string ;
    otpExpiryDate?:Date;
    role:Roles;
    refreshToken?:string;
    monthlyPlanPaid?:boolean;
}