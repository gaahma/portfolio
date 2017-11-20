const nodemailer = require("nodemailer");

module.exports = function(app){
  app.post('/contact', function (req, res) {
    
    var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'gaahmamhaag', // Your email id
        pass: 'f9twIou' // Your password
    }
   });
   
   var mailOptions = {
     from: 'gaahmamhaag@gmail.com', 
     to: 'adam.m.h@gmail.com', 
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