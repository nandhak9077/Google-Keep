import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-profile-dialog',
  templateUrl: './profile-dialog.component.html',
  styleUrls: ['./profile-dialog.component.scss']
})
export class ProfileDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ProfileDialogComponent>) {}

    imageChangedEvent: any = '';
    croppedImage: any = '';
    
    fileChangeEvent(event: any): void {
        this.imageChangedEvent = event;
    }


       imageCropped(event: any) {
     console.log(event);
     this.croppedImage = event;
   }

    
    setProfile() {
           if (this.croppedImage != null) {
             this.dialogRef.close(this.croppedImage);
          }
        }

  // onNoClick(): void {
  //   this.dialogRef.close();
  // }

  ngOnInit() {
  }

}


// imageChangedEvent: any = '';
//   croppedImage: any = '';
//   constructor(public dialogRef: MatDialogRef<ProfilepicDialogComponent>) { }

//   ngOnInit() { }

//   fileChangeEvent(event: any): void {
//     this.imageChangedEvent = event;
//   }

//   imageCropped(event: any) {
//     console.log(event);
//     this.croppedImage = event;
//   }

//   setProfile() {
//     if (this.croppedImage != null) {
//       this.dialogRef.close(this.croppedImage);
//     }
//   }
