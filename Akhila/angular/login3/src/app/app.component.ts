import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login3';
  username:string;
  password:string;

  constructor(private router : Router)
  {}
  ngOnInit(){
    
  }
  LoginUser()
  {
    if(this.username =="Admin" && this.password == "admin123")
    {
      console.log("welcome");
    }
  }
}
