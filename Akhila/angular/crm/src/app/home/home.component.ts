import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $("#serch").click(function(){
        $("#sdiv").show('fast');
      });
      $("#hser").click(function(){
        $("#sdiv").hide('fast');
      });
    });
  }

}
