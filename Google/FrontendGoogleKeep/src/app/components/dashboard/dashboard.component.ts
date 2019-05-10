
import {
  Component,
  OnInit,
  Inject,
  ViewChild,
  ElementRef,
  EventEmitter,
  Output
} from "@angular/core";
import { MediaMatcher } from "@angular/cdk/layout";
import { MatCardSmImage,MatDialog,} from "@angular/material";
import { ChangeDetectorRef, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material";
import { NoteServiceService } from 'src/app/services/note-service.service';
import { EditlabelComponent } from '../editlabel/editlabel.component';
import { CardUpdateServiceService } from 'src/app/services/card-update-service.service';
import { CurrentViewService } from 'src/app/services/current-view.service';
import { CrudLabelComponent } from '../crud-label/crud-label.component';
import { SearchService } from '../../services/search.service'
import { UserService } from 'src/app/services/user.service';
import { ProfilePictureComponent } from '../profile-picture/profile-picture.component';
import { HttpService } from 'src/app/services/http.service';
import { ProfileDialogComponent } from '../profile-dialog/profile-dialog.component';
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit, OnDestroy {
  selectedFile =null;
  mobileQuery: MediaQueryList;
  message: string="Keep";
  Search: string;
  labelList: any;
  gridView: boolean;
  Notes: any[];
  Items: any[];
  imgUrl: any[];
  private _mobileQueryListener: () => void;
  listview: boolean;
  usermessage : any[];
  search:string;
  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private router: Router,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private notes: NoteServiceService,
    private view:CurrentViewService,
    private searchService:SearchService,
    private userService : UserService,
    private http : HttpService
   
   )
  {
    this.mobileQuery = media.matchMedia("(max-width: 600px)");
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
 
  }

  ngOnInit() {
    // this.islist = true;
    // this.isClicked =false;
  this.viewUpdate();
  // this.getProfile()

  }
  viewUpdate()
  {
    this.view.currentView.subscribe(
      response=>this.gridView=response
     
    );
  }
  islist;
  isClicked;
  
  changeview(){
    console.log(this.gridView);
    this.view.viewChange();
    this.viewUpdate();
    //debugger


    // if(this.islist){
    //   this.islist = false;
    //   console.log("list",this.islist);
    //   this.isClicked = true;
    // }
    
    // else{

    //     this.isClicked = false;
    //     console.log("grid",this.isClicked);
    //     this.islist =true;
    // }
    //this.notes.gridview();
  }

  ngOnDestroy(): void {
    //this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  isclick() {
    return false;
  }

  refresh(): void {
   window.location.reload();
}
  note() {
    this.message="Keep"
    this.router.navigate(['dashboard/addnote']);
    this.snackBar.open("Note Clicked!!!!", "ok",  { duration: 2000 });
  }
  reminders(){

    this.message="Reminders"
    this.router.navigate(['dashboard/reminders'])
    this.snackBar.open("Reminder Clicked!!!!", "ok",  { duration: 2000 });
  }
  signout() {
    this.router.navigate(['login']);
  }
  archive(){
    this.message="Archive"
    this.router.navigate(['dashboard/archive']);
    this.snackBar.open("Archive Clicked!!!!", "ok",  { duration: 2000 });
  }
  trashBox() {
    this.message="Trash"
    this.router.navigate(['dashboard/trash']);
    this.snackBar.open("Trash Clicked!!!!", "ok",  { duration: 2000 });
  }
  openDialog(item): void {
    const dialogRef = this.dialog.open(EditlabelComponent, {
      width: '350px',
      data: {notedata: item,}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed here');
      this.Notes = result;
    });
  } 

  // openDialog(): void {
  //   const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
  //     width: '250px',
  //     data: {name: this.name, animal: this.animal}
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     this.animal = result;
  //   });
  // }

  openDialogs(): void {
    const dialogRef = this.dialog.open(CrudLabelComponent, {
    
      width: '200px',
     
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed here');
      
    });
  }

  lookup(){
    this.searchService.changeMessageSearch(this.search);
  }
  imageupload(event){
    console.log(event);
    this.selectedFile = <File>event.target.files[0];
  }
  
  upload($event, id) {
      
    this.userService.uploadone({
      "image": $event,
      'id': id
    }).subscribe(data => {
      console.log(data, "update color data")
    },
      (err) => {
        console.log(err, "err")
  
      })
  }

  openDialogBox(){
    const dialogRef = this.dialog.open(ProfilePictureComponent, {
      width: '350px',
      //data: {notedata: item,}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed here');
      this.Notes = result;
    });
  } 
  help(){
    this.router.navigateByUrl('/keep/#topic=6262468')
  } 


  // getProfile(){
  //   const data=localStorage.getItem('userID')
  //   this.http.getProfile(data).subscribe(data => {
  //     console.log(data);
  //   },
  //     error => {
  //       console.log(error);
  //     });
  // }
  getImage() {
    const data = {
      userID: localStorage.getItem('userID')
      };
      console.log("data on getProfile", data);
      this.http.getProfile(data).subscribe(
      data => {
      console.log("user data at dashboard", data);
      console.log((data as any));
      this.imgUrl = (data as any).message[0].profilePic;
      console.log("profile: ",this.imgUrl);
      },
      error => {
      console.log('error response: ', error);
      }
      );
  }

  ProfileSelect() {
    const dialogRef = this.dialog.open(ProfileDialogComponent, {
      width: '300px',
      // height:'350px'
    });

    dialogRef.afterClosed().subscribe(
    
            
    )
  }
  



}