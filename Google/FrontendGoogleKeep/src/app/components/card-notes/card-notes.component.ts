
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { MatCardSmImage, MatDialog } from '@angular/material';

import { UserService } from 'src/app/services/user.service';
import { EditCardComponent } from '../edit-card/edit-card.component';
import { Router } from '@angular/router';
import { MatChipInputEvent } from '@angular/material';
import { CurrentViewService } from 'src/app/services/current-view.service';
import { SearchService } from '../../services/search.service'
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';



@Component({
  selector: 'app-card-notes',
  templateUrl: './card-notes.component.html',
  styleUrls: ['./card-notes.component.scss']
})
export class CardNotesComponent implements OnInit {
  @Input() childMessage: string;
  @Input() cards;
  @Input() type;
  @Input() archived;
  @Input() card: [];
  //@Output() color = new EventEmitter();

  Notes: any[];
  Items: any[]; color: any;
  gridView:boolean;
  searchText:string;
  
  constructor(
    private userService: UserService, private dialog: MatDialog, private router: Router,
    private view:CurrentViewService,
    private searchService:SearchService) { }

  ngOnInit() {
    console.log("jshdgfhjsgdfjhgs");
    this.view.currentView.subscribe(
      response=>this.gridView=response
    )
    this.submit();
  }
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      // this.fruits.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }
  submit() {
    this.userService.getnotee(this.Notes)
    .subscribe(data => {
      this.searchService.currentMessageSearch.subscribe(response=>{
        this.searchText=response
      })
      console.log(data);
        console.log('data', data.result);
        this.Notes=data['result'];
    }, (error) => {
        console.log('error', error);
    })

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
  // colorsEdit(color) {
  //   console.log("Came to emmiter",color);
  //   this.color.emit(color);
  //   }

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
  remove(): void {

    // if (index >= 0) {
    //   this.fruits.splice(index, 1);
    // }
  }
  // 
  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.Items, event.previousIndex, event.currentIndex);
  }
  
  
}