const contactService = require('./contact.service');


async function sendMail(req,res){
    
    
    const mailDesc = await contactService.sendMail(req.body);
    res.send(mailDesc);
    
    
}



module.exports = {
    sendMail
}
