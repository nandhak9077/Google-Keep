const mongoose = require('mongoose');
const Schema = mongoose.Schema;
/************************************************
 * @description : Creating note schema using mongoose
 ************************************************/
var noteSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        //required: [true, "User_id required"],
        ref: 'user'
    },
    title: {
        type: String,
        //required: [true, "Title required"]
    },
    description: {
        type: String,
       // required: [true, "Description required"]
    },
    color: {
        type: String,
        
    },
    archive:{
        type:Boolean,
    },
    reminder:{
        type:String,
    },
    trash:{
        type:Boolean,
    },
    sequence:{
        type : Number,
    },
    notePic:{
        type : String,
    },
    notemessage:{
        type : String,
    },
    labels: [ {
        type: String,
        ref: 'labelSchema',
    }
    ]
}, {
    timestamps: true
});
var note = mongoose.model('notes', noteSchema);

function noteModel() {}
/*******************************************************************************************************
 * @description:it will add the notes data using note schema and save the data into the database
 * @param {*request from frontend} objectNote 
 * @param {*response to backend} callback 
 ******************************************************************************************************/
noteModel.prototype.addNotes = (objectNote, callback) => {
    //console.log("data-->", objectNote.body);
    //console.log("check==>",objectNote.decoded.payload.user_id,);
    
    // const noteModel = new note(objectNote.body);
    //console.log("agagagag",objectNote.body._id);
    const noteModel = new note({
        //"userId":objectNote.body._id,
        //"userId":objectNote.decoded.payload.user_id,
        "title": objectNote.body.title,
        "description": objectNote.body.description,
        "color": objectNote.body.color,
        "sequence":objectNote.body.sequence
    });
    console.log("noteModel",noteModel);
    
    noteModel.save((err, result) => {
        if (err) {
            callback(err);
        } else {
            callback(null, result);
        }
    })
}
/*******************************************************************************
 * @description:it will get the notes using userId and find the notes with data
 * @param : {*request from frontend} id 
 * @param : {*response to backend} callback 
 ********************************************************************************/
noteModel.prototype.getNotes = (req, callback) => {
     console.log("modelid");
    
    note.find({}, (err, result) => {
        if (err) {
            callback(err)
        } else {
            callback(null, result)
        }
    }).sort({sequence:1})
}
// noteModel.prototype.getNotes = (req, callback) => {
//     console.log("modelid",req.decoded.payload.user_id);
    
    
//     note.find({userId:req.decoded.payload.user_id}, (err, result) => {
//         if (err) {
//             callback(err)
//         } else {
//             callback(null, result)
//             console.log("model response====>",result);
            
//         }
//     })
// }
module.exports = new noteModel();
//updatecolor
noteModel.prototype.updateColor = (noteID, updateParams, callback) => {
    note.findOneAndUpdate({
            _id: noteID
        }, {
                color: updateParams

        },
        (err, result) => {
            if (err) {
                callback(err)
            } else {
                console.log("adadadad in update color",result);
                return callback(null, updateParams);
            }
        });
};
//updatenote
noteModel.prototype.deletenote = (req, callback) => {
    console.log("inside mode");
    console.log(req.body);
        
        
    //To find the registered note in database
    note.find({ '_id': req.body.noteID }, (err, data) => {
        if (err) {
            console.log("Error in register note schema ");
            return callback(err);
        }else {
            note.deleteOne({ _id: req.body.noteID }, (err, data) => {
                if (err) {
                    console.log("Error in ");
                    return callback(err);
                } else {
                    return callback(null, data);
                }
            });

        }
    });

}
//trash

// noteModel.prototype.getTrashStatus = (id, callback) => {
//     note.findOne({
//         _id: id
//     }, (err, result) => {
//         if (err) {
//             callback(err)
//         } else {
//          //   console.log("dtaa in getrash notes==>",result.trash);
            
//             return callback(null, result.trash)
//         }
//     })
// }

// noteModel.prototype.isTrashed = (req, callback) => {
    
//     // console.log("dtaa in getrash notes==>",trashNote)
//     // console.log("dtaa in getrash notes==>",noteID)
//     note.findOneAndUpdate({
//             _id: noteID
//         }, {
            
//                 trash: true,
               
           
//         },
//         (err, result) => {
//             if (err) {
//                 callback(err)
//             } else {
//                 return callback(null, result)
//             }
//         });
// };
noteModel.prototype.getTrashStatus = (id, callback) => {
    note.findOne({
        _id: id
    }, (err, result) => {
        if (err) {
            callback(err)
        } else {
         //   console.log("dtaa in getrash notes==>",result.trash);
            
            return callback(null, result.trash)
        }
    })
}
/*****************************************************************************************
 * @param : noteID 
 * @param : trashStatus 
 * @param : callback 
 *****************************************************************************************/
noteModel.prototype.isTrashed = (req, callback) => {
    
    // console.log("dtaa in getrash notes==>",trashNote)
    // console.log("dtaa in getrash notes==>",noteID)
    note.findOneAndUpdate({
            _id: req.body.noteID
        }, {
            $set: {
                trash: req.body.trash,
               
            }
        },
        (err, data) => {
            if (err) {
                callback(err)
            } else {
                return callback(null, data)
            }
        });
};
// noteModel.prototype.archive = (req, callback) => {
//     console.log("inside mode");
//     console.log(req.body);
        
        
//     //To find the registered note in database
//     note.find({ '_id': req.body.noteID }, (err, data) => {
//         if (err) {
//             console.log("Error in register note schema ");
//             return callback(err);
//         }else {
//             note.updateOne({ _id: req.body.noteID }, { 
//                 $set:{
//                     archive: req.body.archive ,

//                 }
              
            
            
//             }, (err, data) => {
//                 if (err) {
//                     console.log("Error in user resetPassword ");
//                     return callback(err);
//                 } else {
//                     return callback(null, data);
//                 }
//             });

//         }
//     });

// }
noteModel.prototype.archive = (noteID, archiveNote, callback) => {
    note.findOneAndUpdate({
            _id: noteID
        }, {
            $set: {
                archive: archiveNote,
                trash: false
                
            }
        },
        (err, result) => {
            if (err) {
                callback(err)
            } else {
                return callback(null, archiveNote)
            }
        });
};
noteModel.prototype.updatenote = (req, callback) => {
    console.log("inside update model");
    console.log(req.body);
        
        
    //To find the registered note in database
    note.find({ '_id': req.body.noteID }, (err, data) => {
        console.log("inside find");
        
        if (err) {
            console.log("Error in ");
            return callback(err);
        }else {
            note.updateOne({ _id: req.body.noteID }, { title:req.body.title,description:req.body.description,color: req.body.color }, (err, data) => {
                if (err) {
                    console.log("Error in update note ");
                    return callback(err);
                } else {
                    return callback(null, data);
                }
            });
        }
    });

}
noteModel.prototype.reminder =(req, callback) => {
    console.log("inside reminder model");
    console.log(req.body.noteID);
        
        
    //To find the registered note in database
    note.find({ '_id':req.body.noteID }, (err, data) => {
        console.log("inside find",req.body.noteID);
        
        if (err) {
            console.log("Error in register note schema ");
            return callback(err);
        }else {
            console.log("else part of model",req.body.reminder);
            
            note.updateOne({ _id:req.body.noteID }, { reminder:req.body.reminder},(err,data) => {
                if (err) {
                    console.log("Error in user resetPassword ");
                    return callback(err);
                } else {
                    console.log("updateone part of model",req.body.noteID);
                    return callback(null, data);
                }
            });
        }
    });

}



//Label part using crud operations
var labelSchema = new mongoose.Schema({
    userID: {
        type: Schema.Types.ObjectId,
        ref: 'UserSchema'
    },

    label: {
        type: String,
        // require: [true, "Label require"],
        // unique: true
    }
},{
    timestamps:true
}
)
var label = mongoose.model('Label', labelSchema);

/************************************************************************************************
 * 
 * @param : labelData 
 * @param : callback 
 *********************************************************************************************/
noteModel.prototype.addLabel = (labelData, callback) => {
    console.log("ultimate save", labelData);
    const Data = new label({
        "userID":labelData.userID,
        "label":labelData.label
        
    });
    Data.save((err, result) => {
        if (err) {
            console.log(err);
            callback(err);
        } else {
            console.log("label result", result);
            return callback(null, result);
        }
    })
};

/*********************************************************************************************
 * 
 * @param : id 
 * @param : callback 
 *********************************************************************************************/
noteModel.prototype.getLabels = (labelData, callback) => {
    console.log("in model", labelData);
    label.find({}, (err, result) => {
        if (err) {
            callback(err)
        } else {
            console.log("labels", result)
            return callback(null, result)
        }
    })
};

/*****************************************************************************************************
 * 
 * @param : id 
 * @param : callback 
 *****************************************************************************************************/
noteModel.prototype.deleteLabel = (req, callback) => {
    console.log("in model", req.body.labelId);
    label.deleteOne({ '_id': req.body.labelId}, (err, result) => {
        if (err) {
            callback(err)
        } else {
            console.log("labels", result)
            return callback(null, result)
        }
    })
};

/**************************************************************************************
 * 
 * @param : changedLabel 
 * @param : callback 
 ****************************************************************************************/
noteModel.prototype.updateLabel = (changedLabel, callback) => {
    var editLabel = null;
    var labelId = null;
    console.log("in model", changedLabel);
    if (changedLabel != null) {
        editLabel = changedLabel.editLabel;
        labelId = changedLabel.labelID
    } else {
        callback("Pinned note not found")
    }
    label.findOneAndUpdate(
        {
            _id: labelId
        },
        {
            $set: {
                label: editLabel
            }
        },
        (err, result) => {
            if (err) {
                console.log("in modelerr");
                callback(err)
            } else {
                console.log("in modelsuccess");
                return callback(null, changedLabel)
            }
        });
};
//addnote to label
noteModel.prototype.saveLabelToNote = ( req , callback) => {


    console.log("req,jkhasbdkjasdbas",req.body.labels);
    
    note.findOneAndUpdate(
        {
            _id: req.body.noteID
        },
        {
            $push: {
                labels: req.body.labels,
            }
        },
        (err, result) => {
            if (err) {
                callback(err)
            } else {
                console.log("in model success",result);
                let res = result.labels;
                res.push(req.body.labels);
                return callback(null, res)
            }
        });
};
//delete
noteModel.prototype.deleteLabelToNote = (labelParams, callback) => {
    console.log("in model", labelParams.noteID);
    var labelledNote = null;
    var noteID = null;
    if (labelParams != null) {
        labelledNote = labelParams.value;
        noteID = labelParams.noteID;
    } else {
        console.log("in modelerr");

        callback("Pinned note not found")
    }
    note.findOneAndUpdate(
        {
            _id: noteID
        },
        {
            $pull: {
                label: labelledNote,
            }
        },
        (err, result) => {
            if (err) {
                callback(err)
            } else {
                let newArray = result.label;
                console.log("in model success result",result);

                for (let i = 0; i < newArray.length; i++) {
                    if (newArray[i] === labelledNote) {
                        newArray.splice(i, 1);
                        return callback(null, newArray)
                    }
                }
            }
        });
};

noteModel.prototype.pushNotification = ( req , callback) => {


    console.log("req,jkhasbdkjasdbas",req.body.labels);
    
    note.findOneAndUpdate(
        {
            _id: req.body.noteID
        },
        {
            $push: {
                labels: req.body.labels,
            }
        },
        (err, result) => {
            if (err) {
                callback(err)
            } else {
                console.log("in model success",result);
                let res = result.labels;
                res.push(req.body.labels);
                return callback(null, res)
            }
        });
};
noteModel.prototype.sequenceNote = (req, callback) => {
    console.log("in model", req.body);
    note.updateOne({ '_id': req.body.noteID},{'sequence': req.body.sequence }, (err, result) => {
        if (err) {
            callback(err)
        } else {
            console.log("sequence", result)
            return callback(null, result)
        }
    })
};

noteModel.prototype.eraseNotes = (req, callback) => {
    console.log("in model", req.body);
    note.deleteMany({ trash : true },(err, result) => {
        if (err) {
            callback(err)
        } else {
            console.log("sequence", result)
            return callback(null, result)
        }
    })
};
noteModel.prototype.update = (data, callback) => {
    note.updateOne({ _id: data.noteID }, data, (error, result) => {
        if (error) {
            console.log("error in model file", err);
            return callback(error);
        } else {
            console.log("data save successfully", result);
            return callback(null, result);
        }
    })
}

noteModel.prototype.notePic = (req, callback) => {
    
    // updateOne() Updates a single document within the collection based on the filter.
    console.log("request in model... ==>",req.body);
    
    note.findOneAndUpdate({ _id: req.body.id },{
        $set :{
            notePic : req.file.location
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
noteModel.prototype.getNotePic = (data, callback) => {
    console.log("get profile request",data);
    
    note.find({ _id: data}, (error, result) => {
        if (error) {
            console.log("error in model file", err);
            return callback(error);
        } else {
            console.log("data save successfully", result);
            return callback(null, result);
        }
    })
}
noteModel.prototype.noteimage = (req, callback) => {
    
    // updateOne() Updates a single document within the collection based on the filter.
    console.log("request in model... ==>",req.params.noteID);
    
    note.findOneAndUpdate({ _id: req.params.noteID },{
        $set :{
            notemessage : req.file.location
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
module.exports = new noteModel()