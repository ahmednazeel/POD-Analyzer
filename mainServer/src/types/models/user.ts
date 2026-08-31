export interface UserDataType {
    username:string;
    email:string;
    password:string;
    plan?:string;
    otp?:string;
    otpExpiryDate?:Date;
    monthlyPlanPaid?:boolean;
}