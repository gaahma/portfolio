const nodemailer = require("nodemailer");
const mail = require('./mailerInfo');  //super secret stuff in here, not posted to github.

module.exports = function(app){
  app.post('/contact', function (req, res) {
    var transporter = nodemailer.createTransport({
    service: 'yahoo',
    auth: {
        user: mail.user, // Your email id
        pass: mail.password // Your password
    }
   });
   
   var mailOptions = {
     from: mail.user, 
     to: mail.myEmail, 
     subject: req.body.subject, 
     text: req.body.message + "\n\nReply to: " + req.body.name + " at " + req.body.email
     
   };
   transporter.sendMail(mailOptions, function(error, info){
     if(error){
         console.log(error);
         res.sendStatus(422);
     }else{
         res.sendStatus(200);  
     };
   });
   
   });

}