import nodemailer from 'nodemailer';
import { settings } from './settings.js';

const transporter = nodemailer.createTransport({
    host:"smtp.gmail.com",
    port: 465, 
    secure:true,
    auth:{
        user:settings.gmail,
        pass:settings.gmailPassword 
    }
})

export default transporter