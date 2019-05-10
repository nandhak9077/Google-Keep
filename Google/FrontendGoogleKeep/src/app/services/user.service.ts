import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService: HttpService,private httpClient: HttpClient) { 
    
  }

  userRegistration(requestBody) {
    const option = {
      url: 'register',
      body: requestBody
    };
    return this.httpService.postWithoutToken(option);
  }
   
  userLogin(requestBody) {
    const option = {
      url: 'login',
      body: requestBody
    };
    return this.httpService.postWithoutToken(option);
  }
  userForgot(requestBody) {
    const option = {
      url: 'forgot',
      body: requestBody
    };
    return this.httpService.postWithoutToken(option);
  }
  userReset(requestBody) {
    const token = requestBody.token;
    // console.log('reset pass');
    const option = {
      url: 'reset',
      body: requestBody
    };
    return this.httpService.postWithToken(option);
  }
  usernote(requestBody) {
    const option = {
      url: 'createNote',
      body: requestBody
    };
    return this.httpService.postWithoutToken(option);
  }
  getnote(requestBody) {
    const token = requestBody.token;
    const option = {
      url: 'getNotes',
     body: token
    };
    return this.httpService.getToken(option);
  }
  
  getnotee(requestBody) {
    const option = {
      url: 'getNotes',
      body: requestBody
    };
    return this.httpService.getNot(option);
  }
  getProfile(requestBody) {
    //const img = localStorage.getItem('userID')
    const option = {
      url: 'getProfile',
      body: requestBody
    };
    return this.httpService.getPic(option);
  }
  emptyTrash(requestBody) {
    const option = {
      url: 'emptyTrash',
      body: requestBody
    };
    return this.httpService.postWithoutToken(option);
  }
  updatenote(requestBody) {
    const option = {
      url: 'updatenote',
      body: requestBody
    };
    return this.httpService.postWithoutToken(option);
  }
  updateColor(data){
    const option={
      url: 'updateColor',
      body: data
    }
    return this.httpService.postWithoutToken(option);
  }
  uploadone(data){
    // const uid = localStorage.getItem('userID');
     const option={
       url: 'photoupload',
       body: data
     }
     return this.httpService.postWithoutToken(option);
   }
  upload(data){
   // const uid = localStorage.getItem('userID');
    const option={
      url: 'noteupload',
      body: data
    }
    return this.httpService.postWithoutToken(option);
  }
  updatecolor(data){
    const option={
      url: 'updateColor',
      body: data
    }
    return this.httpService.postWithoutToken(option);
  }
  isarchive(data){
    const option={
      url: 'archive',
      body: data
    }
    return this.httpService.putArchive(option);
  }
  reminder(data){
    const option={
      url: 'reminder',
      body: data
    }
    return this.httpService.postWithoutToken(option);
  }
  delete(data){
    const option = {
      url : 'delete',
      body : data
    }
    return this.httpService.postWithoutToken(option);
  }
  createLabel(requestBody){
    
    const option = {
      url: 'addLabel',
      body: requestBody
    };
    return this.httpService.postWithoutToken(option);
  }
  isTrashed(data){
    const option={
      url: 'isTrashed',
      body: data
    }
    return this.httpService.putTrash(option);
  }
  retrieveLabels(requestBody){
    const option = {
      url: 'getLabels',
      body: requestBody
    };
    return this.httpService.retrieveLabelsAll(option);
  }
 
  deleteLabel(data){
    const option = {
      url : 'deleteLabel',
      body : data
    }
    return this.httpService.postWithoutToken(option);
  }
  // updatePic(requestBody){
  //   const id = requestBody.userID;
  //   // console.log('reset pass');
  //   const option = {
  //     url: 'getProfile',
  //     body: id
  //   };
  //   return this.httpService.postWithoutToken(option);
  // }


  // postFile(file: File): Observable<any> {
  //   const endpoint = '/noteupload';
  //   const formData: FormData = new FormData();
  //   console.log("file name",file.name)
  //   formData.append('fileKey', file, file.name);
  //   return this.httpClient.post(endpoint, formData, {  headers: new HttpHeaders({
  //       'content-Type': 'application/json'
       
  //     }) })
  //     .map(() => { return true; })

  //     }




      
}

