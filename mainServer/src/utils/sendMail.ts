import transporter from "../configs/mailTransporter.js";

export const sendMail = async (
    to : string,
    subject:string, 
    text?:string, 
    html?:string
) =>
{
    if(!to) return {success:false, message:"Recipient Email Is Required"};
      try {
        const info = await transporter.sendMail({
            from: process.env.EMAIL,
            to,
            subject,
            text,
            html,
        });

        return { success: true, messageId: info.messageId };
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error("Error Sending Email:", error.message);
            return { success: false, error: error.message };
        }
        return { success: false, error: "Unknown error occurred" };
  }
}