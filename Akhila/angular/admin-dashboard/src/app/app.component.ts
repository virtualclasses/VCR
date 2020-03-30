import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { AuthenticationService } from './_services';
import { User } from './_models';
declare const show:any;
declare const show1:any;
@Component({ selector: 'app-root', templateUrl: 'app.component.html',
styleUrls:['./app.component.css'] })
export class AppComponent {
    currentUser: User;
    opened = false;
    usertype:any='admin';
    users:User[]=[];
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }

    callful(){
      show();
    }
    callful1(){
      show1();
    }
}
