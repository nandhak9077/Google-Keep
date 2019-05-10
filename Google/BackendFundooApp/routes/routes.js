/******************************************************************************
 *  Execution       : default node          : cmd> 
 * 
 *  Purpose         : Route paths from all files
 * 
 *  @description    
 * 
 *  @file           : routes.js
 *  @overview       : all paths
 *  @author         : Nandhakumar<nandhak907@gmail.com>
 *  @version        : 1.0
 *  @since          :
 *
 ******************************************************************************/
//import the controller and express
const notes = require('../controller/user.controller');
const note = require('../controller/note.controller');
const notify = require('../controller/notification');
const express = require('express');
const route = express.Router();
const authfile=require('../auth/auth');

const upload= require('../service/uploadFile');
//console.log("upload",upload);

// New Registration
route.post('/register', notes.register);
// Login
route.post('/login', notes.login);
//reset
route.post('/reset', authfile.auth, notes.resetPassword);
//forgot password
route.post('/forgot',notes.forgotPassword);
//dashboard part
route.post('/createNote', note.createNote);
route.get("/getNotes", note.getNotes);
//route.get("/getNotes",authfile.auth, note.getNotes);
route.post('/updateColor',  note.updateColor);
route.post('/updatenote', note.updatenote);
route.put('/archive',note.archive);
route.post('/delete',note.deletenote);
route.post('/reminder',note.reminder);
route.put('/isTrashed', note.isTrashed);
route.post('/sequence', note.sequenceNote);
route.post('/emptyTrash', note.eraseNotes)
//label part using crud operations
route.post('/addLabel', note.addLabel);//create
route.get('/getLabels',  note.getLabels);//retrieve
route.post('/updateLabel',  note.updateLabel);//update
route.post('/deleteLabel',  note.deleteLabel);//delete
route.post('/updateUserId',note.updateuserid);
route.post('/saveLabelToNote', note.saveLabelToNote);
route.post('/deleteLabelToNote', note.deleteLabelToNote);
//route.post('/pushNotification', note.pushNotification);
route.post('/photoupload' ,upload.single('image'), notes.setProfilePic);
route.post('/noteupload' ,upload.single('image'), note.notePic);
route.get("/getProfile/:userID", notes.getProfile);
route.get("/getNotePic/:noteID", note.getNotePic);
//pushNotification part
//route.post('/notification', notify.pushNotification)
route.post('/noteimage/:noteID' ,upload.single('image'), note.noteimage);
route.post('/userimage/:userID' ,upload.single('image'), notes.userimage);


module.exports = route;