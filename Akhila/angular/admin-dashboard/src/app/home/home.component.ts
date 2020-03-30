import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { User } from '../_models';
import { LoginComponent } from '../login/login.component';
import { UserService, AuthenticationService } from '../_services';
console.log(LoginComponent);
@Component({
  selector : 'app-home',
  templateUrl: 'home.component.html',
styleUrls : ['./home.component.css'] })
export class HomeComponent implements OnInit, OnDestroy {


opened = false;
 selectedValue:any='';

    currentUser: User;
    usertype:any;
    currentUserSubscription: Subscription;
    users: User[] = [];
    @Input() pTochild;
    constructor(
        private authenticationService: AuthenticationService,
        private userService: UserService
    ) {
        this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user1 => {
            this.currentUser = user1;
        });
    }

    ngOnInit() {
        this.loadAllUsers();
    }

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.currentUserSubscription.unsubscribe();
    }

    deleteUser(id: number) {
        this.userService.delete(id).pipe(first()).subscribe(() => {
            this.loadAllUsers()
        });
    }

    private loadAllUsers() {
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.users = users;
        });
    }
}
