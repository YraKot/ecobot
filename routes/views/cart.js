var keystone = require('keystone');
var nodemailer = require('nodemailer');
var Order = keystone.list('Enquiry');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	var locals = res.locals;
	
	
	// Set locals
	locals.section = 'cart';
	locals.cartOptions = {
		stripePublishableKey: keystone.get('stripe publishable key'),
		defaultCountry: keystone.get('store country')
	};
	view.render('cart');
	
};
