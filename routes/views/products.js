var keystone = require('keystone');
var async = require('async');
var numeral = require('numeral');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	var locals = res.locals;
	
	// Init locals
	locals.section = 'store';
	locals.numeral = numeral;
	locals.filters = {
		product: req.params.product
	};
	locals.data = {
		products: [],
		banners: []
	};
	
	///////////////////////
	view.on('init', function(next) {
		
		keystone.list('Banner').model.find().exec(function (err, results) {
			locals.banners = results;
			next(err);
		});
	});


	// Load the products
	view.on('init', function(next) {
		
		var q = keystone.list('Product').paginate({
				page: req.query.page || 1,
				perPage: 13,
				maxPages: 10
			})
			.sort('title');
		
		
		
		q.exec(function(err, results) {
			console.log('Got results');
			console.log(results);
			
			locals.data.products = results;
			next(err);
		});
		
	});
	
	// Render the view
	view.render('products');
	
};
