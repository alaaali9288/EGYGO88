var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var placeSchema= new Schema({

    placeName:{
        type:String
    },

    cityName:{
        type:String
    },

    address:{
        type:String
    },

    description:{
        type:String
    },

       holidayType:{
        type:Schema.Types.ObjectId,
        ref:'TripType'
    },

    lastEdit:{
        type:Date
    },
    logtitude:{
        type:String //Number ?? wala eh
    },

    latitude:{
        type:String //Number ?? wala eh
    },
      userID:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },

    tags:[
        {
            type:String
        }
    ],

    activities:[
        {
        type:String
    }],

     reviews:[{
        content:{
            type:String
        },

        DateTime:{
            type:Date
        },
        isDelete:{
            type:Boolean
        },

        UserID:{
            type:Schema.Types.ObjectId,
            ref:'User'
        }
    }],

 placePicsUrl:[
        {
        type:String
    }
    ],
    isDelete:{
        type:Boolean
    }
});


module.exports = mongoose.model('Place',placeSchema);