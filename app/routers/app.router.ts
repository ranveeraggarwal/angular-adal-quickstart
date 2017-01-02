import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "../components/home.component";
import {WelcomeComponent} from "../components/welcome.component";

export const router: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
