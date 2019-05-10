import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { MatCardSmImage, MatDialog } from '@angular/material';

import { UserService } from 'src/app/services/user.service';
import { EditlabelComponent } from '../editlabel/editlabel.component';
import { Router } from '@angular/router';
import { MatChipInputEvent } from '@angular/material';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})


export class LabelComponent implements OnInit {
  labels: any[];
  Items: any[];
  constructor( private userService: UserService, private dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    console.log("edtlabel is working");

    this.submit();
  }
  submit() {
    this.userService.retrieveLabels(this.labels)
    .subscribe(data => {
        console.log('data in labels', data);
        this.labels=data['data'];
    }, (error) => {
        console.log('error on labels', error);
    })

  }

}
