import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialogRef, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { UserService } from 'src/app/services/user.service';
import { Validators, FormControl } from '@angular/forms';
import { LabelComponent } from '../label/label.component';

@Component({
  selector: 'app-crud-label',
  templateUrl: './crud-label.component.html',
  styleUrls: ['./crud-label.component.scss']
})
export class CrudLabelComponent implements OnInit {
  // @Input() labelData:any;
 
  constructor(
    public dialogRef: MatDialogRef<LabelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  //labels = new FormControl("", [Validators.required, Validators.required]);
  // constructor( public dialogRef: MatDialogRef<CrudLabelComponent>,
   
  //   private snackbar: MatSnackBar, private userService: UserService) { }

  ngOnInit() {
    
  }
  deletelabel(){
    //console.log("To delete the card",this.labelData._id);
    // const requestBody={
      
    //     labelID : this.labels.value,
     
  
    // }
    // this.userService.deleteLabel(requestBody).subscribe(data =>{
    //   console.log("delete card",data)},
    //   (err)=>{
    //     console.log(err,"err")
      
    // })
  //   console.log("To delete the label", this.labelData._id);
  // const data={
  //   labelId:this.labelData._id   
  // }
  // this.userService.deleteLabel(data).subscribe(data =>{
  //   console.log("delete label",data)},
  //   (err)=>{
  //     console.log(err,"err on deletelabel")
    
  // })
  }




}
