// require("dotenv").config();
import dotenv from "dotenv"
dotenv.config();

export const settings = {
    port : Number(process.env.PORT) || 5000,
    gmail: process.env.GMAIL,
    gmailPassword:process.env.GMAIL_APP_PASSWORD,
    

}