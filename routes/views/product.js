var keystone = require('keystone');
var async = require('async');
var numeral = require('numeral');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	var locals = res.locals;
	
	// Set locals
	locals.section = 'products';
	locals.filters = {
		product: req.params.product
	};
	locals.data = {
		products: []
	};
	locals.numeral = numeral;
	
	
	// Load the current product
	view.on('init', function(next) {
		
		var q = keystone.list('Product').model.findOne({
			slug: locals.filters.product
		});
		
		q.exec(function(err, result) {
			locals.data.product = result;
			next(err);
		});
		
	});
	
	// Load other posts
	// view.on('init', function(next) {
		
	// 	var q = keystone.list('Product').model.find().where('state', 'published').sort('-publishedDate').populate('author').limit('4');
		
	// 	q.exec(function(err, results) {
	// 		locals.data.products = results;
	// 		next(err);
	// 	});
		
	// });
	
	// Render the view
	view.render('product');
	
};
