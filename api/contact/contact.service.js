const nodemailer = require("nodemailer");

module.exports = {
    sendMail
}

async function sendMail(mailDesc) {


    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      service: 'Gmail',
      auth: {
        user: "liathaf@gmail.com", // generated ethereal user
        pass: "unitmo12", // generated ethereal password
      },
      tls: {
        rejectUnauthorized: false
      }
    });
  
    // send mail with defined transport object
    try{

      await transporter.sendMail({
    
       to: "liathaf@gmail.com", 
       subject: "טבע בקריה", 
       text: `הודעה מ-${mailDesc.name}
       מייל-${mailDesc.mail}
       טלפון-${mailDesc.phone}
       הודעה:
       ${mailDesc.desc}
       `
   
     });

     return mailDesc;

    } catch(err){
      console.log('cannot send mail - contact service');
    }

    
  
   

}


