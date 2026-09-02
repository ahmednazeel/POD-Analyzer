interface OTPVerificationResult {
    success:boolean;
    status:number;
    message:string
}

const generateOTP  = () => {
    const otp = Math.floor(10000 + Math.random() * 900000);
    return otp.toString();
}

const getExpiryDate = () => {
    const now = new Date(); 
    now.setDate(now.getMinutes() + 5);
    return now;
}



export const OTP_Functionalities = () => {
    const otp = generateOTP();

    const otpExpiryDate = getExpiryDate();

    const OTP_Verification = (incoming:string, stored:string , expiryDate:Date): OTPVerificationResult => {
        const now = new Date();
        if(now > expiryDate) return {success:false, status:410, message:"OTP has expired"};

        if(incoming !== stored) return {success:false, status:401, message:"Invalid OTP"};

        return {success:true, message:"OTP Is Verified Successfully!", status:200};
    }
    
    return {otp, otpExpiryDate,OTP_Verification}
}


