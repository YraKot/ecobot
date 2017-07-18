var keystone = require('keystone');
var nodemailer = require('nodemailer');
var Enquiry = keystone.list('Enquiry');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	var locals = res.locals;
	
	// Set locals
	locals.section = 'contact';
	locals.enquiryTypes = Enquiry.fields.enquiryType.ops;
	locals.formData = req.body || {};
	locals.validationErrors = {};
	locals.enquirySubmitted = false;
	
	// On POST requests, add the Enquiry item to the database
	view.on('post', { action: 'contact' }, function(next) {
		
		var newEnquiry = new Enquiry.model(),
			updater = newEnquiry.getUpdateHandler(req);
		
		updater.process(req.body, {
			flashErrors: true,
			fields: 'name, email, phone, enquiryType, message',
			errorMessage: 'There was a problem submitting your enquiry:'
		}, function(err) {
			if (err) {
				locals.validationErrors = err.errors;
			} else {
				locals.enquirySubmitted = true;
			}
			next();
		});
		var transporter = nodemailer.createTransport({
			service: 'gmail',
			host: 'smtp.gmail.com',
			port: 587,
			auth: {
				user: 'yurkawkyrka@gmail.com',
				pass: '13765890'
			},
			tls: {rejectUnauthorized: false},
			debug:true
		});

			var adminMailOptions = {
				from: "yurkawkyrka@gmail.com",
				to: req.body.email,
				subject: "EcoBot",
				html: req.body.message
			};

			transporter.sendMail(adminMailOptions);
		
	});
	
	view.render('contact');
	
};
