import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AdalService} from 'ng2-adal/core';

import { AppComponent }  from './components/app.component';

@NgModule({
  imports:      [ BrowserModule],
  declarations: [ AppComponent ],
  providers: [AdalService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
