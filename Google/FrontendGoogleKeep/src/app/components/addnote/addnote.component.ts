import { Component, OnInit,} from "@angular/core";
import { HttpService } from "../../services/http.service";
import { FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Output, EventEmitter } from "@angular/core";
import { NoteServiceService } from "../../services/note-service.service";
import { from } from "rxjs";
 import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: "app-addnote",
  templateUrl: "./addnote.component.html",
  styleUrls: ["./addnote.component.scss"]
})
export class AddnoteComponent implements OnInit {
  pinnedcard: any;
  bgcolor: any = "#FFFFFF";
  type='note'
  flag = true;
  flag1= true;
  title = new FormControl("", [Validators.required, Validators.required]);
  description = new FormControl("", [Validators.required, Validators.required]);
  model: any;
  response: any;
  Items: any[];
  
  constructor(
    private userService: UserService,private snackbar :MatSnackBar

  ) {}
  color: any;Notes:any;
  ngOnInit() {}

  /**********************************************************************************
   * @output : to emit the event
   *********************************************************************************/

  @Output() addingNote = new EventEmitter();
  /******************************************************************************
   * addNote() to send all the details into the server
   *****************************************************************************/
  close() {
    console.log(this.title.value);
  console.log(this.description.value);
  const requestBody = {
      title : this.title.value,
      description : this.description.value
    };
  console.log(requestBody);
  this.userService.usernote(requestBody).subscribe(data => {
    this.snackbar.open("Successfully created Note", "ok",  { duration: 2000 });
      console.log('data',data);
    },
      (error) => {
        console.log('error', error);
      });
  }

  /**********************************************************************
   *
   * @param:  to take reverse the flag
   ************************************************************************/
  reverseFlag() {
    this.flag = !this.flag;
  }
  /**********************************************************************
   *
   * @param:  to change color
   ************************************************************************/
  // recieveColor($event)
  // { this.color=$event; 
  //   console.log("color event got ",this.color=$event); 
  //   this.userService.updatecolor({
  //     "color": $event,
      
  //   }).subscribe(data =>{
  //     console.log(data, "update color data")},
  //     (err)=>{
  //       console.log(err,"err")

  //     })
  // }
  //  updateColor($event,id){
    
  //      console.log(id,"card..")
  //      console.log(this.color=$event,'color..')
  //      this.userService.updateColor({
  //        "color": $event,
  //        'noteID': id
  //      }).subscribe(data =>{
  //        console.log(data, "update color data")},
  //        (err)=>{
  //          console.log(err,"err")
   
  //        })
  //    }
 
     recieveColor($event) {
      this.color = $event;
      console.log("color event got ", this.color);
      console.log(this.Notes);
    
    
    }
    updateColor($event, id) {
    
      console.log(id, "card..")
      console.log(this.color = $event, 'color..')
      console.log(id)
      this.userService.updateColor({
        "color": $event,
        '_id': id
      }).subscribe(data => {
        console.log(data, "update color data")
      },
        (err) => {
          console.log(err, "err")
    
        })
    }
  /************************************************************************
  * to reverse the flag 
  *************************************************************************/
 notePin() {
  this.flag1 = !this.flag1;
}
}