  const nodemailer = require('nodemailer')
 
 // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
     host: "smtp.gmail.com",
     port: 465, // es el puerto de gmail
     secure: true, // true for 465, false for other ports
    auth: {
     user: 'ivanperez1l40@gmail.com', // generated gmail user
      pass: 'qlzdnpubfeiwllbe', // generated app gmail  password
    },// is very import add the line for that work
    tls : { rejectUnauthorized: false }
  });

   transporter.verify().then( ()=> {
     console.log('Ready for send emails')
   })
     
  module.exports = transporter;