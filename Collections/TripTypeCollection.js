var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var tripType = new Schema ({

    type:{
        type:String
    }
})

module.exports = mongoose.model('TripType',tripType);