const mongoose = require('mongoose');
const Schema = mongoose.Schema;
/************************************************
 * @description : Creating note schema using mongoose
 ************************************************/
var notifySchema = new mongoose.Schema({
    userId: {
        type:Schema.Types.ObjectId,
        //required: [true, "User_id required"],
        ref: 'user'
    },
    sendToken: {
        type: String,
        //required: [true, "Title required"]
    },
  
}, {
    timestamps: true
});
var notify = mongoose.model('notify', notifySchema);

function notifyModel() {}
notifyModel.prototype.pushNotification = (req, callback) => {
    notify.findOneAndUpdate({
            _id: userId
        }, {
            sendToken: req.body.sendToken

        },
        (err, result) => {
            if (err) {
                callback(err)
            } else {
                console.log("notification push the message here in model",result);
                return callback(null, data);
            }
        });
};
module.exports = new notifyModel();