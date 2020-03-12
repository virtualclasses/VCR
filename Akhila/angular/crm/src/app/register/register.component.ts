import { Component, OnInit } from '@angular/core';
declare const shows: any;
declare const showt: any;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  calls() {
    shows();
    }
    callt() {
    showt();
    }

}
