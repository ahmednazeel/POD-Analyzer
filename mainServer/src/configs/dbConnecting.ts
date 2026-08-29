import mongoose from "mongoose"

export const connectToDB =async () => {
    try{
        await mongoose.connect(process.env.MONGODB_SECRET as string);
        console.log("Mongodb Is Connecting!")
    }catch (e){
        console.log("Mongodb Connection Error: ", e);
        process.exit(1);
    }
}