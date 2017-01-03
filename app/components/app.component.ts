import {Component, OnInit} from '@angular/core';
import {SecretService} from "../services/secret.service";
import {AdalService} from "ng2-adal/services/adal.service";
import {Router} from "@angular/router";

@Component({
  selector: 'my-app',
  template: '<div><router-outlet></router-outlet></div>'
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    this.adalService.handleWindowCallback();
    this.adalService.getUser();
    console.log(this.adalService.userInfo);
  }
  constructor(
    private adalService: AdalService,
    private secretService: SecretService,
    private router: Router
  ) {
    this.adalService.init(this.secretService.adalConfig);
  }
}
