import bcrypt from "bcrypt"
export const hashPassword = async (plainPassword: string) : Promise<string> => {
    const saltRounds = 10;
    const hashed = await bcrypt.hash(plainPassword, saltRounds);
    return hashed
}

export const verifyPassword = async (plainPassword:string, hashedPassword:string) :Promise<boolean> => {
    return await bcrypt.compare(plainPassword, hashedPassword)
}