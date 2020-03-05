import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../Shared/register.service';

@Component({
  selector: 'app-login-info',
  templateUrl: './login-info.component.html',
  styleUrls: ['./login-info.component.css']
})
export class LoginInfoComponent implements OnInit {

  logData:any;
  constructor(private _regService:RegisterService) { }

  ngOnInit() {
    this.getUserInfo()
  }
  getUserInfo(){
    this._regService.logingetData()
    .subscribe(res=>{
      this.logData=res;      
    })
  }

}
