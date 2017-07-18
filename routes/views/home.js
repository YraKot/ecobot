var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	var locals = res.locals;
	
	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';
	
	locals.data = {
		banners: [],
		products: []
	};

	////////////
	view.on('init', function(next) {
		
		keystone.list('Banner').model.find().exec(function (err, results) {
			locals.banners = results;
			next(err);
		});
	});

	view.on('init', function(next) {
		
		keystone.list('Product').model.find().exec(function (err, results) {
			locals.products = results;
			next(err);
		});
	});


	// Render the view
	view.render('home');
	
};
