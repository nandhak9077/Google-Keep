import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-edit-card',
  templateUrl: './edit-card.component.html',
  styleUrls: ['./edit-card.component.scss']
})

export class EditCardComponent implements OnInit {

  title: any;
  description: any;
  color: any;
  noteID: any;
  constructor(
    public dialogRef: MatDialogRef<EditCardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private userService: UserService) {
    console.log("Data",data);
    
    
    this.title=new FormControl(data.notedata.title);
    console.log("Title here",this.title);
    
    this.description=new FormControl(data.notedata.description);
    this.color=new FormControl(data.notedata.color);
    this.noteID=new FormControl(data.notedata._id);
  }
  ngOnInit() {
    console.log(this.data);
    
  }
 // on no click
  onNoClick(): void {
    console.log('Dialog');
    this.dialogRef.close();
  }

  updatenote(){
    console.log("update",this.title);
    const requestBody={
      noteID:this.noteID.value,
      title:this.title.value,
      description:this.description.value,
      color:this.color.value
    }
    console.log("req",requestBody);
    this.userService.updatenote(requestBody).subscribe(data => {
      console.log(data);
    },
      error => {
        console.log(error);
      });
    
    
  }
  updateColor($event,_id){
    console.log("color",this.noteID.value);
    const requestBody={
      noteID:this.noteID.value,
      color:$event
      
    }
    console.log("req",requestBody);
    this.userService.updatecolor(requestBody).subscribe(data => {
      console.log(data);
    },
      error => {
        console.log(error);
      });
    
  }

}

