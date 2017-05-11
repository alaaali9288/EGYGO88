var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    
    firstName:{
        type:String,
        required:true
    },
    
    lastName:{
        type:String
    },
    userName:{
        type:String,
        required:true, 
		unique: true,
    },
    userPassword:{
        type: String,
        required:true,
        min:8  //min or minlength ??
    },
    email:{
        type:String,
        match:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    },
    userProfilePic:{ 
        data: Buffer,
         contentType: String
        } , //https://gist.github.com/aheckmann/2408370 OR // http://stackoverflow.com/questions/29780733/store-an-image-in-mongodb-using-node-js-express-and-mongoose
        
        userBio:{
            type:String
        },

        Rate:{
            type:number,
            min:5 //
        },
        userFavPlace:[{
            type: Schema.Types.ObjectId,
            ref:'Place',
        }],
        notification:[{
            text:{
                type:String
            },

            time:{
                type:Date
            },
            tripID:{
                type:Schema.Types.ObjectId,
                ref:'Trip'
            }
        }],

        isDeleted:{
            type:Boolean
        }
});

module.exports = mongoose.model('User',userSchema);