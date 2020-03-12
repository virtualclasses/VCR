import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {  } from './dashboard/dashboard.component';


const routes: Routes = [
  {path:'register',component:RegisterComponent},
  {path : 'login', component:LoginComponent},
  {path : 'dashboard', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
