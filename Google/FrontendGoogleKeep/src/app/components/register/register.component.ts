import { Component, OnInit } from '@angular/core';
import { FormGroupDirective,NgForm, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { MatSnackBar } from '@angular/material';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  name = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.maxLength(15)]);
  lastname = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.maxLength(10)]);
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);
  confirmpassword = new FormControl('', [Validators.required, Validators.minLength(8)]);
  user: any;
  constructor(private userService: UserService,private snackBar: MatSnackBar, private router: Router) { }
  hide = true;

//To display firstname error message.
getnameErrorMessage() {
  return this.name.hasError('required') ? 'Enter first name' : '';
  }

  //To display lastname error message.
  getlastnameErrorMessage(){
    return this.lastname.hasError('requried') ? 'Enter last name' : '';
  }

  //To display email error message
  getemailErrorMessage(){
    return this.email.hasError('requried') ? 'Enter email' : '';
  }

  //To display password error message
  getpasswordErrorMessage(){
    return this.password.hasError('requried') ? 'Enter Password' : '';
  }

  //To display confirmPassword error message.
  getconfirmPasswordErrorMessage(){
    return this.confirmpassword.hasError('requried') ? 'Enter confirm password' : '';
  }


  
  ngOnInit() {
    

  }

  
  onsubmit() {
    console.log(this.name.value);
    console.log(this.lastname.value);
    console.log(this.email.value);
// tslint:disable-next-line: triple-equals
    if (this.password.value == this.confirmpassword.value) {
    const requestBody = {
      firstname: this.name.value,
      lastname: this.lastname.value,
      email: this.email.value,
      password: this.password.value
    };
    // console.log("onsubmit.....");
    console.log(requestBody);
    this.userService.userRegistration(requestBody).subscribe(data => {
      console.log(data);
      this.snackBar.open("Successfully Registered and check your Mail", "ok", { duration: 5000 });
      //this.router.navigate(['login'])
    },
      error => {
        console.log(error);
        console.log('err',error);
        this.snackBar.open("Register failed!!", "ok", { duration: 5000 });
    
      });
    } else {
      console.log('password and confirmpassword not matched'); 
      this.snackBar.open("Password does not match", "ok", { duration: 5000 });
    }
  }

  
  login(){
    this.router.navigate(['login']);
  }

  

}
