import {Directive} from '@angular/core';
import {AdalService} from 'ng2-adal/core';
import {Router} from "@angular/router";
import {Location} from "@angular/common";

@Directive({
  selector: '[protected]'
})
export class ProtectedDirective {

  constructor(
    private adalService: AdalService,
    private router: Router,
    private location: Location
  ) {
    console.log('Entering protected');
    if (!this.adalService.userInfo.isAuthenticated) {
      this.location.replaceState('/');
      this.router.navigate(['welcome']);
    }
  }
}
