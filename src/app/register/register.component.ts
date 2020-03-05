import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../Shared/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
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
    full_name: ['', [Validators.required, Validators.minLength(5)]],
    gender: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
});
}

get f() { return this.registerForm.controls; }

onSubmit() {
this.submitted = true;
if (this.registerForm.invalid) {return;}


console.log(this.registerForm.value);

    this._regService.postRegistertation(this.registerForm.value)
    .subscribe(res=>{
      this.route.navigateByUrl('/login')
      this.onReset();
      },
      error => {
        
      })
}

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

}
