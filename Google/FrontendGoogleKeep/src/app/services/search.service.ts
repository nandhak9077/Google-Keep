// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class SearchService {

//   constructor() { }
// }
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private messageSourceSearch = new BehaviorSubject('');
  currentMessageSearch = this.messageSourceSearch.asObservable();

  constructor() { }

  changeMessageSearch(message: string) {
    this.messageSourceSearch.next(message)
    console.log("msg servics",message);
  }

}