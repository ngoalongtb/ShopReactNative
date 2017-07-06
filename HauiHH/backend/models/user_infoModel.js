var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var user_infoSchema = new Schema({
	'user_id' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'user'
	},
	'sdt' : Number,
	'skill' : String,
	'star' : Number,
	'rank' : Number,
	'time' : Array,
	'type' : String
});

module.exports = mongoose.model('user_info', user_infoSchema);
