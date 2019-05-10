import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { ErrorStateMatcher } from '@angular/material/core';

import { MatSnackBar } from '@angular/material';
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  uID:any;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);
  constructor(private userService: UserService, private router: Router,private snackBar: MatSnackBar) { }

  ngOnInit() {
  }
  getErrorMessage() {
    return this.password.hasError('required') ? 'You must enter a value' :
      this.password.hasError('password') ? 'Not a valid password' :
        '';
  }
  onsubmit() {
    console.log(this.email.value);
    console.log(this.password.value);
    const requestBody = {
      email: this.email.value,
      password: this.password.value
    };
    console.log(requestBody);
    this.userService.userLogin(requestBody).subscribe((data: any) => {
      console.log("mnxzbcvnbxzcvbxzcnmbv",data.data[0]);
      // this.uID =data;
      const userID=data.data[0]._id;
      const id=(data as any).token;
      localStorage.removeItem('userID')
      localStorage.setItem('userID',userID);

      console.log("userID",userID);
      console.log("id",id);
      //this.snackBar.open("Logged in successfully!!", "ok", { duration: 5000 });
      this.router.navigate(['dashboard']);
    },
      error => {
        console.log(error);
        this.snackBar.open("Incorrect Username or password", "ok", { duration: 5000 });
      });
  }
  register() {
          this.router.navigate(['register']);
  }

  
  forgotpassword(){
    this.router.navigate(['forgot']);
  }
  matcher = new MyErrorStateMatcher();

}
