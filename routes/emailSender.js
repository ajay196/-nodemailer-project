
const nodemailer = require("nodemailer");
module.exports = {main}

async function main(req, res, next) {

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port:465,
  auth: {
    user: 'kis196han@gmail.com',
    pass: '**'
  }
  });

  // send mail with defined transport object
  var mailOptions = {
    from: 'kis196han@gmail.com',
    to: 'ajay9554876816@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  return res.send('done')
}