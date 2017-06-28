import {Component} from '@angular/core';
import {AdalService} from 'ng2-adal/core';

@Injectable()
export class AuthService {

    constructor(private adalService: AdalService) {}

    public getToken(): Observable<string> {
        return this.adalService.acquireToken("https://xyz.onmicrosoft.com/abc").map(
            token => token.toString()
        );
    }
}