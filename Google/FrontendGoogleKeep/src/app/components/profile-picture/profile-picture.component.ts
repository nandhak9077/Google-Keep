import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { HttpService } from 'src/app/services/http.service';
@Component({
  selector: 'app-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.scss']
})
export class ProfilePictureComponent implements OnInit {
selectedFile:File = null;
  constructor(private http : HttpClient,
    private route : Router, private userService : UserService,
    private router : ActivatedRoute,  private https : HttpService
    
    ) { }

  ngOnInit() {
  }
  propic(event){
    console.log(event);
    this.selectedFile = <File>event.target.files[0];
  }
   
  signout(){
   this.route.navigate(['login']);
  }
  fileChangeEvent(event: any) {
    // this.imageChangedEvent = event;
    const image = event.target.files[0];
    const userID=localStorage.getItem('userID')
    // console.log("file ",file);
    // console.log("file... ",this.fileToUpload);
    const data={
    'image':image,
    'userID':userID
    }
    console.log("created image object",data);
    this.https.userimage(image,userID).subscribe(data => {
    console.log(data);
    },
    error => {
    console.log("error message");
    
    console.log(error);
    });
    }
  
}
