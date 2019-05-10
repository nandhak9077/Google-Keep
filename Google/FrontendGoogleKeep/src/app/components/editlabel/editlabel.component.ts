import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Label } from 'src/app/model/label.model';
@Component({
  selector: 'app-editlabel',
  templateUrl: './editlabel.component.html',
  styleUrls: ['./editlabel.component.scss']
})
export class EditlabelComponent implements OnInit {

  
  // Label:[]
  // labels: any[];
    labels: any[];

  item:Label;
  label = new FormControl("", [Validators.required, Validators.required]);
 
  constructor(
    public dialogRef: MatDialogRef<EditlabelComponent>,
   
    private snackbar: MatSnackBar, private userService: UserService) {
   
    console.log("Title here",this.label);
    
  }
  ngOnInit() {
   
    console.log("Title here",this.label.value);
      this.userService.retrieveLabels(this.labels)
      .subscribe(data => {
          console.log('data in labels', data);
          this.labels=data['data'];
      }, (error) => {
          console.log('error on labels', error);
      })
  
  }
  edit(){
    
  }
  submitlabel(){
    console.log(this.label.value);
  
  const requestBody = {
      label : this.label.value,
      userID: localStorage.getItem('userID')
  };
  console.log(requestBody);
  this.userService.createLabel(requestBody).subscribe(data => {
      this.snackbar.open("Successfully created label", "ok",  { duration: 2000 });
      console.log('data',data);
    },
      (error) => {
        console.log('error', error);
      });

  }
  
  deletelabel(labelId:any){
   
    console.log("To delete the label", labelId);
  const data={
    labelId:labelId   
  }
  this.userService.deleteLabel(data).subscribe(data =>{
    console.log("delete label",data)},
    (err)=>{
      console.log(err,"err on deletelabel")
    
  })
  }
  refresh(): void {
    window.location.reload();
 }
}


