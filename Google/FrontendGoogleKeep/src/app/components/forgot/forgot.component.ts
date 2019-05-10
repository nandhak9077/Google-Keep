import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm,Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {

  constructor(private userService: UserService,private router: Router,private snackBar: MatSnackBar) { }
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
  ngOnInit() {
  }
  onsubmit() {
    console.log(this.email.value);

    const requestBody = {
      email: this.email.value
    };

    console.log(requestBody);
    this.userService.userForgot(requestBody).subscribe(data => {
      console.log("At forget password comp: ",data);
      this.snackBar.open("Check your mail", "ok", { duration: 5000 });
    },
      error => {
        console.log("error at forget comp: ",error);
        this.snackBar.open("Interupt occurs , invalid mailID", "ok", { duration: 5000 });
      });
  }
  
  login() {
    this.router.navigate(['login']);
}


}
