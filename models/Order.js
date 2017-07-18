var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Order Model
 * =============
 */

var Order = new keystone.List('Order', {
	nocreate: true,
	noedit: true
});

Order.add({
	name: { type: Types.Name, required: true },
	email: { type: Types.Email, required: true },
	phone: { type: String },
	message: { type: Types.Markdown, required: true },
	createdAt: { type: Date, default: Date.now }
});

Order.defaultSort = '-createdAt';
Order.defaultColumns = 'name, email, createdAt';
Order.register();
