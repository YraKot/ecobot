// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').load();

// Require keystone
var keystone = require('keystone');

// Initialise Keystone with your project's configuration.
// See http://keystonejs.com/guide/config for available options
// and documentation.

keystone.init({

	'name': 'Ecobot',
	'brand': 'Ecobot',
	
	'stylus': 'public',
	'static': 'public',
	'favicon': 'public/favicon.ico',
	'views': 'templates/views',
	'view engine': 'jade',
	
	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'User'

});

// Load your project's Models

keystone.import('models');

// Setup common locals for your templates. The following are required for the
// bundled templates and layouts. Any runtime locals (that should be set uniquely
// for each request) should be added to ./routes/middleware.js

keystone.set('locals', {
	_: require('underscore'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable
});

// Setup Store Gateway
keystone.set('store gateway', 'stripe');
// Setup Default Country
keystone.set('store country', 'Canada');

// Setup Stripe keys
keystone.set('stripe secret key', process.env.STRIPE_SECRET_KEY || 'STRIPE_SECRET_KEY');
keystone.set('stripe publishable key', process.env.STRIPE_PUBLISHABLE_KEY || 'STRIPE_PUBLISHABLE_KEY');

// Load your project's Routes
keystone.set('routes', require('./routes'));

// Configure the navigation bar in Keystone's Admin UI

keystone.set('nav', {
	'posts': ['posts', 'post-categories'],
	'galleries': 'galleries',
	'enquiries': 'enquiries',
	'users': 'users',
	'products': 'products',
	'orders': 'orders',
	// 'banners' : 'banners',

});

// Start Keystone to connect to your database and initialise the web server

if (keystone.get('env') == 'production'){
    keystone.set('cloudinary config', process.env.CLOUDINARY_URL);
    keystone.set('cookie secret', process.env.COOKIE_SECRET);
    keystone.set('mandrill api key', process.env.MANDRILL_API_KEY);
}

if (!process.env.MAILGUN_API_KEY || !process.env.MAILGUN_DOMAIN) {
	console.log('----------------------------------------'
	+ '\nWARNING: MISSING MAILGUN CREDENTIALS'
	+ '\n----------------------------------------'
	+ '\nYou have opted into email sending but have not provided'
	+ '\nmailgun credentials. Attempts to send will fail.'
	+ '\n\nCreate a mailgun account and add the credentials to the .env file to'
	+ '\nset up your mailgun integration');
}


keystone.start();
