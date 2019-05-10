const noteService = require('../service/note.service');
// var redis = require('redis');
// var client = redis.createClient();
/************************************************
 * @description:it handles the creating note data
 * @param : (request from client): req 
 * @param : (response from server): res 
 ***********************************************/
exports.createNote = (req, res) => {
    try {
        var responseResult = {};
        noteService.createNote(req, (err, result) => {
            if (err) {
                responseResult.status = false;
                responseResult.message = 'Failed to create note!';
                responseResult.error = err;
                res.status(500).send(responseResult);
            } else {
             /*   var userNote = {
                    note: result,
                }*/
                responseResult.status = true;
                responseResult.message = result;
               // responseResult.data = userNote;
                res.status(200).send(responseResult);
            }
        })
    } catch (err) {
        console.log("error in creating note",err);
    }
}
/**************************************************************
 * @description: To get get the created note with data 
 * @param : (request from client):req 
 * @param : (response from server):res
 **************************************************************/
exports.getNotes = (req, res) => {
//    console.log("dsfsafr",req);
   
    var responseResult = {};
        noteService.getNotes(req, (err, result) => {
            if (err) {
                responseResult.status = false;
                responseResult.message = 'Failed to retrieve note from DB!';
                responseResult.error = err;
                res.status(500).send(responseResult);
            } else {
                responseResult.status = true;
                responseResult.message = 'Note retrieved from DB successfully';
                responseResult.result = result;
                res.status(200).send(responseResult);
            }
        })
}
//update color
exports.updateColor = (req, res) => {
    try {
        req.checkBody('noteID', 'noteID required').not().isEmpty();
        req.checkBody('color', 'color should not be empty').not().isEmpty();
        var errors = req.validationErrors();
        var response = {};
        if (errors) {
            response.status = false;
            response.error = errors;
            return res.status(422).send(response);
        } else {
            var responseResult = {};
            noteID = req.body.noteID;
            color = req.body.color;
            console.log("controller noteId: ",noteID);
            console.log("controller color: ",color);
            
            noteService.updateColor(noteID, color, (err, result) => {
                if (err) {
                    responseResult.status = false;
                    responseResult.error = err;
                    res.status(500).send(responseResult);
                } else {
                    responseResult.status = true;
                    responseResult.data = result;
                    res.status(200).send(responseResult);
                }
            })
        }
    } catch (error) {
        res.send(error);
    }
}
//updateNote
module.exports.deletenote=(req,res)=>{
    req.checkBody('_id','id is not valid').isLength(1);
    console.log("delete note ctrl");
    // console.log(req.body);
    
    noteService.deletenote(req, (err, data) => {
        var response = {};
        if (err) {
            return callback(err);
            console.log("error");
            
        } else {
            
           
            response.success = true;
            response.result = data;
            res.status(200).send(response);
            console.log("ok.....",data._id);
            
        
        }
    })
}
module.exports.archive=(req,res)=>{
    // req.checkBody('_id','id is not valid').isLength(1);
    // req.checkBody('archive','archive is not valid').isLength(1);
    // req.checkBody('','archive is not valid').isLength(1);
    // console.log("archive ctrl");
    // console.log(req.body);
    
    // noteService.archive(req, (err, data) => {
    //     var response = {};
    //     if (err) {
    //         return callback(err);  
    //     } else {
            
           
    //         response.success = true;
    //         response.result = data;
    //         res.status(200).send(response);
    //         console.log("ok.....",data._id);
            
        
    //     }
    // })

    try {
        req.checkBody('noteID', 'noteID required').not().isEmpty();
        // req.checkBody('archive', 'archive required').not().isEmpty();
        var errors = req.validationErrors();
        var response = {};
        if (errors) {
            response.status = false;
            response.error = errors;
            return res.status(422).send(response);
        } else {
            var responseResult = {};
            noteID = req.body.noteID;
            archive = req.body.archive;
            // console.log(archive)
            noteService.archive(noteID, archive, (err, result) => {
                if (err) {
                    responseResult.status = false;
                    responseResult.error = err;
                    res.status(500).send(responseResult);
                } else {
                    responseResult.status = true;
                    responseResult.data = result;
                    res.status(200).send(responseResult);
                }
            })
        }
    } catch (error) {
        res.send(error)
    }
}

module.exports.updatenote=(req,res)=>{
    console.log("inside updatenote ctrl");
    req.checkBody('_id','id is not valid').isLength(1);
    req.checkBody('title');
    req.checkBody('description');
    req.checkBody('color');
    
    // console.log(req.body);
    
    noteService.updatenote(req, (err, data) => {
        var response = {};
        if (err) {
            return callback(err);
            //console.log("error");
            
        } else {
            
           
            response.success = true;
            response.result = data;
            res.status(200).send(response);
            console.log("ok.....",data);
            
        
        }
    })
}
// exports.isTrashed = (req, res) => {
//     try {
//         req.checkBody('noteID', 'noteID required').not().isEmpty();
//         var errors = req.validationErrors();
//         var response = {};
//         if (errors) {
//             response.status = false;
//             response.error = errors;
//             return res.status(422).send(response);
//         } else {
//             var responseResult = {};
//             noteID = req.body.noteID;
//             noteService.isTrashed(noteID,(err, result) => {
//                 if (err) {
//                     responseResult.status = false;
//                     responseResult.error = err;
//                     res.status(500).send(responseResult);
//                 } else {
//                     responseResult.status = true;
//                     responseResult.data = result;
//                     res.status(200).send(responseResult);
//                 }
//             })
//         }
//     } catch (error) {
//         res.send(error)
//     }
// }
exports.isTrashed = (req, res) => {
    try {
        req.checkBody('noteID', 'noteID required').not().isEmpty();
        var errors = req.validationErrors();
        var response = {};
        if (errors) {
            response.status = false;
            response.error = errors;
            return res.status(422).send(response);
        } else {
            var responseResult = {};
            noteID = req.body.noteID;
            noteService.isTrashed(req,(err, result) => {
                if (err) {
                    responseResult.status = false;
                    responseResult.error = err;
                    res.status(500).send(responseResult);
                } else {
                    responseResult.status = true;
                    responseResult.data = result;
                    res.status(200).send(responseResult);
                }
            })
        }
    } catch (error) {
        res.send(error)
    }
}
exports.reminder = (req, res) => {
        req.checkBody('noteID', 'noteID required');
        req.checkBody('reminder');
        // console.log("jjhgshjg",req);
        
        var errors = req.validationErrors();
        var response = {};
        if (errors) {
            response.status = false;
            response.error = errors;
            return res.status(422).send(response);
        } else {
            var responseResult = {};
            noteService.reminder(req, (err, result) => {
                if (err) {
                    console.log("ctrl error");
                    
                    responseResult.status = false;
                    responseResult.error = err;
                    res.status(500).send(responseResult);
                } else {
                    responseResult.status = true;
                    responseResult.data = result;
                    res.status(200).send(responseResult);
                }
            })
        }

}

//Crud operations in label part
/**************************************************************************************
 * 
 * @param : req 
 * @param : res 
 ******************************************************************************/
exports.addLabel = (req, res) => {
    try {
         console.log("req-------------------->", req);
        // req.checkBody('userID', 'userID required').not().isEmpty();
        // req.checkBody('label', 'label required');
        var errors = req.validationErrors();
        var response = {};
        if (errors) {
            response.status = false;
            response.error = errors;
            return res.status(422).send(response);
        } else {
            var responseResult = {};
            const labelData = {
                userID: req.body.userID,
                label: req.body.label
            }
            noteService.addLabel(labelData, (err, result) => {
                if (err) {
                    responseResult.status = false;
                    responseResult.error = err;
                    res.status(500).send(responseResult);
                }
                else {
                    responseResult.status = true;
                    responseResult.data = result;
                    res.status(200).send(responseResult);
                }
            })
        }
    } catch (error) {
        res.send(error);
    }
}
/**********************************************************************************
 * 
 * @param : req 
 * @param : res 
 *******************************************************************************/
exports.getLabels = (req, res) => {
    try {
        // console.log("req-------------------->", req);
        // req.checkBody('userID', 'userID required').not().isEmpty();
        var errors = req.validationErrors();
        var response = {};
        if (errors) {
            response.status = false;
            response.error = errors;
            return res.status(422).send(response);
        } else {
            var responseResult = {};
            const labelData = {
                userID: req.body,
            }
            noteService.getLabels(labelData, (err, result) => {
                if (err) {
                    responseResult.status = false;
                    responseResult.error = err;
                    res.status(500).send(responseResult);
                }
                else {
                    responseResult.status = true;
                    responseResult.data = result;
                    res.status(200).send(responseResult);
                }
            })
        }
    } catch (error) {
        res.send(error);
    }
}
/***************************************************************************************
 * 
 * @param : req 
 * @param : res 
 *************************************************************************************/
exports.deleteLabel = (req, res) => {
    try {
        // console.log("req-------------------->", req);
        //req.checkBody('_id', 'labelID required').not().isEmpty();
        // var errors = req.validationErrors();
        // var response = {};
        // if (errors) {
        //     response.status = false;
        //     response.error = errors;
        //     return res.status(422).send(response);
        // } else {
            var responseResult = {};
            
            noteService.deleteLabel(req, (err, result) => {
                if (err) {
                    responseResult.status = false;
                    responseResult.error = err;
                    res.status(500).send(responseResult);
                }
                else {
                    responseResult.status = true;
                    responseResult.data = result;
                    res.status(200).send(responseResult);
                }
            })
        }
    catch (error) {
        res.send(error);
    }
}
/************************************************************************************
 * 
 * @param : req 
 * @param : res 
 ********************************************************************************/
exports.updateLabel = (req, res) => {
    try {
        // console.log("req-------------------->", req);
        req.checkBody('labelID', 'labelID required').not().isEmpty();
        req.checkBody('editLabel', 'editLabel required').not().isEmpty();
        var errors = req.validationErrors();
        var response = {};
        if (errors) {
            response.status = false;
            response.error = errors;
            return res.status(422).send(response);
        } else {
            var responseResult = {};
            const labelData = {
                editLabel: req.body.editLabel,
                labelID: req.body.labelID
            }
            noteService.updateLabel(labelData, (err, result) => {
                if (err) {
                    responseResult.status = false;
                    responseResult.error = err;
                    res.status(500).send(responseResult);
                }
                else {
                    responseResult.status = true;
                    responseResult.data = result;
                    res.status(200).send(responseResult);
                }
            })
        }
    } catch (error) {
        res.send(error);
    }
}
//updateUserId
exports.updateuserid = (req, res) => {
    try {
        var responseResult = {};
        noteService.updateuserid(req, (err, result) => {
            if (err) {
                responseResult.status = false;
                responseResult.message = 'Failed to updateuserid!';
                responseResult.error = err;
                res.status(500).send(responseResult);
            } else {
                
                responseResult.status = true;
                responseResult.message = 'success on updateuserid';
                responseResult.data = result;
                res.status(200).send(responseResult);
            }
        })
    } catch (err) {
        res.send("error occurs on update userid",err);
    }
}
//addlabel to note
exports.saveLabelToNote = (req, res) => {
    try {
        // console.log("req in controller-->",req.body);
        
        req.checkBody('noteID', 'noteID required').not().isEmpty();
        req.checkBody('label', 'label required');
        var errors = req.validationErrors();
        var response = {};
        if (errors) {
            response.status = false;
            response.error = errors;
            return res.status(422).send(response);
        } else {
            var responseResult = {};
           
            noteService.saveLabelToNote(req, (err, data) => {
                if (err) {
                    responseResult.status = false;
                    responseResult.error = err;
                    res.status(500).send(responseResult);
                }
                else {
                    responseResult.status = true;
                    responseResult.message = data;
                    // responseResult.data = data;
                    res.status(200).send(responseResult);
                }
            })
        }
    } catch (error) {
        res.send(error);
    }
}
//delete label to notes
exports.deleteLabelToNote = (req, res) => {
    try {
        req.checkBody('noteID', 'noteID required').not().isEmpty();
        var errors = req.validationErrors();
        var response = {};
        if (errors) {
            response.status = false;
            response.error = errors;
            return res.status(422).send(response);
        } else {
            var responseResult = {};
            noteID = req.body.noteID;
            noteService.deleteLabelToNote(req.body, (err, result) => {
                if (err) {
                    responseResult.status = false;
                    responseResult.error = err;
                    res.status(500).send(responseResult);
                } else {
                    responseResult.status = true;
                    responseResult.data = result;
                    res.status(200).send(responseResult);
                }
            })
        }
    } catch (error) {
        res.send(error)
    }
}
exports.pushNotification = (req , res) => {
    try {
        console.log("id generate", req.body._id);
        
        // req.checkBody('noteID', 'noteID required').not().isEmpty();
        // var errors = req.validationErrors();
        // var response = {};
        // if (errors) {
        //     response.status = false;
        //     response.error = errors;
        //     return res.status(422).send(response);
        // } else {
        //     var responseResult = {};
        //     noteID = req.body.noteID;
            noteService.pushNotification(req.body, (err, result) => {
                if (err) {
                    responseResult.status = false;
                    responseResult.error = err;
                    res.status(500).send(responseResult);
                } else {
                    responseResult.status = true;
                    responseResult.data = result;
                    res.status(200).send(responseResult);
                }
            })
        }
    catch (error) {
        res.send(error)
    }
}
exports.sequenceNote = (req, res) => {
    try {
        
            var responseResult = {};
            
            noteService.sequenceNote(req, (err, result) => {
                if (err) {
                    responseResult.status = false;
                    responseResult.error = err;
                    res.status(500).send(responseResult);
                }
                else {
                    responseResult.status = true;
                    responseResult.data = result;
                    res.status(200).send(responseResult);
                }
            })
        }
    catch (error) {
        res.send(error);
    }
}
//empty trash
exports.eraseNotes = (req, res) => {
    try {
        
            var responseResult = {};
            
            noteService.eraseNotes(req, (err, result) => {
                if (err) {
                    responseResult.status = false;
                    responseResult.error = err;
                    res.status(500).send(responseResult);
                }
                else {
                    responseResult.status = true;
                    responseResult.data = result;
                    res.status(200).send(responseResult);
                }
            })
        }
    catch (error) {
        res.send(error);
    }
}
module.exports.notePic= (req, res) => {
   


    console.log("\npic location --------<",req.file.location);
    console.log("\npic key --------<",req.body.id);
    
    
    // console.log("inside forgotPassword");
    // req.checkBody('password', 'password is not valid').isLength({ min: 4 })
    // var errors = req.validationErrors();
    // var response = {};
    // if (errors) {
    //     response.success = false;
    //     response.error = errors;
    //     return res.status(422).send(response);
    // } else {
        noteService.notePic(req, (err, data) => {
            if (err) {
                console.log(err);
                return res.status(500).send({
                    message: err
                })
            } else {
                console.log("message is coming here",data)
                return res.status(200).send({
                    
                    message: data
                });
            }
    
        })
    
    }
module.exports.getNotePic = (req, res) => {
        console.log("inside getProfile",req.params.noteID);
        console.log("inside getProfile....",req);
        // req.checkBody('password', 'password is not valid').isLength({ min: 4 })
        const noteID=req.params.noteID
        var errors = req.validationErrors();
        var response = {};
        if (errors) {
            response.success = false;
            response.error = errors;
            return res.status(422).send(response);
        } else {
            noteService.getNotePic(noteID, (err, data) => {
                if (err) {
                    console.log(err);
                    return res.status(500).send({
                        message: err
                    })
                } else {
                    console.log("addadad in controller",data)
                    return res.status(200).send({
                        message: data
                    });
                }
    
            })
    
        }
    }
    //noteimage
    module.exports.noteimage= (req, res) => {
   


        console.log("\npic location --------<",req.file.location);
       // console.log("\npic key --------<",req.body.id);
            noteService.noteimage(req, (err, data) => {
                if (err) {
                    console.log(err);
                    return res.status(500).send({
                        message: err
                    })
                } else {
                    console.log("message is coming here",data)
                    return res.status(200).send({
                        
                        message: data
                    });
                }
        
            })
        
        }