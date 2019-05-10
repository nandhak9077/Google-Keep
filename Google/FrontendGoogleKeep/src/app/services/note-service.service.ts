import { Injectable } from "@angular/core";
import { HttpService } from "../services/http.service";
import { from } from "rxjs";
import { Subject } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class NoteServiceService {
  constructor(private http: HttpService) {}
  result:boolean = true;
  subject = new Subject();
  getNote() {
    return this.http.getHttp("getNotes");
  }
  archiveNote(data)
  {
    return this.http.put('isArchived',data)
  }

  deleteNote(data){
    return this.http.put('isTrashed',data)
  }
  updateColor(data){
    return this.http.postJSON('updateColor',data)
  }
  deleteForever(data){
    return this.http.postJSON('deleteNote',data)
  }

//   getTrashNotes()
//  {
//    return this.http.getHttp('notes/getTrashNotesList')
//  }
addRemainder(data){
  return this.http.put('reminder',data)
}
  getView() {
    this.gridview();
    return this.subject.asObservable();
  }
  gridview(){
    if(this.result){
      this.subject.next({data:"column"});
      this.result = false;
    }
    else{
      this.subject.next({data:"row"});
      this.result = true;
    }
  } 
}