import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  postWithoutToken(options) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(environment.baseUrl + options.url, options.body, httpOptions);
  }
//login
postToken(options) {
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'token': localStorage.getItem('token')
    })
    
  };
  return this.http.post(environment.baseUrl + options.url, options.body, httpOptions);
}
getProfile(data){
  return this.http.get(environment.baseUrl + 'getProfile' + '/' + data.userID);
  }
  getNotePic(data){
    return this.http.get(environment.baseUrl + 'getNotePic' + '/' + data.noteID);
  }
  


  postWithToken(options) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': localStorage.getItem('reset')
      })
    };

    console.log("httpoptions at service ",httpOptions);
    
    return this.http.post(environment.baseUrl + options.url, options.body, httpOptions);
  }



  postJSON(url: string, body: any): any {
    url = environment.baseUrl + url;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': localStorage.getItem('token')
      })
    }
    return this.http.post(url, body, httpOptions)
  }
  put(url: string, body: any): any {
    url = environment.baseUrl + url;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': localStorage.getItem('token')
      })
    }
    return this.http.put(url, body, httpOptions)
  }
  putArchive(options) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.put(environment.baseUrl + options.url, options.body, httpOptions);
  }
  putTrash(options) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.put(environment.baseUrl + options.url, options.body, httpOptions);
  }
  //extra
  noteimage(image:File,noteID){
    // this.fileToUpload = image; 
    console.log("immm",image);
    // let formData = new FormData(); 
    const formData = new FormData();
    formData.append('image',image);
    // formData.append('noteimage', this.fileToUpload, this.fileToUpload.name);
    return this.http.post(environment.baseUrl + 'noteimage' + '/' + noteID, formData);
    }
  //user profile pic
  userimage(image:File,userID){
    // this.fileToUpload = image; 
    console.log("immm",image);
    // let formData = new FormData(); 
    const formData = new FormData();
    formData.append('image',image);
    // formData.append('noteimage', this.fileToUpload, this.fileToUpload.name);
    return this.http.post(environment.baseUrl + 'userimage' + '/' + userID, formData);
    }
    



  getToken(options) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': localStorage.getItem('token')
      })
    };
    return this.http.post(environment.baseUrl + options.url, options.body, httpOptions);
  }

  getHttp(options) {
    const httpToken = {
      headers: new HttpHeaders({
        'content-Type': 'application/json',
        'token': localStorage.getItem('token')
      })
    }
    console.log(environment.baseUrl + options.url);
    
    return this.http.get(environment.baseUrl + options.url, httpToken);
  }

  getPic(url): Observable<any> {
    const img = localStorage.getItem('userID')
    return this.http.get("http://localhost:3000/getProfile/img", {
      
    })
    
  }

  getNot(url): Observable<any> {
    
    return this.http.get("http://localhost:3000/getNotes", {
      
    })
    
  }
//labels part retriev

retrieveLabelsAll(url): Observable<any> {
  return this.http.get("http://localhost:3000/getLabels", {
    
  })
}

}
