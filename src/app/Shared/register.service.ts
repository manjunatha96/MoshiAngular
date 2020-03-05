import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Register } from './register.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient,private router:Router) { }
  baseUrl='http://localhost:3000'
  postRegistertation(register):Observable<Register>{
    console.log('register data',register)
    return this.http.post<Register>( `${this.baseUrl}/register/post`,register)
  }
  
  loginData(register):Observable<Register>{
    console.log('register data',register)
    return this.http.post<Register>( `${this.baseUrl}/login/posting`,register)
  }

  logingetData():Observable<Register>{
    return this.http.get<Register>( `${this.baseUrl}/login/logins`)
  }

  loggedIn(){
    return !!sessionStorage.getItem('token')
  }
  loggedOut(){
    sessionStorage.removeItem('token')
    this.router.navigate(['/login'])
  }
}
