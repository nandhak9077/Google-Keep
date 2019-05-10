import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {NoteServiceService} from '../../services/note-service.service';
import { from } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { MatChipInputEvent, MatDialog } from '@angular/material';
import { EditCardComponent } from '../edit-card/edit-card.component';

@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.scss']
})
export class RemindersComponent implements OnInit {
 @Input() card;
  @Output() emitReminderNote = new EventEmitter();
  Notes:any[];
  dayCount=0;
  reminderShow : boolean = true;
  changed =true;
  todaydate: Date = new Date();
  checker : Date = new Date();
  currentDate = new Date();
  model

  remindList = [
    { day: 'today', time: '8:00 PM', dayCount:0, timeCount: 20},
    { day: 'tomorrow', time: '8:00 AM', dayCount:1, timeCount: 8},
    { day: 'Next week', time: '8:00 AM', dayCount:7, timeCount: 8}
  ]
  customList = [
    { value: 'option1', timeZone: 'Morning', time: '8:00 AM', timeCount: 8},
    { value: 'option2', timeZone: 'Afternoon', time: '1:00 PM', timeCount:13},
    { value: 'option3', timeZone: 'Evening', time: '6:00 PM', timeCount:18},
    { value: 'option4', timeZone: 'Night', time: '8:00 PM', timeCount:20}
  ]
  
  constructor(private notes : NoteServiceService,private userService: UserService,private dialog: MatDialog) { }

  ngOnInit() {
   this.submit();
  }
  toggle(){
    this.reminderShow = !this.reminderShow;
  }
  reminder(dayCount, timeCount) {
    console.log(dayCount,timeCount,"==>daycount,timeCount")
    this.changed = true;
    this.model={
      "noteID":[this.card._id],
      "reminder": new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(),
      (this.currentDate.getDate() + dayCount), timeCount, 0, 0, 0)
  }
  console.log(this.model,"model....")
  if(this.card._id==undefined){
    this.card.reminder= this.model.reminder;
  } else {
    this.saveReminder();
  }
}

customreminder(timeCount){
  this.changed = true;
  this.checker.setHours(timeCount, 0, 0);
  this.model ={
    "noteID":[this.card._id],
    "reminder": this.checker
  }
}


saveReminder(){
  console.log('save reminder run',this.changed,'    ',);
  
  if(this.changed){
    // console.log(this.model.reminder, "model");
    if(this.card._id==undefined) {
      this.card.reminder =this.model.reminder;
    } else {
      console.log('api call');
      
      this.notes.addRemainder(this.model).subscribe(response => {
        console.log(response,"response");
        this.card.reminder = this.model.reminder;
        
      })
    }
    
  }
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
submit() {
  this.userService.getnotee(this.Notes)
  .subscribe(data => {
      console.log('data', data.result);
      this.Notes=data['result'];
  }, (error) => {
      console.log('error', error);
  })
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
}
