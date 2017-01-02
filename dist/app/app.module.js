"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var core_2 = require('ng2-adal/core');
var secret_service_1 = require('./services/secret.service');
var app_component_1 = require('./components/app.component');
var app_router_1 = require('./routers/app.router');
var protected_directive_1 = require("./directives/protected.directive");
var home_component_1 = require("./components/home.component");
var welcome_component_1 = require("./components/welcome.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, app_router_1.routes],
            declarations: [app_component_1.AppComponent, protected_directive_1.ProtectedDirective, home_component_1.HomeComponent, welcome_component_1.WelcomeComponent],
            providers: [core_2.AdalService, secret_service_1.SecretService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map