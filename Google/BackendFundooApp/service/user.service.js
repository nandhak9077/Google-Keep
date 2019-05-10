/******************************************************************************
 *  Execution       : default node          : cmd>  
 *  Purpose         : user services callback functions
 *  @description    
 * 
 *  @file           : user.services.js
 *  @overview       : callback functions
 *  @author         : Nandhakumar <nandhak907@gmail.com>
 *  @version        : 1.0
 *  @since          :
 *
 ******************************************************************************/
//import the models
var userModel = require('../models/user.models');

/**************************************************************************** 
*@description : To send new user register data to models/user.model
*@param       : req (request from client)
*@param       : callback (response from server)
****************************************************************************/

exports.register = (req, callback) => {
    userModel.register(req, (err, data) => {
        if (err) {
            return callback(err);
        } else {
            return callback(null, data);
        }
    })
}
/**************************************************************************** 
*@description : To send registerd user login data to models/user.model
*@param       : req (request from client)
*@param       : callback (response from server)
****************************************************************************/

exports.login = (req, callback) => {
    userModel.login(req, (err, data) => {
        if (err) {
            return callback(err);
        } else {
            return callback(null, data);
        }
    })
}

/**************************************************************************** 
*@description : To send registered user forgot password data to models/user.model
*@param       : req (request from client)
*@param       : callback (response from server)
****************************************************************************/

exports.forgotPassword = (req, callback) => {
    userModel.forgotPassword(req, (err, data) => {
        if (err) {
            return callback(err);
        } else {
            return callback(null, data);
        }
    })
}

/**************************************************************************** 
*@description : To send registerd user reset password data to models/user.model
*@param       : req (request from client)
*@param       : callback (response from server)
****************************************************************************/

exports.resetPassword = (req, callback) => {
    userModel.resetPassword(req, (err, data) => {
        if (err) {
            return callback(err);
        } else {
            return callback(null, data);
        }
    })
}

exports.update = (data, callback) => {
    model.update(data, (err, result) => {
        //condition gives err callback goes for err else data
        if (err) {
            return callback(err);
        } else {
            return callback(null, result);
        }
    })
}
exports.setProfilePic = (req, callback) => {
    userModel.setProfilePic(req, (err, data) => {
        if (err) {
            return callback(err);
        } else {
            return callback(null, data);
        }
    })
}


exports.getProfile = (data, callback) => {
    userModel.getProfile(data, (err, result) => {
        if (err) {
            return callback(err);
        } else {
            return callback(null, result);
        }
    })
}
exports.userimage = (data, callback) => {
    userModel.userimage(data, (err, result) => {
        if (err) {
            return callback(err);
        } else {
            return callback(null, result);
        }
    })
}
