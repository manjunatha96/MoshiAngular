import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LoginInfoComponent } from './login-info/login-info.component';


const routes: Routes = [
  {path:'',component:LoginComponent},  
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'loginInfo',component:LoginInfoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
