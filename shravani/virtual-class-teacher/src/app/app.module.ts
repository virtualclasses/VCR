import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewstudentComponent } from './newstudent/newstudent.component';
import { ProfileComponent } from './profile/profile.component';
import { StudentprofileComponent } from './studentprofile/studentprofile.component';



@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    UserRegisterComponent,
    HomeComponent,
    NewstudentComponent,
    ProfileComponent,
    StudentprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
