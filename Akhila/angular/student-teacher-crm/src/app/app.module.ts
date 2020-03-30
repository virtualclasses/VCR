import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TeacherComponent } from './teacher/teacher.component';
import { ProfileComponent } from './profile/profile.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { EarningsComponent } from './earnings/earnings.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { HelpComponent } from './help/help.component';
import { ReportsComponent } from './reports/reports.component';




@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    UserRegisterComponent,
    HomeComponent,
    TeacherComponent,
    ProfileComponent,
    ChangepasswordComponent,
    EarningsComponent,
    ReviewsComponent,
    HelpComponent,
    ReportsComponent
    

    
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
