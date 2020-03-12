import { HomeComponent } from './home/home.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { StudentComponent } from './student/student.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeacherComponent } from './teacher/teacher.component';
import { ProfileComponent } from './profile/profile.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { EarningsComponent } from './earnings/earnings.component';
import { HelpComponent } from './help/help.component';
import { ReportsComponent } from './reports/reports.component';



const routes: Routes = [
  {path : 'home', component : HomeComponent},
  {path : 'teacher', component : TeacherComponent},
  {path : 'student', component : StudentComponent},
  {path : 'register', component: UserRegisterComponent},
  {path: '', redirectTo: 'home' ,pathMatch:'full'},
  {path:'profile',component:ProfileComponent},
 {path:'changepassword',component:ChangepasswordComponent},
 {path:'reviews',component:ReviewsComponent},
 {path:'earnings',component:EarningsComponent},
 {path:'help',component:HelpComponent},
 {path:'reports',component:ReportsComponent},


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
