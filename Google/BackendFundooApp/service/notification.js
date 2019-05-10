const notifyModel = require('../models/notification');
/***********************************************************
 * @param : data 
 * @param : callback 
 ************************************************************/
exports.pushNotification = (data, callback) => {
    notifyModel.pushNotification(data, (err, result) => {
        if (err) {
            console.log("service error");
            callback(err);
        } else {
            console.log("In service", result);
            callback(null, result);
        }
    });
}