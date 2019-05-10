/******************************************************************************
 *  Execution       : default node          : cmd> 
 * 
 *  Purpose         : Sending database
 * 
 *  @description    
 * 
 *  @file           : models.js
 *  @overview       : from frontend part data will take and send back to database
 *  @author         : Nandhakumar<nandhak907@gmail.com>
 *  @version        : 1.0
 *  @since          :
 *
 ******************************************************************************/
//import the controller and express
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const auth = require('../service/sendmailer');
//declare variable mongoSchema and fetch the information from mongoose
var mongoSchema = mongoose.Schema;
//userSchema required fields for registration
var userSchema = new mongoSchema({
    "firstname": { type: String, required: [true, "First name is required"] },
    "lastname": { type: String, required: [true, "LastName is required"] },
    "email": { type: String, required: [true, "Email is required"] },
    "password": { type: String, required: [true, "password is required"] },
    "verifyemailtoken": { type: String, required: [false, "automatic generate"] },
    "forgotpasswordtoken": { type: String, required: [false, "automatic generate"] },
    "isverified": { type: String, required: [false, "automatic generate"] },
    "profilePic":{ type:String },
    "usermessage":{
        type : String
    }
}, {
        timestamps: true
    });
// user model empty function in type
function usermodel() {

}
//user variable store model userSchema
var user = mongoose.model('user', userSchema);
//hash function encryption of password
function hash(password) {
    var salt = bcrypt.genSaltSync(10);
    var hashPassword = bcrypt.hashSync(password, salt);
    return hashPassword;
}

/**************************************************************************** 
*@description : To To find the registered user in database if not registerd 
*               then to register new user to the database.
*@param       : body (request from client)
*@param       : callback (response from server)
****************************************************************************/
usermodel.prototype.register = (body, callback) => {

    //To find the registered user in database
    user.find({ 'email': body.email }, (err, data) => {
        if (err) {
            console.log("Error in register user schema ");
            return callback(err);
        } else if (data.length > 0) {
            response = { "error": true, "message": "Email already exists ", "errorCode": 404 };
            return callback(response);
        }
        else {
            const newUser = new user({
                "firstname": body.firstname,
                "lastname": body.lastname,
                "email": body.email,
                "password": hash(body.password)
            });
            newUser.save((err, result) => {
                if (err) {
                    console.log("error in model file", err);
                    return callback(err);
                } else {
                    console.log("data save successfully", result);
                    return callback(null, result);
                }
            })
        }
    });

}

/**************************************************************************** 
*@description : To find the registered user in database using find()
*@param       : body (request from client)
*@param       : callback (response from server)
****************************************************************************/
usermodel.prototype.login = (body, callback) => {

    //The find() method with parameters returns the requested documents from a collection and 
    //returns requested fields for the documents. Email of user is requested.
    user.find({ "email": body.email }, (err, data) => {
        if (err) {
            return callback(err);
        } else if (data.length > 0) {
            bcrypt.compare(body.password, data[0].password, function (err, res) {
                if (err) {
                    return callback(err);
                } else if (res) {
                    console.log(data);

                    return callback(null, data);
                } else {
                    return callback("Incorrect password").status(500);
                }
            });
        } else {
            return callback("Invalid User ");
        }
    });
}

/**************************************************************************** 
*@description : To find the registered user in database
*@param       : body (request from client)
*@param       : callback (response from server)
****************************************************************************/
usermodel.prototype.forgotPassword = (body, callback) => {
    // console.log("body in model==>",body);

    user.find({ "email": body.email }, (err, data) => {
        if (err) {
            return callback(err);
        } else if (data) {
            //console.log("data in models==>", data[0]._id);

            //console.log(data)

            return callback(null, data)
        }
        else {
            return callback("Invalid User ");
        }
    });
}

/**************************************************************************** 
*@description : To reset password.
*@param       : req (request from client)
*@param       : callback (response from server)
****************************************************************************/
usermodel.prototype.resetPassword = (req, callback) => {
    //console.log("request------>", req.body);
    let newpassword = bcrypt.hashSync(req.body.password, 10);
    console.log("new password bcrypt --->", newpassword);

    // updateOne() Updates a single document within the collection based on the filter.
    user.updateOne({ _id: req.decoded.payload.user_id }, { password: newpassword }, (err, data) => {
        if (err) {
            console.log("Error in user resetPassword ");
            return callback(err);
        } else {
            return callback(null, data);
        }
    });

}

module.exports = new usermodel();
usermodel.prototype.update = (data, callback) => {
    user.updateOne({ _id: data.id }, data, (error, result) => {
        if (error) {
            console.log("error in model file", err);
            return callback(error);
        } else {
            console.log("data save successfully", result);
            return callback(null, result);
        }
    })
}

usermodel.prototype.setProfilePic = (req, callback) => {
    
    // updateOne() Updates a single document within the collection based on the filter.
    console.log("request in model... ==>",req.body);
    
    user.findOneAndUpdate({ _id: req.body.id },{
        $set :{
            profilePic : req.file.location
        },
    } , (err, data) => {
        if (err) {
            console.log("Error in user resetPassword ");
            return callback(err);
        } else {
            return callback(null, data);
        }
    });

}

usermodel.prototype.getProfile = (data, callback) => {
    console.log("get profile request",data);
    
    user.find({ _id: data}, (error, result) => {
        if (error) {
            console.log("error in model file", err);
            return callback(error);
        } else {
            console.log("data save successfully", result);
            return callback(null, result);
        }
    })
}
usermodel.prototype.userimage = (req, callback) => {
    
    // updateOne() Updates a single document within the collection based on the filter.
    console.log("request in model... ==>",req.params.noteID);
    
    user.findOneAndUpdate({ _id: req.params.userID },{
        $set :{
            usermessage : req.file.location
        },
    } , (err, data) => {
        if (err) {
            console.log("Error in");
            return callback(err);
        } else {
            console.log("adadad",data)
            return callback(null, data);
        }
    });

}
module.exports = new usermodel();
