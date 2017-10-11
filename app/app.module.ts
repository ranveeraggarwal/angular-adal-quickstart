import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AdalService} from 'ng2-adal/dist/core';
import {SecretService} from './services/secret.service';

import { AppComponent }  from './components/app.component';

import {routes} from './routers/app.router'
import {HomeComponent} from "./components/home.component";
import {WelcomeComponent} from "./components/welcome.component";
import {LoggedInGuard} from "./authentication/logged-in.guard";

@NgModule({
  imports:      [ BrowserModule, routes],
  declarations: [ AppComponent, HomeComponent, WelcomeComponent ],
  providers: [AdalService, SecretService, LoggedInGuard],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
