import { Component, OnInit } from '@angular/core';
import { FormControl,  FormGroupDirective, NgForm,Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';
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
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {

  password = new FormControl('', [Validators.required, Validators.minLength(8)]);
  confirmpassword = new FormControl('', [Validators.required, Validators.minLength(8)]);
  constructor(private userService: UserService, private route: ActivatedRoute,private router: Router,private snackBar: MatSnackBar) { }

  ngOnInit() {
    console.log(this.route);
    console.log(this.route.snapshot.params.token);
  }
  onsubmit() {
    console.log(this.password.value);
    const token = this.route.snapshot.params.token;
   
    localStorage.removeItem('reset');
    localStorage.setItem('reset', token);
    if (this.password.value == this.confirmpassword.value) {
      const requestBody = {
        password: this.password.value,
      };
      console.log(requestBody);
      this.userService.userReset(requestBody).subscribe(data => {
        console.log(data);
        this.snackBar.open("Password Updated", "ok", { duration: 5000 });
        this.router.navigate(['login']);
      },
        error => {
          console.log(error);
          this.snackBar.open("Interupts occurs on update the password", "ok", { duration: 5000 });
        });
    } else {
      console.log('password and confirmpassword not matched');
    }
  }

  
  matcher = new MyErrorStateMatcher();
}