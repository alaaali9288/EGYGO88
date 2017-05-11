var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var tripSchema = new Schema({
    title:{
        type:String,
       required:true

    },
    price:{
        type:number ,//Currency??
     required:true

    },
    description:{
        type:String
    },
    busLeave:{
        type:Date,
               
    },
    busBack:{
        type:Date
    },
    dateFrom:{
        type:Date
    },
    dateTo:{
        type:Date
    },
    holidayType:{
        type:Schema.Types.ObjectId,
        ref:'TripType'
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
    
    tripURL:[{
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

    tripPicsUrl:[
        {
        type:String
    }
    ],
    isDelete:{
        type:Boolean
    }

});


//To print Price 42.00$ 
// Getter
ItemSchema.path('price').get(function(num) {
  return (num / 100).toFixed(2);
});

// Setter
ItemSchema.path('price').set(function(num) {
  return num * 100;
});


module.exports = mongoose.model('Trip',tripSchema);