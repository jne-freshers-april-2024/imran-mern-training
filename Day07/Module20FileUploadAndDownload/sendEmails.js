const nodemailer  = require('nodemailer');



// created transpoter
const transporter = nodemailer.createTransport({
    service:'gmail',
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: "imranbagwan7991@gmail.com", // own user name
      pass: "wmhh vsjj dadp xwos",   // own password
    },
  });

  // create mail options

  const mailOptions = {
    from:{
       name:'imran bagwan',
       address:process.env.EMAIL  
    }, //'"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
    to: "imranbagwan86986@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  }

  const sendMail = async (transporter,mailOptions)=>{
    try{
          await transporter.sendMail(mailOptions);
          console.log('mails has been send successfully');
    }catch(error){
        console.log(error);
    }
  }

 // sendMail(transporter,mailOptions);

module.exports = {
    transporter,
    mailOptions,
    sendMail,
}
