var http = require("http");
var keystone = require('keystone');
var nodemailer = require('nodemailer');

exports = module.exports = function(app) {
	
		var name = app.body.nome;
		var email = app.body.email;

		console.log(name + ' ' + email);

		var transporter = nodemailer.createTransport({
			service: 'gmail',
			host: 'smtp.gmail.com',
			port: 587,
			auth: {
				user: 'ecobotsale@gmail.com',
				pass: 'ecoprosteer'
			},
			tls: {rejectUnauthorized: false},
			debug:true
		});

			var adminMailOptions = {
				from: "ecobotsale@gmail.com",
				to: email,
				subject: "EcoBot",
				html: name
			};

			transporter.sendMail(adminMailOptions);

};
// var keystone =require('keystone');
// var nodemailer = require('nodemailer');

// exports = module.exports = function(app) {
	
	
// 	// app.get('/cart', function(req, res){ 
// 	// 	console.log('gfrd');
// 	// 	res.transporter.sendMail(adminMailOptions);
		
// 	// });
// 	app.post('/cart', function(req, res){

// 		var name = req.body.nome;
// 		var email = req.body.email;
// 		// var subject = req.body.assunto;
// 		// var message = req.body.mensagem;

// 		console.log(name);
		
//     });




		// console.log(res.name);
		// var transporter = nodemailer.createTransport({
		// 	service: 'gmail',
		// 	host: 'smtp.gmail.com',
		// 	port: 587,
		// 	auth: {
		// 		user: 'yurkawkyrka@gmail.com',
		// 		pass: '13765890'
		// 	},
		// 	tls: {rejectUnauthorized: false},
		// 	debug:true
		// });

		// 	var adminMailOptions = {
		// 		from: "yurkawkyrka@gmail.com",
		// 		to: 'yurkawkyrka@gmail.com',         //req.body.email,
		// 		subject: "EcoBot",
		// 		html: 'req.body.message'
		// 	};

			// transporter.sendMail(adminMailOptions);
	
// };



// var keystone = require('keystone');
// var stripeSecretKey = keystone.get('stripe secret key');
// var Stripe = require('stripe')(stripeSecretKey);

// exports = module.exports = function(request, response) {
// 	var stripeToken = request.body.id;

	

	// var items = request.body.shoppingCart
	
	// // console.log('ggg');
	
	// var itemSlugs = []

	// for (var i = 0; i < items.length; i++) {
	// 	var slug = items[i].slug
	// 	itemSlugs.push(slug)
	// }

	// keystone.list('Product').model.find().where('slug').in(itemSlugs).exec(function(err, products) {
	// 	if (err) {
	// 		console.log("Serious error guys")
	// 		console.log(err)
	// 	} else {
	// 		console.log("Response")
	// 		console.log(products)

	// 		var slugToProductsMap = {}

	// 		for (var i = 0; i < products.length; i++) {
	// 			var product = products[i]

	// 			slugToProductsMap[product.slug] = product
	// 		}

	// 		var amount = 0

	// 		for (var i = 0; i < items.length; i++) {
	// 			var item = items[i]
	// 			var quantity = item.quantity

	// 			// Compare it to our database
	// 			var product = slugToProductsMap[item.slug]

	// 			var totalAmount = (product.price * quantity) * 100

	// 			amount += totalAmount
	// 		}

	// 		var tax = 0.05
	// 		var total = amount + (amount * tax)

	// 		var charge = Stripe.charges.create({
	// 			amount: total, // amount in cents, again
	// 			currency: 'cad',
	// 			source: stripeToken,
	// 			description: 'Ecobot',
	// 		}, function(err, charge) {
	// 			if (err && err.type === 'StripeCardError') {
	// 				response.json({ accepted: false, message: 'Payment Declined'})
	// 				// The card has been declined
	// 			} else {
	// 				if (err) {
	// 					console.log("We have an error!")
	// 					console.log(err)

	// 					response.json({ accepted: false, message: 'Payment Declined'})
	// 				} else {
	// 					// The card has been accepted
	// 					console.log("Charged")
	// 					console.log(charge)
	// 				}
	// 			}
	// 		})
	// 	}
	// });
// }