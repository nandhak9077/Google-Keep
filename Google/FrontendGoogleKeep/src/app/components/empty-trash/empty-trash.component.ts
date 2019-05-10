import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/services/note-service.service';
import { HttpService } from 'src/app/services/http.service';
import { UserService } from 'src/app/services/user.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-empty-trash',
  templateUrl: './empty-trash.component.html',
  styleUrls: ['./empty-trash.component.scss']
})
export class EmptyTrashComponent implements OnInit {
  Notes:any[];
  constructor(private noteService: NoteServiceService, public http: HttpService,private userService: UserService,  public dialog: MatDialog,) { }

  ngOnInit() {
  }
emptybin(){
  this.userService.emptyTrash(this.Notes)
  .subscribe(data => {
      console.log('data', data);
      this.Notes=data['result'];
  }, (error) => {
      console.log('error', error);
  })
}
refresh(): void {
  window.location.reload();
}
}
