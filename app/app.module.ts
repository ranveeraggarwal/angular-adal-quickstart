import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AdalService} from 'ng2-adal/core';
import {SecretService} from './services/secret.service';

import { AppComponent }  from './components/app.component';

import {routes} from './routers/app.router'
import {ProtectedDirective} from "./directives/protected.directive";
import {HomeComponent} from "./components/home.component";
import {WelcomeComponent} from "./components/welcome.component";

@NgModule({
  imports:      [ BrowserModule, routes],
  declarations: [ AppComponent, ProtectedDirective, HomeComponent, WelcomeComponent ],
  providers: [AdalService, SecretService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
