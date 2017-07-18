var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Product Model
 * ==========
 */

var Product = new keystone.List('Product', {
    map: {name: 'title'},
    singular: 'Product',
    plural: 'Products',
    autokey: {path: 'slug', from: 'title', unique: true}
});

Product.add({
	title: { type: String, required: true },
	price: { type: Types.Money, format: '$0,0.00' },
	taxable: { type: Boolean, default: true },
	brief: { type: Types.Html, wysiwyg: true, height: 150 },
	description: { type: Types.Html, wysiwyg: true, height: 250 },
	image: { type: Types.CloudinaryImage },
	images: { type: Types.CloudinaryImages }
});

// Product.schema.virtual('content.full').get(function() {
// 	return this.content.extended || this.content.brief;
// });

Product.defaultColumns = 'title, description|%20, price|%20';
Product.register();
