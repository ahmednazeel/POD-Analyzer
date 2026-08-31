import jwt from 'jsonwebtoken';

export const generateAccessToken = (userId:string, role:string) => {
    return jwt.sign(
        {id:userId, role}, 
        process.env.ACCESS_TOKEN_SECRET_KEY, 
        {expireIn:"15m"} 
    )
}
export const generateRefreshToken = (userId:string, role:string) => {
    return jwt.sign(
        {id:userId, role}
    ),
    process.env.REFRESH_TOKEN_SECRET_KEY,
    {expiresIn:"7d"}
}