let nodemailer = require('nodemailer'),
    config = require('../config.js'),
    Feedback = require('./feedbackschema.js');





let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: config.nodemailer.user, // generated ethereal user
        pass: config.nodemailer.pass // generated ethereal password
}
});

module.exports = {

  mail: (req, res, next) => {

        console.log('sent', req.body);
        let outPut = `
          <p>You have new feedback</p>
          <h3>Details</h3>
          <ul>
            <li>Name: ${req.body.first_name} ${req.body.last_name}</li>
            <li>Email: ${req.body.email}</li>
          </ul>
          <h3>Message</h3>
          <p> ${req.body.message}</p>
        `;
        let mailOptions = {
          from: '"Sergio Barker 👻" <sergiobarkerdev@gmail.com>',
          to: req.body.email,
          subject: req.body.subject,
          html: outPut
        };

      transporter.sendMail(mailOptions, (error, info) => {

          if (error) {
              return console.log("mail error", error);
          }
          console.log('Message sent: %s', info.messageId);

          console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
          res.send(info)

      })

      // console.log('feedback', req.body)
      let name = req.body.name
      let email = req.body.email
      let subject = req.body.subject
      let message = req.body.message

      var feedback = new Feedback(req.body)
        feedback.save(function(err, response) {
          if (err) {
            res.status(500).json(err);
          } else {
            res.status(200).json(response);
          }
        })
    }
}
