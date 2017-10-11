import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AdalService} from 'ng2-adal/dist/core';

@Component({
  selector: 'welcome',
  template: '<h1>Welcome!</h1><button (click)="logIn()">Login</button>'
})
export class WelcomeComponent implements OnInit {

  constructor(
    private router: Router,
    private adalService: AdalService
  ) {
    console.log('Entering welcome');

    if (this.adalService.userInfo.isAuthenticated) {
      this.router.navigate(['/home']);
    }
  }

  public ngOnInit() {
    console.log('ngOnInit is called');
  }

  public logIn() {
    this.adalService.login();
  }
}
