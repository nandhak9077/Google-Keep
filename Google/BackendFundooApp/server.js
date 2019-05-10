/******************************************************************************
 *  Execution       : default node          : cmd> nodemon server.js
 *                      
 *  Purpose         : Fundoo Application
 * 
 *  @description    
 * 
 *  @file           : Fundoo application
 *  @overview       : Google keepnote
 *  @author         : Nandhakumar <nandhak907@gmail.com>
 *  @version        : 1.0
 *  @since          : 16-mar-2019
 *
 ******************************************************************************/
const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/routes');
require('dotenv').config();

const jwt = require('jsonwebtoken')
var cors = require('cors')
 
// create express app
const app = express();

app.use(cors());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())
var expressValidator = require('express-validator');
 app.use(expressValidator());

// define a simple route
// app.get('/', (req, res) => {
//     res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
// });
app.use('/', route);


// listen for requests
app.listen(process.env.PORT, () => {
    console.log("Server is listening on port 3000");
});
const dbConfig = require('./dbconfigurl/configurl');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the Mongo-database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

var FCM = require('fcm-node');
    var serverKey = 'AAAANKOhYi4:APA91bEVAEe4PErfRa8I58FbmYhwiaw_wchghP4_fwkL-TBruCGAD-kCT-VJHWAV6U0cOo0bRLxxuHGrvGIY5ibmsANyycI-VO6hSIOfW-0iw6zJEqjJX4OuWG3u5aCwBSTRo-q0lQOO'; //put your server key here
    var fcm = new FCM(serverKey);
 
    var message = { //this may vary according to the message type (single recipient, multicast, topic, et cetera)
        to: 'eufPNk2AfbU:APA91bFaT_qT4Ti4xw4o28KXmD0nk-25W4C3VULSaGNOf2Z5LCN4TXhctsbnHjqhYw7c5PdXB8VCD2ELguI79z8yNXXBDExjZXX1jOmgrf_VaLHa9KovsO28ji2wYSNXpgakbua_X8gt', 
        // collapse_key: 'your_collapse_key',
        
        notification: {
            title: 'Reminder push jhghjghj notification', 
            body: 'Reminder push notification' 
        },
        
        // data: {  //you can send only notification or only data(or include both)
        //     my_key: 'my value',
        //     my_another_key: 'my another value'
        // }
    };
    
    fcm.send(message, function(err, response){
        if (err) {
            console.log("Something has gone wrong!");
        } else {
            console.log("Successfully sent with response: ", response);
        }
    });

module.exports = app;