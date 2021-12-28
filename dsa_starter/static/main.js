(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin-overview/admin-overview.component.css":
/*!*************************************************************!*\
  !*** ./src/app/admin-overview/admin-overview.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navButton {\n    width:100%;text-align:left\n}\n\n.navIcon {\n    font-size: 20px\n\n}"

/***/ }),

/***/ "./src/app/admin-overview/admin-overview.component.html":
/*!**************************************************************!*\
  !*** ./src/app/admin-overview/admin-overview.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<remote-control #remoteControlMaster></remote-control>\n<mat-sidenav-container class=\"example-container\">\n  <mat-sidenav mode=\"side\" style=\"width:200px\" opened>\n    <button mat-button class=\"navButton\" (click)=\"remoteControlMaster.sendImage('')\">\n      <mat-icon class=\"navIcon\">burst_mode</mat-icon>\n      Send Image to Clients\n    </button>\n    <button mat-button class=\"navButton\" (click)=\"startFight()\">\n      <mat-icon class=\"navIcon\">whatshot</mat-icon>Start Fight!\n    </button>\n    <button mat-button class=\"navButton\">\n      <mat-icon class=\"navIcon\">library_music</mat-icon>Music and Sounds\n    </button>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <router-outlet></router-outlet>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/admin-overview/admin-overview.component.ts":
/*!************************************************************!*\
  !*** ./src/app/admin-overview/admin-overview.component.ts ***!
  \************************************************************/
/*! exports provided: AdminOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminOverviewComponent", function() { return AdminOverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _domain_adventure_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../domain/adventure.service */ "./src/app/domain/adventure.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminOverviewComponent = /** @class */ (function () {
    function AdminOverviewComponent(adventureService, router) {
        var _this = this;
        this.adventureService = adventureService;
        this.router = router;
        this.adventureService.getAdventures().then(function (adventures) {
            _this.adventures = adventures;
            console.log(_this.adventures);
        });
    }
    AdminOverviewComponent.prototype.ngOnInit = function () {
    };
    AdminOverviewComponent.prototype.sendImage = function () {
    };
    AdminOverviewComponent.prototype.startFight = function () {
        this.router.navigate(['master/fight/start']);
    };
    AdminOverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-overview',
            template: __webpack_require__(/*! ./admin-overview.component.html */ "./src/app/admin-overview/admin-overview.component.html"),
            styles: [__webpack_require__(/*! ./admin-overview.component.css */ "./src/app/admin-overview/admin-overview.component.css")],
            providers: [_domain_adventure_service__WEBPACK_IMPORTED_MODULE_1__["AdventureService"]]
        }),
        __metadata("design:paramtypes", [_domain_adventure_service__WEBPACK_IMPORTED_MODULE_1__["AdventureService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdminOverviewComponent);
    return AdminOverviewComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.pageContainer {\n\twidth: 100%;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;/*\n\talign-items: center;*/\n}\n\n.wrapper {\n\theight: 100%;\n}\n\n.toolbarCenter {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n}\n\n.logo {\n\twidth: 40px;\n}\n\nh1 {\n\tcolor: #999;\n\tfont-size: 1rem;\n\tmargin: 5px;\n}\n\n#appMenuButton {\n\tposition: fixed;\n\ttop:20px;\n\tleft:calc(50%);\n\tmargin-left: -10px;\n\tbackground-color: #ccc;\n}\n\n.padded {\n\tpadding: 20px;\n  }\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"my-content container\">\n  <div class=\"wrapper\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _domain_hero_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domain/hero.service */ "./src/app/domain/hero.service.ts");
/* harmony import */ var _hero_controls_hero_life_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hero-controls/hero-life.service */ "./src/app/hero-controls/hero-life.service.ts");
/* harmony import */ var _domain_skills_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domain/skills.service */ "./src/app/domain/skills.service.ts");
/* harmony import */ var _domain_spells_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./domain/spells.service */ "./src/app/domain/spells.service.ts");
/* harmony import */ var _domain_weapons_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./domain/weapons.service */ "./src/app/domain/weapons.service.ts");
/* harmony import */ var _domain_armor_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./domain/armor.service */ "./src/app/domain/armor.service.ts");
/* harmony import */ var _domain_inventory_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./domain/inventory.service */ "./src/app/domain/inventory.service.ts");
/* harmony import */ var _remote_control_receiver_remote_control_receiver_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./remote-control-receiver/remote-control-receiver.service */ "./src/app/remote-control-receiver/remote-control-receiver.service.ts");
/* harmony import */ var _remote_control_remote_control_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./remote-control/remote-control.service */ "./src/app/remote-control/remote-control.service.ts");
/* harmony import */ var _domain_attribute_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./domain/attribute.service */ "./src/app/domain/attribute.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AppComponent = /** @class */ (function () {
    function AppComponent(heroService, attributeService) {
        this.heroService = heroService;
        this.attributeService = attributeService;
        this.title = 'Tour of Heroes';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'my-app',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
            providers: [_domain_hero_service__WEBPACK_IMPORTED_MODULE_1__["HeroService"], _domain_attribute_service__WEBPACK_IMPORTED_MODULE_10__["AttributeService"], _hero_controls_hero_life_service__WEBPACK_IMPORTED_MODULE_2__["HeroLifeService"], _domain_skills_service__WEBPACK_IMPORTED_MODULE_3__["SkillService"], _domain_spells_service__WEBPACK_IMPORTED_MODULE_4__["SpellService"], _domain_weapons_service__WEBPACK_IMPORTED_MODULE_5__["WeaponService"], _domain_armor_service__WEBPACK_IMPORTED_MODULE_6__["ArmorService"], _domain_inventory_service__WEBPACK_IMPORTED_MODULE_7__["InventoryService"], _remote_control_receiver_remote_control_receiver_service__WEBPACK_IMPORTED_MODULE_8__["RemoteControlReceiverService"], _remote_control_remote_control_service__WEBPACK_IMPORTED_MODULE_9__["RemoteControlService"]]
        }),
        __metadata("design:paramtypes", [_domain_hero_service__WEBPACK_IMPORTED_MODULE_1__["HeroService"], _domain_attribute_service__WEBPACK_IMPORTED_MODULE_10__["AttributeService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./heroes/heroes.component */ "./src/app/heroes/heroes.component.ts");
/* harmony import */ var _herodetail_hero_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./herodetail/hero-detail.component */ "./src/app/herodetail/hero-detail.component.ts");
/* harmony import */ var _hero_controls_hero_controls_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hero-controls/hero-controls.component */ "./src/app/hero-controls/hero-controls.component.ts");
/* harmony import */ var _hero_card_hero_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./hero-card/hero-card.component */ "./src/app/hero-card/hero-card.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material___WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/ */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _talent_card_talent_card_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./talent-card/talent-card.component */ "./src/app/talent-card/talent-card.component.ts");
/* harmony import */ var _spell_card_spell_card_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./spell-card/spell-card.component */ "./src/app/spell-card/spell-card.component.ts");
/* harmony import */ var _admin_overview_admin_overview_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./admin-overview/admin-overview.component */ "./src/app/admin-overview/admin-overview.component.ts");
/* harmony import */ var _fight_setup_fight_setup_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./fight-setup/fight-setup.component */ "./src/app/fight-setup/fight-setup.component.ts");
/* harmony import */ var _fight_display_fight_display_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./fight-display/fight-display.component */ "./src/app/fight-display/fight-display.component.ts");
/* harmony import */ var _remote_control_remote_control_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./remote-control/remote-control.component */ "./src/app/remote-control/remote-control.component.ts");
/* harmony import */ var _remote_control_receiver_remote_control_receiver_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./remote-control-receiver/remote-control-receiver.component */ "./src/app/remote-control-receiver/remote-control-receiver.component.ts");
/* harmony import */ var _player_player_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./player/player.component */ "./src/app/player/player.component.ts");
/* harmony import */ var _master_master_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./master/master.component */ "./src/app/master/master.component.ts");
/* harmony import */ var _image_popup_image_popup_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./image-popup/image-popup.component */ "./src/app/image-popup/image-popup.component.ts");
/* harmony import */ var _choose_image_choose_image_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./choose-image/choose-image.component */ "./src/app/choose-image/choose-image.component.ts");
/* harmony import */ var _life_display_life_display_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./life-display/life-display.component */ "./src/app/life-display/life-display.component.ts");
/* harmony import */ var _scroll_spy_directive__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./scroll-spy.directive */ "./src/app/scroll-spy.directive.ts");
/* harmony import */ var _magic_display_magic_display_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./magic-display/magic-display.component */ "./src/app/magic-display/magic-display.component.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _talent_search_talent_search_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./talent-search/talent-search.component */ "./src/app/talent-search/talent-search.component.ts");
/* harmony import */ var _talent_search_skill_pipe__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./talent-search/skill.pipe */ "./src/app/talent-search/skill.pipe.ts");
/* harmony import */ var _spell_search_spell_pipe__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./spell-search/spell.pipe */ "./src/app/spell-search/spell.pipe.ts");
/* harmony import */ var _detail_navigation_detail_navigation_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./detail-navigation/detail-navigation.component */ "./src/app/detail-navigation/detail-navigation.component.ts");
/* harmony import */ var _attributes_display_attributes_display_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./attributes-display/attributes-display.component */ "./src/app/attributes-display/attributes-display.component.ts");
/* harmony import */ var _basic_data_display_basic_data_display_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./basic-data-display/basic-data-display.component */ "./src/app/basic-data-display/basic-data-display.component.ts");
/* harmony import */ var _combat_data_display_combat_data_display_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./combat-data-display/combat-data-display.component */ "./src/app/combat-data-display/combat-data-display.component.ts");
/* harmony import */ var _inventory_display_inventory_display_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./inventory-display/inventory-display.component */ "./src/app/inventory-display/inventory-display.component.ts");
/* harmony import */ var _edit_dialog_edit_dialog_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./edit-dialog/edit-dialog.component */ "./src/app/edit-dialog/edit-dialog.component.ts");
/* harmony import */ var _edit_attribute_edit_attribute_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./edit-attribute/edit-attribute.component */ "./src/app/edit-attribute/edit-attribute.component.ts");
/* harmony import */ var _experience_display_experience_display_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./experience-display/experience-display.component */ "./src/app/experience-display/experience-display.component.ts");
/* harmony import */ var _spell_search_spell_search_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./spell-search/spell-search.component */ "./src/app/spell-search/spell-search.component.ts");
/* harmony import */ var _edit_talent_edit_talent_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./edit-talent/edit-talent.component */ "./src/app/edit-talent/edit-talent.component.ts");
/* harmony import */ var _confirmation_sheet_confirmation_sheet_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./confirmation-sheet/confirmation-sheet.component */ "./src/app/confirmation-sheet/confirmation-sheet.component.ts");
/* harmony import */ var _confirm_deletion_confirm_deletion_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./confirm-deletion/confirm-deletion.component */ "./src/app/confirm-deletion/confirm-deletion.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















































var routes = [
    // { path: '', redirectTo: 'player', pathMatch: 'full' },
    // { path: 'player/hero/:id', component: HeroDetailComponent },
    // { path: 'player', component: PlayerComponent, outlet: 'appRouter' },
    { path: '', redirectTo: 'player/heroes', pathMatch: 'full' },
    {
        path: 'master', component: _admin_overview_admin_overview_component__WEBPACK_IMPORTED_MODULE_17__["AdminOverviewComponent"],
        children: [
            { path: 'heroes', component: _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_6__["HeroesComponent"] },
            { path: 'hero/:id', component: _herodetail_hero_detail_component__WEBPACK_IMPORTED_MODULE_7__["HeroDetailComponent"] },
            { path: 'fight/start', component: _fight_setup_fight_setup_component__WEBPACK_IMPORTED_MODULE_18__["FightSetupComponent"] }
        ]
    },
    {
        path: 'player', component: _player_player_component__WEBPACK_IMPORTED_MODULE_22__["PlayerComponent"],
        children: [
            {
                path: 'heroes',
                component: _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_6__["HeroesComponent"]
            },
            {
                path: 'hero/:id',
                component: _herodetail_hero_detail_component__WEBPACK_IMPORTED_MODULE_7__["HeroDetailComponent"]
            },
            {
                path: 'hero/:id/editStuff',
                component: _edit_dialog_edit_dialog_component__WEBPACK_IMPORTED_MODULE_39__["EditDialogComponent"]
            }
        ]
    },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, {
                    scrollPositionRestoration: 'top'
                }),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_46__["ToastrModule"].forRoot({
                    timeOut: 3000,
                    positionClass: 'toast-bottom-right',
                    preventDuplicates: true,
                }),
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                _angular_material___WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_material___WEBPACK_IMPORTED_MODULE_12__["MatRadioModule"],
                _angular_material___WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
                _angular_material___WEBPACK_IMPORTED_MODULE_12__["MatRippleModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"],
                _angular_material___WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"],
                _angular_material___WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
                _angular_material___WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
                _angular_material___WEBPACK_IMPORTED_MODULE_12__["MatGridListModule"],
                _angular_material___WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
                _angular_material___WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
                _angular_material___WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
                _angular_material___WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_29__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_30__["environment"].production })
            ],
            exports: [
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_6__["HeroesComponent"],
                _herodetail_hero_detail_component__WEBPACK_IMPORTED_MODULE_7__["HeroDetailComponent"],
                _hero_controls_hero_controls_component__WEBPACK_IMPORTED_MODULE_8__["HeroControls"],
                _hero_card_hero_card_component__WEBPACK_IMPORTED_MODULE_9__["HeroCard"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_10__["Menu"],
                _talent_card_talent_card_component__WEBPACK_IMPORTED_MODULE_15__["TalentCard"],
                _spell_card_spell_card_component__WEBPACK_IMPORTED_MODULE_16__["SpellCard"],
                _admin_overview_admin_overview_component__WEBPACK_IMPORTED_MODULE_17__["AdminOverviewComponent"],
                _fight_setup_fight_setup_component__WEBPACK_IMPORTED_MODULE_18__["FightSetupComponent"],
                _fight_display_fight_display_component__WEBPACK_IMPORTED_MODULE_19__["FightDisplayComponent"],
                // MatSidenavContainer,
                // MatSidenav,
                // MatSidenavContent,
                _angular_material___WEBPACK_IMPORTED_MODULE_12__["MatButton"],
                _angular_material___WEBPACK_IMPORTED_MODULE_12__["MatButtonToggleGroup"],
                _angular_material___WEBPACK_IMPORTED_MODULE_12__["MatButtonToggle"],
                // MatIcon,
                _remote_control_remote_control_component__WEBPACK_IMPORTED_MODULE_20__["RemoteControlComponent"],
                _remote_control_receiver_remote_control_receiver_component__WEBPACK_IMPORTED_MODULE_21__["RemoteControlReceiverComponent"],
                _player_player_component__WEBPACK_IMPORTED_MODULE_22__["PlayerComponent"],
                _master_master_component__WEBPACK_IMPORTED_MODULE_23__["MasterComponent"],
                _image_popup_image_popup_component__WEBPACK_IMPORTED_MODULE_24__["ImagePopupComponent"],
                _choose_image_choose_image_component__WEBPACK_IMPORTED_MODULE_25__["ChooseImageComponent"],
                _life_display_life_display_component__WEBPACK_IMPORTED_MODULE_26__["LifeDisplayComponent"],
                _scroll_spy_directive__WEBPACK_IMPORTED_MODULE_27__["ScrollSpyDirective"],
                _magic_display_magic_display_component__WEBPACK_IMPORTED_MODULE_28__["MagicDisplayComponent"],
                _talent_search_talent_search_component__WEBPACK_IMPORTED_MODULE_31__["TalentSearchComponent"],
                _talent_search_skill_pipe__WEBPACK_IMPORTED_MODULE_32__["MatchesTalentSearchTerm"],
                _talent_search_skill_pipe__WEBPACK_IMPORTED_MODULE_32__["MatchesTalentSearchTermChildren"],
                _spell_search_spell_pipe__WEBPACK_IMPORTED_MODULE_33__["MatchesSpellSearchTerm"],
                _spell_search_spell_pipe__WEBPACK_IMPORTED_MODULE_33__["MatchesSpellSearchTermChildren"],
                _detail_navigation_detail_navigation_component__WEBPACK_IMPORTED_MODULE_34__["DetailNavigationComponent"],
                _attributes_display_attributes_display_component__WEBPACK_IMPORTED_MODULE_35__["AttributesDisplayComponent"],
                _basic_data_display_basic_data_display_component__WEBPACK_IMPORTED_MODULE_36__["BasicDataDisplayComponent"],
                _combat_data_display_combat_data_display_component__WEBPACK_IMPORTED_MODULE_37__["CombatDataDisplayComponent"],
                _inventory_display_inventory_display_component__WEBPACK_IMPORTED_MODULE_38__["InventoryDisplayComponent"],
                _edit_dialog_edit_dialog_component__WEBPACK_IMPORTED_MODULE_39__["EditDialogComponent"],
                _edit_attribute_edit_attribute_component__WEBPACK_IMPORTED_MODULE_40__["EditAttributeComponent"],
                _experience_display_experience_display_component__WEBPACK_IMPORTED_MODULE_41__["ExperienceDisplayComponent"],
                _spell_search_spell_search_component__WEBPACK_IMPORTED_MODULE_42__["SpellSearchComponent"],
                _edit_talent_edit_talent_component__WEBPACK_IMPORTED_MODULE_43__["EditTalentComponent"],
                _confirmation_sheet_confirmation_sheet_component__WEBPACK_IMPORTED_MODULE_44__["ConfirmationSheetComponent"],
                _confirm_deletion_confirm_deletion_component__WEBPACK_IMPORTED_MODULE_45__["ConfirmDeletionComponent"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            providers: [{
                    provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogRef"],
                    useValue: {}
                },
                { provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MAT_DIALOG_DATA"], useValue: {} }],
            entryComponents: [_image_popup_image_popup_component__WEBPACK_IMPORTED_MODULE_24__["ImagePopupComponent"], _choose_image_choose_image_component__WEBPACK_IMPORTED_MODULE_25__["ChooseImageComponent"], _edit_dialog_edit_dialog_component__WEBPACK_IMPORTED_MODULE_39__["EditDialogComponent"], _confirm_deletion_confirm_deletion_component__WEBPACK_IMPORTED_MODULE_45__["ConfirmDeletionComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/attributes-display/attributes-display.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/attributes-display/attributes-display.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.border-top {\n    border-top: 1px solid #999;\n}\n\n.attributeLabel {\n   border: 1px solid #aaa;\n   display: flex;\n   background-color: #ffffff;\n   align-items: center;\n   padding: 4px 0;\n   justify-content: center;\n}\n\n.value {\n    padding: 5px;\n    display: flex;\n    justify-content: center;\n    background-color: rgba(255, 255, 250, .8);\n}\n\n.attribute {\n    width: 35px\n    /* padding: 5px; */\n}"

/***/ }),

/***/ "./src/app/attributes-display/attributes-display.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/attributes-display/attributes-display.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"Grid-cell padded border-top\">\n  <div class=\"attributesContainer flex-row\">\n    <div *ngFor=\"let attribute of hero.attributes; index as i; keyvalue\" class=\"attribute flex-col\">\n      <div class=\"attributeLabel flex-item\">\n        <label>{{attribute.short}}</label>\n      </div>\n      <div class=\"value flex-item\">{{attribute.value}}</div>\n      <!-- <div *ngIf=\"editMode\" class=\"editValue\"><input [value]=\"attribute.value\" /></div> -->\n      \n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/attributes-display/attributes-display.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/attributes-display/attributes-display.component.ts ***!
  \********************************************************************/
/*! exports provided: AttributesDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributesDisplayComponent", function() { return AttributesDisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _domain_hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../domain/hero */ "./src/app/domain/hero.ts");
/* harmony import */ var _edit_dialog_edit_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../edit-dialog/edit-dialog.component */ "./src/app/edit-dialog/edit-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AttributesDisplayComponent = /** @class */ (function () {
    function AttributesDisplayComponent(editDialog) {
        this.editDialog = editDialog;
        this.editMode = false;
    }
    AttributesDisplayComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _domain_hero__WEBPACK_IMPORTED_MODULE_1__["Hero"])
    ], AttributesDisplayComponent.prototype, "hero", void 0);
    AttributesDisplayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'attributes-display',
            providers: [_edit_dialog_edit_dialog_component__WEBPACK_IMPORTED_MODULE_2__["EditDialogComponent"]],
            template: __webpack_require__(/*! ./attributes-display.component.html */ "./src/app/attributes-display/attributes-display.component.html"),
            styles: [__webpack_require__(/*! ./attributes-display.component.css */ "./src/app/attributes-display/attributes-display.component.css")]
        }),
        __metadata("design:paramtypes", [_edit_dialog_edit_dialog_component__WEBPACK_IMPORTED_MODULE_2__["EditDialogComponent"]])
    ], AttributesDisplayComponent);
    return AttributesDisplayComponent;
}());



/***/ }),

/***/ "./src/app/basic-data-display/basic-data-display.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/basic-data-display/basic-data-display.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/basic-data-display/basic-data-display.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/basic-data-display/basic-data-display.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"propertiesContainer\" >\n  <div class=\"padded\">\n    <div class=\"flex-row\">\n      <div class=\"label\">\n        <label>Rasse: </label>\n      </div>\n      <div class=\"value\">{{hero.race.name}}</div>\n    </div>\n    <div class=\"flex-row\">\n      <div class=\"label\">\n        <label>Kultur: </label>\n      </div>\n      <div class=\"value\">{{hero.culture}}</div>\n    </div>\n    <div class=\"flex-row\">\n      <div class=\"label\">\n        <label>Sozialrang: </label>\n      </div>\n      <div class=\"value\">{{hero.social_rank}}</div>\n    </div>\n    <div class=\"flex-row\">\n      <div class=\"label\">\n        <label>Größe: </label>\n      </div>\n      <div class=\"value\">{{hero.size}}</div>\n    </div>\n    <div class=\"flex-row\">\n      <div class=\"label\">\n        <label>Gewicht: </label>\n      </div>\n      <div class=\"value\">{{hero.weight}}</div>\n    </div>\n    <div class=\"flex-row\">\n      <div class=\"label\">\n        <label>Haarfarbe: </label>\n      </div>\n      <div class=\"value\">{{hero.weight}}</div>\n    </div><div class=\"flex-row\">\n      <div class=\"label\">\n        <label>Augenfarbe: </label>\n      </div>\n      <div class=\"value\">{{hero.weight}}</div>\n    </div>\n    <div class=\"flex-row\">\n      <div class=\"label\">\n        <label>Magieresistenz: </label>\n      </div>\n      <div class=\"value\">{{hero.magieresistenz}}</div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/basic-data-display/basic-data-display.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/basic-data-display/basic-data-display.component.ts ***!
  \********************************************************************/
/*! exports provided: BasicDataDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicDataDisplayComponent", function() { return BasicDataDisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_domain_hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/domain/hero */ "./src/app/domain/hero.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BasicDataDisplayComponent = /** @class */ (function () {
    function BasicDataDisplayComponent() {
    }
    BasicDataDisplayComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", app_domain_hero__WEBPACK_IMPORTED_MODULE_1__["Hero"])
    ], BasicDataDisplayComponent.prototype, "hero", void 0);
    BasicDataDisplayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'basic-data-display',
            template: __webpack_require__(/*! ./basic-data-display.component.html */ "./src/app/basic-data-display/basic-data-display.component.html"),
            styles: [__webpack_require__(/*! ./basic-data-display.component.css */ "./src/app/basic-data-display/basic-data-display.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BasicDataDisplayComponent);
    return BasicDataDisplayComponent;
}());



/***/ }),

/***/ "./src/app/choose-image/choose-image.component.css":
/*!*********************************************************!*\
  !*** ./src/app/choose-image/choose-image.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#imageSelector {\n    min-width: 200px;\n}"

/***/ }),

/***/ "./src/app/choose-image/choose-image.component.html":
/*!**********************************************************!*\
  !*** ./src/app/choose-image/choose-image.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-select placeholder=\"Image\" #imageSelector>\n  <mat-option *ngFor=\"let image of images\" [value]=\"image\">\n    {{image.caption}}\n  </mat-option>\n</mat-select>\n<button mat-button class=\"navButton\" (click)=\"sendImage(imageSelector.value)\">Send</button>"

/***/ }),

/***/ "./src/app/choose-image/choose-image.component.ts":
/*!********************************************************!*\
  !*** ./src/app/choose-image/choose-image.component.ts ***!
  \********************************************************/
/*! exports provided: ImagePopupData, ChooseImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagePopupData", function() { return ImagePopupData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseImageComponent", function() { return ChooseImageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _domain_adventure_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../domain/adventure.service */ "./src/app/domain/adventure.service.ts");
/* harmony import */ var _remote_control_remote_control_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../remote-control/remote-control.service */ "./src/app/remote-control/remote-control.service.ts");
/* harmony import */ var _domain_remoteControlOperation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../domain/remoteControlOperation */ "./src/app/domain/remoteControlOperation.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var ImagePopupData = /** @class */ (function () {
    function ImagePopupData(image, imageList) {
        this.image = image;
        this.imageList = imageList;
    }
    return ImagePopupData;
}());

var ChooseImageComponent = /** @class */ (function () {
    function ChooseImageComponent(adventureService, remoteControlService, dialogRef, data) {
        this.adventureService = adventureService;
        this.remoteControlService = remoteControlService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.images = [];
        this.baseUrl = 'http://' + window.location.hostname + ':8000';
    }
    ChooseImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.adventureService.getAdventures().then(function (adventures) {
            _this.adventures = adventures;
            _this.adventures.forEach(function (adventure) {
                _this.images = _this.images.concat(adventure.images);
            });
        });
    };
    ChooseImageComponent.prototype.sendImage = function (image) {
        this.remoteControlService.sendRemoteControlInstruction(_domain_remoteControlOperation__WEBPACK_IMPORTED_MODULE_4__["OperationFactory"].createOperation(_domain_remoteControlOperation__WEBPACK_IMPORTED_MODULE_4__["operationTypes"].openImage, 'all', [image.url, image.caption]));
    };
    ChooseImageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-choose-image',
            template: __webpack_require__(/*! ./choose-image.component.html */ "./src/app/choose-image/choose-image.component.html"),
            styles: [__webpack_require__(/*! ./choose-image.component.css */ "./src/app/choose-image/choose-image.component.css")],
            providers: [_domain_adventure_service__WEBPACK_IMPORTED_MODULE_2__["AdventureService"], _remote_control_remote_control_service__WEBPACK_IMPORTED_MODULE_3__["RemoteControlService"]]
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_domain_adventure_service__WEBPACK_IMPORTED_MODULE_2__["AdventureService"],
            _remote_control_remote_control_service__WEBPACK_IMPORTED_MODULE_3__["RemoteControlService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            ImagePopupData])
    ], ChooseImageComponent);
    return ChooseImageComponent;
}());



/***/ }),

/***/ "./src/app/combat-data-display/combat-data-display.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/combat-data-display/combat-data-display.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".weaponEntry {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  flex-wrap: wrap;\n  font-size: 0.8rem;\n  align-items: center;\n  justify-content: stretch;\n}\n\n.form-group .paper-check input+span, .form-group .paper-radio input+span {\n  display: flex;\n}\n\n.currentValues {\n  background-color: #fff;\n}\n\n.currentValues.flex-col {\n  /* background-color: #fffffa; */\n  font-size: x-large;\n  justify-content: flex-start;\n}"

/***/ }),

/***/ "./src/app/combat-data-display/combat-data-display.component.html":
/*!************************************************************************!*\
  !*** ./src/app/combat-data-display/combat-data-display.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kampfwerte padded flex-item flex-col\">\n  <h4>Kampfwerte</h4>\n  <h5>Basiswerte</h5>\n    \n  <div class=\"flex-row\">\n    <div class=\"flex-item\">\n      <label class=\"long\">Attacke:&nbsp;</label> {{hero.attack_basis}}\n    </div>\n    <div class=\"flex-item\">\n      <label class=\"long\">Parade:&nbsp;</label> {{hero.parade_basis}}\n    </div>\n    <div class=\"flex-item\">\n      <label class=\"long\">Fernkampf:&nbsp;</label> {{hero.fernkampf_basis}}\n    </div>\n  </div>\n  <h5>Aktuelle Werte</h5>\n  <div class=\"kampfwerte flex-row\">\n    <div class=\"flex-item flex-col\">\n      <h6>Waffen</h6>\n      \n        <fieldset class=\"form-group\" *ngFor=\"let weapon of hero.weapons\">\n              <label class=\"paper-radio\">\n                <div class=\"flex-row\">\n                  <input type=\"radio\" name=\"selectedWeapon\" class=\"flex-item\" [checked]=\"weapon.name === hero.currentWeapon.name\" value=\"{{weapon.name}}\" (change)=\"updateCurrentWeapon(weapon)\" />\n                  <span class=\"weaponChoiceLabel flex-row\">\n                    <div class=\"flex-col\">\n                      <div class=\"weaponName\">{{weapon.name}}</div>\n                      <div class=\"weaponDices\">{{weapon.damageText}}</div>\n                    </div>\n                  </span>\n                </div>\n              </label>\n      </fieldset>\n    </div>\n    <div class=\"currentValues flex-item flex-col border border-3 padded\" *ngIf=\"hero.currentWeapon && hero.currentWeaponSkillIsMelee()\">\n      <h6>Werte</h6>\n      <div class=\"flex-row\">\n        <label>Attacke:&nbsp;</label> {{hero.currentAttack}}\n      </div>\n      <div class=\"flex-row\">\n        <label>Parade:&nbsp;</label> {{hero.currentParade}}\n      </div>\n      <div class=\"flex-row\">\n        <label>Trefferpunkte:&nbsp;</label> {{hero.currentWeapon.damageDice}}W6+{{hero.currentWeapon.damageAddPoints}}\n      </div>\n    </div>\n    <div class=\"currentValues flex-item flex-col border border-3 padded\" *ngIf=\"hero.currentWeapon && hero.currentWeaponSkillIsLongRange()\">\n      <h6>Werte</h6>\n      <div class=\"flex-row\">\n        <label>Fernkampfwert:&nbsp;</label> {{hero.currentLongRangeValue}}\n      </div>\n      <div class=\"flex-row\">\n        <label>Trefferpunkte:&nbsp;</label> {{hero.currentWeapon.damageDice}}W6+{{hero.currentWeapon.damageAddPoints}}\n      </div>\n    </div>\n  </div>\n  \n</div>"

/***/ }),

/***/ "./src/app/combat-data-display/combat-data-display.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/combat-data-display/combat-data-display.component.ts ***!
  \**********************************************************************/
/*! exports provided: CombatDataDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CombatDataDisplayComponent", function() { return CombatDataDisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_domain_hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/domain/hero */ "./src/app/domain/hero.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CombatDataDisplayComponent = /** @class */ (function () {
    function CombatDataDisplayComponent() {
    }
    CombatDataDisplayComponent.prototype.ngOnInit = function () {
    };
    CombatDataDisplayComponent.prototype.updateCurrentWeapon = function (weapon) {
        this.hero.currentWeapon = weapon;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", app_domain_hero__WEBPACK_IMPORTED_MODULE_1__["Hero"])
    ], CombatDataDisplayComponent.prototype, "hero", void 0);
    CombatDataDisplayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'combat-data-display',
            template: __webpack_require__(/*! ./combat-data-display.component.html */ "./src/app/combat-data-display/combat-data-display.component.html"),
            styles: [__webpack_require__(/*! ./combat-data-display.component.css */ "./src/app/combat-data-display/combat-data-display.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CombatDataDisplayComponent);
    return CombatDataDisplayComponent;
}());



/***/ }),

/***/ "./src/app/confirm-deletion/confirm-deletion.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/confirm-deletion/confirm-deletion.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".buttonRow {\n    margin-top: 30px;\n    justify-content: flex-end;\n}\n\n.titleText {\n    margin-bottom: 20px;\n}"

/***/ }),

/***/ "./src/app/confirm-deletion/confirm-deletion.component.html":
/*!******************************************************************!*\
  !*** ./src/app/confirm-deletion/confirm-deletion.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-col center\">\n<h4><i class=\"fa fa-trash\"></i></h4>\n<h4 class=\"titleText\">\n   {{data.title}}\n</h4>\n</div>\n<p innerHTML={{data.text}}></p>\n<div class=\"buttonRow row\">\n  <button (click)=\"raiseCancel()\">Nee, doch nicht</button>\n  <button class=\"background-danger\" (click)=\"raiseAccept()\"><i class=\"fa fa-trash\"></i> Ja, natürlich</button>\n</div>"

/***/ }),

/***/ "./src/app/confirm-deletion/confirm-deletion.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/confirm-deletion/confirm-deletion.component.ts ***!
  \****************************************************************/
/*! exports provided: ConfirmDeletionComponent, ConfirmationData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDeletionComponent", function() { return ConfirmDeletionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationData", function() { return ConfirmationData; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ConfirmDeletionComponent = /** @class */ (function () {
    function ConfirmDeletionComponent(dialog, data) {
        this.dialog = dialog;
        this.data = data;
        this.confirm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ConfirmDeletionComponent.prototype.ngOnInit = function () {
    };
    ConfirmDeletionComponent.prototype.raiseAccept = function () {
        this.confirm.emit();
    };
    ConfirmDeletionComponent.prototype.raiseCancel = function () {
        this.cancel.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ConfirmDeletionComponent.prototype, "confirm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ConfirmDeletionComponent.prototype, "cancel", void 0);
    ConfirmDeletionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'confirm-deletion',
            template: __webpack_require__(/*! ./confirm-deletion.component.html */ "./src/app/confirm-deletion/confirm-deletion.component.html"),
            styles: [__webpack_require__(/*! ./confirm-deletion.component.css */ "./src/app/confirm-deletion/confirm-deletion.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], ConfirmationData])
    ], ConfirmDeletionComponent);
    return ConfirmDeletionComponent;
}());

var ConfirmationData = /** @class */ (function () {
    function ConfirmationData(title, text) {
        this.title = title;
        this.text = text;
    }
    return ConfirmationData;
}());



/***/ }),

/***/ "./src/app/confirmation-sheet/confirmation-sheet.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/confirmation-sheet/confirmation-sheet.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".messageToConfirm {\n    margin-bottom: 10px;\n    padding: 10px;\n}\n\n\n.confirmationButtons {\n    background-color: #fff;\n    margin-top: -3px;\n    padding-top: 15px;\n    width: 180px;\n    border: 1px solid #aaa;\n    box-shadow: 1px 2px 0px #999;\n}\n\n\n.confirmationButton {\n    height: 30px;\n    width: 90px;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n}\n\n\n.confirmationButton.accept {\n    background-color: #8DC071;\n    border-right: 1px solid #999;\n}\n\n\n.confirmationButton.reject {\n    background-color: #eee;\n \n}"

/***/ }),

/***/ "./src/app/confirmation-sheet/confirmation-sheet.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/confirmation-sheet/confirmation-sheet.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  class=\"confirmationButtons flex-col center\" >\n  <div class=\"messageToConfirm\" *ngIf=\"showExternalTemplate !== true\">{{confirmationText}}</div>\n  <div class=\"messageToConfirm\">\n    <ng-content></ng-content>\n  </div>\n  <div class=\"flex-row\">\n      <div class=\"flex-item flex-col confirmationButton center accept\" (click)=\"raiseConfirm()\">\n          <i class=\"fa fa-check\"></i>\n      </div>\n      <div class=\"flex-item flex-col confirmationButton center reject\" (click)=\"raiseCancel()\">\n          <i class=\"fa fa-window-close\"></i>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/confirmation-sheet/confirmation-sheet.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/confirmation-sheet/confirmation-sheet.component.ts ***!
  \********************************************************************/
/*! exports provided: ConfirmationSheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationSheetComponent", function() { return ConfirmationSheetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConfirmationSheetComponent = /** @class */ (function () {
    function ConfirmationSheetComponent() {
        this.confirm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ConfirmationSheetComponent.prototype.ngOnInit = function () {
    };
    ConfirmationSheetComponent.prototype.raiseConfirm = function () {
        this.confirm.emit();
    };
    ConfirmationSheetComponent.prototype.raiseCancel = function () {
        this.cancel.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ConfirmationSheetComponent.prototype, "confirmationText", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ConfirmationSheetComponent.prototype, "confirm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ConfirmationSheetComponent.prototype, "cancel", void 0);
    ConfirmationSheetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'confirmation-sheet',
            template: __webpack_require__(/*! ./confirmation-sheet.component.html */ "./src/app/confirmation-sheet/confirmation-sheet.component.html"),
            styles: [__webpack_require__(/*! ./confirmation-sheet.component.css */ "./src/app/confirmation-sheet/confirmation-sheet.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ConfirmationSheetComponent);
    return ConfirmationSheetComponent;
}());



/***/ }),

/***/ "./src/app/detail-navigation/detail-navigation.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/detail-navigation/detail-navigation.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".detailNavigation {\n    padding: 10px;\n    justify-content: space-between\n}"

/***/ }),

/***/ "./src/app/detail-navigation/detail-navigation.component.html":
/*!********************************************************************!*\
  !*** ./src/app/detail-navigation/detail-navigation.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"detailNavigation flex-item flex-row\" *ngIf=\"hero\">\n  <button class=\"backButton\" (click)=\"navToOverview()\">\n    <i class=\"fa fa-arrow-left\"></i> Übersicht\n  </button>\n  <div class=\"detailNavButtons\">\n    <button (click)=\"updateDetailView('character')\" [ngClass]=\"detailArea === 'character' ? 'paper-btn btn-primary' : 'paper-btn'\">\n      Character\n    </button>\n    <button (click)=\"updateDetailView('talents')\" [ngClass]=\"detailArea === 'talents' ? 'paper-btn btn-primary' : 'paper-btn'\">\n      Talente\n    </button>\n    <button *ngIf=\"hero.knowsMagic\" (click)=\"updateDetailView('spells')\" [ngClass]=\"detailArea === 'spells' ? 'paper-btn btn-primary' : 'paper-btn'\">\n      Zauber\n    </button>\n    <button (click)=\"updateDetailView('inventory')\" [ngClass]=\"detailArea === 'inventory' ? 'paper-btn btn-primary' : 'paper-btn'\">\n      Inventar\n    </button>\n    <button (click)=\"updateDetailView('edit')\" [ngClass]=\"detailArea === 'edit' ? 'paper-btn btn-primary' : 'paper-btn'\">\n      Steigern\n    </button>\n  </div>\n\n  <!-- <div class=\"menuContainer\" >\n    \n    <div class=\"menuItems\">\n      <div class=\"menuItem\" (click)=\"updateDetailView('character')\" >\n        Character\n      </div>\n      <div class=\"menuItem\" (click)=\"updateDetailView('inventory')\" >\n        Inventar\n      </div>\n    </div>\n    <div class=\"menuItems\">\n      <div class=\"menuItem\" (click)=\"navTo(menuItem.target)\" *ngFor=\"let menuItem of menu; index as i; keyvalue\">\n        {{menuItem.title}}\n      </div>\n      <h4>Talente</h4>\n      <div class=\"menuItem\" *ngFor=\"let skillGroup of hero.skillGroups; index as i; keyvalue\" (click)=\"navToSkillGroup(skillGroup)\">\n        {{skillGroup.getSkillGroup().name}}\n      </div>\n      <h4 *ngIf=\"hero.knowsMagic\">Zauber</h4>\n      <div class=\"menuItem\" *ngFor=\"let spellGroup of hero.spellGroups; index as i; keyvalue\" (click)=\"navToSpellGroup(spellGroup)\">\n        {{spellGroup.getSpellGroup().name}}\n      </div>\n    </div>\n    <div class=\"menuItems\" *ngIf=\"menuVisible === true && detailArea === 'inventory'\">\n      <div class=\"menuItem\" (click)=\"navTo('weapons')\">\n        Waffen\n      </div>\n      <div class=\"menuItem\" (click)=\"navTo('armor')\">\n        Rüstung\n      </div>\n      <div class=\"menuItem\" (click)=\"navTo('')\">\n        Rüstung\n      </div>\n    </div>\n    \n  </div> -->\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/detail-navigation/detail-navigation.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/detail-navigation/detail-navigation.component.ts ***!
  \******************************************************************/
/*! exports provided: DetailNavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailNavigationComponent", function() { return DetailNavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_domain_hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/domain/hero */ "./src/app/domain/hero.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuItem = /** @class */ (function () {
    function MenuItem(config) {
        this.title = config.title;
        this.target = config.target;
    }
    return MenuItem;
}());
var DetailNavigationComponent = /** @class */ (function () {
    function DetailNavigationComponent(elRef, router) {
        this.elRef = elRef;
        this.router = router;
        this.navToArea = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.detailArea = 'character';
    }
    DetailNavigationComponent.prototype.ngOnInit = function () {
        this.updateNavigation();
    };
    DetailNavigationComponent.prototype.updateNavigation = function () {
        var menu = [
            new MenuItem({ title: 'Allgemein', target: 'Allgemein' }),
        ];
        if (this.hero)
            this.hero.skillGroups.forEach(function (skillGroup) {
                menu.push(new MenuItem({ title: skillGroup.getSkillGroup().name }));
            });
        this.menu = menu;
    };
    DetailNavigationComponent.prototype.toggleVisible = function () {
        this.menuVisible = !this.menuVisible;
    };
    DetailNavigationComponent.prototype.navToOverview = function () {
        this.router.navigate(['/player/heroes']);
    };
    DetailNavigationComponent.prototype.navToEdit = function () {
        this.router.navigate(["/player/hero/" + this.hero.id + "/editStuff"]);
    };
    DetailNavigationComponent.prototype.navTo = function (target) {
        var menuTarget = this.elRef.nativeElement.parentElement.getElementsByClassName('menuItem')[target];
        menuTarget.scrollIntoView();
    };
    DetailNavigationComponent.prototype.navToSkillGroup = function (target) {
        var menuTarget = this.elRef.nativeElement.parentElement.getElementsByClassName('menuItem')[target.skillGroup.name];
        menuTarget.scrollIntoView();
    };
    DetailNavigationComponent.prototype.navToSpellGroup = function (target) {
        var menuTarget = this.elRef.nativeElement.parentElement.getElementsByClassName('menuItem')[target.spellGroup.name];
        menuTarget.scrollIntoView();
    };
    DetailNavigationComponent.prototype.updateDetailView = function (detailTarget) {
        this.detailArea = detailTarget;
        this.navToArea.emit(detailTarget);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", app_domain_hero__WEBPACK_IMPORTED_MODULE_1__["Hero"])
    ], DetailNavigationComponent.prototype, "hero", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DetailNavigationComponent.prototype, "detailArea", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DetailNavigationComponent.prototype, "navToArea", void 0);
    DetailNavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'detail-navigation',
            template: __webpack_require__(/*! ./detail-navigation.component.html */ "./src/app/detail-navigation/detail-navigation.component.html"),
            styles: [__webpack_require__(/*! ./detail-navigation.component.css */ "./src/app/detail-navigation/detail-navigation.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DetailNavigationComponent);
    return DetailNavigationComponent;
}());



/***/ }),

/***/ "./src/app/domain/actualAttribute.ts":
/*!*******************************************!*\
  !*** ./src/app/domain/actualAttribute.ts ***!
  \*******************************************/
/*! exports provided: ActualAttribute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActualAttribute", function() { return ActualAttribute; });
var ActualAttribute = /** @class */ (function () {
    function ActualAttribute(actualValue, attribute) {
        this.valueNumber = actualValue;
        this.attribute = attribute;
    }
    Object.defineProperty(ActualAttribute.prototype, "value", {
        get: function () {
            return this.valueNumber;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActualAttribute.prototype, "name", {
        get: function () {
            return this.attribute.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActualAttribute.prototype, "short", {
        get: function () {
            return this.attribute.short;
        },
        enumerable: true,
        configurable: true
    });
    return ActualAttribute;
}());



/***/ }),

/***/ "./src/app/domain/actualSkill.ts":
/*!***************************************!*\
  !*** ./src/app/domain/actualSkill.ts ***!
  \***************************************/
/*! exports provided: ActualSkill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActualSkill", function() { return ActualSkill; });
var ActualSkill = /** @class */ (function () {
    function ActualSkill(actualSkill, hero, skill, skillGroup) {
        this.skill = skill;
        this.skillGroup = skillGroup;
        this.assignmentId = actualSkill ? actualSkill['assignmentId'] : null;
        this.value = actualSkill ? actualSkill['value'] : -7;
        this.isAssignedToHero = actualSkill ? true : false;
        this.hero = hero;
    }
    ActualSkill.prototype.getSkill = function () {
        return this.skill;
    };
    ;
    ActualSkill.prototype.getAttack = function () {
        return this.hero.getAttackOfWeaponSkill(this.skill);
    };
    ;
    ActualSkill.prototype.getParade = function () {
        return this.hero.getParadeOfWeaponSkill(this.skill);
    };
    ;
    ActualSkill.prototype.getSkillGroup = function () {
        return this.skillGroup;
    };
    Object.defineProperty(ActualSkill.prototype, "dice1Value", {
        get: function () {
            return this.hero.getAttribute(this.getSkill().dice1.id).value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActualSkill.prototype, "dice2Value", {
        get: function () {
            return this.hero.getAttribute(this.getSkill().dice2.id).value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActualSkill.prototype, "dice3Value", {
        get: function () {
            return this.hero.getAttribute(this.getSkill().dice3.id).value;
        },
        enumerable: true,
        configurable: true
    });
    return ActualSkill;
}());



/***/ }),

/***/ "./src/app/domain/actualSkillGroup.ts":
/*!********************************************!*\
  !*** ./src/app/domain/actualSkillGroup.ts ***!
  \********************************************/
/*! exports provided: ActualSkillGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActualSkillGroup", function() { return ActualSkillGroup; });
var ActualSkillGroup = /** @class */ (function () {
    function ActualSkillGroup(skillGroup, skills) {
        this.skillGroup = skillGroup;
        this.skills = skills;
    }
    ActualSkillGroup.prototype.getSkillGroup = function () {
        return this.skillGroup;
    };
    ActualSkillGroup.prototype.getSkills = function () {
        return this.skills;
    };
    return ActualSkillGroup;
}());



/***/ }),

/***/ "./src/app/domain/actualSpell.ts":
/*!***************************************!*\
  !*** ./src/app/domain/actualSpell.ts ***!
  \***************************************/
/*! exports provided: ActualSpell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActualSpell", function() { return ActualSpell; });
var ActualSpell = /** @class */ (function () {
    function ActualSpell(actualSpell, hero, spell, spellGroup) {
        this.spell = spell;
        this.spellGroup = spellGroup;
        this.value = actualSpell ? actualSpell['value'] : -7;
        this.isAssignedToHero = actualSpell ? true : false;
        this.hero = hero;
    }
    ActualSpell.prototype.getSpell = function () {
        return this.spell;
    };
    ;
    ActualSpell.prototype.getSpellGroup = function () {
        return this.spellGroup;
    };
    Object.defineProperty(ActualSpell.prototype, "dice1Value", {
        get: function () {
            return this.hero.getAttribute(this.getSpell().dice1).value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActualSpell.prototype, "dice2Value", {
        get: function () {
            return this.hero.getAttribute(this.getSpell().dice2).value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActualSpell.prototype, "dice3Value", {
        get: function () {
            return this.hero.getAttribute(this.getSpell().dice3).value;
        },
        enumerable: true,
        configurable: true
    });
    return ActualSpell;
}());



/***/ }),

/***/ "./src/app/domain/actualSpellGroup.ts":
/*!********************************************!*\
  !*** ./src/app/domain/actualSpellGroup.ts ***!
  \********************************************/
/*! exports provided: ActualSpellGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActualSpellGroup", function() { return ActualSpellGroup; });
var ActualSpellGroup = /** @class */ (function () {
    function ActualSpellGroup(spellGroup, spells) {
        this.spellGroup = spellGroup;
        this.spells = spells;
    }
    ActualSpellGroup.prototype.getSpellGroup = function () {
        return this.spellGroup;
    };
    ActualSpellGroup.prototype.setSpells = function (spells) {
        this.spells = spells;
    };
    ActualSpellGroup.prototype.getSpells = function () {
        return this.spells;
    };
    return ActualSpellGroup;
}());



/***/ }),

/***/ "./src/app/domain/adventure.service.ts":
/*!*********************************************!*\
  !*** ./src/app/domain/adventure.service.ts ***!
  \*********************************************/
/*! exports provided: AdventureService, Adventure, Image */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdventureService", function() { return AdventureService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Adventure", function() { return Adventure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AdventureService = /** @class */ (function () {
    function AdventureService(http) {
        this.http = http;
        this.adventuresUrl = 'http://' + window.location.hostname + ':8000/adventures/';
    }
    AdventureService.prototype.getAdventures = function () {
        var _this = this;
        return this.http.get(this.adventuresUrl)
            .toPromise()
            .then(function (response) {
            return _this.extractData(response);
        });
    };
    AdventureService.prototype.extractData = function (res) {
        var body = res.json();
        var adventures = [];
        body.forEach(function (adventure) {
            var newAdventure = new Adventure();
            newAdventure.setData(adventure);
            adventures.push(newAdventure);
        }.bind(this));
        return adventures;
    };
    AdventureService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof _angular_http__WEBPACK_IMPORTED_MODULE_1__["Response"]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(errMsg);
    };
    AdventureService.prototype.getAdventure = function (id) {
        return this.getAdventures()
            .then(function (adventures) {
            return adventures.find(function (adventure) { return adventure.id === id; });
        });
    };
    AdventureService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], AdventureService);
    return AdventureService;
}());

var Adventure = /** @class */ (function () {
    function Adventure() {
        this.images = [];
    }
    Adventure.prototype.setData = function (dataObject) {
        var _this = this;
        this.id = dataObject.id;
        this.name = dataObject.name;
        dataObject.images.forEach(function (image) {
            var imageObject = new Image(image.url, image.caption);
            _this.images.push(imageObject);
        });
    };
    return Adventure;
}());

var Image = /** @class */ (function () {
    function Image(url, caption) {
        this.url = url;
        this.caption = caption;
    }
    return Image;
}());



/***/ }),

/***/ "./src/app/domain/armor.service.ts":
/*!*****************************************!*\
  !*** ./src/app/domain/armor.service.ts ***!
  \*****************************************/
/*! exports provided: ArmorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArmorService", function() { return ArmorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_hero_controls_hero_life_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/hero-controls/hero-life.service */ "./src/app/hero-controls/hero-life.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArmorService = /** @class */ (function () {
    function ArmorService(service) {
        this.service = service;
    }
    ArmorService.prototype.addArmor = function (armor, hero) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.service.sendUpate({
                heroId: hero.id,
                type: 'addArmor',
                armorName: armor.name,
                armorRS: armor.rs,
                armorBE: armor.behinderung
            });
            resolve(armor);
        });
    };
    ArmorService.prototype.deleteArmor = function (armor, hero) {
        var _this = this;
        new Promise(function (resolve, reject) {
            _this.service.sendUpate({
                type: 'deleteArmor',
                heroId: hero.id,
                armorId: armor.id
            });
            resolve(armor);
        });
    };
    ArmorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [app_hero_controls_hero_life_service__WEBPACK_IMPORTED_MODULE_1__["HeroLifeService"]])
    ], ArmorService);
    return ArmorService;
}());



/***/ }),

/***/ "./src/app/domain/armor.ts":
/*!*********************************!*\
  !*** ./src/app/domain/armor.ts ***!
  \*********************************/
/*! exports provided: Armor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Armor", function() { return Armor; });
var Armor = /** @class */ (function () {
    function Armor(id, name, rs, behinderung) {
        this.id = id;
        this.name = name;
        this.rs = rs;
        this.behinderung = behinderung;
    }
    return Armor;
}());



/***/ }),

/***/ "./src/app/domain/ascensionPricing.ts":
/*!********************************************!*\
  !*** ./src/app/domain/ascensionPricing.ts ***!
  \********************************************/
/*! exports provided: AscensionPricing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AscensionPricing", function() { return AscensionPricing; });
var AscensionPricing = /** @class */ (function () {
    function AscensionPricing(pricingData, index) {
        this.levelFrom = index;
        this.levelTo = index + 1;
        this.priceA = pricingData['cost_a'];
        this.priceB = pricingData['cost_b'];
        this.priceC = pricingData['cost_c'];
        this.priceD = pricingData['cost_d'];
        this.priceE = pricingData['cost_e'];
        this.priceF = pricingData['cost_f'];
        this.priceG = pricingData['cost_g'];
        this.priceH = pricingData['cost_h'];
    }
    AscensionPricing.prototype.getPrice = function (from, to, group) {
        return this['price_' + group];
    };
    ;
    return AscensionPricing;
}());



/***/ }),

/***/ "./src/app/domain/attribute.service.ts":
/*!*********************************************!*\
  !*** ./src/app/domain/attribute.service.ts ***!
  \*********************************************/
/*! exports provided: AttributeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributeService", function() { return AttributeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _attribute__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attribute */ "./src/app/domain/attribute.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AttributeService = /** @class */ (function () {
    function AttributeService() {
        this.attributesConfigured = new Map([
            ['MU', new _attribute__WEBPACK_IMPORTED_MODULE_1__["Attribute"]('MU', 'Mut', 'MU')],
            ['KL', new _attribute__WEBPACK_IMPORTED_MODULE_1__["Attribute"]('KL', 'Klugheit', 'KL')],
            ['IN', new _attribute__WEBPACK_IMPORTED_MODULE_1__["Attribute"]('IN', 'Intuition', 'IN')],
            ['CH', new _attribute__WEBPACK_IMPORTED_MODULE_1__["Attribute"]('CH', 'Charisma', 'CH')],
            ['FF', new _attribute__WEBPACK_IMPORTED_MODULE_1__["Attribute"]('FF', 'Fingerfertigkeit', 'FF')],
            ['GE', new _attribute__WEBPACK_IMPORTED_MODULE_1__["Attribute"]('GE', 'Gewandheit', 'GE')],
            ['KO', new _attribute__WEBPACK_IMPORTED_MODULE_1__["Attribute"]('KO', 'Konstitution', 'KO')],
            ['KK', new _attribute__WEBPACK_IMPORTED_MODULE_1__["Attribute"]('KK', 'Körperkraft', 'KK')]
        ]);
    }
    Object.defineProperty(AttributeService.prototype, "attributes", {
        get: function () {
            return this.attributesConfigured;
        },
        enumerable: true,
        configurable: true
    });
    AttributeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AttributeService);
    return AttributeService;
}());



/***/ }),

/***/ "./src/app/domain/attribute.ts":
/*!*************************************!*\
  !*** ./src/app/domain/attribute.ts ***!
  \*************************************/
/*! exports provided: Attribute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Attribute", function() { return Attribute; });
var Attribute = /** @class */ (function () {
    function Attribute(attributeId, attributeName, short) {
        this.attributeName = attributeName;
        this.attributeId = attributeId;
        this._short = short;
    }
    Object.defineProperty(Attribute.prototype, "name", {
        get: function () {
            return this.attributeName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Attribute.prototype, "short", {
        get: function () {
            return this._short;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Attribute.prototype, "id", {
        get: function () {
            return this.attributeId;
        },
        enumerable: true,
        configurable: true
    });
    return Attribute;
}());



/***/ }),

/***/ "./src/app/domain/enhancement-pricing.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/domain/enhancement-pricing.service.ts ***!
  \*******************************************************/
/*! exports provided: EnhancementPricingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnhancementPricingService", function() { return EnhancementPricingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ascensionPricing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ascensionPricing */ "./src/app/domain/ascensionPricing.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EnhancementPricingService = /** @class */ (function () {
    function EnhancementPricingService(http) {
        this.http = http;
        this.ascensionsUrl = 'http://' + window.location.hostname + ':8000/ascensions/';
    }
    EnhancementPricingService.prototype.getAscensionPricing = function () {
        var _this = this;
        if (!this.ascensionPricing) {
            this.ascensionsPromise = this.http.get(this.ascensionsUrl)
                .toPromise()
                .then(function (response) {
                _this.ascensionPricing = _this.extractAscensions(response.json());
                return _this.ascensionPricing;
            });
            return this.ascensionsPromise;
        }
        else {
            return new Promise(function (resolve) {
                resolve(_this.ascensionPricing);
            });
        }
    };
    EnhancementPricingService.prototype.extractAscensions = function (response) {
        return response.map(function (ascensionResponse, index) {
            return new _ascensionPricing__WEBPACK_IMPORTED_MODULE_1__["AscensionPricing"](ascensionResponse, index);
        });
    };
    EnhancementPricingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], EnhancementPricingService);
    return EnhancementPricingService;
}());



/***/ }),

/***/ "./src/app/domain/hero.service.ts":
/*!****************************************!*\
  !*** ./src/app/domain/hero.service.ts ***!
  \****************************************/
/*! exports provided: HeroService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroService", function() { return HeroService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hero */ "./src/app/domain/hero.ts");
/* harmony import */ var _attribute_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attribute.service */ "./src/app/domain/attribute.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _skills_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./skills.service */ "./src/app/domain/skills.service.ts");
/* harmony import */ var _spells_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./spells.service */ "./src/app/domain/spells.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var HeroService = /** @class */ (function () {
    function HeroService(http, skillService, spellService, attributeService) {
        this.http = http;
        this.skillService = skillService;
        this.spellService = spellService;
        this.attributeService = attributeService;
        this.heroesUrl = 'http://' + window.location.hostname + ':8000/characters/';
    }
    HeroService.prototype.getHeroes = function () {
        var _this = this;
        if (this.heroes) {
            return new Promise(function (resolve, reject) {
                resolve(_this.heroes);
            });
        }
        else {
            return this.http.get(this.heroesUrl)
                .toPromise()
                .then(function (response) {
                _this.heroes = _this.extractData(response);
                return _this.heroes;
            });
        }
    };
    HeroService.prototype.extractData = function (res) {
        var body = res.json();
        var heroes = [];
        body.forEach(function (hero) {
            var newHero = new _hero__WEBPACK_IMPORTED_MODULE_1__["Hero"](this.skillService, this.spellService, this.attributeService).setData(hero);
            heroes.push(newHero);
        }.bind(this));
        return heroes;
    };
    HeroService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof _angular_http__WEBPACK_IMPORTED_MODULE_3__["Response"]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(errMsg);
    };
    HeroService.prototype.getHero = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) { return _this.getHeroes()
            .then(function (heroes) {
            return resolve(heroes.find(function (hero) { return hero.id === id; }));
        }); });
    };
    Object.defineProperty(HeroService.prototype, "attributes", {
        get: function () {
            return this.attributesConfigured;
        },
        enumerable: true,
        configurable: true
    });
    HeroService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"], _skills_service__WEBPACK_IMPORTED_MODULE_8__["SkillService"], _spells_service__WEBPACK_IMPORTED_MODULE_9__["SpellService"], _attribute_service__WEBPACK_IMPORTED_MODULE_2__["AttributeService"]])
    ], HeroService);
    return HeroService;
}());



/***/ }),

/***/ "./src/app/domain/hero.ts":
/*!********************************!*\
  !*** ./src/app/domain/hero.ts ***!
  \********************************/
/*! exports provided: Hero */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hero", function() { return Hero; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actualSkill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actualSkill */ "./src/app/domain/actualSkill.ts");
/* harmony import */ var _actualSkillGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actualSkillGroup */ "./src/app/domain/actualSkillGroup.ts");
/* harmony import */ var _actualSpell__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actualSpell */ "./src/app/domain/actualSpell.ts");
/* harmony import */ var _actualSpellGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actualSpellGroup */ "./src/app/domain/actualSpellGroup.ts");
/* harmony import */ var _actualAttribute__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actualAttribute */ "./src/app/domain/actualAttribute.ts");
/* harmony import */ var _weapon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./weapon */ "./src/app/domain/weapon.ts");
/* harmony import */ var _armor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./armor */ "./src/app/domain/armor.ts");
/* harmony import */ var _weaponSkillDistribution__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./weaponSkillDistribution */ "./src/app/domain/weaponSkillDistribution.ts");
/* harmony import */ var _inventoryItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./inventoryItem */ "./src/app/domain/inventoryItem.ts");










var Hero = /** @class */ (function () {
    function Hero(skillService, spellService, attributeService) {
        this.skillService = skillService;
        this.spellService = spellService;
        this.attributeService = attributeService;
        this.skillService = skillService;
        this.weapons = [];
    }
    ;
    Hero.prototype.setData = function (dataObject) {
        this.attack_basis = dataObject['attack_basis'];
        this.parade_basis = dataObject['parade_basis'];
        this.fernkampf_basis = dataObject['fernkampf_basis'];
        this.life_lost = dataObject['life_lost'];
        this.avatar_small = dataObject['avatar_small'];
        this.culture = dataObject['culture'];
        this.experience = dataObject['experience'];
        this.level = Math.floor(Math.sqrt(this.experience / 50 + 0.25) + 0.5);
        this.experience_used = dataObject['experience_used'];
        this.gender = dataObject['gender'];
        this.hero_type = dataObject['hero_type'];
        this.id = dataObject['id'];
        this.ini_basis = dataObject['ini_basis'];
        this.knowsMagic = dataObject['knows_magic'];
        this.attributes = [
            new _actualAttribute__WEBPACK_IMPORTED_MODULE_5__["ActualAttribute"](dataObject['MU'], this.attributeService.attributes.get('MU')),
            new _actualAttribute__WEBPACK_IMPORTED_MODULE_5__["ActualAttribute"](dataObject['KL'], this.attributeService.attributes.get('KL')),
            new _actualAttribute__WEBPACK_IMPORTED_MODULE_5__["ActualAttribute"](dataObject['IN'], this.attributeService.attributes.get('IN')),
            new _actualAttribute__WEBPACK_IMPORTED_MODULE_5__["ActualAttribute"](dataObject['CH'], this.attributeService.attributes.get('CH')),
            new _actualAttribute__WEBPACK_IMPORTED_MODULE_5__["ActualAttribute"](dataObject['FF'], this.attributeService.attributes.get('FF')),
            new _actualAttribute__WEBPACK_IMPORTED_MODULE_5__["ActualAttribute"](dataObject['GE'], this.attributeService.attributes.get('GE')),
            new _actualAttribute__WEBPACK_IMPORTED_MODULE_5__["ActualAttribute"](dataObject['KO'], this.attributeService.attributes.get('KO')),
            new _actualAttribute__WEBPACK_IMPORTED_MODULE_5__["ActualAttribute"](dataObject['KK'], this.attributeService.attributes.get('KK'))
        ];
        this.life = dataObject['life'];
        this.magicEnergy = dataObject['magic_energy'];
        this.magicEnergy_lost = dataObject['magic_energy_lost'];
        this.magieresistenz = dataObject['magieresistenz'];
        this.name = dataObject['name'];
        this.race = dataObject['race'];
        this.size = dataObject['size'];
        this.social_rank = dataObject['social_rank'];
        this.weapons = [];
        this.armor = [];
        this.weaponSkillDistributions = dataObject['weaponSkillDistributions'].map(function (weaponSkillDistribution) {
            return new _weaponSkillDistribution__WEBPACK_IMPORTED_MODULE_8__["WeaponSkillDistribution"](weaponSkillDistribution.skill, weaponSkillDistribution.attack, weaponSkillDistribution.parade);
        });
        this.structureSkills(dataObject['skills'], dataObject['weaponSkillDistributions'], dataObject['weapons'], dataObject['armor']);
        if (this.knowsMagic) {
            this.structureSpells(dataObject['spells']);
        }
        this.inventory = dataObject['inventoryItems'].map(function (inventoryItem) {
            return new _inventoryItem__WEBPACK_IMPORTED_MODULE_9__["InventoryItem"](inventoryItem.id, inventoryItem.name, inventoryItem.amount, inventoryItem.weight);
        });
        return this;
    };
    Hero.prototype.structureSkills = function (actualSkillsOfHero, weaponSkillDistributions, weapons, armor) {
        var _this = this;
        var skillsPromise = Promise.all([
            this.skillService.getSkillGroups(),
            this.skillService.getSkills()
        ]).then(function (skillGroupsAndSkills) {
            _this.skillGroups = new Array();
            var skillGroups = skillGroupsAndSkills[0];
            var allSkills = skillGroupsAndSkills[1];
            _this.skills = [];
            allSkills.forEach(function (skill) {
                var actualSkill = lodash__WEBPACK_IMPORTED_MODULE_0__["find"](actualSkillsOfHero, function (actualSkillData) { return skill.id === actualSkillData['id']; }); // can be undefined, the hero does not have the skill
                var skillSkillGroup = lodash__WEBPACK_IMPORTED_MODULE_0__["find"](skillGroups, function (skillGroup) { return skill.skillGroupId == skillGroup.id; });
                _this.skills.push(new _actualSkill__WEBPACK_IMPORTED_MODULE_1__["ActualSkill"](actualSkill, _this, skill, skillSkillGroup));
            });
            // skills.forEach(actualSkill => {
            //   let generalSkill = _.find(allSkills, finder => { return finder.id === actualSkill['id'] })
            //   let skillSkillGroup = _.find(skillGroups, skillGroup => { return generalSkill.skillGroupId == skillGroup.id });
            //   this.skills.push(new ActualSkill(actualSkill, this, generalSkill, skillSkillGroup));
            // })
            skillGroups.forEach(function (skillGroup) {
                var skills = lodash__WEBPACK_IMPORTED_MODULE_0__["filter"](_this.skills, function (actualSkill) {
                    return actualSkill.getSkill().skillGroupId == skillGroup.id;
                });
                _this.skillGroups.push(new _actualSkillGroup__WEBPACK_IMPORTED_MODULE_2__["ActualSkillGroup"](skillGroup, skills));
            });
            weapons.forEach(function (weapon) {
                _this.addWeapon(new _weapon__WEBPACK_IMPORTED_MODULE_6__["Weapon"](weapon['id'], weapon['name'], weapon['tp_dice'], weapon['tp_add_points'], weapon['extra_tp_from_kk'], lodash__WEBPACK_IMPORTED_MODULE_0__["find"](allSkills, function (skill) {
                    return skill.id === weapon['skill'];
                }), _this.getAttribute('KK').valueNumber));
            });
            if (_this.weapons.length > 0)
                _this.currentWeapon = _this.weapons[0];
            armor.forEach(function (armor) {
                _this.addArmor(new _armor__WEBPACK_IMPORTED_MODULE_7__["Armor"](armor['id'], armor['name'], armor['rs'], armor['be']));
            });
        });
    };
    Hero.prototype.addArmor = function (armor) {
        this.armor.push(armor);
    };
    Hero.prototype.deleteArmorById = function (armorId) {
        var armorIndex = this.armor.findIndex(function (armorItem) {
            return armorItem.id === armorId;
        });
        this.armor.splice(armorIndex, 1);
    };
    Hero.prototype.addWeapon = function (weapon) {
        this.weapons.push(weapon);
    };
    Hero.prototype.deleteWeaponById = function (weaponId) {
        var weaponIndex = this.weapons.findIndex(function (weapon) {
            return weapon.id === weaponId;
        });
        this.weapons.splice(weaponIndex, 1);
    };
    Hero.prototype.addInventoryItem = function (inventoryItem) {
        this.inventory.push(inventoryItem);
    };
    Hero.prototype.deleteInventoryItemById = function (inventoryItemId) {
        var inventoryIndex = this.inventory.findIndex(function (InventoryItem) {
            return InventoryItem.id === inventoryItemId;
        });
        this.inventory.splice(inventoryIndex, 1);
    };
    Hero.prototype.updateInventoryItemAmount = function (inventoryItemId, amount) {
        var inventoryIndex = this.inventory.findIndex(function (InventoryItem) {
            return InventoryItem.id === inventoryItemId;
        });
        var inventoryItem = this.inventory[inventoryIndex];
        inventoryItem.amount = amount;
    };
    Hero.prototype.structureSpells = function (actualSpellsOfHero) {
        var _this = this;
        var spellsPromise = Promise.all([
            this.spellService.getSpells(),
            this.spellService.getSpellGroups()
        ]).then(function (spellsAndSpellGroups) {
            _this.spellGroups = new Array();
            _this.spells = new Array();
            var allSpells = spellsAndSpellGroups[0];
            var spellGroups = spellsAndSpellGroups[1];
            spellGroups.forEach(function (spellGroup) {
                _this.spellGroups.push(new _actualSpellGroup__WEBPACK_IMPORTED_MODULE_4__["ActualSpellGroup"](spellGroup, []));
            });
            allSpells.forEach(function (spell) {
                var actualSpellDataObject = actualSpellsOfHero.find(function (actualSpellData) {
                    return spell.id === actualSpellData['id'];
                });
                var spellGroupOfSpell = _this.spellGroups.find(function (spellGroup) {
                    return spellGroup.getSpellGroup().id === spell.spellGroupId;
                });
                var actualSpell = new _actualSpell__WEBPACK_IMPORTED_MODULE_3__["ActualSpell"](actualSpellDataObject, _this, spell, spellGroupOfSpell.getSpellGroup());
                _this.spells.push(actualSpell);
                spellGroupOfSpell.getSpells().push(actualSpell);
            });
        });
    };
    Hero.prototype._getDistributionOfSkill = function (weaponSkill) {
        return this.weaponSkillDistributions.find(function (distribution) {
            return distribution.skillId == weaponSkill.id;
        });
    };
    Hero.prototype.getAttribute = function (id) {
        return this.attributes.find(function (attribute) { return attribute.attribute.id === id; });
    };
    Object.defineProperty(Hero.prototype, "currentWeapon", {
        get: function () {
            return this._currentWeapon;
        },
        set: function (weapon) {
            var _this = this;
            this._currentWeapon = weapon;
            var skillDistribution = this._getDistributionOfSkill(weapon.skill);
            if (this._currentWeapon.skill.skillGroupId === 1) {
                this.currentAttack = skillDistribution ? this.attack_basis + skillDistribution.attack : this.attack_basis;
                this.currentParade = skillDistribution ? this.parade_basis + skillDistribution.parade : this.parade_basis;
            }
            if (this._currentWeapon.skill.skillGroupId === 8) {
                var actualSkill = this.skills.find(function (skill) {
                    return skill.getSkill().id === _this._currentWeapon.skill.id;
                });
                this.currentLongRangeValue = this.fernkampf_basis + actualSkill.value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Hero.prototype.currentWeaponSkillIsMelee = function () {
        return this._currentWeapon.skill.skillGroupId === 1;
    };
    Hero.prototype.currentWeaponSkillIsLongRange = function () {
        return this._currentWeapon.skill.skillGroupId === 8;
    };
    Object.defineProperty(Hero.prototype, "currentWeaponDamageText", {
        get: function () {
            return this._currentWeapon ? this._currentWeapon.damageText : '0';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Hero.prototype, "currentLife", {
        get: function () {
            return this.life - this.life_lost;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Hero.prototype, "currentMagicEnergy", {
        get: function () {
            return this.magicEnergy - this.magicEnergy_lost;
        },
        enumerable: true,
        configurable: true
    });
    Hero.prototype.getAttackOfWeaponSkill = function (weaponSkill) {
        var skillDistribution = this._getDistributionOfSkill(weaponSkill);
        return skillDistribution ? this.attack_basis + skillDistribution.attack : this.attack_basis;
    };
    Object.defineProperty(Hero.prototype, "availablePoints", {
        get: function () {
            return this.experience - this.experience_used;
        },
        enumerable: true,
        configurable: true
    });
    Hero.prototype.getParadeOfWeaponSkill = function (weaponSkill) {
        var skillDistribution = this._getDistributionOfSkill(weaponSkill);
        return skillDistribution ? this.parade_basis + skillDistribution.attack : this.parade_basis;
    };
    return Hero;
}());



/***/ }),

/***/ "./src/app/domain/inventory.service.ts":
/*!*********************************************!*\
  !*** ./src/app/domain/inventory.service.ts ***!
  \*********************************************/
/*! exports provided: InventoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryService", function() { return InventoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var app_hero_controls_hero_life_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/hero-controls/hero-life.service */ "./src/app/hero-controls/hero-life.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InventoryService = /** @class */ (function () {
    function InventoryService(http, chRef, service) {
        this.http = http;
        this.chRef = chRef;
        this.service = service;
        this.inventoryItemsUrl = 'http://' + window.location.hostname + ':8000/inventoryItems/';
    }
    InventoryService.prototype.addInventory = function (inventoryItem, hero) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.service.sendUpate({
                heroId: hero.id,
                type: 'addInventoryItem',
                name: inventoryItem.name,
                amount: inventoryItem.amount,
                weight: inventoryItem.weight
            });
            resolve(inventoryItem);
        });
    };
    InventoryService.prototype.setInventoryItemAmount = function (inventoryItem, hero, amount) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.service.sendUpate({
                heroId: hero.id,
                inventoryItemId: inventoryItem.id,
                type: 'updateInventoryItem',
                amount: amount
            });
            resolve(inventoryItem);
        });
    };
    InventoryService.prototype.deleteInventory = function (inventoryItem, hero) {
        var _this = this;
        new Promise(function (resolve, reject) {
            _this.service.sendUpate({
                type: 'deleteInventoryItem',
                heroId: hero.id,
                inventoryItemId: inventoryItem.id
            });
            resolve(inventoryItem);
        });
    };
    InventoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], app_hero_controls_hero_life_service__WEBPACK_IMPORTED_MODULE_2__["HeroLifeService"]])
    ], InventoryService);
    return InventoryService;
}());



/***/ }),

/***/ "./src/app/domain/inventoryItem.ts":
/*!*****************************************!*\
  !*** ./src/app/domain/inventoryItem.ts ***!
  \*****************************************/
/*! exports provided: InventoryItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryItem", function() { return InventoryItem; });
var InventoryItem = /** @class */ (function () {
    function InventoryItem(id, name, amount, weight) {
        this.id = id;
        this.name = name;
        this.amount = amount;
        this.weight = weight;
    }
    return InventoryItem;
}());



/***/ }),

/***/ "./src/app/domain/remoteControlOperation.ts":
/*!**************************************************!*\
  !*** ./src/app/domain/remoteControlOperation.ts ***!
  \**************************************************/
/*! exports provided: RemoteControlOperation, OperationFactory, operationTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoteControlOperation", function() { return RemoteControlOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationFactory", function() { return OperationFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "operationTypes", function() { return operationTypes; });
var RemoteControlOperation = /** @class */ (function () {
    function RemoteControlOperation(type, target, parameters) {
        this.type = type;
        this.target = target;
        this.params = parameters;
    }
    RemoteControlOperation.prototype.getType = function () {
        return this.type;
    };
    RemoteControlOperation.prototype.getTarget = function () {
        return this.target;
    };
    RemoteControlOperation.prototype.getParameters = function () {
        return this.params;
    };
    RemoteControlOperation.prototype.toJSON = function () {
        return JSON.stringify({
            type: this.type,
            target: this.target,
            params: this.params
        });
    };
    return RemoteControlOperation;
}());

var OperationFactory = /** @class */ (function () {
    function OperationFactory() {
    }
    OperationFactory.createOperation = function (type, target, parameters) {
        return new RemoteControlOperation(type, target, parameters);
    };
    OperationFactory.createOperationFromJSON = function (jsonstring) {
        var parsedObject = JSON.parse(jsonstring);
        return new RemoteControlOperation(parsedObject.type, parsedObject.target, parsedObject.params);
    };
    return OperationFactory;
}());

var operationTypes = {
    openImage: 'openImage',
    closeImage: 'closeImage'
};


/***/ }),

/***/ "./src/app/domain/skill.ts":
/*!*********************************!*\
  !*** ./src/app/domain/skill.ts ***!
  \*********************************/
/*! exports provided: Skill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Skill", function() { return Skill; });
var Skill = /** @class */ (function () {
    function Skill(dataObject, attributeService) {
        this.attributeService = attributeService;
        this.skillGroupId = dataObject['type'];
        this.id = dataObject['id'];
        this.name = dataObject['name'];
        this.be = dataObject['behinderung'];
        this.isWeaponSkill = dataObject['isWeaponSkill'];
        if (dataObject['dice1']) {
            this.dice1 = this.attributeService.attributes.get(dataObject['dice1'].id);
            this.dice2 = this.attributeService.attributes.get(dataObject['dice2'].id);
            this.dice3 = this.attributeService.attributes.get(dataObject['dice3'].id);
        }
    }
    return Skill;
}());



/***/ }),

/***/ "./src/app/domain/skillgroup.ts":
/*!**************************************!*\
  !*** ./src/app/domain/skillgroup.ts ***!
  \**************************************/
/*! exports provided: SkillGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillGroup", function() { return SkillGroup; });
var SkillGroup = /** @class */ (function () {
    function SkillGroup(dataObject, chRef) {
        this.chRef = chRef;
        this.name = dataObject['name'];
        this.id = dataObject['id'];
        if (this.id == 1 || this.id == 8) {
            this.hasThreeDices = false;
        }
        else {
            this.hasThreeDices = true;
        }
        if (this.id == 1) {
            this.hasAttackParade = true;
        }
        else {
            this.hasAttackParade = false;
        }
        if (this.id == 8) {
            this.isLongRangeWeaponSkill = true;
        }
        else {
            this.isLongRangeWeaponSkill = false;
        }
        this.skillType = dataObject['skill_group']['name'];
    }
    SkillGroup.prototype.setSkills = function (skills) {
        this.skills = skills;
    };
    SkillGroup.prototype.getSkills = function () {
        return this.skills;
    };
    SkillGroup.prototype.getAscensionPricingTableColumn = function () {
        return "price" + this.skillType;
    };
    SkillGroup.prototype.getSkillsPromise = function () {
        return new Promise(function (resolve, reject) {
            setTimeout(function () { return resolve([{ value: 1 }, { value: 2 }]); }, 1000);
        });
        ;
    };
    return SkillGroup;
}());



/***/ }),

/***/ "./src/app/domain/skills.service.ts":
/*!******************************************!*\
  !*** ./src/app/domain/skills.service.ts ***!
  \******************************************/
/*! exports provided: SkillService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillService", function() { return SkillService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _skill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./skill */ "./src/app/domain/skill.ts");
/* harmony import */ var _skillgroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./skillgroup */ "./src/app/domain/skillgroup.ts");
/* harmony import */ var _attribute_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./attribute.service */ "./src/app/domain/attribute.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SkillService = /** @class */ (function () {
    function SkillService(http, chRef, attributeService) {
        this.http = http;
        this.chRef = chRef;
        this.attributeService = attributeService;
        this.skillsUrl = 'http://' + window.location.hostname + ':8000/skills/';
        this.skillTypesUrl = 'http://' + window.location.hostname + ':8000/skillTypes/';
    }
    SkillService.prototype.getSkills = function () {
        var _this = this;
        if (!this.skillsPromise) {
            this.skillsPromise = this.http.get(this.skillsUrl)
                .toPromise()
                .then(function (response) {
                return _this.extractSkills(response);
            });
        }
        return this.skillsPromise;
    };
    SkillService.prototype.getSkillGroups = function () {
        var _this = this;
        if (!this.skillGroupsPromise) {
            this.skillGroupsPromise = this.http.get(this.skillTypesUrl)
                .toPromise()
                .then(function (response) {
                _this.skillGroups = _this.extractSkillTypes(response);
                return _this.skillGroups;
            });
        }
        return this.skillGroupsPromise;
    };
    SkillService.prototype.extractSkills = function (res) {
        var _this = this;
        var skills = [];
        var body = res.json();
        body.forEach(function (skill) {
            skills.push(new _skill__WEBPACK_IMPORTED_MODULE_2__["Skill"](skill, _this.attributeService));
        });
        return skills;
    };
    SkillService.prototype.extractSkillTypes = function (res) {
        var _this = this;
        var skillTypes = [];
        var body = res.json();
        body.forEach(function (skillType) {
            skillTypes.push(new _skillgroup__WEBPACK_IMPORTED_MODULE_3__["SkillGroup"](skillType, _this.chRef));
        });
        return skillTypes;
    };
    SkillService.prototype.getSkill = function (id) {
        return this.getSkills()
            .then(function (skills) {
            return skills.find(function (skill) { return skill.id === id; });
        });
    };
    SkillService.prototype.getSkillGroup = function (id) {
        return this.getSkillGroups().then(function (skillGroups) {
            return skillGroups.find(function (skillGroup) { return skillGroup.id === id; });
        });
    };
    SkillService.prototype.getWeaponSkills = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.getSkills().then(function (skills) {
                resolve(skills.filter(function (skill) {
                    return skill.skillGroupId === 1 || skill.skillGroupId === 8;
                }));
            });
        });
    };
    SkillService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _attribute_service__WEBPACK_IMPORTED_MODULE_4__["AttributeService"]])
    ], SkillService);
    return SkillService;
}());



/***/ }),

/***/ "./src/app/domain/spell.ts":
/*!*********************************!*\
  !*** ./src/app/domain/spell.ts ***!
  \*********************************/
/*! exports provided: Spell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spell", function() { return Spell; });
var Spell = /** @class */ (function () {
    function Spell(dataObject) {
        this.spellGroupId = dataObject['type'];
        this.id = dataObject['id'];
        this.name = dataObject['name'];
        // this.be = dataObject['behinderung'];
        this.dice1 = dataObject['dice1'];
        this.dice2 = dataObject['dice2'];
        this.dice3 = dataObject['dice3'];
        this.be = dataObject['be'];
    }
    return Spell;
}());



/***/ }),

/***/ "./src/app/domain/spellGroup.ts":
/*!**************************************!*\
  !*** ./src/app/domain/spellGroup.ts ***!
  \**************************************/
/*! exports provided: SpellGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpellGroup", function() { return SpellGroup; });
var SpellGroup = /** @class */ (function () {
    function SpellGroup(dataObject, chRef) {
        this.chRef = chRef;
        this.name = dataObject['name'];
        this.id = dataObject['id'];
    }
    SpellGroup.prototype.setSpells = function (skills) {
        this.spells = skills;
    };
    SpellGroup.prototype.getSpells = function () {
        return this.spells;
    };
    SpellGroup.prototype.getSpellsPromise = function () {
        return new Promise(function (resolve, reject) {
            setTimeout(function () { return resolve([{ value: 1 }, { value: 2 }]); }, 1000);
        });
        ;
    };
    return SpellGroup;
}());



/***/ }),

/***/ "./src/app/domain/spells.service.ts":
/*!******************************************!*\
  !*** ./src/app/domain/spells.service.ts ***!
  \******************************************/
/*! exports provided: SpellService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpellService", function() { return SpellService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _spell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spell */ "./src/app/domain/spell.ts");
/* harmony import */ var _spellGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./spellGroup */ "./src/app/domain/spellGroup.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SpellService = /** @class */ (function () {
    function SpellService(http, chRef) {
        this.http = http;
        this.chRef = chRef;
        this.spellsUrl = 'http://' + window.location.hostname + ':8000/spells/';
        this.spellTypesUrl = 'http://' + window.location.hostname + ':8000/spellTypes/';
    }
    SpellService.prototype.getSpells = function () {
        var _this = this;
        if (!this.spellsPromise) {
            this.spellsPromise = this.http.get(this.spellsUrl)
                .toPromise()
                .then(function (response) {
                return _this.extractSpells(response);
            });
        }
        return this.spellsPromise;
    };
    SpellService.prototype.getSpellGroups = function () {
        var _this = this;
        if (!this.spellGroupsPromise) {
            this.spellGroupsPromise = this.http.get(this.spellTypesUrl)
                .toPromise()
                .then(function (response) {
                _this.spellGroups = _this.extractSpellTypes(response);
                return _this.spellGroups;
            });
        }
        return this.spellGroupsPromise;
    };
    SpellService.prototype.extractSpells = function (res) {
        var spells = [];
        var body = res.json();
        body.forEach(function (spell) {
            spells.push(new _spell__WEBPACK_IMPORTED_MODULE_2__["Spell"](spell));
        });
        return spells;
    };
    SpellService.prototype.extractSpellTypes = function (res) {
        var _this = this;
        var spellTypes = [];
        var body = res.json();
        body.forEach(function (spellType) {
            spellTypes.push(new _spellGroup__WEBPACK_IMPORTED_MODULE_3__["SpellGroup"](spellType, _this.chRef));
        });
        return spellTypes;
    };
    SpellService.prototype.getSpell = function (id) {
        return this.getSpells()
            .then(function (spells) {
            return spells.find(function (spell) { return spell.id === id; });
        });
    };
    SpellService.prototype.getSpellGroup = function (id) {
        return this.getSpellGroups().then(function (spellGroups) {
            return spellGroups.find(function (spellGroup) { return spellGroup.id === id; });
        });
    };
    SpellService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], SpellService);
    return SpellService;
}());



/***/ }),

/***/ "./src/app/domain/weapon.ts":
/*!**********************************!*\
  !*** ./src/app/domain/weapon.ts ***!
  \**********************************/
/*! exports provided: Weapon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Weapon", function() { return Weapon; });
var Weapon = /** @class */ (function () {
    function Weapon(id, name, damageDice, _damageAddPoints, extraPointsFromKk, skill, heroKk) {
        if (skill === void 0) { skill = null; }
        if (heroKk === void 0) { heroKk = null; }
        this.id = id;
        this.name = name;
        this.damageDice = damageDice;
        this._damageAddPoints = _damageAddPoints;
        this.extraPointsFromKk = extraPointsFromKk;
        this.skill = skill;
        this.heroKk = heroKk;
    }
    Object.defineProperty(Weapon.prototype, "damageAddPoints", {
        get: function () {
            if (this.extraPointsFromKk < this.heroKk)
                return this._damageAddPoints + this.heroKk - this.extraPointsFromKk;
            else
                return this._damageAddPoints;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Weapon.prototype, "damageTextGeneral", {
        get: function () {
            return this.damageDice.toString() + 'W6+' + this._damageAddPoints.toString();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Weapon.prototype, "damageText", {
        get: function () {
            return this.damageDice.toString() + 'W6+' + this.damageAddPoints.toString();
        },
        enumerable: true,
        configurable: true
    });
    return Weapon;
}());



/***/ }),

/***/ "./src/app/domain/weaponSkillDistribution.ts":
/*!***************************************************!*\
  !*** ./src/app/domain/weaponSkillDistribution.ts ***!
  \***************************************************/
/*! exports provided: WeaponSkillDistribution */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeaponSkillDistribution", function() { return WeaponSkillDistribution; });
var WeaponSkillDistribution = /** @class */ (function () {
    function WeaponSkillDistribution(skillId, attack, parade) {
        this.skillId = skillId;
        this.attack = attack;
        this.parade = parade;
    }
    return WeaponSkillDistribution;
}());



/***/ }),

/***/ "./src/app/domain/weapons.service.ts":
/*!*******************************************!*\
  !*** ./src/app/domain/weapons.service.ts ***!
  \*******************************************/
/*! exports provided: WeaponService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeaponService", function() { return WeaponService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var app_hero_controls_hero_life_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/hero-controls/hero-life.service */ "./src/app/hero-controls/hero-life.service.ts");
/* harmony import */ var _weapon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./weapon */ "./src/app/domain/weapon.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WeaponService = /** @class */ (function () {
    function WeaponService(http, chRef, service) {
        this.http = http;
        this.chRef = chRef;
        this.service = service;
        this.weaponsUrl = 'http://' + window.location.hostname + ':8000/weapons/';
    }
    WeaponService.prototype.getWeapons = function () {
        var _this = this;
        if (this.weapons) {
            return new Promise(function (resolve) {
                resolve(_this.weapons);
            });
        }
        else {
            if (!this.weaponsPromise) {
                this.weaponsPromise = this.http.get(this.weaponsUrl)
                    .toPromise()
                    .then(function (response) {
                    _this.weapons = _this.extractWeapons(response);
                    return _this.weapons;
                });
            }
            return this.weaponsPromise;
        }
    };
    WeaponService.prototype.extractWeapons = function (res, skills) {
        if (skills === void 0) { skills = null; }
        var weapons = [];
        var body = res.json();
        body.forEach(function (weapon) {
            weapons.push(new _weapon__WEBPACK_IMPORTED_MODULE_3__["Weapon"](weapon['id'], weapon['name'], weapon['tp_dice'], weapon['tp_add_points'], weapon['extra_tp_from_kk']));
        });
        return weapons;
    };
    WeaponService.prototype.addWeapon = function (weapon, hero) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.service.sendUpate({
                heroId: hero.id,
                type: 'addWeapon',
                skill: weapon.skill.id,
                weaponName: weapon.name,
                damageDice: weapon.damageDice,
                damageAddPoints: weapon.damageAddPoints,
                extraPointsFromKk: weapon.extraPointsFromKk
            });
            resolve(weapon);
        });
    };
    WeaponService.prototype.deleteWeapon = function (weapon, hero) {
        var _this = this;
        new Promise(function (resolve, reject) {
            _this.service.sendUpate({
                type: 'deleteWeapon',
                heroId: hero.id,
                weaponId: weapon.id
            });
            resolve(weapon);
        });
    };
    WeaponService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], app_hero_controls_hero_life_service__WEBPACK_IMPORTED_MODULE_2__["HeroLifeService"]])
    ], WeaponService);
    return WeaponService;
}());



/***/ }),

/***/ "./src/app/edit-attribute/edit-attribute.component.css":
/*!*************************************************************!*\
  !*** ./src/app/edit-attribute/edit-attribute.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".editAttributeContainer {\n    /* background-color: #D1B99D; */\n    padding: 10px 20px 10px 20px;\n}\n\n.attributeName {\n    width: 100px;\n    text-align: left;\n}\n\n.targetValue, .costOfRaise {\n    width: 40px;\n}\n\nbutton {\n    z-index: 10;\n}"

/***/ }),

/***/ "./src/app/edit-attribute/edit-attribute.component.html":
/*!**************************************************************!*\
  !*** ./src/app/edit-attribute/edit-attribute.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-col center\">\n    <button (click)=\"increaseAttribute()\">\n        <div class=\"editAttributeContainer flex-row\" >\n            <div class=\"attributeName\">{{attribute.name}}</div>\n            <div class=\"targetValue\"><i class=\"fa fa-tachometer\"></i> {{targetValue}}</div>\n            <div class=\"costOfRaise\"><i class=\"fa fa-dollar\"></i> {{costOfAscension}}</div>\n        </div>\n    </button>\n    \n    <confirmation-sheet *ngIf=\"state === 'toBeConfirmed'\" confirmationText=\"Zahle {{costOfAscension}} um {{attribute.name}} zu steigern?\" (confirm)=\"confirmIncrease()\" (cancel)=\"cancelIncrease()\"></confirmation-sheet>\n    \n</div>"

/***/ }),

/***/ "./src/app/edit-attribute/edit-attribute.component.ts":
/*!************************************************************!*\
  !*** ./src/app/edit-attribute/edit-attribute.component.ts ***!
  \************************************************************/
/*! exports provided: EditAttributeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAttributeComponent", function() { return EditAttributeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _hero_controls_hero_life_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../hero-controls/hero-life.service */ "./src/app/hero-controls/hero-life.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EditAttributeComponent = /** @class */ (function () {
    function EditAttributeComponent(service) {
        this.service = service;
        this._service = service;
    }
    EditAttributeComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(EditAttributeComponent.prototype, "attribute", {
        get: function () {
            return this._attribute;
        },
        set: function (attribute) {
            this._attribute = attribute;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditAttributeComponent.prototype, "hero", {
        get: function () {
            return this._hero;
        },
        set: function (hero) {
            this._hero = hero;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditAttributeComponent.prototype, "costOfAscension", {
        get: function () {
            return this._costOfAscension;
        },
        set: function (costOfAscension) {
            this._costOfAscension = costOfAscension;
        },
        enumerable: true,
        configurable: true
    });
    EditAttributeComponent.prototype.cancelIncrease = function () {
        this._state = '';
    };
    EditAttributeComponent.prototype.increaseAttribute = function () {
        this._state = 'toBeConfirmed';
    };
    EditAttributeComponent.prototype.confirmIncrease = function () {
        this._service.sendUpate({
            heroId: this._hero.id,
            type: 'updateAttribute',
            attribute: this._attribute.attribute.id,
            value: this.targetValue,
            price: this._costOfAscension
        });
        // this.heroMU
        this._state = '';
        this._attribute.valueNumber = this.targetValue;
        this.hero.experience_used += this.costOfAscension;
    };
    Object.defineProperty(EditAttributeComponent.prototype, "targetValue", {
        get: function () {
            return this._attribute.valueNumber + 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditAttributeComponent.prototype, "state", {
        get: function () {
            return this._state;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], EditAttributeComponent.prototype, "attribute", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], EditAttributeComponent.prototype, "hero", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], EditAttributeComponent.prototype, "costOfAscension", null);
    EditAttributeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'edit-attribute',
            template: __webpack_require__(/*! ./edit-attribute.component.html */ "./src/app/edit-attribute/edit-attribute.component.html"),
            styles: [__webpack_require__(/*! ./edit-attribute.component.css */ "./src/app/edit-attribute/edit-attribute.component.css")]
        }),
        __metadata("design:paramtypes", [_hero_controls_hero_life_service__WEBPACK_IMPORTED_MODULE_1__["HeroLifeService"]])
    ], EditAttributeComponent);
    return EditAttributeComponent;
}());



/***/ }),

/***/ "./src/app/edit-dialog/edit-dialog.component.css":
/*!*******************************************************!*\
  !*** ./src/app/edit-dialog/edit-dialog.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navigationButton {\n    width: 250px;\n    margin-bottom: 5px;\n}\n\n.attributeContainer, .skillEntry {\n    margin-bottom: 10px;\n}\n\n"

/***/ }),

/***/ "./src/app/edit-dialog/edit-dialog.component.html":
/*!********************************************************!*\
  !*** ./src/app/edit-dialog/edit-dialog.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page flex-col center\">\n  <div class=\"pageContent\">\n    <div class=\"sheet flex-col center\" *ngIf=\"hero\">\n      <h2>Punkte einsetzen</h2>\n      <div>{{hero.availablePoints}}</div>\n      <div id=\"firstStep\" *ngIf=\"state === 'initial'\" class=\"flex-col center\">\n        <h3>Was möchtest Du mit {{hero.name}} tun?</h3>\n        <div class=\"flex-col\">\n            <button class=\"navigationButton\" (click)=\"setState('raiseAttribute')\">Eigenschaft steigern</button>\n            <button class=\"navigationButton\" (click)=\"setState('raiseTalent')\">Talent steigern</button>\n            <button class=\"navigationButton\" *ngIf=\"hero.knowsMagic === true\">Zauberfertigkeit steigern</button>\n          </div>\n      </div>\n      <div id=\"raiseAttribute\" *ngIf=\"state === 'raiseAttribute'\" class=\"flex-col center\">\n        <h3>Welche Eigenschaft möchtest Du steigern?</h3>\n        <div class=\"navigationButton flex-item\" *ngFor=\"let attribute of hero.attributes; index as i; keyvalue\">\n          <edit-attribute [attribute]=\"attribute\" [costOfAscension]=\"getCostOfAttributeAscension(attribute)\" [hero]=\"hero\"></edit-attribute>\n        </div>\n        \n      </div>\n      <div id=\"raiseTalent\" *ngIf=\"state === 'raiseTalent'\" class=\"flex-col center\">\n        <h3>Welches Talent möchtest Du steigern?</h3>\n        <div class=\"flex-col flex-item center\">\n          <div class=\"flex-row padded searchContainer center\" >\n            <input placeholder=\"Suchbegriff\" [value]=\"talentSearchTerm\" (input)=\"talentSearchTerm  = $event.target.value\" />\n          </div>\n          <div class=\"talente padded\">\n            <div class=\"flex-col center\" *ngFor=\"let skillGroup of hero.skillGroups | MatchesTalentSearchTermChildren:talentSearchTerm\">\n              <div class=\"skillGroupTitle\">{{skillGroup.skillGroup.name}}</div>\n              <div class=\"skillGroupEntries\">\n                  <div class=\"skillEntry\" *ngFor=\"let skill of skillGroup.skills | MatchesTalentSearchTerm:talentSearchTerm\">\n                    <edit-talent [skill]=\"skill\" [hero]=\"hero\" [costOfAscension]=\"getCostOfSkillAscension(skill)\"></edit-talent>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/edit-dialog/edit-dialog.component.ts":
/*!******************************************************!*\
  !*** ./src/app/edit-dialog/edit-dialog.component.ts ***!
  \******************************************************/
/*! exports provided: EditDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDialogComponent", function() { return EditDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _domain_hero_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../domain/hero.service */ "./src/app/domain/hero.service.ts");
/* harmony import */ var app_edit_attribute_edit_attribute_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/edit-attribute/edit-attribute.component */ "./src/app/edit-attribute/edit-attribute.component.ts");
/* harmony import */ var app_domain_enhancement_pricing_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/domain/enhancement-pricing.service */ "./src/app/domain/enhancement-pricing.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditDialogComponent = /** @class */ (function () {
    function EditDialogComponent(heroService, route, enhancementPricingService, dialogRef) {
        var _this = this;
        this.heroService = heroService;
        this.route = route;
        this.dialogRef = dialogRef;
        this.talentSearchTerm = '';
        this.enhancementPricingService = enhancementPricingService;
        this.enhancementPricingService.getAscensionPricing().then(function (pricing) {
            _this.pricingTable = pricing;
        });
        this.state = 'initial';
    }
    EditDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.heroService.getHero(+params['id']); })
            .subscribe(function (hero) {
            _this._hero = hero;
        });
    };
    EditDialogComponent.prototype.setState = function (state) {
        this.state = state;
    };
    EditDialogComponent.prototype.getState = function () {
        return 'initial';
    };
    Object.defineProperty(EditDialogComponent.prototype, "hero", {
        get: function () {
            return this._hero;
        },
        set: function (hero) {
            this._hero = hero;
        },
        enumerable: true,
        configurable: true
    });
    EditDialogComponent.prototype.getCostOfAttributeAscension = function (attribute) {
        var price = this.pricingTable.find(function (ascensionPricing) {
            return ascensionPricing.levelFrom === attribute.valueNumber;
        }).priceH;
        return price;
    };
    EditDialogComponent.prototype.getCostOfSkillAscension = function (skill) {
        var rowValue = skill.value;
        if (rowValue === -7)
            rowValue = 0;
        var price = this.pricingTable.find(function (ascensionPricing) {
            return ascensionPricing.levelFrom === rowValue;
        })[skill.getSkillGroup().getAscensionPricingTableColumn()];
        return price;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], EditDialogComponent.prototype, "hero", null);
    EditDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'edit-dialog',
            providers: [
                app_edit_attribute_edit_attribute_component__WEBPACK_IMPORTED_MODULE_3__["EditAttributeComponent"]
                // MatDialogRef
            ],
            template: __webpack_require__(/*! ./edit-dialog.component.html */ "./src/app/edit-dialog/edit-dialog.component.html"),
            styles: [__webpack_require__(/*! ./edit-dialog.component.css */ "./src/app/edit-dialog/edit-dialog.component.css")]
        }),
        __metadata("design:paramtypes", [_domain_hero_service__WEBPACK_IMPORTED_MODULE_2__["HeroService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            app_domain_enhancement_pricing_service__WEBPACK_IMPORTED_MODULE_4__["EnhancementPricingService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
    ], EditDialogComponent);
    return EditDialogComponent;
}());



/***/ }),

/***/ "./src/app/edit-talent/edit-talent.component.css":
/*!*******************************************************!*\
  !*** ./src/app/edit-talent/edit-talent.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".skillTitle {\n    width: 140px;\n    font-weight: 600;\n    text-align: left;\n}"

/***/ }),

/***/ "./src/app/edit-talent/edit-talent.component.html":
/*!********************************************************!*\
  !*** ./src/app/edit-talent/edit-talent.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-col center\">\n  <button (click)=\"increaseSkill()\">\n    <div class=\"flex-row skill\">\n      <div class=\"skillTitle\">{{skill.getSkill().name}}</div>\n      <div class=\"targetValue\"><i class=\"fa fa-tachometer\"></i> {{targetValue}}</div>\n      <div class=\"costOfRaise\"><i class=\"fa fa-dollar\"></i> {{costOfAscension}}</div>\n    </div>\n  </button>\n  <confirmation-sheet *ngIf=\"state === 'toBeConfirmed'\" confirmationText=\"Zahle {{costOfAscension}} um {{skill.skill.name}} zu steigern?\" (confirm)=\"confirmIncrease()\" (cancel)=\"cancelIncrease()\"></confirmation-sheet>\n</div>"

/***/ }),

/***/ "./src/app/edit-talent/edit-talent.component.ts":
/*!******************************************************!*\
  !*** ./src/app/edit-talent/edit-talent.component.ts ***!
  \******************************************************/
/*! exports provided: EditTalentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTalentComponent", function() { return EditTalentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_domain_actualSkill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/domain/actualSkill */ "./src/app/domain/actualSkill.ts");
/* harmony import */ var app_domain_hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/domain/hero */ "./src/app/domain/hero.ts");
/* harmony import */ var app_hero_controls_hero_life_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/hero-controls/hero-life.service */ "./src/app/hero-controls/hero-life.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditTalentComponent = /** @class */ (function () {
    function EditTalentComponent(service) {
        this.service = service;
        this._service = service;
    }
    EditTalentComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(EditTalentComponent.prototype, "targetValue", {
        get: function () {
            if (this.skill.value === -7)
                return 0;
            else
                return this.skill.value + 1;
        },
        enumerable: true,
        configurable: true
    });
    EditTalentComponent.prototype.increaseSkill = function () {
        this._state = 'toBeConfirmed';
    };
    EditTalentComponent.prototype.cancelIncrease = function () {
        this._state = '';
    };
    EditTalentComponent.prototype.confirmIncrease = function () {
        this._service.sendUpate({
            heroId: this.hero.id,
            type: 'updateSkill',
            skillId: this.skill.getSkill().id,
            assignmentId: this.skill.assignmentId,
            value: this.targetValue,
            price: this.costOfAscension
        });
        this.skill.value = this.targetValue;
        this.hero.experience_used += this.costOfAscension;
        // this.heroMU
        this._state = '';
    };
    Object.defineProperty(EditTalentComponent.prototype, "state", {
        get: function () {
            return this._state;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", app_domain_actualSkill__WEBPACK_IMPORTED_MODULE_1__["ActualSkill"])
    ], EditTalentComponent.prototype, "skill", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], EditTalentComponent.prototype, "costOfAscension", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", app_domain_hero__WEBPACK_IMPORTED_MODULE_2__["Hero"])
    ], EditTalentComponent.prototype, "hero", void 0);
    EditTalentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'edit-talent',
            template: __webpack_require__(/*! ./edit-talent.component.html */ "./src/app/edit-talent/edit-talent.component.html"),
            styles: [__webpack_require__(/*! ./edit-talent.component.css */ "./src/app/edit-talent/edit-talent.component.css")]
        }),
        __metadata("design:paramtypes", [app_hero_controls_hero_life_service__WEBPACK_IMPORTED_MODULE_3__["HeroLifeService"]])
    ], EditTalentComponent);
    return EditTalentComponent;
}());



/***/ }),

/***/ "./src/app/experience-display/experience-display.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/experience-display/experience-display.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".badge {\n    font-size: 30px;\n    position: absolute;\n    margin-top: -60px;\n}"

/***/ }),

/***/ "./src/app/experience-display/experience-display.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/experience-display/experience-display.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"badge\">\n   {{experience}} Abenteuerpunkte\n</div>\n<div class=\"smallerBadge\">\n   {{availablePoints}} übrig\n</div>"

/***/ }),

/***/ "./src/app/experience-display/experience-display.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/experience-display/experience-display.component.ts ***!
  \********************************************************************/
/*! exports provided: ExperienceDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceDisplayComponent", function() { return ExperienceDisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExperienceDisplayComponent = /** @class */ (function () {
    function ExperienceDisplayComponent() {
    }
    ExperienceDisplayComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ExperienceDisplayComponent.prototype, "experience", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ExperienceDisplayComponent.prototype, "availablePoints", void 0);
    ExperienceDisplayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'experience-display',
            template: __webpack_require__(/*! ./experience-display.component.html */ "./src/app/experience-display/experience-display.component.html"),
            styles: [__webpack_require__(/*! ./experience-display.component.css */ "./src/app/experience-display/experience-display.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ExperienceDisplayComponent);
    return ExperienceDisplayComponent;
}());



/***/ }),

/***/ "./src/app/fight-display/fight-display.component.css":
/*!***********************************************************!*\
  !*** ./src/app/fight-display/fight-display.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/fight-display/fight-display.component.html":
/*!************************************************************!*\
  !*** ./src/app/fight-display/fight-display.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  fight-display works!\n</p>\n"

/***/ }),

/***/ "./src/app/fight-display/fight-display.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/fight-display/fight-display.component.ts ***!
  \**********************************************************/
/*! exports provided: FightDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FightDisplayComponent", function() { return FightDisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FightDisplayComponent = /** @class */ (function () {
    function FightDisplayComponent() {
    }
    FightDisplayComponent.prototype.ngOnInit = function () {
    };
    FightDisplayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fight-display',
            template: __webpack_require__(/*! ./fight-display.component.html */ "./src/app/fight-display/fight-display.component.html"),
            styles: [__webpack_require__(/*! ./fight-display.component.css */ "./src/app/fight-display/fight-display.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FightDisplayComponent);
    return FightDisplayComponent;
}());



/***/ }),

/***/ "./src/app/fight-setup/fight-setup.component.css":
/*!*******************************************************!*\
  !*** ./src/app/fight-setup/fight-setup.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/fight-setup/fight-setup.component.html":
/*!********************************************************!*\
  !*** ./src/app/fight-setup/fight-setup.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  fight-setup works!\n</p>\n"

/***/ }),

/***/ "./src/app/fight-setup/fight-setup.component.ts":
/*!******************************************************!*\
  !*** ./src/app/fight-setup/fight-setup.component.ts ***!
  \******************************************************/
/*! exports provided: FightSetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FightSetupComponent", function() { return FightSetupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FightSetupComponent = /** @class */ (function () {
    function FightSetupComponent() {
    }
    FightSetupComponent.prototype.ngOnInit = function () {
    };
    FightSetupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fight-setup',
            template: __webpack_require__(/*! ./fight-setup.component.html */ "./src/app/fight-setup/fight-setup.component.html"),
            styles: [__webpack_require__(/*! ./fight-setup.component.css */ "./src/app/fight-setup/fight-setup.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FightSetupComponent);
    return FightSetupComponent;
}());



/***/ }),

/***/ "./src/app/hero-card/hero-card.component.css":
/*!***************************************************!*\
  !*** ./src/app/hero-card/hero-card.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n\tpadding: 0;\n\t/* background-color: #f2f1ed; */\n\tbox-shadow: 0 2px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0px 4px 20px 2px rgba(0,0,0,0.48) !important;\n}\nmat-card-content {\n\tdisplay: block;\n}\nmat-card-title {\n\tmargin-bottom: 0;\n}\n.cardContentContainer {\n\theight: 100px;\n\tposition: relative;\n\toverflow: visible;\n\tpadding: 0px;\n}\nh2 {\n\tmargin:0;\n\tfont-size: 1.75rem;\n}\n.heroValues {\n\theight: 50px;\n}\n.heroAvatar {\n\tposition: absolute;\n\tbottom: 53px;\n\tright: 10px;\n\theight: 190px;\n\tz-index: 10;\n\tdisplay: block;\n}\n.heroAvatar img {\n\theight: 100%;\n}\nul {\n\tlist-style-type: none;\n\tcolor: #4b4b4b;\n\tmargin-left: 20px;\n\tpadding: 0 0 5px 10px;\n\tfont-family: Neucha,sans-serif;\n}\nli::before {\n\tcontent: none;\n}\ndiv.label {\n\twidth: 96px;\n\tfloat:left;\n}\n.headerContent {\n\tcursor: pointer;\n}\n.hero-entry-container {\n\tposition: relative\n}\n.heroes-entry {\n\toverflow: hidden;\n\tbackground-color: #fff;\n}\n.actionsContainer {\n\toverflow: visible;\n}"

/***/ }),

/***/ "./src/app/hero-card/hero-card.component.html":
/*!****************************************************!*\
  !*** ./src/app/hero-card/hero-card.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"hero-entry-container\">\n  <div class=\"heroes-entry border border-3\">\n    \n      <div class=\"headerContainer\" (click)=\"gotoDetail()\">\n        <!--  -->\n        <div class=\"headerContent\">\n          <h2>{{hero.name}}</h2>\n          <span>{{hero.hero_type.name}}, Stufe {{hero.level}}</span>\n        </div>\n      </div>\n      <div class=\"cardContentContainer\" (click)=\"gotoDetail()\">\n        <ul>\n          <li>\n            <div class=\"label\">Attacke:</div>{{hero.currentAttack}}\n          </li>\n          <li>\n            <div class=\"label\">Parade:</div>{{hero.currentParade}}\n          </li>\n          <li>\n            <div class=\"label\">Trefferpunkte:</div>{{hero.currentWeaponDamageText}}\n          </li>\n          <li>\n            <p>Rüstung: 3</p>\n          </li>\n        </ul>\n        \n      </div>\n      <div class=\"actionsContainer\">\n        <hero-controls [hero]=\"hero\">\n        </hero-controls>\n      </div>\n    \n  </div>\n  <div class=\"heroAvatar\" (click)=\"gotoDetail()\">\n    <img class=\"heroAvatarImage no-border\" src=\"{{baseUrl}}{{hero.avatar_small}}\" height=\"100%\" />\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/hero-card/hero-card.component.ts":
/*!**************************************************!*\
  !*** ./src/app/hero-card/hero-card.component.ts ***!
  \**************************************************/
/*! exports provided: HeroCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroCard", function() { return HeroCard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _domain_hero_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../domain/hero.service */ "./src/app/domain/hero.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeroCard = /** @class */ (function () {
    function HeroCard(heroService, router, route) {
        this.heroService = heroService;
        this.router = router;
        this.route = route;
        this.baseUrl = 'http://' + window.location.hostname + ':8000';
    }
    HeroCard.prototype.ngOnInit = function () {
    };
    Object.defineProperty(HeroCard.prototype, "hero", {
        get: function () {
            return this.heroProperty;
        },
        set: function (hero) {
            this.heroProperty = hero;
        },
        enumerable: true,
        configurable: true
    });
    HeroCard.prototype.onSelect = function (hero) {
        this.heroProperty = hero;
        this.gotoDetail();
    };
    HeroCard.prototype.gotoDetail = function () {
        this.router.navigate(['../hero', this.heroProperty.id], { relativeTo: this.route });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], HeroCard.prototype, "hero", null);
    HeroCard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'hero-card',
            template: __webpack_require__(/*! ./hero-card.component.html */ "./src/app/hero-card/hero-card.component.html"),
            styles: [__webpack_require__(/*! ./hero-card.component.css */ "./src/app/hero-card/hero-card.component.css")],
        }),
        __metadata("design:paramtypes", [_domain_hero_service__WEBPACK_IMPORTED_MODULE_1__["HeroService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], HeroCard);
    return HeroCard;
}());



/***/ }),

/***/ "./src/app/hero-controls/hero-controls.component.css":
/*!***********************************************************!*\
  !*** ./src/app/hero-controls/hero-controls.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n.buttons {\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: space-between;\n\twidth: 100%;\n\theight: 50px;\n\t\n} \n\n.buttons button {\n\tborder:none;\n} \n\n.buttons.transparent button {\n\tbackground-color: transparent;\n} \n\n.buttons button:hover {\n\tbox-shadow: none;\n\tbackground-color: transparent;\n} \n\n.container {\n\twidth: 100%;\n\tposition: relative;\n\tborder-top: 1px solid #bbb;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n} \n\n.lifeChangerButton {\n\tbackground-color: #fff;\n\tflex: 1;\n\theight: 100%;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n} \n\n.buttons .lifeChangerButton:not(:last-child) {\n\tborder-right: 1px solid #bbb;\n} \n\n.buttons .lifeChangerButton:first-child  {\n\tborder-bottom-left-radius: 2px;\n} \n\n.buttons .lifeChangerButton:last-child  {\n\tborder-bottom-right-radius: 2px;\n} \n\nlife-display, magic-display {\n\tposition: absolute;\n\t\n} \n\nlife-display {\n\ttop: -15px;\n\ttransition: all .3s ease-out;\n} \n\nmagic-display {\n\ttop: 5px;\n\ttransition: all .3s ease-out;\n} \n\nmagic-display.displayActive, life-display.displayActive {\n\tz-index: 60;\n} \n\nmagic-display.displayInactive, life-display.displayInactive {\n\tz-index: 30;\n\t-webkit-transform: scale(0.7);\n\t        transform: scale(0.7)\n} \n\n.displaysContainer {\n\twidth: 100%;\n\tdisplay:flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items:center;\n}"

/***/ }),

/***/ "./src/app/hero-controls/hero-controls.component.html":
/*!************************************************************!*\
  !*** ./src/app/hero-controls/hero-controls.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"displaysContainer\">\n    <life-display\n      currentLife=\"{{ hero.currentLife }}\"\n      maxLife=\"{{ hero.life }}\"\n      (click)=\"focusLife()\"\n      [ngClass]=\"lifeClass\"\n    >\n    </life-display>\n    <magic-display\n      *ngIf=\"hero.knowsMagic\"\n      currentMagicEnergy=\"{{ hero.currentMagicEnergy }}\"\n      maxMagicEnergy=\"{{ hero.magicEnergy }}\"\n      (click)=\"focusMagic()\"\n      [ngClass]=\"magicClass\"\n    >\n    </magic-display>\n  </div>\n  <div class=\"buttons\" [class.transparent]=\"listMode\">\n    <button class=\"lifeChangerButton\" (click)=\"updateValue(-5)\">\n      <i class=\"fa fa-angle-double-down\" aria-hidden=\"true\"></i>\n    </button>\n    <button class=\"lifeChangerButton\" (click)=\"updateValue(-1)\">\n      <i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i>\n    </button>\n    <button class=\"lifeChangerButton\" (click)=\"updateValue(1)\">\n      <i class=\"fa fa-angle-up\" aria-hidden=\"true\"></i>\n    </button>\n    <button class=\"lifeChangerButton\" (click)=\"updateValue(5)\">\n      <i class=\"fa fa-angle-double-up\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/hero-controls/hero-controls.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/hero-controls/hero-controls.component.ts ***!
  \**********************************************************/
/*! exports provided: HeroControls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroControls", function() { return HeroControls; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _hero_life_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hero-life.service */ "./src/app/hero-controls/hero-life.service.ts");
/* harmony import */ var app_life_display_life_display_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/life-display/life-display.component */ "./src/app/life-display/life-display.component.ts");
/* harmony import */ var app_magic_display_magic_display_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/magic-display/magic-display.component */ "./src/app/magic-display/magic-display.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeroControls = /** @class */ (function () {
    function HeroControls(websocketService) {
        this.service = websocketService;
        this._lifeClass = 'displayActive';
        this._magicClass = 'displayInactive';
    }
    Object.defineProperty(HeroControls.prototype, "hero", {
        get: function () {
            return this._hero;
        },
        set: function (hero) {
            this._hero = hero;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeroControls.prototype, "life", {
        get: function () {
            return this.lifeDisplayNumber;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeroControls.prototype, "magicClass", {
        get: function () {
            return this._magicClass;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeroControls.prototype, "lifeClass", {
        get: function () {
            return this._lifeClass;
        },
        enumerable: true,
        configurable: true
    });
    HeroControls.prototype.focusLife = function () {
        this._magicClass = 'displayInactive';
        this._lifeClass = 'displayActive';
    };
    HeroControls.prototype.focusMagic = function () {
        this._magicClass = 'displayActive';
        this._lifeClass = 'displayInactive';
    };
    HeroControls.prototype.updateValue = function (value) {
        if (this._magicClass === 'displayInactive') {
            this.lifeDisplay.rippleDisplay(value);
            this.service.sendUpate({
                heroId: this._hero.id,
                type: 'lifeUpdate',
                oldLive: this.hero.currentLife,
                value: value
            });
        }
        else {
            this.magicDisplay.rippleDisplay(value);
            this.service.sendUpate({
                heroId: this._hero.id,
                type: 'magicUpdate',
                oldLive: this.hero.currentLife,
                value: value
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(app_life_display_life_display_component__WEBPACK_IMPORTED_MODULE_2__["LifeDisplayComponent"]),
        __metadata("design:type", app_life_display_life_display_component__WEBPACK_IMPORTED_MODULE_2__["LifeDisplayComponent"])
    ], HeroControls.prototype, "lifeDisplay", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(app_magic_display_magic_display_component__WEBPACK_IMPORTED_MODULE_3__["MagicDisplayComponent"]),
        __metadata("design:type", app_magic_display_magic_display_component__WEBPACK_IMPORTED_MODULE_3__["MagicDisplayComponent"])
    ], HeroControls.prototype, "magicDisplay", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], HeroControls.prototype, "hero", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], HeroControls.prototype, "life", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], HeroControls.prototype, "magicClass", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], HeroControls.prototype, "lifeClass", null);
    HeroControls = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'hero-controls',
            template: __webpack_require__(/*! ./hero-controls.component.html */ "./src/app/hero-controls/hero-controls.component.html"),
            styles: [__webpack_require__(/*! ./hero-controls.component.css */ "./src/app/hero-controls/hero-controls.component.css")]
        }),
        __metadata("design:paramtypes", [_hero_life_service__WEBPACK_IMPORTED_MODULE_1__["HeroLifeService"]])
    ], HeroControls);
    return HeroControls;
}());



/***/ }),

/***/ "./src/app/hero-controls/hero-life.service.ts":
/*!****************************************************!*\
  !*** ./src/app/hero-controls/hero-life.service.ts ***!
  \****************************************************/
/*! exports provided: HeroLifeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroLifeService", function() { return HeroLifeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _domain_hero_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../domain/hero.service */ "./src/app/domain/hero.service.ts");
/* harmony import */ var _domain_skills_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../domain/skills.service */ "./src/app/domain/skills.service.ts");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var app_domain_weapon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/domain/weapon */ "./src/app/domain/weapon.ts");
/* harmony import */ var app_domain_armor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/domain/armor */ "./src/app/domain/armor.ts");
/* harmony import */ var app_domain_inventoryItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/domain/inventoryItem */ "./src/app/domain/inventoryItem.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { Rx } from 'rxjs';






var HeroLifeService = /** @class */ (function () {
    function HeroLifeService(http, heroService, toastr, skillService) {
        var _this = this;
        this.http = http;
        this.toastr = toastr;
        this.skillService = skillService;
        this.wsUrl = 'ws://' + window.location.hostname + ':8000/heroes';
        this.wsClientId = Math.random().toString(36).substring(7);
        this.heroService = heroService;
        this.createWebsocket();
        this.heroSubject = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.heroSubject.subscribe(this.handleIncommingMessage.bind(this));
        this.socket.onmessage = (function (evt) { return _this.heroSubject.next(evt); });
        this.socket.onopen = function (event) {
            _this.toastr.success('Du bist online.');
        };
        this.socket.onerror = function (error) {
            console.log('baaaad');
        };
        this.socket.addEventListener('error', function (event) {
            console.log('hey');
            event.stopPropagation();
        });
        this.socket.addEventListener('close', function (event) {
            _this.connectionInterval = window.setInterval(_this.createWebsocket.bind(_this), 2000);
        });
    }
    HeroLifeService.prototype.pollForConnection = function () {
        this.socket.send(JSON.stringify({ type: 'poll' }));
    };
    HeroLifeService.prototype.handleConnectionError = function (error) {
        this.toastr.error('Ein Fehler bei der Kommunikation!', 'Mist');
    };
    HeroLifeService.prototype.createWebsocket = function () {
        this.socket = new WebSocket(this.wsUrl);
        if (this.socket)
            clearInterval(this.connectionInterval);
    };
    HeroLifeService.prototype.sendUpate = function (data) {
        this.socket.send(JSON.stringify(data));
    };
    HeroLifeService.prototype.handleIncommingMessage = function (message) {
        var _this = this;
        var messageData = JSON.parse(message.data);
        this.heroService.getHero(messageData.heroId).then(function (hero) {
            switch (messageData.type) {
                case 'lifeUpdate':
                    hero.life_lost = hero.life_lost - messageData.value;
                    break;
                case 'magicUpdate':
                    hero.magicEnergy_lost = hero.magicEnergy_lost - messageData.value;
                    break;
                case 'updateAttribute':
                    // TODO: update hero's attribute
                    break;
                case 'addWeapon':
                    _this.skillService.getSkill(messageData['skill']).then(function (skill) {
                        hero.addWeapon(new app_domain_weapon__WEBPACK_IMPORTED_MODULE_8__["Weapon"](messageData['weaponId'], messageData['weaponName'], messageData['damageDice'], messageData['damageAddPoints'], messageData['extraPointsFromKk'], skill));
                        _this.toastr.success(hero.name + " hat eine Waffe mehr!", 'Bäähm!');
                    });
                    break;
                case 'deleteWeapon':
                    hero.deleteWeaponById(messageData['weaponId']);
                    break;
                case 'addArmor':
                    hero.addArmor(new app_domain_armor__WEBPACK_IMPORTED_MODULE_9__["Armor"](messageData['armorId'], messageData['armorName'], messageData['armorRS'], messageData['armorBE']));
                    _this.toastr.success(hero.name + " ist nun besser ger\u00FCstet!", 'Zack!');
                    break;
                case 'deleteArmor':
                    hero.deleteArmorById(messageData['armorId']);
                    _this.toastr.success(hero.name + " muss nun aufpassen, er hat weniger Schutz!", 'Zack!');
                    break;
                case 'addInventoryItem':
                    hero.addInventoryItem(new app_domain_inventoryItem__WEBPACK_IMPORTED_MODULE_10__["InventoryItem"](messageData['inventoryId'], messageData['name'], messageData['amount'], messageData['weight']));
                    break;
                case 'deleteInventoryItem':
                    hero.deleteInventoryItemById(messageData['inventoryItemId']);
                    break;
                case 'updateInventoryItem':
                    hero.updateInventoryItemAmount(messageData['inventoryItemId'], messageData['amount']);
                    break;
                default:
                    break;
            }
        });
    };
    HeroLifeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _domain_hero_service__WEBPACK_IMPORTED_MODULE_2__["HeroService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"], _domain_skills_service__WEBPACK_IMPORTED_MODULE_3__["SkillService"]])
    ], HeroLifeService);
    return HeroLifeService;
}());



/***/ }),

/***/ "./src/app/herodetail/hero-detail.component.css":
/*!******************************************************!*\
  !*** ./src/app/herodetail/hero-detail.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".heroDetailHeader {\n  /*padding: 20px 20px 0 20px;*/\n  display: flex;\n}\n.shadow {\n  /* box-shadow: 0px 4px 8px 2px rgba(0,0,0,0.75); */\n  margin-bottom: 40px !important;\n  /* background-color: rgba(255, 255, 255, 1); */\n  min-height: 500px;\n}\n.page {\n  padding-top: 10px;\n  height: 100%;\n}\n.skillEntry i {\n  margin-right: 5px;\n}\n.characterDetailNavButton {\n  color: #fff;\n  font-size: 2rem;\n  flex:1;\n  padding:5px;\n}\n.headerContent p {\n  margin-top: 0;\n}\n/** content sections **/\n#mainAttributes {\n  background-image: url('/assets/hero-background_desaturated.jpg');\n  background-size:300px;\n  background-position: 100px 0;\n  background-repeat: no-repeat;\n}\n#combatAttributes {\n  background-image: url('/assets/sword_drawn_desaturated.jpg');\n  background-size:200px;\n  background-position: right 100px top 50px;\n  background-repeat: no-repeat;\n}\n.heroTalents {\n  background-image: url('/assets/hero-tavern_desaturated.jpg');\n  background-size:300px;\n  background-position: right 100px top 50px;\n  background-repeat: no-repeat;\n}\n.heroSpells {\n  background-image: url('/assets/wizard_desaturated.jpg');\n  background-size:500px;\n  background-position: right 10px top 10px;\n  background-repeat: no-repeat;\n}\n.inventory {\n  /* background-image: url('/assets/inventory-desaturated.jpg'); */\n  background-size:500px;\n  background-position: right 10px top 10px;\n  background-repeat: no-repeat;\n}\n/** end content sections **/\nlabel.long {\n  width: 150px;\n  display: none;\n}\nlabel.short {\n  width: 40px;\n}\n#avatarContainer {\n  order: 1;\n  border-bottom: 1px solid #999;\n  background-color: #fff;\n  margin-top: -15px;\n  margin-right: 5px;\n}\n#propertiesContainer {\n  order: 2;\n}\n#attributesContainer {\n  order: 3;\n}\n.heroAvatarImage,\n.heroAvatar {\n  height: 150px;\n}\n.heroAvatarImage {\n  background-color: white;\n  border-color: #999;\n}\n.heroAvatar {\n  margin-top: -15px;\n  margin-bottom: -15px;\n  z-index: 100;\n}\n.actionsContainer {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  z-index: 1000;\n}\n.talente {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n.skillGroupEntries {\n  width: 100%;\n  /* display: flex;\n  flex-wrap: wrap; */\n}\n.experienceContainer {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\nexperience-display {\n  width: 300px;\n}\n.talentSearchBox {\n  background-color: rgba(255, 255, 255, 1);\n  border-radius: 4px;\n  margin: -20px 0 10px 0;\n  padding: 10px;\n}\n.skillGroupTitle {\n  padding: 10px 0;\n}\ncombat-data-display {\n  flex: 1\n}\n.skillEntry,\n.weaponEntry {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  flex-wrap: wrap;\n  font-size: 0.8rem;\n  align-items: center;\n  justify-content: stretch;\n  float:left;\n}\ntalent-card {\n  flex: 1;\n}\n.skillContent,\n.weaponEntry {\n  margin: 1px;\n  /* border: 1px solid #ddd; */\n  background-color: #fff;\n  flex: 1;\n  display: flex;\n  flex-wrap: wrap;\n  padding: 4px;\n  align-items: center;\n}\n.weaponEntry {\n  min-height: 30px;\n  padding-left: 10px;\n}\n.skillTitle {\n  width: 150px;\n  padding-left: 10px;\n  font-size: 0.9rem;\n  font-weight: 600;\n}\n.skillBe {\n  width: 60px;\n}\n.skillValue {\n  width: 30px;\n  color: #AD2003;\n}\n.dices,\n.fightDices {\n  display: flex;\n  flex-direction: row;\n  padding: 0 10px;\n  align-items: center\n}\n.dice {\n  width: 30px;\n  text-align: center;\n}\n.fightDice {\n  width: 45px;\n}\n/** Search box **/\n::-webkit-input-placeholder {\n  text-align: center;\n}\n:-moz-placeholder {\n  /* Firefox 18- */\n  text-align: center;\n}\n::-moz-placeholder {\n  /* Firefox 19+ */\n  text-align: center;\n}\n:-ms-input-placeholder {\n  text-align: center;\n}\ninput.talentSearchInbox {\n  text-align: center;\n  height: 30px;\n  width: 100%;\n}\nform.search {\n  width: 100%;\n  max-width: 1200px;\n  display: flex;\n  flex-direction: column;\n\n}\n.mat-option.skillOption {\n  height: auto;\n  line-height: 12px;\n}\nmat-radio-button {\n  width: 100%;\n}\n.weaponChoiceLabel div {\n  float: left;\n  padding-right: 20px;\n}\n.weaponChoiceLabel :nth-child(1) {\n  width: 120px\n}\n.inventoryWeaponItem {\n  display: flex;\n  \n}\n.inventoryItemName {\n  width: 200px\n}\n.weaponDamage {\n  width: 80px\n}\n.inventoryItemAction {\n  width: 40px\n}\n@media (min-width: 48em) {\n\n  #avatarContainer {\n    order: 3;\n    background-color: transparent;\n    border-bottom: none;\n  }\n\n  #propertiesContainer {\n    order: 1;\n  }\n\n  #attributesContainer {\n    order: 2;\n  }\n\n  .heroAvatarImage,\n  .heroAvatar {\n    height: 300px;\n  }\n\n  label.long {\n    display: inline;\n  }\n\n  label.short {\n    display: none;\n  }\n\n  .skillEntry {\n    /* width: 50%; */\n    float: left;\n  }\n}\n"

/***/ }),

/***/ "./src/app/herodetail/hero-detail.component.html":
/*!*******************************************************!*\
  !*** ./src/app/herodetail/hero-detail.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <!-- <mat-sidenav #sidenav (keydown.escape)=\"close('escape')\" disableClose> -->\n    <detail-navigation [hero]=\"hero\" (navToArea)=\"showArea($event)\">\n\n    </detail-navigation>\n  <!-- </mat-sidenav> -->\n\n\n    <div class=\"page flex-col center\"> \n      <div class=\"pageContent\">\n        <div class=\"sheet\">\n          <div  class=\"\" *ngIf=\"hero\"\n            style=\"flex: 1; \">\n            <div class=\"headerContainer contentBox\">\n              <a class=\"menuItem\" name=\"Allgemein\"></a>\n              <!--  -->\n              <div class=\"headerContent\">\n                <div class=\"flex-row\">\n                  <div class=\"flex-item flex-col\">\n                    <h1>{{hero.name}}</h1>\n                    <p>{{hero.hero_type.name}}</p>\n                  </div>\n                  \n                </div>\n              </div>\n            </div>\n            <div class=\"Grid Grid--full Grid-cell\">\n              <div class=\"actionsContainer Grid-cell\">\n                <hero-controls [hero]=\"hero\">\n                </hero-controls>\n              </div>\n            </div>\n            <div *ngIf=\"detailArea === 'character'\" class=\"characterDetails\">  \n              <div class=\"experienceContainer\">\n                <experience-display  [experience]=\"hero.experience\" [availablePoints]=\"hero.availablePoints\"></experience-display>\n              </div>\n              <div class=\"flex-col\">\n                <div id=\"propertiesBox\" id=\"mainAttributes\" class=\"contentBox Grid Grid--cols-2\">\n                  <div class=\"Grid-cell flex-item flex-col\">\n                    <basic-data-display [hero]=\"hero\" class=\"\"></basic-data-display>                    \n                    <attributes-display [hero]=\"hero\" class=\"\"></attributes-display>\n                  </div>\n                  <div id=\"avatarContainer\" class=\"Grid-cell flex-col center\">\n                    <div class=\"heroAvatar large flex-item\">\n                      <img class=\"heroAvatarImage\" src=\"{{baseUrl}}{{hero.avatar_small}}\" />\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"contentBox flex-item\" id=\"combatAttributes\">\n                <a id=\"fightValueContainerAnchor\"></a>\n                <combat-data-display [hero]=\"hero\"></combat-data-display>\n              </div>\n            </div>\n            <div *ngIf=\"detailArea === 'talents'\" class=\"contentBox flex-item flex-row heroTalents\">\n              <talent-search mode=\"viewTalents\" [hero]=\"hero\" [searchActive]=\"searchActive\" class=\"flex-item\"></talent-search>\n            </div>\n            <div *ngIf=\"hero.knowsMagic && detailArea === 'spells'\" class=\"contentBox flex-row heroSpells\">\n              <spell-search [hero]=\"hero\" class=\"flex-item\"></spell-search>\n            </div>\n            <div *ngIf=\"detailArea === 'inventory'\" class=\"inventory\">\n              <inventory-display [hero]=\"hero\"></inventory-display>\n            </div>\n            <div *ngIf=\"detailArea === 'edit'\" class=\"editHeroValues\">\n              <edit-dialog [hero]=\"hero\"></edit-dialog>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>"

/***/ }),

/***/ "./src/app/herodetail/hero-detail.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/herodetail/hero-detail.component.ts ***!
  \*****************************************************/
/*! exports provided: HeroDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroDetailComponent", function() { return HeroDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _domain_hero_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../domain/hero.service */ "./src/app/domain/hero.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/switchMap */ "./node_modules/rxjs-compat/_esm5/add/operator/switchMap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HeroDetailComponent = /** @class */ (function () {
    function HeroDetailComponent(heroService, route, location) {
        this.heroService = heroService;
        this.route = route;
        this.location = location;
        this.talentSearchTerm = '';
        this.talentSearchActive = false;
        this.detailArea = 'character';
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.baseUrl = 'http://' + window.location.hostname + ':8000';
        var that = this;
        new Promise(function (resolve, reject) {
            var heroTimer = setInterval(function () {
                if (that.hero && that.hero.skills) {
                    console.log(that.hero.skills);
                    resolve(that.filteredSkills = that.searchCtrl.valueChanges
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (searchTerm) {
                        return searchTerm ? that.filterSkills(searchTerm) : that.hero.skills.slice();
                    })));
                    clearTimeout(heroTimer);
                }
            }, 100);
        });
    }
    HeroDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.heroService.getHero(+params['id']); })
            .subscribe(function (hero) {
            _this.hero = hero;
        });
        ;
        this.breakpoint = (window.innerWidth <= 400) ? 1 : 2;
    };
    HeroDetailComponent.prototype.filterSkills = function (name) {
        return this.hero.skills.filter(function (skill) {
            return skill.getSkill().name.toLowerCase().indexOf(name.toLowerCase()) !== -1;
        });
    };
    HeroDetailComponent.prototype.navToAnchor = function (anchor) {
    };
    HeroDetailComponent.prototype.onSectionChange = function (event) {
        console.log('hey');
    };
    HeroDetailComponent.prototype.showArea = function (areaTarget) {
        this.detailArea = areaTarget;
    };
    Object.defineProperty(HeroDetailComponent.prototype, "detailArea", {
        get: function () {
            return this._detailArea;
        },
        set: function (target) {
            this._detailArea = target;
        },
        enumerable: true,
        configurable: true
    });
    HeroDetailComponent.prototype.removeWeaponFromInventory = function (weapon) {
        debugger;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HeroDetailComponent.prototype, "_detailArea", void 0);
    HeroDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'hero-details',
            template: __webpack_require__(/*! ./hero-detail.component.html */ "./src/app/herodetail/hero-detail.component.html"),
            styles: [__webpack_require__(/*! ./hero-detail.component.css */ "./src/app/herodetail/hero-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_domain_hero_service__WEBPACK_IMPORTED_MODULE_3__["HeroService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], HeroDetailComponent);
    return HeroDetailComponent;
}());



/***/ }),

/***/ "./src/app/heroes/heroes.component.css":
/*!*********************************************!*\
  !*** ./src/app/heroes/heroes.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.heroes-container {\n\twidth: 100%;\n\tdisplay: flex;\n\tjustify-content: center;\n}\n\n.heroes-list {\n\tpadding: 0;\n\twidth: 100%;\n\tmax-width: 400px;\n}\n\nhero-card {\n\tmargin-bottom: 15px;\n\tdisplay: block;\n}"

/***/ }),

/***/ "./src/app/heroes/heroes.component.html":
/*!**********************************************!*\
  !*** ./src/app/heroes/heroes.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page heroes-container\">\n    <div>\n        \n    </div>\n    <div class=\"heroes-list\">\n        <hero-card *ngFor=\"let hero of heroes\" [class.selected]=\"hero === selectedHero\" [hero]=\"hero\">\n        </hero-card>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/heroes/heroes.component.ts":
/*!********************************************!*\
  !*** ./src/app/heroes/heroes.component.ts ***!
  \********************************************/
/*! exports provided: HeroesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroesComponent", function() { return HeroesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _domain_hero_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../domain/hero.service */ "./src/app/domain/hero.service.ts");
/* harmony import */ var _domain_skills_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../domain/skills.service */ "./src/app/domain/skills.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeroesComponent = /** @class */ (function () {
    function HeroesComponent(heroService, skillService, router) {
        this.heroService = heroService;
        this.skillService = skillService;
        this.router = router;
        this.getHeroes();
        this.getSkills();
    }
    HeroesComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
    };
    HeroesComponent.prototype.getSkills = function () {
        var _this = this;
        this.skillService.getSkills().then(function (skills) { return _this.skills = skills; });
    };
    HeroesComponent.prototype.ngOnInit = function () {
    };
    HeroesComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
        this.gotoDetail();
    };
    HeroesComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/hero', this.selectedHero.id]);
    };
    HeroesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'heroes-list',
            template: __webpack_require__(/*! ./heroes.component.html */ "./src/app/heroes/heroes.component.html"),
            styles: [__webpack_require__(/*! ./heroes.component.css */ "./src/app/heroes/heroes.component.css")]
        }),
        __metadata("design:paramtypes", [_domain_hero_service__WEBPACK_IMPORTED_MODULE_1__["HeroService"],
            _domain_skills_service__WEBPACK_IMPORTED_MODULE_2__["SkillService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HeroesComponent);
    return HeroesComponent;
}());



/***/ }),

/***/ "./src/app/image-popup/image-popup.component.css":
/*!*******************************************************!*\
  !*** ./src/app/image-popup/image-popup.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/image-popup/image-popup.component.html":
/*!********************************************************!*\
  !*** ./src/app/image-popup/image-popup.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div mat-dialog-content>\n <img [src]=\"data.url\">\n</div>"

/***/ }),

/***/ "./src/app/image-popup/image-popup.component.ts":
/*!******************************************************!*\
  !*** ./src/app/image-popup/image-popup.component.ts ***!
  \******************************************************/
/*! exports provided: ImagePopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagePopupComponent", function() { return ImagePopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ImagePopupComponent = /** @class */ (function () {
    function ImagePopupComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ImagePopupComponent.prototype.ngOnInit = function () {
    };
    ImagePopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-image-popup',
            template: __webpack_require__(/*! ./image-popup.component.html */ "./src/app/image-popup/image-popup.component.html"),
            styles: [__webpack_require__(/*! ./image-popup.component.css */ "./src/app/image-popup/image-popup.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], ImagePopupComponent);
    return ImagePopupComponent;
}());



/***/ }),

/***/ "./src/app/inventory-display/inventory-display.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/inventory-display/inventory-display.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".inventoryItem {\n  display: flex;\n  min-height: 30px;\n  align-items: center;\n}\n\n.spellGroupTitle {\n  font-size: 24px;\n  margin-top: 15px;\n  margin-bottom: 10px;\n}\n\nconfirmation-sheet {\n  margin-top: -20px;\n  display: block;\n}\n\nbutton.addButton {\n  margin-bottom: 8px;\n  z-index: 10;\n}\n\n.addWeaponForm span {\n  display: block;\n  padding-top: 15px;\n  padding-bottom: 5px;\n}\n\n.addButton {\n  width: 300px;\n}\n\n.inventoryItemName {\n  width: 200px;\n}\n\n.inventoryDamage {\n  width: 100px;\n}\n\n.inventoryItemAction {\n  padding-left: 20px;\n}\n"

/***/ }),

/***/ "./src/app/inventory-display/inventory-display.component.html":
/*!********************************************************************!*\
  !*** ./src/app/inventory-display/inventory-display.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"padded flex-col center\">   \n  <h4 class=\"spellGroupTitle\">Waffen</h4>\n  <button (click)=\"addWeaponToInventory()\" class=\"addButton\">\n    <i class=\"fa fa-plus-square\"></i> Waffe hinzufügen\n  </button>\n  <div class=\"addInventoryItem\" *ngIf=\"showAddWeaponSheet === true\">\n    <confirmation-sheet showExternalTemplate=\"true\" (confirm)=\"addWeapon()\" (cancel)=\"cancelAddWeaponToInventory()\">\n      <div class=\"addWeaponForm\">\n        <div>Neue Waffe</div>\n        <span>Name</span>\n        <input [(ngModel)]=\"newWeapon.name\" />\n        <span>Trefferpunkte Würfel</span>\n        <input [(ngModel)]=\"newWeapon.damageDice\" />\n        <span>Trefferpunkte Zusatzpunkte</span>\n        <input [(ngModel)]=\"newWeapon.damageAddPoints\" />\n        <span>Körperkraft Zuschlag</span>\n        <input [(ngModel)]=\"newWeapon.extraPointsFromKk\" />\n        <span>Kampftalent</span>\n        <select [(ngModel)]=\"selectedSkillId\">\n          <option *ngFor=\"let weaponSkill of weaponSkills\" [value]=\"weaponSkill.id\" >{{weaponSkill.name}}</option>\n        </select>\n      </div>\n    </confirmation-sheet>\n  </div>\n  <div *ngFor=\"let weapon of hero.weapons\" class=\"inventoryItem\">\n    <div class=\"inventoryItemName\">{{weapon.name}}</div>\n    <div class=\"inventoryDamage\">{{weapon.damageTextGeneral}}</div>\n    \n    <div class=\"row flex-spaces child-borders\">\n      <button class=\"paper-btn margin\" (click)=\"removeWeaponFromInventory(weapon)\"><i class=\"fa fa-trash\"></i></button>\n    </div>\n    <input class=\"modal-state\" id=\"modal-{{weapon.id}}\" type=\"checkbox\">\n    \n  </div> \n\n</div>\n<div class=\"padded flex-col center\">\n  <h4 class=\"spellGroupTitle\">Rüstung</h4>\n  <button class=\"addButton\" (click)=\"addArmorToInventory()\">\n    <i class=\"fa fa-plus-square\"></i> Rüstung hinzufügen\n  </button>\n  <div class=\"addInventoryItem\" *ngIf=\"showAddArmorSheet === true\">\n    <confirmation-sheet showExternalTemplate=\"true\" (confirm)=\"addArmor()\" (cancel)=\"cancelAddArmorToInventory()\">\n      <div class=\"addWeaponForm\">\n        <div>Neue Rüstung</div>\n        <span>Name</span>\n        <input [(ngModel)]=\"newArmor.name\" />\n        <span>Rüstungsschutz</span>\n        <input [(ngModel)]=\"newArmor.rs\" />\n        <span>Behinderung</span>\n        <input [(ngModel)]=\"newArmor.behinderung\" />\n      </div>\n    </confirmation-sheet>\n  </div>\n  <div *ngFor=\"let armor of hero.armor\" class=\"inventoryItem\">\n    <div class=\"inventoryItemName\">{{armor.name}}</div>\n    <div class=\"inventoryDamage\">{{armor.rs}}</div>\n    <button (click)=\"removeArmorFromInventory(armor)\"><i class=\"fa fa-trash\"></i></button>\n  </div> \n</div>\n\n<div class=\"padded flex-col center\">   \n  <h4  class=\"spellGroupTitle\">Inventar</h4>\n  <button class=\"addButton\" (click)=\"addInventoryToInventory()\">\n    <i class=\"fa fa-plus-square\"></i> Inventar hinzufügen\n  </button>\n  <div class=\"addInventoryItem\" *ngIf=\"showAddInventorySheet === true\">\n    <confirmation-sheet showExternalTemplate=\"true\" (confirm)=\"addInventory()\" (cancel)=\"cancelAddInventoryToInventory()\">\n      <div class=\"addWeaponForm\">\n        <div>Neues Ding</div>\n        <span>Name</span>\n        <input [(ngModel)]=\"newInventoryItem.name\" />\n        <span>Menge</span>\n        <input [(ngModel)]=\"newInventoryItem.amount\" />\n        <span>Gewicht</span>\n        <input [(ngModel)]=\"newInventoryItem.weight\" />\n      </div>\n    </confirmation-sheet>\n  </div>\n  <div *ngFor=\"let inventoryItem of hero.inventory\" class=\"inventoryItem\">\n    <div class=\"inventoryItemName\">{{inventoryItem.name}}</div>\n    <div class=\"inventoryItemName\">{{inventoryItem.amount}}</div>\n    <div class=\"inventoryItemName\">{{inventoryItem.weight}}</div>\n    <button (click)=\"addToInventoryAmount(inventoryItem)\"><i class=\"fa fa-plus\"></i></button>\n    <button (click)=\"subtractFromInventoryAmount(inventoryItem)\" [class.disabled]=\"inventoryItem.amount < 1\"><i class=\"fa fa-minus\"></i></button>\n    <button (click)=\"removeInventoryItemFromInventory(inventoryItem)\"><i class=\"fa fa-trash\"></i></button>\n  </div> \n</div>"

/***/ }),

/***/ "./src/app/inventory-display/inventory-display.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/inventory-display/inventory-display.component.ts ***!
  \******************************************************************/
/*! exports provided: InventoryDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryDisplayComponent", function() { return InventoryDisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_domain_hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/domain/hero */ "./src/app/domain/hero.ts");
/* harmony import */ var app_domain_skills_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/domain/skills.service */ "./src/app/domain/skills.service.ts");
/* harmony import */ var app_domain_weapons_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/domain/weapons.service */ "./src/app/domain/weapons.service.ts");
/* harmony import */ var app_domain_armor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/domain/armor.service */ "./src/app/domain/armor.service.ts");
/* harmony import */ var app_domain_inventory_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/domain/inventory.service */ "./src/app/domain/inventory.service.ts");
/* harmony import */ var app_domain_weapon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/domain/weapon */ "./src/app/domain/weapon.ts");
/* harmony import */ var app_domain_inventoryItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/domain/inventoryItem */ "./src/app/domain/inventoryItem.ts");
/* harmony import */ var app_domain_armor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/domain/armor */ "./src/app/domain/armor.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_confirm_deletion_confirm_deletion_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/confirm-deletion/confirm-deletion.component */ "./src/app/confirm-deletion/confirm-deletion.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var InventoryDisplayComponent = /** @class */ (function () {
    function InventoryDisplayComponent(skillService, weaponService, armorService, inventoryService, dialog) {
        this.skillService = skillService;
        this.weaponService = weaponService;
        this.armorService = armorService;
        this.inventoryService = inventoryService;
        this.dialog = dialog;
        this.showAddWeaponSheet = false;
        this.showAddArmorSheet = false;
        this.showAddInventorySheet = false;
    }
    InventoryDisplayComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.skillService.getWeaponSkills().then(function (weaponSkills) {
            _this.weaponSkills = weaponSkills;
            _this.newWeapon = new app_domain_weapon__WEBPACK_IMPORTED_MODULE_6__["Weapon"](null, 'new weapon', 1, 4, 14, _this.weaponSkills[0]);
            _this.newArmor = new app_domain_armor__WEBPACK_IMPORTED_MODULE_8__["Armor"](null, 'Neue Rüstung', 2, 2),
                _this.newInventoryItem = new app_domain_inventoryItem__WEBPACK_IMPORTED_MODULE_7__["InventoryItem"](null, 'Neues Ding', 1, 1);
        });
    };
    /** weapon maintenance */
    InventoryDisplayComponent.prototype.addWeaponToInventory = function () {
        this.showAddWeaponSheet = true;
    };
    InventoryDisplayComponent.prototype.addWeapon = function () {
        var selectedSkillId = this.selectedSkillId;
        var skill = this.weaponSkills.find(function (weaponSkill) {
            return weaponSkill.id == selectedSkillId;
        });
        this.newWeapon.skill = skill;
        this.weaponService.addWeapon(this.newWeapon, this.hero);
        this.showAddWeaponSheet = false;
    };
    InventoryDisplayComponent.prototype.cancelAddWeaponToInventory = function () {
        this.showAddWeaponSheet = false;
    };
    InventoryDisplayComponent.prototype.removeWeaponFromInventory = function (weapon) {
        this._weaponToDelete = weapon;
        this.deletionDialogRef = this.dialog.open(app_confirm_deletion_confirm_deletion_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmDeletionComponent"], { data: new app_confirm_deletion_confirm_deletion_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmationData"]('Möchtest Du das Ding wegwerfen?', 'Es handelt sich dabei um die Waffe <strong>"' + weapon.name + '"</strong>') });
        this.deletionDialogRef.componentInstance.confirm.subscribe(this.deleteWeapon.bind(this));
        this.deletionDialogRef.componentInstance.cancel.subscribe(this.cancelDeletion.bind(this));
    };
    InventoryDisplayComponent.prototype.deleteWeapon = function () {
        this.weaponService.deleteWeapon(this._weaponToDelete, this.hero);
        this.deletionDialogRef.close();
    };
    /** armor maintenance*/
    InventoryDisplayComponent.prototype.addArmorToInventory = function () {
        this.showAddArmorSheet = true;
    };
    InventoryDisplayComponent.prototype.removeArmorFromInventory = function (armor) {
        this._armorToDelete = armor;
        this.deletionDialogRef = this.dialog.open(app_confirm_deletion_confirm_deletion_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmDeletionComponent"], { data: new app_confirm_deletion_confirm_deletion_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmationData"]('Möchtest Du die Rüstung wegwerfen?', 'Es handelt sich dabei um die das Rüstungsteil <strong>"' + armor.name + '"</strong>') });
        this.deletionDialogRef.componentInstance.confirm.subscribe(this.deleteArmor.bind(this));
        this.deletionDialogRef.componentInstance.cancel.subscribe(this.cancelDeletion.bind(this));
    };
    InventoryDisplayComponent.prototype.cancelAddArmorToInventory = function () {
        this.showAddArmorSheet = false;
    };
    InventoryDisplayComponent.prototype.addArmor = function () {
        this.armorService.addArmor(this.newArmor, this.hero);
        this.showAddArmorSheet = false;
    };
    InventoryDisplayComponent.prototype.deleteArmor = function () {
        this.armorService.deleteArmor(this._armorToDelete, this.hero);
        this.deletionDialogRef.close();
    };
    /** general inventory maintenance */
    InventoryDisplayComponent.prototype.addInventoryToInventory = function () {
        this.showAddInventorySheet = true;
    };
    InventoryDisplayComponent.prototype.addInventory = function () {
        this.inventoryService.addInventory(this.newInventoryItem, this.hero);
        this.showAddInventorySheet = false;
    };
    InventoryDisplayComponent.prototype.cancelAddInventoryToInventory = function () {
        this.showAddInventorySheet = false;
    };
    InventoryDisplayComponent.prototype.removeInventoryItemFromInventory = function (inventoryItem) {
        this._inventoryItemToDelete = inventoryItem;
        this.deletionDialogRef = this.dialog.open(app_confirm_deletion_confirm_deletion_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmDeletionComponent"], { data: new app_confirm_deletion_confirm_deletion_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmationData"]('Brauchst Du das Stück nicht mehr?', 'Es handelt sich dabei um <strong>"' + inventoryItem.name + '"</strong>') });
        this.deletionDialogRef.componentInstance.confirm.subscribe(this.deleteInventory.bind(this));
        this.deletionDialogRef.componentInstance.cancel.subscribe(this.cancelDeletion.bind(this));
    };
    InventoryDisplayComponent.prototype.deleteInventory = function () {
        this.inventoryService.deleteInventory(this._inventoryItemToDelete, this.hero);
        this.deletionDialogRef.close();
    };
    InventoryDisplayComponent.prototype.subtractFromInventoryAmount = function (inventoryItem) {
        if (inventoryItem.amount > 0)
            this.inventoryService.setInventoryItemAmount(inventoryItem, this.hero, inventoryItem.amount - 1);
    };
    InventoryDisplayComponent.prototype.addToInventoryAmount = function (inventoryItem) {
        this.inventoryService.setInventoryItemAmount(inventoryItem, this.hero, inventoryItem.amount + 1);
    };
    InventoryDisplayComponent.prototype.cancelDeletion = function () {
        this.deletionDialogRef.close();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", app_domain_hero__WEBPACK_IMPORTED_MODULE_1__["Hero"])
    ], InventoryDisplayComponent.prototype, "hero", void 0);
    InventoryDisplayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'inventory-display',
            template: __webpack_require__(/*! ./inventory-display.component.html */ "./src/app/inventory-display/inventory-display.component.html"),
            styles: [__webpack_require__(/*! ./inventory-display.component.css */ "./src/app/inventory-display/inventory-display.component.css")]
        }),
        __metadata("design:paramtypes", [app_domain_skills_service__WEBPACK_IMPORTED_MODULE_2__["SkillService"], app_domain_weapons_service__WEBPACK_IMPORTED_MODULE_3__["WeaponService"], app_domain_armor_service__WEBPACK_IMPORTED_MODULE_4__["ArmorService"], app_domain_inventory_service__WEBPACK_IMPORTED_MODULE_5__["InventoryService"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]])
    ], InventoryDisplayComponent);
    return InventoryDisplayComponent;
}());



/***/ }),

/***/ "./src/app/life-display/life-display.component.css":
/*!*********************************************************!*\
  !*** ./src/app/life-display/life-display.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mainStatus {\t\n\t/* ; */\n\t/* top: -16px;\n\tleft: 50%;\n\tz-index: 30; */\n}\n\n.statusValueContainer {\n    height: 30px;\n    width: 120px;\n    display: flex;\n    justify-content: center;\n\tposition: relative;\n    /* left: -50%; */\n}\n\n.mainStatusValue {\n\theight: 30px;\n\twidth: 120px;\n\tborder-radius: 60px;\n\tborder: 1px solid #bbb;\n\tbackground-color: #fff;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n\tpadding: 2px 0 0 0;\n\tfont-size: 1.5rem;\n\tposition: relative;\n\t\n}\n\n.statusValueText {\n    z-index: 10;\n}\n\n.control-icon {\n\twidth: 40px;\n\theight: 40px;\n\tposition: absolute;\n    top: -25px;\n    left: 40px;\n\tz-index: 200;\n}"

/***/ }),

/***/ "./src/app/life-display/life-display.component.html":
/*!**********************************************************!*\
  !*** ./src/app/life-display/life-display.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mainStatus\">\n  <img class=\"control-icon no-border\" src=\"/assets/icons/heart.png\"/>\n  <div  class=\"mainStatusValue good\">\n    <div matRipple matRipple \n    matRippleColor=\"#ff0000\"\n    matRippleRadius=\"20\" \n    matRippleCentered=\"true\"\n    matRippleDisabled=\"true\"\n    class=\"statusValueContainer\">\n      <div class=\"statusValueText\">{{currentLife}}/{{maxLife}}</div>\n    </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/life-display/life-display.component.ts":
/*!********************************************************!*\
  !*** ./src/app/life-display/life-display.component.ts ***!
  \********************************************************/
/*! exports provided: LifeDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LifeDisplayComponent", function() { return LifeDisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _hero_controls_hero_life_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../hero-controls/hero-life.service */ "./src/app/hero-controls/hero-life.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var rippleColors = {
    good: '#C4F779',
    bad: '#E16772'
};
var LifeDisplayComponent = /** @class */ (function () {
    function LifeDisplayComponent(websocketService) {
        this.websocketService = websocketService;
    }
    LifeDisplayComponent.prototype.ngOnInit = function () { };
    Object.defineProperty(LifeDisplayComponent.prototype, "currentLife", {
        get: function () {
            return this._currentLife;
        },
        set: function (currentLife) {
            this._currentLife = currentLife;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LifeDisplayComponent.prototype, "maxLife", {
        get: function () {
            return this._maxLife;
        },
        set: function (maxLife) {
            this._maxLife = maxLife;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LifeDisplayComponent.prototype, "life", {
        get: function () {
            return this.lifeDisplay;
        },
        enumerable: true,
        configurable: true
    });
    LifeDisplayComponent.prototype.rippleDisplay = function (valueUpdate) {
        var rippleColor = valueUpdate < 0 ? rippleColors.bad : rippleColors.good;
    };
    // Test stuff
    LifeDisplayComponent.prototype.rippleText = function (text) {
        console.log(text);
    };
    ;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], LifeDisplayComponent.prototype, "currentLife", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], LifeDisplayComponent.prototype, "maxLife", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], LifeDisplayComponent.prototype, "life", null);
    LifeDisplayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'life-display',
            template: __webpack_require__(/*! ./life-display.component.html */ "./src/app/life-display/life-display.component.html"),
            styles: [__webpack_require__(/*! ./life-display.component.css */ "./src/app/life-display/life-display.component.css")]
        }),
        __metadata("design:paramtypes", [_hero_controls_hero_life_service__WEBPACK_IMPORTED_MODULE_1__["HeroLifeService"]])
    ], LifeDisplayComponent);
    return LifeDisplayComponent;
}());



/***/ }),

/***/ "./src/app/magic-display/magic-display.component.css":
/*!***********************************************************!*\
  !*** ./src/app/magic-display/magic-display.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mainStatus {\t\n\t/* ; */\n\t/* top: -16px;\n\tleft: 50%;\n\tz-index: 30; */\n}\n\n.statusValueContainer {\n    height: 30px;\n    width: 120px;\n    display: flex;\n    justify-content: center;\n\tposition: relative;\n    /* left: -50%; */\n}\n\n.mainStatusValue {\n\theight: 30px;\n\twidth: 120px;\n\tborder-radius: 60px;\n\tborder: 1px solid #bbb;\n\tbackground-color: #fff;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n\tpadding: 2px 0 0 0;\n\tfont-size: 1.5rem;\n\tposition: relative;\n}\n\n.statusValueText {\n    z-index: 10;\n}\n\n.control-icon {\n\twidth: 40px;\n\theight: 40px;\n\tposition: absolute;\n    top: 15px;\n    left: 40px;\n\tz-index: 200;\n}"

/***/ }),

/***/ "./src/app/magic-display/magic-display.component.html":
/*!************************************************************!*\
  !*** ./src/app/magic-display/magic-display.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mainStatus\">\n    <img class=\"control-icon no-border\" src=\"/assets/icons/upg_wand.png\"/>\n    <div  class=\"mainStatusValue good\">\n      <div class=\"statusValueContainer\">\n        <div class=\"statusValueText\">{{currentMagicEnergy}}/{{maxMagicEnergy}}</div>\n      </div>\n  </div>\n  </div>"

/***/ }),

/***/ "./src/app/magic-display/magic-display.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/magic-display/magic-display.component.ts ***!
  \**********************************************************/
/*! exports provided: MagicDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MagicDisplayComponent", function() { return MagicDisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _hero_controls_hero_life_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../hero-controls/hero-life.service */ "./src/app/hero-controls/hero-life.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var rippleColors = {
    good: '#C4F779',
    bad: '#E16772'
};
var MagicDisplayComponent = /** @class */ (function () {
    function MagicDisplayComponent(websocketService) {
        this.websocketService = websocketService;
    }
    MagicDisplayComponent.prototype.ngOnInit = function () { };
    Object.defineProperty(MagicDisplayComponent.prototype, "currentMagicEnergy", {
        get: function () {
            return this._currentMagicEnergy;
        },
        set: function (currentMagicEnergy) {
            this._currentMagicEnergy = currentMagicEnergy;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MagicDisplayComponent.prototype, "maxMagicEnergy", {
        get: function () {
            return this._maxMagicEnergy;
        },
        set: function (maxMagicEnergy) {
            this._maxMagicEnergy = maxMagicEnergy;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MagicDisplayComponent.prototype, "life", {
        get: function () {
            return this.magicDisplay;
        },
        enumerable: true,
        configurable: true
    });
    MagicDisplayComponent.prototype.rippleDisplay = function (valueUpdate) {
        var rippleColor = valueUpdate < 0 ? rippleColors.bad : rippleColors.good;
    };
    // Test stuff
    MagicDisplayComponent.prototype.rippleText = function (text) {
        console.log(text);
    };
    ;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], MagicDisplayComponent.prototype, "currentMagicEnergy", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], MagicDisplayComponent.prototype, "maxMagicEnergy", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], MagicDisplayComponent.prototype, "life", null);
    MagicDisplayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'magic-display',
            template: __webpack_require__(/*! ./magic-display.component.html */ "./src/app/magic-display/magic-display.component.html"),
            styles: [__webpack_require__(/*! ./magic-display.component.css */ "./src/app/magic-display/magic-display.component.css")]
        }),
        __metadata("design:paramtypes", [_hero_controls_hero_life_service__WEBPACK_IMPORTED_MODULE_1__["HeroLifeService"]])
    ], MagicDisplayComponent);
    return MagicDisplayComponent;
}());



/***/ }),

/***/ "./src/app/master/master.component.css":
/*!*********************************************!*\
  !*** ./src/app/master/master.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/master/master.component.html":
/*!**********************************************!*\
  !*** ./src/app/master/master.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  master works!\n</p>\n"

/***/ }),

/***/ "./src/app/master/master.component.ts":
/*!********************************************!*\
  !*** ./src/app/master/master.component.ts ***!
  \********************************************/
/*! exports provided: MasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterComponent", function() { return MasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MasterComponent = /** @class */ (function () {
    function MasterComponent() {
    }
    MasterComponent.prototype.ngOnInit = function () {
    };
    MasterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-master',
            template: __webpack_require__(/*! ./master.component.html */ "./src/app/master/master.component.html"),
            styles: [__webpack_require__(/*! ./master.component.css */ "./src/app/master/master.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MasterComponent);
    return MasterComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  padding: 50px 0;\n  position: fixed;\n  \n}\n\n#menuContainer {\n  display: none;\n}\n\n#menuContainer.open {\n\tdisplay: flex;\n}\n\n.mat-menu-content {\n  background-color: rgba(90, 90, 90, 0.5);\n}\n\n\n"

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"menuContainer\" [ngClass]=\"{'open': open === true }\">\n  <!-- <md-nav-list class=\"modal\">\n    <md-list-item (click)=\"gotoList()\">\n      <a mdLine>Zurück</a>\n    </md-list-item>\n    <md-list-item>Salt </md-list-item>\n    <md-list-item>Paprika </md-list-item>\n  </md-nav-list> -->\n</div>\n"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/***
 *
 *
 */
var Menu = /** @class */ (function () {
    function Menu(router) {
        this.router = router;
        this.baseUrl = 'http://' + window.location.hostname + ':8000';
    }
    Menu.prototype.ngOnInit = function () {
    };
    Menu.prototype.gotoList = function () {
        this.router.navigate(['/heroes']);
    };
    Menu.prototype.toggle = function () {
        this.open = !this.open;
    };
    Menu = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], Menu);
    return Menu;
}());



/***/ }),

/***/ "./src/app/player/player.component.css":
/*!*********************************************!*\
  !*** ./src/app/player/player.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/player/player.component.html":
/*!**********************************************!*\
  !*** ./src/app/player/player.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<remote-control-receiver></remote-control-receiver>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/player/player.component.ts":
/*!********************************************!*\
  !*** ./src/app/player/player.component.ts ***!
  \********************************************/
/*! exports provided: PlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerComponent", function() { return PlayerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PlayerComponent = /** @class */ (function () {
    function PlayerComponent() {
    }
    PlayerComponent.prototype.ngOnInit = function () {
    };
    PlayerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-player',
            template: __webpack_require__(/*! ./player.component.html */ "./src/app/player/player.component.html"),
            styles: [__webpack_require__(/*! ./player.component.css */ "./src/app/player/player.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PlayerComponent);
    return PlayerComponent;
}());



/***/ }),

/***/ "./src/app/remote-control-receiver/remote-control-receiver.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/remote-control-receiver/remote-control-receiver.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/remote-control-receiver/remote-control-receiver.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/remote-control-receiver/remote-control-receiver.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/remote-control-receiver/remote-control-receiver.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/remote-control-receiver/remote-control-receiver.component.ts ***!
  \******************************************************************************/
/*! exports provided: RemoteControlReceiverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoteControlReceiverComponent", function() { return RemoteControlReceiverComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _remote_control_receiver_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./remote-control-receiver.service */ "./src/app/remote-control-receiver/remote-control-receiver.service.ts");
/* harmony import */ var _domain_remoteControlOperation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../domain/remoteControlOperation */ "./src/app/domain/remoteControlOperation.ts");
/* harmony import */ var _image_popup_image_popup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../image-popup/image-popup.component */ "./src/app/image-popup/image-popup.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { Lightbox } from 'ngx-lightbox';
var RemoteControlReceiverComponent = /** @class */ (function () {
    function RemoteControlReceiverComponent(websocketService, dialog) {
        var _this = this;
        this.dialog = dialog;
        this.operationsMap = new Map([
            [_domain_remoteControlOperation__WEBPACK_IMPORTED_MODULE_2__["operationTypes"].openImage, function (url) {
                    var dialogRef = _this.dialog.open(_image_popup_image_popup_component__WEBPACK_IMPORTED_MODULE_3__["ImagePopupComponent"], {
                        // width: '250px',
                        data: { url: _this.baseUrl + url }
                    });
                    dialogRef.afterClosed().subscribe(function (result) {
                        console.log('The dialog was closed');
                    });
                }
            ]
        ]);
        this.baseUrl = 'http://' + window.location.hostname + ':8000';
        this.service = websocketService;
        this.remoteControlReceiverSubject = websocketService.remoteControlReceiverSubject;
        this.remoteControlReceiverSubscription = websocketService.remoteControlReceiverSubject.subscribe(function (message) {
            var instruction = _domain_remoteControlOperation__WEBPACK_IMPORTED_MODULE_2__["OperationFactory"].createOperationFromJSON(message.data);
            var parameters = instruction.getParameters();
            _this.operationsMap.get(instruction.getType()).apply(_this, instruction.getParameters());
        });
    }
    RemoteControlReceiverComponent.prototype.ngOnInit = function () {
    };
    RemoteControlReceiverComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'remote-control-receiver',
            template: __webpack_require__(/*! ./remote-control-receiver.component.html */ "./src/app/remote-control-receiver/remote-control-receiver.component.html"),
            styles: [__webpack_require__(/*! ./remote-control-receiver.component.css */ "./src/app/remote-control-receiver/remote-control-receiver.component.css")]
        }),
        __metadata("design:paramtypes", [_remote_control_receiver_service__WEBPACK_IMPORTED_MODULE_1__["RemoteControlReceiverService"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], RemoteControlReceiverComponent);
    return RemoteControlReceiverComponent;
}());



/***/ }),

/***/ "./src/app/remote-control-receiver/remote-control-receiver.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/remote-control-receiver/remote-control-receiver.service.ts ***!
  \****************************************************************************/
/*! exports provided: RemoteControlReceiverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoteControlReceiverService", function() { return RemoteControlReceiverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { Rx } from 'rxjs';


var RemoteControlReceiverService = /** @class */ (function () {
    function RemoteControlReceiverService(http) {
        this.http = http;
        this.wsUrl = 'ws://' + window.location.hostname + ':8000/remoteControlReceiver';
        this.wsClientId = Math.random().toString(36).substring(7);
        this.socket = this.createWebsocket();
        var subject = this.remoteControlReceiverSubject = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.socket.onmessage = (function (evt) { return subject.next(evt); });
    }
    RemoteControlReceiverService.prototype.createWebsocket = function () {
        var ws = new WebSocket(this.wsUrl);
        return ws;
    };
    RemoteControlReceiverService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], RemoteControlReceiverService);
    return RemoteControlReceiverService;
}());



/***/ }),

/***/ "./src/app/remote-control/remote-control.component.css":
/*!*************************************************************!*\
  !*** ./src/app/remote-control/remote-control.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/remote-control/remote-control.component.html":
/*!**************************************************************!*\
  !*** ./src/app/remote-control/remote-control.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./src/app/remote-control/remote-control.component.ts":
/*!************************************************************!*\
  !*** ./src/app/remote-control/remote-control.component.ts ***!
  \************************************************************/
/*! exports provided: RemoteControlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoteControlComponent", function() { return RemoteControlComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _remote_control_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./remote-control.service */ "./src/app/remote-control/remote-control.service.ts");
/* harmony import */ var _domain_remoteControlOperation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../domain/remoteControlOperation */ "./src/app/domain/remoteControlOperation.ts");
/* harmony import */ var _choose_image_choose_image_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../choose-image/choose-image.component */ "./src/app/choose-image/choose-image.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RemoteControlComponent = /** @class */ (function () {
    function RemoteControlComponent(websocketService, dialog) {
        this.dialog = dialog;
        this.service = websocketService;
    }
    RemoteControlComponent.prototype.ngOnInit = function () {
    };
    RemoteControlComponent.prototype.sendRemoteControlOperation = function (type, target, parameters) {
        var operation = _domain_remoteControlOperation__WEBPACK_IMPORTED_MODULE_2__["OperationFactory"].createOperation(type, target, parameters);
        this.service.sendRemoteControlInstruction(operation);
    };
    RemoteControlComponent.prototype.sendImage = function (url) {
        var dialogRef = this.dialog.open(_choose_image_choose_image_component__WEBPACK_IMPORTED_MODULE_3__["ChooseImageComponent"], {
        // data: new ImagePopupData(null, [new Image('http://test.gif', 'the test')])
        // width: '250px',
        });
        // this.sendRemoteControlOperation('openImage', 'all', ['http://www.ulisses-spiele.de/media/images/produkt-produkt_das-schwarze-auge_dsa-logo_wandtattoo_3161_c.jpg'])
    };
    RemoteControlComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'remote-control',
            template: __webpack_require__(/*! ./remote-control.component.html */ "./src/app/remote-control/remote-control.component.html"),
            styles: [__webpack_require__(/*! ./remote-control.component.css */ "./src/app/remote-control/remote-control.component.css")]
        }),
        __metadata("design:paramtypes", [_remote_control_service__WEBPACK_IMPORTED_MODULE_1__["RemoteControlService"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], RemoteControlComponent);
    return RemoteControlComponent;
}());



/***/ }),

/***/ "./src/app/remote-control/remote-control.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/remote-control/remote-control.service.ts ***!
  \**********************************************************/
/*! exports provided: RemoteControlService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoteControlService", function() { return RemoteControlService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { Rx } from 'rxjs';


var RemoteControlService = /** @class */ (function () {
    function RemoteControlService(http) {
        this.http = http;
        this.wsUrl = 'ws://' + window.location.hostname + ':8000/remoteControlSender';
        this.wsClientId = Math.random().toString(36).substring(7);
        this.socket = this.createWebsocket();
        var subject = this.remoteControlSubject = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.socket.onmessage = (function (evt) { return subject.next(evt); });
    }
    RemoteControlService.prototype.createWebsocket = function () {
        var ws = new WebSocket(this.wsUrl);
        return ws;
    };
    RemoteControlService.prototype.sendRemoteControlInstruction = function (instruction) {
        console.log('will send instruction');
        var jsonOperation = instruction.toJSON();
        console.log(jsonOperation);
        this.socket.send(jsonOperation);
    };
    RemoteControlService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], RemoteControlService);
    return RemoteControlService;
}());



/***/ }),

/***/ "./src/app/scroll-spy.directive.ts":
/*!*****************************************!*\
  !*** ./src/app/scroll-spy.directive.ts ***!
  \*****************************************/
/*! exports provided: ScrollSpyDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollSpyDirective", function() { return ScrollSpyDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ScrollSpyDirective = /** @class */ (function () {
    function ScrollSpyDirective(_el) {
        this._el = _el;
        this.spiedTags = [];
        this.sectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        console.log('directive is getting initialized');
        //   _el.nativeElement.onscroll(this.onScroll)
    }
    ScrollSpyDirective.prototype.onScroll = function (event) {
        var currentSection;
        var children = this._el.nativeElement.children;
        var scrollTop = event.target.scrollTop;
        var parentOffset = event.target.offsetTop;
        var _loop_1 = function (i) {
            var element = children[i];
            if (this_1.spiedTags.some(function (spiedTag) { return spiedTag === element.tagName; })) {
                if ((element.offsetTop - parentOffset) <= scrollTop) {
                    currentSection = element.id;
                }
            }
        };
        var this_1 = this;
        for (var i = 0; i < children.length; i++) {
            _loop_1(i);
        }
        if (currentSection !== this.currentSection) {
            this.currentSection = currentSection;
            this.sectionChange.emit(this.currentSection);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ScrollSpyDirective.prototype, "spiedTags", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ScrollSpyDirective.prototype, "sectionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ScrollSpyDirective.prototype, "onScroll", null);
    ScrollSpyDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[scrollSpy]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ScrollSpyDirective);
    return ScrollSpyDirective;
}());



/***/ }),

/***/ "./src/app/spell-card/spell-card.component.html":
/*!******************************************************!*\
  !*** ./src/app/spell-card/spell-card.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-col center\">\n  <button>\n    <div class=\"flex-row skill\">\n      <div class=\"skillTitle\">{{spell.getSpell().name}}</div>\n      <div class=\"skillBe\">\n        <i class=\"fa fa-wheelchair\"></i>{{spell.getSpell().be}}\n      </div>\n      \n      <div class=\"skillValue\">\n        <i class=\"fa fa-tachometer\"></i>{{spell.value}}</div>\n      <div class=\"dices\">\n        <i class=\"fa fa-cubes\"></i>\n        <div class=\"dice\">{{spell.getSpell().dice1}}: {{spell.dice1Value}}</div>\n        <div class=\"dice\">{{spell.getSpell().dice2}}: {{spell.dice2Value}}</div>\n        <div class=\"dice\">{{spell.getSpell().dice3}}: {{spell.dice3Value}}</div>\n      </div>\n    </div>\n  </button>\n</div>"

/***/ }),

/***/ "./src/app/spell-card/spell-card.component.ts":
/*!****************************************************!*\
  !*** ./src/app/spell-card/spell-card.component.ts ***!
  \****************************************************/
/*! exports provided: SpellCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpellCard", function() { return SpellCard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _domain_spells_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../domain/spells.service */ "./src/app/domain/spells.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SpellCard = /** @class */ (function () {
    function SpellCard(spellService) {
        this.spellService = spellService;
    }
    SpellCard.prototype.ngOnInit = function () {
    };
    Object.defineProperty(SpellCard.prototype, "spell", {
        get: function () {
            return this.spellProperty;
        },
        set: function (spell) {
            this.spellProperty = spell;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], SpellCard.prototype, "spell", null);
    SpellCard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'spell-card',
            template: __webpack_require__(/*! ./spell-card.component.html */ "./src/app/spell-card/spell-card.component.html"),
            styles: [__webpack_require__(/*! ./../talent-card/talent-card.component.css */ "./src/app/talent-card/talent-card.component.css")]
        }),
        __metadata("design:paramtypes", [_domain_spells_service__WEBPACK_IMPORTED_MODULE_1__["SpellService"]])
    ], SpellCard);
    return SpellCard;
}());



/***/ }),

/***/ "./src/app/spell-search/spell-search.component.css":
/*!*********************************************************!*\
  !*** ./src/app/spell-search/spell-search.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".searchContainer {\n    justify-content: center;\n}\n\n.spellGroupTitle {\n    font-size: 24px;\n    margin-top: 15px;\n    margin-bottom: 10px;\n    \n}\n\n.spellEntry {\n    margin-bottom: 8px;\n}"

/***/ }),

/***/ "./src/app/spell-search/spell-search.component.html":
/*!**********************************************************!*\
  !*** ./src/app/spell-search/spell-search.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"flex-col flex-item\">\n  <div class=\"flex-row padded searchContainer center\" >\n    <input placeholder=\"Suchbegriff\" [value]=\"spellSearchTerm\" (input)=\"spellSearchTerm  = $event.target.value\" />\n  </div>\n  <div class=\"talente padded\">\n    <div class=\"flex-col center\" *ngFor=\"let spellGroup of hero.spellGroups | MatchesSpellSearchTermChildren:spellSearchTerm\">\n      <div class=\"spellGroupTitle\">{{spellGroup.spellGroup.name}}</div>\n      <div class=\"spellGroupEntries\">\n          <div class=\"spellEntry\" *ngFor=\"let spell of spellGroup.spells | MatchesSpellSearchTerm:spellSearchTerm\">\n            <spell-card [spell]=\"spell\"></spell-card>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/spell-search/spell-search.component.ts":
/*!********************************************************!*\
  !*** ./src/app/spell-search/spell-search.component.ts ***!
  \********************************************************/
/*! exports provided: SpellSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpellSearchComponent", function() { return SpellSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _domain_hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../domain/hero */ "./src/app/domain/hero.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SpellSearchComponent = /** @class */ (function () {
    function SpellSearchComponent() {
        this.spellSearchTerm = '';
    }
    SpellSearchComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _domain_hero__WEBPACK_IMPORTED_MODULE_1__["Hero"])
    ], SpellSearchComponent.prototype, "hero", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], SpellSearchComponent.prototype, "searchActive", void 0);
    SpellSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'spell-search',
            template: __webpack_require__(/*! ./spell-search.component.html */ "./src/app/spell-search/spell-search.component.html"),
            styles: [__webpack_require__(/*! ./spell-search.component.css */ "./src/app/spell-search/spell-search.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SpellSearchComponent);
    return SpellSearchComponent;
}());



/***/ }),

/***/ "./src/app/spell-search/spell.pipe.ts":
/*!********************************************!*\
  !*** ./src/app/spell-search/spell.pipe.ts ***!
  \********************************************/
/*! exports provided: MatchesSpellSearchTerm, MatchesSpellSearchTermChildren */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchesSpellSearchTerm", function() { return MatchesSpellSearchTerm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchesSpellSearchTermChildren", function() { return MatchesSpellSearchTermChildren; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MatchesSpellSearchTerm = /** @class */ (function () {
    function MatchesSpellSearchTerm() {
    }
    MatchesSpellSearchTerm.prototype.transform = function (spells, searchTerm) {
        if (searchTerm != '' && searchTerm !== undefined) {
            return spells.filter(function (spell) {
                return (spell.getSpell().name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
            });
        }
        else {
            return spells;
        }
    };
    MatchesSpellSearchTerm = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'MatchesSpellSearchTerm'
        })
    ], MatchesSpellSearchTerm);
    return MatchesSpellSearchTerm;
}());

var MatchesSpellSearchTermChildren = /** @class */ (function () {
    function MatchesSpellSearchTermChildren() {
    }
    MatchesSpellSearchTermChildren.prototype.transform = function (spellGroups, searchTerm) {
        if (searchTerm != '' && searchTerm !== undefined) {
            return spellGroups.filter(function (spellGroup) {
                return (spellGroup.getSpells().filter(function (spell) { return spell.getSpell().name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1; })).length > 0;
            });
        }
        else {
            return spellGroups;
        }
    };
    MatchesSpellSearchTermChildren = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'MatchesSpellSearchTermChildren'
        })
    ], MatchesSpellSearchTermChildren);
    return MatchesSpellSearchTermChildren;
}());



/***/ }),

/***/ "./src/app/talent-card/talent-card.component.css":
/*!*******************************************************!*\
  !*** ./src/app/talent-card/talent-card.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex-row.skill {\n    display: flex;\n    flex-wrap: wrap;\n    margin: 2px;\n    padding: 12px;\n    font-size: 16px;\n}\n\n.skillTitle {\n    width: 140px;\n    font-weight: 600;\n    text-align: left;\n}\n\n.skillBe, .skillValue {\n    width: 60px;\n}\n\n.fightDices {\n    width: 120px;\n    display:flex;\n}\n\n.fightDice {\n    width: 60px;\n}\n\n.dices {\n    display: flex;\n    width: 200px;\n}\n\n.dice {\n    width: 50px\n}\n\ni {\n    margin-right: 5px;\n}"

/***/ }),

/***/ "./src/app/talent-card/talent-card.component.html":
/*!********************************************************!*\
  !*** ./src/app/talent-card/talent-card.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-col center\">\n  <button>\n    <div class=\"flex-row skill\">\n      <div class=\"skillTitle\">{{skill.getSkill().name}}</div>\n      <div class=\"skillBe\">\n        <i class=\"fa fa-wheelchair\"></i>{{skill.getSkill().be}}\n      </div>\n      \n      <div class=\"skillValue\">\n        <i class=\"fa fa-tachometer\"></i>{{skill.value}}</div>\n      <div class=\"fightDices\" *ngIf=\"skillGroup.hasAttackParade\">\n        <i class=\"fa fa-cube\"></i> \n        <div class=\"fightDice\">AT: {{skill.getAttack()}}</div>\n        <div class=\"fightDice\">PA: {{skill.getParade()}}</div>\n      </div>\n      <div class=\"dices\" *ngIf=\"skillGroup.hasThreeDices\">\n        <i class=\"fa fa-cubes\"></i>\n        <div class=\"dice\">{{skill.getSkill().dice1.short}}: {{skill.dice1Value}}</div>\n        <div class=\"dice\">{{skill.getSkill().dice2.short}}: {{skill.dice2Value}}</div>\n        <div class=\"dice\">{{skill.getSkill().dice3.short}}: {{skill.dice3Value}}</div>\n      </div>\n    </div>\n  </button>\n  <div *ngIf=\"state === 'rollDice'\" class=\"confirmationButtons flex-col center\" >\n    <div class=\"messageToConfirm\">Würfeln</div>\n    <div class=\"flex-row\">\n        <div class=\"flex-item flex-col confirmationButton center accept\" (click)=\"confirmIncrease()\">\n            <i class=\"fa fa-check\"></i>\n        </div>\n        <div class=\"flex-item flex-col confirmationButton center reject\" (click)=\"cancelIncrease()\">\n            <i class=\"fa fa-window-close\"></i>\n        </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/talent-card/talent-card.component.ts":
/*!******************************************************!*\
  !*** ./src/app/talent-card/talent-card.component.ts ***!
  \******************************************************/
/*! exports provided: TalentCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TalentCard", function() { return TalentCard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _domain_skills_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../domain/skills.service */ "./src/app/domain/skills.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TalentCard = /** @class */ (function () {
    function TalentCard(skillService) {
        this.skillService = skillService;
    }
    TalentCard.prototype.ngOnInit = function () {
    };
    Object.defineProperty(TalentCard.prototype, "skill", {
        get: function () {
            return this.skillProperty;
        },
        set: function (skill) {
            this.skillProperty = skill;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TalentCard.prototype, "skillGroup", {
        get: function () {
            return this.skillProperty.getSkillGroup();
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], TalentCard.prototype, "skill", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], TalentCard.prototype, "skillGroup", null);
    TalentCard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'talent-card',
            template: __webpack_require__(/*! ./talent-card.component.html */ "./src/app/talent-card/talent-card.component.html"),
            styles: [__webpack_require__(/*! ./talent-card.component.css */ "./src/app/talent-card/talent-card.component.css")]
        }),
        __metadata("design:paramtypes", [_domain_skills_service__WEBPACK_IMPORTED_MODULE_1__["SkillService"]])
    ], TalentCard);
    return TalentCard;
}());



/***/ }),

/***/ "./src/app/talent-search/skill.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/talent-search/skill.pipe.ts ***!
  \*********************************************/
/*! exports provided: MatchesTalentSearchTerm, MatchesTalentSearchTermChildren */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchesTalentSearchTerm", function() { return MatchesTalentSearchTerm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchesTalentSearchTermChildren", function() { return MatchesTalentSearchTermChildren; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MatchesTalentSearchTerm = /** @class */ (function () {
    function MatchesTalentSearchTerm() {
    }
    MatchesTalentSearchTerm.prototype.transform = function (skills, searchTerm) {
        if (searchTerm != '' && searchTerm !== undefined) {
            return skills.filter(function (skill) {
                return (skill.getSkill().name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
            });
        }
        else {
            return skills;
        }
    };
    MatchesTalentSearchTerm = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'MatchesTalentSearchTerm'
        })
    ], MatchesTalentSearchTerm);
    return MatchesTalentSearchTerm;
}());

var MatchesTalentSearchTermChildren = /** @class */ (function () {
    function MatchesTalentSearchTermChildren() {
    }
    MatchesTalentSearchTermChildren.prototype.transform = function (skillGroups, searchTerm) {
        if (searchTerm != '' && searchTerm !== undefined) {
            return skillGroups.filter(function (SkillGroup) {
                return (SkillGroup.getSkills().filter(function (skill) { return skill.getSkill().name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1; })).length > 0;
            });
        }
        else {
            return skillGroups;
        }
    };
    MatchesTalentSearchTermChildren = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'MatchesTalentSearchTermChildren'
        })
    ], MatchesTalentSearchTermChildren);
    return MatchesTalentSearchTermChildren;
}());



/***/ }),

/***/ "./src/app/talent-search/talent-search.component.css":
/*!***********************************************************!*\
  !*** ./src/app/talent-search/talent-search.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".searchContainer {\n    justify-content: center;\n}\n\n.skillGroupTitle {\n    font-size: 24px;\n    margin-top: 15px;\n    margin-bottom: 10px;\n    \n}\n\n.skillEntry {\n    margin-bottom: 8px;\n}"

/***/ }),

/***/ "./src/app/talent-search/talent-search.component.html":
/*!************************************************************!*\
  !*** ./src/app/talent-search/talent-search.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"flex-col flex-item\">\n  <div class=\"flex-row padded searchContainer center\" >\n    <input placeholder=\"Suchbegriff\" [value]=\"talentSearchTerm\" (input)=\"talentSearchTerm  = $event.target.value\" />\n  </div>\n  <div class=\"talente padded\">\n    <div class=\"flex-col center\" *ngFor=\"let skillGroup of hero.skillGroups | MatchesTalentSearchTermChildren:talentSearchTerm\">\n      <div class=\"skillGroupTitle\">{{skillGroup.skillGroup.name}}</div>\n      <div class=\"skillGroupEntries\">\n          <div class=\"skillEntry\" *ngFor=\"let skill of skillGroup.skills | MatchesTalentSearchTerm:talentSearchTerm\">\n            <talent-card [skill]=\"skill\"></talent-card>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/talent-search/talent-search.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/talent-search/talent-search.component.ts ***!
  \**********************************************************/
/*! exports provided: TalentSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TalentSearchComponent", function() { return TalentSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _domain_hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../domain/hero */ "./src/app/domain/hero.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TalentSearchComponent = /** @class */ (function () {
    function TalentSearchComponent() {
        this.talentSearchTerm = '';
    }
    TalentSearchComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _domain_hero__WEBPACK_IMPORTED_MODULE_1__["Hero"])
    ], TalentSearchComponent.prototype, "hero", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], TalentSearchComponent.prototype, "searchActive", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], TalentSearchComponent.prototype, "editMode", void 0);
    TalentSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'talent-search',
            template: __webpack_require__(/*! ./talent-search.component.html */ "./src/app/talent-search/talent-search.component.html"),
            styles: [__webpack_require__(/*! ./talent-search.component.css */ "./src/app/talent-search/talent-search.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TalentSearchComponent);
    return TalentSearchComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/michel/jsWorkspace/table-top-client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map