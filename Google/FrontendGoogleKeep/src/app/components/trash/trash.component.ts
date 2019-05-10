import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/services/note-service.service';
import { HttpService } from 'src/app/services/http.service';
import { UserService } from 'src/app/services/user.service';
import { MatDialog } from '@angular/material';
import { EmptyTrashComponent } from '../empty-trash/empty-trash.component';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  more='trash';
  trash='trash'
  deletedcards = [];
  card = [];
  cards = [];
  Notes:any[];
  wrap:string="wrap";
  direction
  view
  layout
  constructor(private noteService: NoteServiceService, public http: HttpService,private userService: UserService,  public dialog: MatDialog,) {}
  ngOnInit() {
    this.submit();
  }
  // {
  //   //this.deleteNote();
  //   this.noteService.getView().subscribe((res:any)=>{
  //     // debugger
  //       this.view = res;
  //       this.direction = this.view.data;
  //       this.layout = this.direction + " " + this.wrap;
  //   });
  // }
  submit() {
    this.userService.getnotee(this.Notes)
    .subscribe(data => {
        console.log('data', data.result);
        this.Notes=data['result'];
    }, (error) => {
        console.log('error', error);
    })
  }
  // deleteNote() {
  //   this.http.getHttp("getNotes").subscribe(data => {
  //     this.card = data["data"];
  //     console.log(this.card);
  //     for (let i = 0; i < this.card.length; i++) {
  //       if (this.card[i].trash) {
  //         console.log("Entered");
  //         this.deletedcards.push(this.card[i]);
  //         console.log(this.deletedcards);
  //       }
  //     }
  //   }),
  //     err => {
  //       console.log(err);
  //     };
  // }

  emptybin(){
    this.userService.emptyTrash(this.Notes)
    .subscribe(data => {
        console.log('data', data);
        this.Notes=data['result'];
    }, (error) => {
        console.log('error', error);
    })
  } 

  openDialog(item): void {
    const dialogRef = this.dialog.open(EmptyTrashComponent, {
      width: '350px',
      data: {notedata: item,}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed here');
      this.Notes = result;
    });
  } 

}
