import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeacherComponent } from './teacher/teacher.component';
import { ProfileComponent } from './profile/profile.component';
import { ChangePasswordComponent } from './profile/change-password/change-password.component';
import { PhpComponent } from './php/php.component';
import { JavaComponent } from './java/java.component';
import { HtmlComponent } from './html/html.component';

@NgModule({
  declarations: [
    AppComponent,
    TeacherComponent,
    ProfileComponent,
    ChangePasswordComponent,
    PhpComponent,
    JavaComponent,
    HtmlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
