import { Component, OnInit, Output, Input } from '@angular/core'; 
import {NoteServiceService} from "../../services/note-service.service"
import { EventEmitter } from '@angular/core';
import {Router} from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import {MatChipsModule} from '@angular/material/chips';
import { HttpService } from 'src/app/services/http.service';
@Component({
  selector: 'app-icon-list',
  templateUrl: './icon-list.component.html',
  styleUrls: ['./icon-list.component.scss']
})
export class IconListComponent implements OnInit {

  //@Input() card: any;  
  //@Input() Notes: any[];
  imgUrl : any[];
  @Input() more;
  @Output() colorEvent = new EventEmitter();
  @Input() noteData:any;
  
  

  model: any;
  flag = false;
  flag2 = true;
  flag3 = true;
  flag4 = true;
  display=false;
  allcards:any;

  /***************************************************************
   * List of colors that can be applied to card taken in an array
   **************************************************************/
  colorArray = [
  [
  { 'color': '#FFFFFF', 'name': 'White' },
  { 'color': '#E57373', 'name': 'Red' },
  { 'color': '#FF9100', 'name': 'Orange' },
  { 'color': '#FFEB3B', 'name': 'Yellow' }],

  [
  { 'color': '#CCFF90', 'name': 'Green' },
  { 'color': '#84FFFF', 'name': 'Teal' },
  { 'color': '#B3E5FC', 'name': 'Blue' },
  { 'color': '#82B1FF', 'name': 'Darkblue' }],

  [
  { 'color': '#B388FF', 'name': 'Purple' },
  { 'color': '#E1BEE7', 'name': 'Pink' },
  { 'color': '#A1887F', 'name': 'Brown' },
  { 'color': '#F5F5F5', 'name': 'Gray' }
  ]
]
Notes: any;
  constructor(private notes:NoteServiceService,private router: Router,private userService: UserService,
    private http : HttpService) { }

  ngOnInit(){}

  colorsEdit(color) {
    console.log(color, 'color........');
   
      console.log("sdjfhskjdh")
      this.colorEvent.emit(color);
    
  }
  
//   colorsEdit(color) {
//     //console.log(Notes,"cardd..............")
//     console.log(color,"color........")
//     if(this.card==undefined){
//       this.colorEvent.emit(color);
//     }
//     else{
//       this.card.color=color
//     }
   

    
//   }

  // updateColor(color) {
  //   //console.log(Notes,"card..")
  //   console.log(this.card.color=color,'color..')
  //   this.notes.updateColor({
  //     "color": color,
  //     'noteID': [this.card._id]
  //   }).subscribe(data =>{
  //     console.log(data, "update color data")},
  //     err=>{
  //       console.log(err,"err")

  //     })
  // }
//   setColour(color,Notes){
// Notes.color=color;


//   }
doArchive(card){
  console.log("card. on archive.",this.noteData._id)
   const obj=this.noteData;
  //  console.log("nbvbnv",noteData._id);
  console.log()
       
       this.userService.isarchive({
         "noteID":this.noteData._id,
         "archive":true,
         "trash": false
       }).subscribe(data =>{
         console.log(data, "isArchived")},
         (err)=>{
           console.log(err,"err")
   
         })
}
reminder(){
console.log("card. on reminder.",this.noteData._id)
//  const obj=this.noteData;
// var myDate= new Date().toLocaleDateString();
var myDate = new Date();
var date = myDate.getFullYear()+'-'+(myDate.getMonth()+1)+'-'+myDate.getDate();
var time = myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds(); 
var date = myDate.getFullYear()+'-'+(myDate.getMonth()+1)+'-'+myDate.getDate();
var time = myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds();
var dateTime = date+' '+time;
   const data={
    noteID:this.noteData._id,
    reminder: dateTime
  }
  console.log("mnbmnbnmbmn",dateTime);
  
       this.userService.reminder(data).subscribe(data =>{
         console.log("reminder")},
         (err)=>{
           console.log(err,"err")
   
         })
}
yester(){
  var myDate = new Date();
  var date = myDate.getFullYear()+'-'+(myDate.getMonth()+1)+'-'+(myDate.getDate()-1);
  //var time = myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds(); 
  // var date = myDate.getFullYear()+'-'+(myDate.getMonth()+1)+'-'+myDate.getDate();
  // var time = myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds();
  var dateTime = date+' ';
     const data={
      noteID:this.noteData._id,
      reminder: dateTime
    }
    console.log("mnbmnbnmbmn",dateTime);
    
         this.userService.reminder(data).subscribe(data =>{
           console.log("reminder")},
           (err)=>{
             console.log(err,"err")
     
           })
}
tom(){
var myDate = new Date();
var date = myDate.getFullYear()+'-'+(myDate.getMonth()+1)+'-'+(myDate.getDate()+1);
// var time = myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds(); 
// var date = myDate.getFullYear()+'-'+(myDate.getMonth()+1)+'-'+myDate.getDate();
// var time = myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds();
var dateTime = date+' ';
 // var dt = new Date(); dt.setTime(dt.getTime() + (24 * 60 * 60 * 1000)).toLocaleString();
  const data={
    noteID:this.noteData._id,
    reminder: dateTime
  }
  console.log("tommorow",dateTime);
  this.userService.reminder(data).subscribe(data =>{
    console.log("reminder")},
    (err)=>{
      console.log(err,"err")

    })
}
deleteNote(){
  console.log("To delete the card",this.noteData._id);
  const data={
    noteID:this.noteData._id    
  }
  this.userService.delete(data).subscribe(data =>{
    console.log("delete card")},
    (err)=>{
      console.log(err,"err")
    
  })
}
goTrash(card){
  console.log("card on Trash.",this.noteData._id)
  
  var noteID=this.noteData._id;
  const reqBody={
    "noteID":noteID,
   
    "trash":true
  }
  console.log("nbvnbv",reqBody);
  
       this.userService.isTrashed(reqBody).subscribe(data =>{
         console.log(data, "istrashed")},
         (err)=>{
           console.log(err,"err")
   
         })
}
addLabel(){
  
}
getImage() {
  const data = {
     noteID:this.noteData._id
    };
    console.log("data on getNotepic", data);
    this.http.getNotePic(data).subscribe(
    data => {
    console.log("user data at dashboard", data);
    console.log((data as any));
    this.imgUrl = (data as any).message[0].notePic;
    console.log("notePic: ",this.imgUrl);
    },
    error => {
    console.log('error response: ', error);
    }
    );
}

// handleFileInput(event){
//   const file=event.path[0].value;
//   console.log("image***********",file);
//   const data={
//     noteID : this.noteData._id,
//     notePic : file
//   }
//   console.log(data)
//     this.userService.upload(data).subscribe(
//     data => {
//     console.log("user data at dashboard", data);
//     console.log((data as any));
    
//     },
//     error => {
//     console.log('error response: ', error);
//     }
//     );
  
// }
// file:File = null;
// handleFileInput(event){
//   this.file=event.path[0].value;
//   console.log("image***********",this.file);}


//   updateFile(){
//     console.log("adad",)
//   this.userService.postFile(this.file).subscribe(data => {
//     console.log(data, "from updateFile")
//   }), error => {
//     console.log("errror n updatefile", error)
//   }
//   }
fileChangeEvent(event: any) {
  // this.imageChangedEvent = event;
  const image = event.target.files[0];
  const noteID=this.noteData._id; 
  // console.log("file ",file);
  // console.log("file... ",this.fileToUpload);
  const data={
  'image':image,
  'noteID':this.noteData._id
  }
  console.log("created image object",data);
  this.http.noteimage(image,noteID).subscribe(data => {
  console.log(data);
  },
  error => {
  console.log("error message");
  
  console.log(error);
  });
  }




}
