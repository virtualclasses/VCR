import { HomeComponent } from './home/home.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { StudentComponent } from './student/student.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewstudentComponent } from './newstudent/newstudent.component';
import { StudentprofileComponent } from './studentprofile/studentprofile.component';
import {ReportsComponent} from './reports/reports.component';
import {HelpsupportComponent} from './helpsupport/helpsupport.component';
import { SessionComponent } from './session/session.component';
import { SettingsComponent } from './settings/settings.component';
import {ReviewsComponent} from './reviews/reviews.component'




const routes: Routes = [
  {path : 'home', component : HomeComponent},
  {path : '', component : HomeComponent },
  {path : 'student', component : StudentComponent},
  {path : 'register', component: UserRegisterComponent},
  {path : 'newstudent', component: NewstudentComponent},
  {path: 'studentprofile', component: StudentprofileComponent},
  {path:'reports',component:ReportsComponent},
  {path:'helpsupport',component:HelpsupportComponent},
  {path:'reviews',component:ReviewsComponent},
  {path:'session',component:SessionComponent},
  {path:'settings',component:SettingsComponent},
  {path: '', redirectTo: 'home' , pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
