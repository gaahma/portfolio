const nodemailer = require("nodemailer");

module.exports = function(app){
  app.post('/contact', function (req, res) {
    var user = "";
    var pass = "";
    console.log(pass, user);
    var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: user, // Your email id
        pass: pass // Your password
    }
   });
   
   var mailOptions = {
     from: '', 
     to: '', 
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