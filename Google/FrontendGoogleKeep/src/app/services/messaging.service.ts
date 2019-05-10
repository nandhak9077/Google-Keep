
import { Injectable }          from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth }     from 'angularfire2/auth';
import * as firebase from 'firebase';

import { } from 'rxjs/add/operator/take';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MessagingService {

  messaging ;//= firebase.messaging()
  currentMessage = new BehaviorSubject(null)

  constructor() { 
    try{
      firebase.initializeApp({
        'messagingSenderId': '226083562030'
      });
      this.messaging=firebase.messaging();
    }catch(err){
      console.error('Firebase initialization Error', err.stack);
    }
  }

  getPermission() {
    this.messaging.requestPermission()
    .then(() => {
      console.log('Notification permission granted.');
      return this.messaging.getToken()
    })
    .then(token => {
      console.log("this is from messaging.ts",token)
      //this.updateToken(token)
    })
    .catch((err) => {
      console.log('Unable to get permission to notify.', err);
    });
  }
 

    receiveMessage() {
       this.messaging.onMessage((payload) => {
        console.log("Message received. ", payload);
        this.currentMessage.next(payload)
      });

    }
}
