"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var material_1 = require("@angular/material");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var heroes_component_1 = require("./heroes/heroes.component");
var hero_detail_component_1 = require("./herodetail/hero-detail.component");
var hero_controls_component_1 = require("./hero-controls/hero-controls.component");
var hero_card_component_1 = require("./hero-card/hero-card.component");
var routes = [
    { path: '', redirectTo: '/heroes', pathMatch: 'full' },
    { path: 'hero/:id', component: hero_detail_component_1.HeroDetailComponent },
    { path: 'heroes', component: heroes_component_1.HeroesComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot(routes),
            material_1.MdSidenavModule,
            material_1.MdToolbarModule,
            material_1.MdSidenavModule,
            material_1.MdCardModule,
            material_1.MdButtonModule
        ],
        declarations: [app_component_1.AppComponent, heroes_component_1.HeroesComponent, hero_detail_component_1.HeroDetailComponent, hero_controls_component_1.HeroControls, hero_card_component_1.HeroCard],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map