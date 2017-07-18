var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Banner Model
 * =============
 */

var Banner = new keystone.List('Banner', {
	autokey: { from: 'name', path: 'key'}
});

Banner.add({
	name: { type: String, required: true },
	title1: { type: String },
	description1: { type: String },
	image1: { type: Types.CloudinaryImage },
	price1: { type: Types.Money, format: '$0,0.00' },
	title2: { type: String },
	description2: { type: String },
	image2: { type: Types.CloudinaryImage },
	price2: { type: Types.Money, format: '$0,0.00' },
	title3: { type: String },
	description3: { type: String },
	image3: { type: Types.CloudinaryImage },
	price3: { type: Types.Money, format: '$0,0.00' },
	///
	about_title: { type: String, wysiwyg: true },
	about_brief: { type: Types.Html, wysiwyg: true, height: 150 },
	about_image1: { type: Types.CloudinaryImage },
	about_image2: { type: Types.CloudinaryImage },
	about_image3: { type: Types.CloudinaryImage }
	// title: { type: String },
	// description: { type: String },
	// image: { type: Types.CloudinaryImage },
	// price: { type: Types.Money, format: '$0,0.00' },
	
});

Banner.register();
