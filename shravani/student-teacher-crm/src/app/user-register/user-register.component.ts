import { Component, OnInit } from '@angular/core';
declare const shows: any;
declare const showt: any;
@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  constructor() {

   }

  ngOnInit() {
  }
  calls() {
    shows();
    }
    callt() {
    showt();
    }

}
