import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../services/http.service';
import {NoteServiceService} from '../../services/note-service.service'
import { from } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { EditCardComponent } from '../edit-card/edit-card.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
card=[];
archivedCard=[];
archived=[];
more='archive';

  constructor(public http: HttpService, private noteService: NoteServiceService,private userService: UserService, private dialog : MatDialog) { }
  Notes: any = [];
  
  Items: any[]; color: any;

  ngOnInit() {
    this.getArchiveNotes()
  }
  getArchiveNotes(){
    // this.http.getHttp("getNotes").subscribe(data => {
    //   this.card=data['data']
    //   console.log("database",this.card)
    //   for(let i=0;i<this.card.length;i++){
    //     if(this.card[i].archive){
    //       console.log("Entered");
    //       this.archivedCard.push(this.card[i]);
    //       console.log(this.archivedCard);
    //     }
    //   }
    // }),err=>{
    //   console.log(err)
    // }
    this.userService.getnotee(this.Notes)
            .subscribe(data => {
                console.log('data', data);
                this.Notes=data['result'];
            }, (error) => {
                console.log('error', error);
            })
    
}
openDialog(item): void {
  const dialogRef = this.dialog.open(EditCardComponent, {
    width: '400px',
    data: { notedata: item, }
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed here');
    this.Notes = result;
  });
}
recieveColor($event) {
  this.color = $event;
  console.log("color event got ", this.color);
  console.log(this.Notes);


}
updateColor($event, id) {

  console.log(id, "card..")
  console.log(this.color = $event, 'color..')
  this.userService.updateColor({
    "color": $event,
    'noteID': id
  }).subscribe(data => {
    console.log(data, "update color data")
  },
    (err) => {
      console.log(err, "err")

    })
}
}