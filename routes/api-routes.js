const nodemailer = require("nodemailer");

module.exports = function(app){
  app.post('/contact', function (req, res) {
    
     var transporter = nodemailer.createTransport({
       service: 'Gmail',
       auth: {
           user: '', // Your email id
           pass: '' // Your password
       }
   });
   
   var mailOptions = {
     from: '', 
     to: '', 
     subject: 'Email from ' + req.body.name, 
     text: req.body.message + "\n\nReply to: " + req.body.email
     
   };
   transporter.sendMail(mailOptions, function(error, info){
     if(error){
         console.log(error);
         res.status(500).send("Server Error")
     }else{

         res.render('emailSent');
         
     };
   });
   
   });
}