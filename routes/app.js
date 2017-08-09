var express = require('express'),
  router = express.Router(),
  mailgun = require('mailgun-js'),
  multer = require('multer');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/contact', function(req, res, next) {
  var api_key = 'key-5fab880dbab8fd5485171398d1ab8eed';
  var domain = 'sandbox6ceec77f0df742bc81dda5e53ef4f946.mailgun.org';
  mailgun = require('mailgun-js')({
    apiKey: api_key,
    domain: domain
  });

  var data = {
    from: `EVO WEBSITE @${req.body.name} <postmaster@sandbox6ceec77f0df742bc81dda5e53ef4f946.mailgun.org>`,
    to: 'adrian.madalin.dinu@gmail.com',
    subject: req.body.subject,
    text: req.body.message
  };

  mailgun.messages().send(data, function(error, body) {
    console.log(body);
    if (error) {
      console.log('An error occoured');
      console.log(error);
    };
    res.status(200).json({
      message: 'Email was sent',
      obj: body
    });
  });
});

router.post('/portofoliu/upload/evo', function(req, res, next) {
  var storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, 'public/images/')
    },
    filename: function(req, file, cb) {
      cb(null, file.originalname);
    }
  })

  var upload = multer({
    storage: storage
  }).fileds(
    [{
      description: req.body.description
    }]
  );

  upload(req, res, function(err) {
    console.log(req.body.description);
    if (err) {
      // An error occurred when uploading
      console.log('Error uploading');
      return;
    } else {
      res.status(200).json({
        message: 'Image was uploaded',
        obj: req.file
      });
    }
  });
});

module.exports = router;
