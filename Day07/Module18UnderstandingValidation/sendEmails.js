const nodemailer  = require('nodemailer');
require('dotenv').congig();



const transporter = nodemailer.createTransport({
    service:'gmail',
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL, 
      pass: process.env.PASSWORD,   
    },
  });


  const mailOptions = {
    from:{
       name:'imran bagwan',
       address:process.env.EMAIL  
    },
    to: "imranbagwan86986@gmail.com", 
    subject: "Hello ✔",
    text: "Hello world?", 
    html: "<b>Hello world?</b>", 
  }

  const sendMail = async (transporter,mailOptions)=>{
    try{
          await transporter.sendMail(mailOptions);
          console.log('mails has been send successfully');
    }catch(error){
      const err = new CustomeError('Problem occured to send email',500);
      next(err);
    }
  }

module.exports = {
    transporter,
    mailOptions,
    sendMail,
}
