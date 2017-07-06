var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var orderSchema = new Schema({
	'user_id' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'user'
	},
	'products' : Array,
	'time' : Date,
	'total' : Number
});

module.exports = mongoose.model('order', orderSchema);
