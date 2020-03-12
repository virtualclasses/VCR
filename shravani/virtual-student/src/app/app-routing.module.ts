import { HomeComponent } from './home/home.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { StudentComponent } from './student/student.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewstudentComponent } from './newstudent/newstudent.component';
import { StudentprofileComponent } from './studentprofile/studentprofile.component';
import { NotesComponent } from './notes/notes.component';




const routes: Routes = [
  {path : 'home', component : HomeComponent},
  {path : '', component : HomeComponent },
  {path : 'student', component : StudentComponent},
  {path : 'register', component: UserRegisterComponent},
  {path : 'newstudent', component: NewstudentComponent},
  {path: 'studentprofile', component: StudentprofileComponent},
  {path: 'notes', component: NotesComponent},
  {path: '', redirectTo: 'home' , pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
