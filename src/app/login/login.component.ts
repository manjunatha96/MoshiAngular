import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { RegisterService } from '../Shared/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,private _regService:RegisterService,private route:Router) { }
  ngOnInit() {
    this.initForm();
}

clearFormData() {
  this.registerForm.reset();
}

initForm() {
  this.registerForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
});
}

get f() { return this.registerForm.controls; }

onSubmit() {
this.submitted = true;
if (this.registerForm.invalid) {return;}

this._regService.loginData(this.registerForm.value)
    .subscribe(res=>{
      sessionStorage.setItem('token',res.token)
      this.route.navigateByUrl('/loginInfo')      
      this.onReset();
      },
      error => { console.log(error)})
}

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

}
