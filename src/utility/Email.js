import nodemailer from 'nodemailer';
export async function SendEmail(EmailTo,EmailText,EmailSubject){
    let Transport= nodemailer.createTransport({
        host:"smtp.gmass.co.",
        port:587,
        secure:false,
        auth:{user:"gmass", pass:"37766468-6f2b-4601-83bb-6f22ffb233cf"},
        tls:{rejectUnauthorized:false}
    })
    let MailOption={
        from:"Next JS News Portal <monirhdigital@gmail.com>",
        to:EmailTo,
        subject:EmailSubject,
        text:EmailText
    }
    return await Transport.sendMail(MailOption)
}
