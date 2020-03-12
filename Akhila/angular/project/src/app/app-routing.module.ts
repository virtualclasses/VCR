import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeacherComponent } from './teacher/teacher.component';
import { ProfileComponent } from './profile/profile.component';
import { PhpComponent } from './php/php.component';
import { JavaComponent } from './java/java.component';
import { HtmlComponent } from './html/html.component';


const routes: Routes = [
  {path:'teacher', component : TeacherComponent},
  {path:'profile',component : ProfileComponent},

  {path:'php',component:PhpComponent},
  {path:"",redirectTo : 'teacher' ,pathMatch : 'full'},
  {path:'java',component:JavaComponent},
  {path:'html',component:HtmlComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
