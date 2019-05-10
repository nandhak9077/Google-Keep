const notifyService = require('../service/notification');
exports.pushNotification = (req, res) => {
    try {
        var responseResult = {};
        notifyService.pushNotification(req, (err, result) => {
            if (err) {
                responseResult.status = false;
                responseResult.message = 'Failed to push the notification!';
                responseResult.error = err;
                res.status(500).send(responseResult);
            } else {
                responseResult.status = true;
                responseResult.message = result;
                res.status(200).send(responseResult);
            }
        })
    } catch (err) {
        console.log("error in push notification",err);
    }
}