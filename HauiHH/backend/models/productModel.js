var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var productSchema = new Schema({
	'category_id' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'category'
	},
	'name' : String,
	'price' : Number,
	'description' : String,
	'image' : String
});

module.exports = mongoose.model('product', productSchema);
