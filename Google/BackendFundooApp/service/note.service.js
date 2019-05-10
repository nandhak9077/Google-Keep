const noteModel = require('../models/notemodel');
/***********************************************************
 * @param : data 
 * @param : callback 
 ************************************************************/
exports.createNote = (data, callback) => {
    noteModel.addNotes(data, (err, result) => {
        if (err) {
            console.log("service error");
            callback(err);
        } else {
            console.log("In service", result);
            callback(null, result);
        }
    });
}
/********************************************************************
 * 
 * @param : data 
 * @param : callback 
 ********************************************************************/
exports.getNotes = (req, callback) => {
    console.log("adadadadadadda in services")
    noteModel.getNotes(req, (err, result) => {
        if (err) {
            console.log("service error");
            callback(err);
        } else {
           console.log("In service", result);
            callback(null, result);
        }
    });
}
// exports.getNotes = (req, callback) => {
//     console.log("in service==>",req);
    
//     noteModel.getNotes(req, (err, result) => {
//         console.log("asasasa",result)
//         if (err) {
//             console.log("service error");
//             callback(err);
//         } else {
//            console.log("In service", result);
//             callback(null, result);
//         }
//     });
// }
//update color
exports.updateColor = (paramID, paramData, callback) => {
    console.log("in services paramID & param Data -->", paramID, paramData);
    noteModel.updateColor(paramID, paramData, (err, result) => {
        if (err) {
            console.log("service error");
            callback(err);
        } else {
            return callback(null, result);
        }
    })
}
//update note
exports.deletenote = (req, callback) => {
    console.log("inside services");
    console.log(req.body);
    
    
    noteModel.deletenote(req, (err, data) => {
        if (err) {
            return callback(err);
        } else {
            console.log(data);//added
            
            return callback(null, data);
        }
    })
}

// exports.archive = (req, callback) => {
//     console.log("inside services");
//     console.log(req.body);
    
    
//     noteModel.archive(req, (err, data) => {
//         if (err) {
//             return callback(err);
//         } else {
//             console.log(data);//added
            
//             return callback(null, data);
//         }
//     })
// }
exports.archive = (paramID, paramData, callback) => {
    console.log("in services", paramID, paramData);
    noteModel.archive(paramID, paramData, (err, result) => {
        if (err) {
            callback(err);
        } else {
            return callback(null, result)
        }
    })
}

exports.updatenote = (req, callback) => {
    console.log("inside update services");
    console.log(req.body);
    
    
    noteModel.updatenote(req, (err, data) => {
        if (err) {
            return callback(err);
        } else {
            console.log("services update",data);//added
            
            return callback(null, data);
        }
    })
}
// exports.isTrashed = (req, callback) => {
//     console.log("in services");

//     noteModel.isTrashed(req ,(err, data) => {
//         if (err) {
//             console.log("service error");
//             return callback(err);
//         } else {
//             return callback(null, data)
//         }
//     })
// }
exports.isTrashed = (req, callback) => {
    console.log("in services", req.body);
    
    // noteModel.getTrashStatus(paramID, (err, status) => {
    //     if (err) {
    //         callback(err);
    //     } else {
    //         if (status === true) {
    //             let data = {
      
    //              status: false
    //             }
    //             noteModel.isTrashed(paramID, data, (err, result) => {
    //                 if (err) {
    //                     callback(err);
    //                 } else {
    //                     return callback(null, result)
    //                 }
    //             })
    //         } else if (status === false) {
    //             let data = {
    //                 status: true
    //             }
    //             noteModel.isTrashed(paramID, data, (err, result) => {
    //                 if (err) {
    //                     callback(err);
    //                 } else {
    //                     return callback(null, result)
    //                 }
    //             })
    //         }

    //    }
    //  })
    noteModel.isTrashed(req ,(err, data) => {
        if (err) {
            console.log("service error");
            return callback(err);
        } else {
            return callback(null, data)
        }
    })
}
exports.reminder = (req, callback) => {
    console.log("in services");

    noteModel.reminder(req ,(err, data) => {
        if (err) {
            console.log("service error");
            return callback(err);
        } else {
            return callback(null, data)
        }
    })
}
//crud operations in label part
/**************************************************************************************
 * 
 * @param : labelData 
 * @param : callback 
 ***********************************************************************************************/
exports.addLabel = (labelData, callback) => {
    console.log("in services",labelData);
    noteModel.addLabel(labelData, (err, result) => {
        if (err) {
            callback(err);
        } else {
            return callback(null, result)
        }
    })
}
/****************************************************************************************
 * 
 * @param : labelData 
 * @param : callback 
 ***************************************************************************************/
exports.getLabels = (labelData, callback) => {
    console.log("in services",labelData);
    noteModel.getLabels(labelData, (err, result) => {
        if (err) {
            callback(err);
        } else {
            return callback(null, result)
        }
    })
}
/*******************************************************************
 * 
 * @param : labelData 
 * @param : callback 
 **********************************************************************/
exports.deleteLabel = (req, callback) => {
    console.log("in services",req.body);
    noteModel.deleteLabel(req, (err, result) => {
        if (err) {
            callback(err);
        } else {
            return callback(null, result)
        }
    })
}
/******************************************************************************
 * 
 * @param : labelData 
 * @param : callback 
 ****************************************************************************/
exports.updateLabel = (labelData, callback) => {
    console.log("in services",labelData);
    noteModel.updateLabel( labelData,(err, result) => {
        if (err) {
            callback(err);
        } else {
            return callback(null, result)
        }
    })
}
//update userid
exports.updateuserid = (data, callback) => {
    noteModel.updateuserid(data, (err, result) => {
        if (err) {
            console.log("service error");
            callback(err);
        } else {
            console.log("In service", result);
            callback(null, result);
        }
    });
}
//addlabel to note
exports.saveLabelToNote = ( req, callback) => {
    console.log("in services",req.body);
    noteModel.saveLabelToNote(req, (err, data) => {
        if (err) {
            callback(err);
        } else {
            return callback(null, data)
        }
    })
    
}
//delete label to note
exports.deleteLabelToNote = ( paramData, callback) => {
    console.log("in services", paramData);
    noteModel.deleteLabelToNote(paramData, (err, result) => {
        if (err) {
            callback(err);
        } else {
            return callback(null, result)
        }
    })
}
exports.pushNotification = ( paramData, callback) => {
    console.log("in services", paramData);
    noteModel.pushNotification(paramData, (err, result) => {
        if (err) {
            callback(err);
        } else {
            return callback(null, result)
        }
    })
}
exports.sequenceNote = (req, callback) => {
    console.log("in services",req.body);
    noteModel.sequenceNote(req, (err, result) => {
        if (err) {
            callback(err);
        } else {
            return callback(null, result)
        }
    })
}
exports.eraseNotes = (req, callback) => {
    console.log("in services",req.body);
    noteModel.eraseNotes(req, (err, result) => {
        if (err) {
            callback(err);
        } else {
            return callback(null, result)
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
exports.notePic = (req, callback) => {
    console.log("in services",req.body);
    noteModel.notePic(req, (err, result) => {
        if (err) {
            callback(err);
        } else {
            return callback(null, result)
        }
    })
}
exports.getNotePic = (data, callback) => {
    noteModel.getNotePic(data, (err, result) => {
        if (err) {
            return callback(err);
        } else {
            return callback(null, result);
        }
    })
}
exports.noteimage = (data, callback) => {
    noteModel.noteimage(data, (err, result) => {
        if (err) {
            return callback(err);
        } else {
            return callback(null, result);
        }
    })
}
