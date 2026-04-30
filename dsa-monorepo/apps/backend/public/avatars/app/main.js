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

module.exports = ".navButton {\r\n  width: 100%;\r\n  text-align: left;\r\n}\r\n\r\n.navIcon {\r\n  font-size: 20px;\r\n}\r\n\r\n#adminContent {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  width: 100%;\r\n}\r\n\r\n#adminMenu {\r\n  position: fixed;\r\n  z-index: 100;\r\n}\r\n\r\n#appContent {\r\n  margin-top: 4rem;\r\n  width: 100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/admin-overview/admin-overview.component.html":
/*!**************************************************************!*\
  !*** ./src/app/admin-overview/admin-overview.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<remote-control #remoteControlMaster></remote-control>\r\n<div id=\"adminContent\">\r\n  <div id=\"adminMenu\">\r\n    <button class=\"comic-shadow\" (click)=\"showHeroes()\">Heroes</button>\r\n    <button class=\"comic-shadow\" (click)=\"remoteControlMaster.sendImage('')\">\r\n      Images\r\n    </button>\r\n    <button class=\"comic-shadow\" (click)=\"startFight()\">Fight</button>\r\n    <button class=\"comic-shadow\">Music and Sounds</button>\r\n  </div>\r\n  <div id=\"appContent\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n"

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
    AdminOverviewComponent.prototype.showHeroes = function () {
        this.router.navigate(['master/heroes']);
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

/***/ "./src/app/adventure-display/adventure-display.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/adventure-display/adventure-display.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sectionContainer {\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  justify-content: center;\r\n  /* border: 1px solid #ccc; */\r\n  padding: 0.5rem;\r\n}\r\n\r\n.sectionContainer.border {\r\n  border-color: #ccc;\r\n}\r\n\r\n.adventureItemContainer,\r\n.adventureItem {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.adventureItem.image {\r\n  flex-direction: column-reverse;\r\n}\r\n\r\n.connector {\r\n  width: 1px;\r\n  height: 4rem;\r\n  border-color: #ccc;\r\n}\r\n\r\n.title {\r\n  z-index: 10;\r\n  margin-top: -10px;\r\n  margin-bottom: -10px;\r\n  padding: 1rem 0.5rem;\r\n  text-align: center;\r\n  background-color: white;\r\n}\r\n\r\n.image .title {\r\n  background-color: #666;\r\n  color: white;\r\n}\r\n\r\n.character .imageContainer {\r\n  width: 7rem;\r\n  height: 7rem;\r\n  border-radius: 50%;\r\n  overflow: hidden;\r\n  position: relative;\r\n}\r\n\r\n.character img {\r\n  position: absolute;\r\n  width: 7rem;\r\n}\r\n\r\n.image img {\r\n  max-width: 10rem;\r\n  max-height: 10rem;\r\n}\r\n"

/***/ }),

/***/ "./src/app/adventure-display/adventure-display.component.html":
/*!********************************************************************!*\
  !*** ./src/app/adventure-display/adventure-display.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\r\n  class=\"adventureItemContainer flex-col center\"\r\n  *ngFor=\"let element of elements\"\r\n>\r\n  <div class=\"border-dashed connector\" height=\"100px\"></div>\r\n  <div\r\n    *ngIf=\"element.type !== 'section'\"\r\n    class=\"adventureItem {{ element.type }}\"\r\n    (click)=\"showItem(element)\"\r\n  >\r\n    <div class=\"imageContainer no-border\">\r\n      <img src=\"{{ element.imageUrl }}\" class=\"no-border\" />\r\n    </div>\r\n    <div class=\"border title\">\r\n      {{ element.title }}\r\n    </div>\r\n  </div>\r\n  <div class=\"sectionContainer\" *ngIf=\"element.type === 'section'\">\r\n    <div\r\n      *ngFor=\"let sectionElement of element.elements\"\r\n      class=\"adventureItem {{ sectionElement.type }}\"\r\n      (click)=\"showItem(sectionElement)\"\r\n    >\r\n      <div class=\"imageContainer border\">\r\n        <img src=\"{{ sectionElement.imageUrl }}\" class=\"no-border\" />\r\n      </div>\r\n      <div class=\"border title\">\r\n        {{ sectionElement.title }}\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/adventure-display/adventure-display.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/adventure-display/adventure-display.component.ts ***!
  \******************************************************************/
/*! exports provided: AdventureDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdventureDisplayComponent", function() { return AdventureDisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_domain_adventure_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/domain/adventure.service */ "./src/app/domain/adventure.service.ts");
/* harmony import */ var app_image_popup_image_popup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/image-popup/image-popup.component */ "./src/app/image-popup/image-popup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdventureDisplayComponent = /** @class */ (function () {
    function AdventureDisplayComponent(adventureService, dialog) {
        var _this = this;
        this.adventureService = adventureService;
        this.dialog = dialog;
        this._adventure = null;
        adventureService.getAdventures().then(function (adventures) { _this._adventure = adventures[0]; });
    }
    AdventureDisplayComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(AdventureDisplayComponent.prototype, "adventure", {
        get: function () {
            return this._adventure;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdventureDisplayComponent.prototype, "elements", {
        get: function () {
            if (this._adventure)
                return this._adventure.elements;
            else
                return [];
        },
        enumerable: true,
        configurable: true
    });
    AdventureDisplayComponent.prototype.showItem = function (element) {
        var dialogRef = this.dialog.open(app_image_popup_image_popup_component__WEBPACK_IMPORTED_MODULE_3__["ImagePopupComponent"], {
            // width: '90%',
            maxHeight: '100%',
            height: '90%',
            data: {
                url: element.imageUrl,
                caption: element.title
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", app_domain_adventure_service__WEBPACK_IMPORTED_MODULE_2__["Adventure"]),
        __metadata("design:paramtypes", [])
    ], AdventureDisplayComponent.prototype, "adventure", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [])
    ], AdventureDisplayComponent.prototype, "elements", null);
    AdventureDisplayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'adventure-display',
            template: __webpack_require__(/*! ./adventure-display.component.html */ "./src/app/adventure-display/adventure-display.component.html"),
            styles: [__webpack_require__(/*! ./adventure-display.component.css */ "./src/app/adventure-display/adventure-display.component.css")]
        }),
        __metadata("design:paramtypes", [app_domain_adventure_service__WEBPACK_IMPORTED_MODULE_2__["AdventureService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], AdventureDisplayComponent);
    return AdventureDisplayComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.pageContainer {\r\n\twidth: 100%;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: center;/*\r\n\talign-items: center;*/\r\n}\r\n\r\n.wrapper {\r\n\theight: 100%;\r\n}\r\n\r\n.toolbarCenter {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n}\r\n\r\n.logo {\r\n\twidth: 40px;\r\n}\r\n\r\nh1 {\r\n\tcolor: #999;\r\n\tfont-size: 1rem;\r\n\tmargin: 5px;\r\n}\r\n\r\n#appMenuButton {\r\n\tposition: fixed;\r\n\ttop:20px;\r\n\tleft:calc(50%);\r\n\tmargin-left: -10px;\r\n\tbackground-color: #ccc;\r\n}\r\n\r\n.padded {\r\n\tpadding: 20px;\r\n  }\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"my-content container\">\r\n  <div class=\"wrapper\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n"

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
/* harmony import */ var _domain_adventure_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domain/adventure.service */ "./src/app/domain/adventure.service.ts");
/* harmony import */ var _domain_armor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domain/armor.service */ "./src/app/domain/armor.service.ts");
/* harmony import */ var _domain_attribute_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domain/attribute.service */ "./src/app/domain/attribute.service.ts");
/* harmony import */ var _domain_hero_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./domain/hero.service */ "./src/app/domain/hero.service.ts");
/* harmony import */ var _domain_inventory_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./domain/inventory.service */ "./src/app/domain/inventory.service.ts");
/* harmony import */ var _domain_skills_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./domain/skills.service */ "./src/app/domain/skills.service.ts");
/* harmony import */ var _domain_spells_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./domain/spells.service */ "./src/app/domain/spells.service.ts");
/* harmony import */ var _domain_weapons_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./domain/weapons.service */ "./src/app/domain/weapons.service.ts");
/* harmony import */ var _hero_controls_hero_life_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./hero-controls/hero-life.service */ "./src/app/hero-controls/hero-life.service.ts");
/* harmony import */ var _remote_control_receiver_remote_control_receiver_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./remote-control-receiver/remote-control-receiver.service */ "./src/app/remote-control-receiver/remote-control-receiver.service.ts");
/* harmony import */ var _remote_control_remote_control_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./remote-control/remote-control.service */ "./src/app/remote-control/remote-control.service.ts");
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
            providers: [_domain_hero_service__WEBPACK_IMPORTED_MODULE_4__["HeroService"], _domain_attribute_service__WEBPACK_IMPORTED_MODULE_3__["AttributeService"], _hero_controls_hero_life_service__WEBPACK_IMPORTED_MODULE_9__["HeroLifeService"], _domain_skills_service__WEBPACK_IMPORTED_MODULE_6__["SkillService"], _domain_spells_service__WEBPACK_IMPORTED_MODULE_7__["SpellService"], _domain_weapons_service__WEBPACK_IMPORTED_MODULE_8__["WeaponService"], _domain_armor_service__WEBPACK_IMPORTED_MODULE_2__["ArmorService"], _domain_inventory_service__WEBPACK_IMPORTED_MODULE_5__["InventoryService"], _remote_control_receiver_remote_control_receiver_service__WEBPACK_IMPORTED_MODULE_10__["RemoteControlReceiverService"], _remote_control_remote_control_service__WEBPACK_IMPORTED_MODULE_11__["RemoteControlService"], _domain_adventure_service__WEBPACK_IMPORTED_MODULE_1__["AdventureService"]]
        }),
        __metadata("design:paramtypes", [_domain_hero_service__WEBPACK_IMPORTED_MODULE_4__["HeroService"], _domain_attribute_service__WEBPACK_IMPORTED_MODULE_3__["AttributeService"]])
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_material___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/ */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _admin_overview_admin_overview_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin-overview/admin-overview.component */ "./src/app/admin-overview/admin-overview.component.ts");
/* harmony import */ var _adventure_display_adventure_display_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./adventure-display/adventure-display.component */ "./src/app/adventure-display/adventure-display.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _attributes_display_attributes_display_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./attributes-display/attributes-display.component */ "./src/app/attributes-display/attributes-display.component.ts");
/* harmony import */ var _basic_data_display_basic_data_display_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./basic-data-display/basic-data-display.component */ "./src/app/basic-data-display/basic-data-display.component.ts");
/* harmony import */ var _choose_image_choose_image_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./choose-image/choose-image.component */ "./src/app/choose-image/choose-image.component.ts");
/* harmony import */ var _combat_data_display_combat_data_display_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./combat-data-display/combat-data-display.component */ "./src/app/combat-data-display/combat-data-display.component.ts");
/* harmony import */ var _combatant_combatant_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./combatant/combatant.component */ "./src/app/combatant/combatant.component.ts");
/* harmony import */ var _confirm_deletion_confirm_deletion_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./confirm-deletion/confirm-deletion.component */ "./src/app/confirm-deletion/confirm-deletion.component.ts");
/* harmony import */ var _confirmation_sheet_confirmation_sheet_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./confirmation-sheet/confirmation-sheet.component */ "./src/app/confirmation-sheet/confirmation-sheet.component.ts");
/* harmony import */ var _detail_navigation_detail_navigation_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./detail-navigation/detail-navigation.component */ "./src/app/detail-navigation/detail-navigation.component.ts");
/* harmony import */ var _domain_fight__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./domain/fight */ "./src/app/domain/fight.ts");
/* harmony import */ var _edit_attribute_edit_attribute_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./edit-attribute/edit-attribute.component */ "./src/app/edit-attribute/edit-attribute.component.ts");
/* harmony import */ var _edit_dialog_edit_dialog_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./edit-dialog/edit-dialog.component */ "./src/app/edit-dialog/edit-dialog.component.ts");
/* harmony import */ var _edit_money_edit_money_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./edit-money/edit-money.component */ "./src/app/edit-money/edit-money.component.ts");
/* harmony import */ var _edit_talent_edit_talent_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./edit-talent/edit-talent.component */ "./src/app/edit-talent/edit-talent.component.ts");
/* harmony import */ var _experience_addition_experience_addition_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./experience-addition/experience-addition.component */ "./src/app/experience-addition/experience-addition.component.ts");
/* harmony import */ var _experience_display_experience_display_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./experience-display/experience-display.component */ "./src/app/experience-display/experience-display.component.ts");
/* harmony import */ var _fight_display_fight_display_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./fight-display/fight-display.component */ "./src/app/fight-display/fight-display.component.ts");
/* harmony import */ var _fight_setup_fight_setup_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./fight-setup/fight-setup.component */ "./src/app/fight-setup/fight-setup.component.ts");
/* harmony import */ var _hero_card_hero_card_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./hero-card/hero-card.component */ "./src/app/hero-card/hero-card.component.ts");
/* harmony import */ var _hero_controls_hero_controls_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./hero-controls/hero-controls.component */ "./src/app/hero-controls/hero-controls.component.ts");
/* harmony import */ var _herodetail_hero_detail_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./herodetail/hero-detail.component */ "./src/app/herodetail/hero-detail.component.ts");
/* harmony import */ var _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./heroes/heroes.component */ "./src/app/heroes/heroes.component.ts");
/* harmony import */ var _image_popup_image_popup_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./image-popup/image-popup.component */ "./src/app/image-popup/image-popup.component.ts");
/* harmony import */ var _inventory_display_inventory_display_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./inventory-display/inventory-display.component */ "./src/app/inventory-display/inventory-display.component.ts");
/* harmony import */ var _life_display_life_display_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./life-display/life-display.component */ "./src/app/life-display/life-display.component.ts");
/* harmony import */ var _magic_display_magic_display_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./magic-display/magic-display.component */ "./src/app/magic-display/magic-display.component.ts");
/* harmony import */ var _master_master_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./master/master.component */ "./src/app/master/master.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _player_player_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./player/player.component */ "./src/app/player/player.component.ts");
/* harmony import */ var _remote_control_receiver_remote_control_receiver_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./remote-control-receiver/remote-control-receiver.component */ "./src/app/remote-control-receiver/remote-control-receiver.component.ts");
/* harmony import */ var _remote_control_remote_control_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./remote-control/remote-control.component */ "./src/app/remote-control/remote-control.component.ts");
/* harmony import */ var _scroll_spy_directive__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./scroll-spy.directive */ "./src/app/scroll-spy.directive.ts");
/* harmony import */ var _spell_card_spell_card_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./spell-card/spell-card.component */ "./src/app/spell-card/spell-card.component.ts");
/* harmony import */ var _spell_search_spell_search_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./spell-search/spell-search.component */ "./src/app/spell-search/spell-search.component.ts");
/* harmony import */ var _spell_search_spell_pipe__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./spell-search/spell.pipe */ "./src/app/spell-search/spell.pipe.ts");
/* harmony import */ var _talent_card_talent_card_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./talent-card/talent-card.component */ "./src/app/talent-card/talent-card.component.ts");
/* harmony import */ var _talent_search_skill_pipe__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./talent-search/skill.pipe */ "./src/app/talent-search/skill.pipe.ts");
/* harmony import */ var _talent_search_talent_search_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./talent-search/talent-search.component */ "./src/app/talent-search/talent-search.component.ts");
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
        path: 'master', component: _admin_overview_admin_overview_component__WEBPACK_IMPORTED_MODULE_12__["AdminOverviewComponent"],
        children: [
            { path: 'adventure', component: _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_35__["HeroesComponent"] },
            { path: 'heroes', component: _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_35__["HeroesComponent"] },
            { path: 'hero/:id', component: _herodetail_hero_detail_component__WEBPACK_IMPORTED_MODULE_34__["HeroDetailComponent"] },
            { path: 'fight/start', component: _fight_setup_fight_setup_component__WEBPACK_IMPORTED_MODULE_31__["FightSetupComponent"] }
        ]
    },
    {
        path: 'player', component: _player_player_component__WEBPACK_IMPORTED_MODULE_42__["PlayerComponent"],
        children: [
            {
                path: 'heroes',
                component: _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_35__["HeroesComponent"]
            },
            {
                path: 'hero/:id',
                component: _herodetail_hero_detail_component__WEBPACK_IMPORTED_MODULE_34__["HeroDetailComponent"]
            },
            {
                path: 'hero/:id/editStuff',
                component: _edit_dialog_edit_dialog_component__WEBPACK_IMPORTED_MODULE_25__["EditDialogComponent"]
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
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(routes, {
                    scrollPositionRestoration: 'top'
                }),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrModule"].forRoot({
                    timeOut: 3000,
                    positionClass: 'toast-bottom-right',
                    preventDuplicates: true,
                }),
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
                _angular_material___WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_material___WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
                _angular_material___WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material___WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_material___WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
                _angular_material___WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material___WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material___WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                _angular_material___WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material___WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material___WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material___WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_8__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].production })
            ],
            exports: [
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"],
                _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_35__["HeroesComponent"],
                _herodetail_hero_detail_component__WEBPACK_IMPORTED_MODULE_34__["HeroDetailComponent"],
                _hero_controls_hero_controls_component__WEBPACK_IMPORTED_MODULE_33__["HeroControls"],
                _hero_card_hero_card_component__WEBPACK_IMPORTED_MODULE_32__["HeroCard"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_41__["Menu"],
                _talent_card_talent_card_component__WEBPACK_IMPORTED_MODULE_49__["TalentCard"],
                _spell_card_spell_card_component__WEBPACK_IMPORTED_MODULE_46__["SpellCard"],
                _admin_overview_admin_overview_component__WEBPACK_IMPORTED_MODULE_12__["AdminOverviewComponent"],
                _fight_setup_fight_setup_component__WEBPACK_IMPORTED_MODULE_31__["FightSetupComponent"],
                _fight_display_fight_display_component__WEBPACK_IMPORTED_MODULE_30__["FightDisplayComponent"],
                _angular_material___WEBPACK_IMPORTED_MODULE_3__["MatButton"],
                _angular_material___WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleGroup"],
                _angular_material___WEBPACK_IMPORTED_MODULE_3__["MatButtonToggle"],
                _remote_control_remote_control_component__WEBPACK_IMPORTED_MODULE_44__["RemoteControlComponent"],
                _remote_control_receiver_remote_control_receiver_component__WEBPACK_IMPORTED_MODULE_43__["RemoteControlReceiverComponent"],
                _player_player_component__WEBPACK_IMPORTED_MODULE_42__["PlayerComponent"],
                _master_master_component__WEBPACK_IMPORTED_MODULE_40__["MasterComponent"],
                _image_popup_image_popup_component__WEBPACK_IMPORTED_MODULE_36__["ImagePopupComponent"],
                _choose_image_choose_image_component__WEBPACK_IMPORTED_MODULE_17__["ChooseImageComponent"],
                _life_display_life_display_component__WEBPACK_IMPORTED_MODULE_38__["LifeDisplayComponent"],
                _scroll_spy_directive__WEBPACK_IMPORTED_MODULE_45__["ScrollSpyDirective"],
                _magic_display_magic_display_component__WEBPACK_IMPORTED_MODULE_39__["MagicDisplayComponent"],
                _talent_search_talent_search_component__WEBPACK_IMPORTED_MODULE_51__["TalentSearchComponent"],
                _talent_search_skill_pipe__WEBPACK_IMPORTED_MODULE_50__["MatchesTalentSearchTerm"],
                _talent_search_skill_pipe__WEBPACK_IMPORTED_MODULE_50__["MatchesTalentSearchTermChildren"],
                _spell_search_spell_pipe__WEBPACK_IMPORTED_MODULE_48__["MatchesSpellSearchTerm"],
                _spell_search_spell_pipe__WEBPACK_IMPORTED_MODULE_48__["MatchesSpellSearchTermChildren"],
                _detail_navigation_detail_navigation_component__WEBPACK_IMPORTED_MODULE_22__["DetailNavigationComponent"],
                _attributes_display_attributes_display_component__WEBPACK_IMPORTED_MODULE_15__["AttributesDisplayComponent"],
                _basic_data_display_basic_data_display_component__WEBPACK_IMPORTED_MODULE_16__["BasicDataDisplayComponent"],
                _combat_data_display_combat_data_display_component__WEBPACK_IMPORTED_MODULE_18__["CombatDataDisplayComponent"],
                _inventory_display_inventory_display_component__WEBPACK_IMPORTED_MODULE_37__["InventoryDisplayComponent"],
                _edit_dialog_edit_dialog_component__WEBPACK_IMPORTED_MODULE_25__["EditDialogComponent"],
                _edit_attribute_edit_attribute_component__WEBPACK_IMPORTED_MODULE_24__["EditAttributeComponent"],
                _experience_display_experience_display_component__WEBPACK_IMPORTED_MODULE_29__["ExperienceDisplayComponent"],
                _spell_search_spell_search_component__WEBPACK_IMPORTED_MODULE_47__["SpellSearchComponent"],
                _edit_talent_edit_talent_component__WEBPACK_IMPORTED_MODULE_27__["EditTalentComponent"],
                _confirmation_sheet_confirmation_sheet_component__WEBPACK_IMPORTED_MODULE_21__["ConfirmationSheetComponent"],
                _confirm_deletion_confirm_deletion_component__WEBPACK_IMPORTED_MODULE_20__["ConfirmDeletionComponent"],
                _experience_addition_experience_addition_component__WEBPACK_IMPORTED_MODULE_28__["ExperienceAdditionComponent"],
                _edit_money_edit_money_component__WEBPACK_IMPORTED_MODULE_26__["EditMoneyComponent"],
                _adventure_display_adventure_display_component__WEBPACK_IMPORTED_MODULE_13__["AdventureDisplayComponent"],
                _combatant_combatant_component__WEBPACK_IMPORTED_MODULE_19__["CombatantComponent"],
                _domain_fight__WEBPACK_IMPORTED_MODULE_23__["MatchesCombatantSearchTerm"],
                _domain_fight__WEBPACK_IMPORTED_MODULE_23__["IsGoodFighter"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]],
            providers: [{
                    provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"],
                    useValue: {}
                },
                { provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"], useValue: {} }],
            entryComponents: [_image_popup_image_popup_component__WEBPACK_IMPORTED_MODULE_36__["ImagePopupComponent"], _choose_image_choose_image_component__WEBPACK_IMPORTED_MODULE_17__["ChooseImageComponent"], _edit_dialog_edit_dialog_component__WEBPACK_IMPORTED_MODULE_25__["EditDialogComponent"], _confirm_deletion_confirm_deletion_component__WEBPACK_IMPORTED_MODULE_20__["ConfirmDeletionComponent"], _experience_addition_experience_addition_component__WEBPACK_IMPORTED_MODULE_28__["ExperienceAdditionComponent"], _edit_money_edit_money_component__WEBPACK_IMPORTED_MODULE_26__["EditMoneyComponent"]],
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

module.exports = ".flex-row {\r\n  margin: 0.2rem 0;\r\n  padding-bottom: 0.2rem;\r\n}\r\n\r\n.attributeLabel {\r\n  border: 1px solid #aaa;\r\n  display: flex;\r\n  background-color: #ffffff;\r\n  align-items: center;\r\n  padding: 4px 0;\r\n  justify-content: center;\r\n}\r\n\r\n.value {\r\n  padding: 5px;\r\n  display: flex;\r\n  justify-content: center;\r\n  background-color: rgba(255, 255, 250, 0.8);\r\n}\r\n\r\n.attribute {\r\n  width: 35px;\r\n  /* padding: 5px; */\r\n}\r\n"

/***/ }),

/***/ "./src/app/attributes-display/attributes-display.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/attributes-display/attributes-display.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"Grid-cell padded\">\r\n  <div class=\"attributesContainer flex-col\">\r\n    <div *ngFor=\"let attribute of hero.attributes; index as i; keyvalue\" class=\"flex-row borderBottom\">\r\n      <div class=\"label\">\r\n        <label>{{attribute.name}}</label>\r\n      </div>\r\n      <div class=\"flex-item\">{{attribute.value}}</div>\r\n      <!-- <div *ngIf=\"editMode\" class=\"editValue\"><input [value]=\"attribute.value\" /></div> -->\r\n\r\n    </div>\r\n  </div>\r\n</div>"

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

module.exports = "<div class=\"propertiesContainer\">\r\n  <div class=\"padded\">\r\n    <div class=\"flex-row\">\r\n      <div class=\"label\">\r\n        <label>Rasse: </label>\r\n      </div>\r\n      <div class=\"value\">{{ hero.race.name }}</div>\r\n    </div>\r\n    <div class=\"flex-row\">\r\n      <div class=\"label\">\r\n        <label>Kultur: </label>\r\n      </div>\r\n      <div class=\"value\">{{ hero.culture }}</div>\r\n    </div>\r\n    <div class=\"flex-row\">\r\n      <div class=\"label\">\r\n        <label>Sozialrang: </label>\r\n      </div>\r\n      <div class=\"value\">{{ hero.social_rank }}</div>\r\n    </div>\r\n    <div class=\"flex-row\">\r\n      <div class=\"label\">\r\n        <label>Größe: </label>\r\n      </div>\r\n      <div class=\"value\">{{ hero.size }}</div>\r\n    </div>\r\n    <div class=\"flex-row\">\r\n      <div class=\"label\">\r\n        <label>Gewicht: </label>\r\n      </div>\r\n      <div class=\"value\">{{ hero.weight }}</div>\r\n    </div>\r\n    <div class=\"flex-row\">\r\n      <div class=\"label\">\r\n        <label>Haarfarbe: </label>\r\n      </div>\r\n      <div class=\"value\">{{ hero.hairColor }}</div>\r\n    </div>\r\n    <div class=\"flex-row\">\r\n      <div class=\"label\">\r\n        <label>Augenfarbe: </label>\r\n      </div>\r\n      <div class=\"value\">{{ hero.eyeColor }}</div>\r\n    </div>\r\n    <div class=\"flex-row\">\r\n      <div class=\"label\">\r\n        <label>Magieresistenz: </label>\r\n      </div>\r\n      <div class=\"value\">{{ hero.magieresistenz }}</div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

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

module.exports = "#imageSelector {\r\n    min-width: 200px;\r\n}"

/***/ }),

/***/ "./src/app/choose-image/choose-image.component.html":
/*!**********************************************************!*\
  !*** ./src/app/choose-image/choose-image.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<mat-select placeholder=\"Image\" #imageSelector>\r\n  <mat-option *ngFor=\"let image of images\" [value]=\"image\">\r\n    {{image.caption}}\r\n  </mat-option>\r\n</mat-select>\r\n<button mat-button class=\"navButton\" (click)=\"sendImage(imageSelector.value)\">Send</button>"

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
/* harmony import */ var app_url_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/url.service */ "./src/app/url.service.ts");
/* harmony import */ var _domain_adventure_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../domain/adventure.service */ "./src/app/domain/adventure.service.ts");
/* harmony import */ var _domain_remoteControlOperation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../domain/remoteControlOperation */ "./src/app/domain/remoteControlOperation.ts");
/* harmony import */ var _remote_control_remote_control_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../remote-control/remote-control.service */ "./src/app/remote-control/remote-control.service.ts");
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
        this.baseUrl = app_url_service__WEBPACK_IMPORTED_MODULE_2__["UrlService"].getBaseUrl();
    }
    ChooseImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.adventureService.getAdventures().then(function (adventures) {
            _this.adventures = adventures;
            _this.adventures.forEach(function (adventure) {
                // this.images = this.images.concat(adventure.elements)
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
            providers: [_domain_adventure_service__WEBPACK_IMPORTED_MODULE_3__["AdventureService"], _remote_control_remote_control_service__WEBPACK_IMPORTED_MODULE_5__["RemoteControlService"]]
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_domain_adventure_service__WEBPACK_IMPORTED_MODULE_3__["AdventureService"],
            _remote_control_remote_control_service__WEBPACK_IMPORTED_MODULE_5__["RemoteControlService"],
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

module.exports = ".weaponEntry {\r\n  display: flex;\r\n  flex-direction: row;\r\n  width: 100%;\r\n  flex-wrap: wrap;\r\n  font-size: 0.8rem;\r\n  align-items: center;\r\n  justify-content: stretch;\r\n}\r\n\r\n.weaponName {\r\n  margin-right: 1rem;\r\n}\r\n\r\n.weaponDices {\r\n  font-weight: 600;\r\n}\r\n\r\n.form-group .paper-check input + span,\r\n.form-group .paper-radio input + span {\r\n  display: flex;\r\n}\r\n\r\n.currentValues {\r\n  font-weight: 700;\r\n  padding: 1rem 0;\r\n}\r\n\r\n.currentValues label {\r\n  /* background-color: #fff; */\r\n  /* min-width: 4rem; */\r\n  margin-right: 1rem;\r\n}\r\n\r\n.armor-entry,\r\n.weapon-entry {\r\n  padding: 0.875rem;\r\n}\r\n\r\n.currentValues span {\r\n  margin-right: 3rem;\r\n}\r\n\r\n.currentValues.flex-col {\r\n  /* background-color: #fffffa; */\r\n  font-size: x-large;\r\n  justify-content: flex-start;\r\n  min-width: 400px;\r\n}\r\n\r\n.kampfwerte {\r\n  background-image: url(\"/assets/fight-icon.png\");\r\n  /* background-image: url(\"/assets/hero-background_desaturated.jpg\"); */\r\n  background-size: 5.5rem;\r\n  padding-top: 4rem;\r\n  background-position: top center;\r\n  background-repeat: no-repeat;\r\n}\r\n"

/***/ }),

/***/ "./src/app/combat-data-display/combat-data-display.component.html":
/*!************************************************************************!*\
  !*** ./src/app/combat-data-display/combat-data-display.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kampfwerte flex-item flex-col flex-top\">\r\n  <div class=\"padded flex-item flex-col\">\r\n    <h4>Basiswerte</h4>\r\n\r\n    <div class=\"flex-row\">\r\n      <div class=\"flex-item\">\r\n        <label class=\"long\">Attacke:&nbsp;</label> {{ hero.attack_basis }}\r\n      </div>\r\n      <div class=\"flex-item\">\r\n        <label class=\"long\">Parade:&nbsp;</label> {{ hero.parade_basis }}\r\n      </div>\r\n      <div class=\"flex-item\">\r\n        <label class=\"long\">Fernkampf:&nbsp;</label> {{ hero.fernkampf_basis }}\r\n      </div>\r\n      <div class=\"flex-item\">\r\n        <label class=\"long\">Initiative:&nbsp;</label> {{ hero.initiative }}\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"padded flex-item flex-col\">\r\n    <h4>Aktuelle Werte</h4>\r\n    <div class=\"flex-col\">\r\n\r\n      <div class=\"currentValues flex-item flex-row \" *ngIf=\"hero.currentWeapon && hero.currentWeaponSkillIsMelee()\">\r\n        <div class=\"flex-row\">\r\n          <label>Attacke:&nbsp;</label><span class=\"currentValue\"> {{ hero.currentAttack }}</span>\r\n        </div>\r\n        <div class=\"flex-row\">\r\n          <label>Parade:&nbsp;</label><span class=\"currentValue\"> {{ hero.currentParade }}</span>\r\n        </div>\r\n        <div class=\"flex-row\">\r\n          <label>Trefferpunkte:&nbsp;</label><span class=\"currentValue\">\r\n            {{ hero.currentWeapon.damageDice }}W6+{{\r\n            hero.currentWeapon.damageAddPoints\r\n            }}</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"currentValues flex-item flex-row\" *ngIf=\"hero.currentWeapon && hero.currentWeaponSkillIsLongRange()\">\r\n        <div class=\"flex-row\">\r\n          <label>Fernkampfwert:&nbsp;</label><span>{{ hero.currentLongRangeValue }}</span>\r\n        </div>\r\n        <div class=\"flex-row\">\r\n          <label>Trefferpunkte:&nbsp;</label>\r\n          <span>{{ hero.currentWeapon.damageDice }}W6+{{\r\n            hero.currentWeapon.damageAddPoints\r\n            }}</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"currentValues flex-item flex-row\">\r\n        <label>Rüstungsschutz:&nbsp;</label><span class=\"currentValue\"> {{ hero.armorValue }}</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"flex-row Grid--top\">\r\n    <div class=\"padded flex-item flex-col\">\r\n      <h4>Waffen</h4>\r\n\r\n      <fieldset class=\"form-group\" *ngFor=\"let weapon of hero.weapons\">\r\n        <label class=\"paper-radio\">\r\n          <div class=\"flex-row border border-primary weapon-entry comic-shadow\">\r\n            <input type=\"radio\" name=\"selectedWeapon\" class=\"flex-item\"\r\n              [checked]=\"weapon.name === hero.currentWeapon.name\" value=\"{{ weapon.name }}\"\r\n              (change)=\"updateCurrentWeapon(weapon)\" />\r\n            <span class=\"weaponChoiceLabel flex-row\">\r\n              <div class=\"flex-row\">\r\n                <div class=\"weaponName\">{{ weapon.name }}</div>\r\n                <div class=\"weaponDices\">{{ weapon.damageText }}</div>\r\n              </div>\r\n            </span>\r\n          </div>\r\n        </label>\r\n      </fieldset>\r\n    </div>\r\n    <div class=\"padded flex-item flex-col \">\r\n      <h4>Rüstung</h4>\r\n\r\n      <fieldset class=\"form-group\" *ngFor=\"let armor of hero.armor\">\r\n        <label class=\"paper-radio\">\r\n          <div class=\"flex-row border border-6 armor-entry comic-shadow\">\r\n            <input type=\"checkbox\" name=\"selectedArmor\" class=\"flex-item\" [checked]=\"armor.isEquipped\"\r\n              value=\"{{ armor.name }}\" (change)=\"updateEquippedArmor(armor)\" />\r\n            <span class=\"weaponChoiceLabel flex-row\">\r\n              <div class=\"flex-row\">\r\n                <div class=\"weaponName\">{{ armor.name }}</div>\r\n                <div class=\"weaponDices\">{{ armor.rs }}</div>\r\n              </div>\r\n            </span>\r\n          </div>\r\n        </label>\r\n      </fieldset>\r\n    </div>\r\n  </div>\r\n</div>"

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



var CombatDataDisplayComponent = /** @class */ (function () {
    function CombatDataDisplayComponent(service) {
        this.service = service;
    }
    CombatDataDisplayComponent.prototype.ngOnInit = function () {
    };
    CombatDataDisplayComponent.prototype.updateCurrentWeapon = function (weapon) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.service.sendUpate({
                heroId: _this.hero.id,
                type: 'setCurrentWeapon',
                weaponId: weapon.id
            });
            _this.hero.currentWeapon = weapon;
            resolve(weapon);
        });
    };
    CombatDataDisplayComponent.prototype.updateEquippedArmor = function (armor) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            armor.isEquipped = !armor.isEquipped;
            _this.service.sendUpate({
                heroId: _this.hero.id,
                type: 'equipArmor',
                weaponId: armor.id,
                isEquipped: armor.isEquipped
            });
            resolve(armor);
        });
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
        __metadata("design:paramtypes", [app_hero_controls_hero_life_service__WEBPACK_IMPORTED_MODULE_2__["HeroLifeService"]])
    ], CombatDataDisplayComponent);
    return CombatDataDisplayComponent;
}());



/***/ }),

/***/ "./src/app/combatant/combatant.component.css":
/*!***************************************************!*\
  !*** ./src/app/combatant/combatant.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-width: 15rem;\r\n  padding: 0.5rem;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.wrapper.added {\r\n  background-color: #eee;\r\n}\r\n\r\n.wrapper.good {\r\n  background-color: aqua;\r\n  margin-left: -2rem;\r\n}\r\n\r\n.wrapper.evil {\r\n  background-color: coral;\r\n  margin-left: 2rem;\r\n}\r\n\r\n.isNextIndicator {\r\n  width: 0.5rem;\r\n  height: 0.5rem;\r\n  border-radius: 50%;\r\n  position: absolute;\r\n  top: -0.25rem;\r\n  left: -0.25rem;\r\n  background-color: blue;\r\n}\r\n\r\n.header {\r\n  min-width: 15rem;\r\n  display: flex;\r\n  position: relative;\r\n  justify-content: space-between;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.fightValues {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.actions {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.actions {\r\n  margin-top: -2rem;\r\n  min-height: 2rem;\r\n}\r\n\r\n.gotHitButton {\r\n  margin-top: 2rem;\r\n}\r\n"

/***/ }),

/***/ "./src/app/combatant/combatant.component.html":
/*!****************************************************!*\
  !*** ./src/app/combatant/combatant.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  class=\"border wrapper\"\n  [class.added]=\"combatant.selectedForFight === true && isActive === false\"\n  [class.good]=\"combatant.isGood === true\"\n  [class.evil]=\"combatant.isGood === false\"\n>\n  <div class=\"header\">\n    <div class=\"isNextIndicator\" *ngIf=\"combatant.nextUp === true\"></div>\n    <div>{{ combatant.name }}</div>\n    <div>LE: {{ combatant.currentLife }}</div>\n  </div>\n  <div class=\"content\">\n    <div class=\"fightValues\">\n      <div *ngFor=\"let fightString of combatant.fightTexts\">\n        {{ fightString }}\n      </div>\n    </div>\n    <div>IN: {{ combatant.currentInitiative }}</div>\n  </div>\n  <div class=\"actions\">\n    <button\n      (click)=\"addToFight()\"\n      *ngIf=\"isActive === false && combatant.selectedForFight !== true\"\n    >\n      +\n    </button>\n    <button\n      (click)=\"removeFromFight()\"\n      *ngIf=\"isActive === false && combatant.selectedForFight !== false\"\n    >\n      -\n    </button>\n    <button\n      class=\"gotHitButton\"\n      (click)=\"gotHit(1)\"\n      *ngIf=\"isActive === true && combatant.isHero === false\"\n    >\n      -1\n    </button>\n    <button\n      class=\"gotHitButton\"\n      (click)=\"gotHit(5)\"\n      *ngIf=\"isActive === true && combatant.isHero === false\"\n    >\n      -5\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/combatant/combatant.component.ts":
/*!**************************************************!*\
  !*** ./src/app/combatant/combatant.component.ts ***!
  \**************************************************/
/*! exports provided: CombatantComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CombatantComponent", function() { return CombatantComponent; });
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

var CombatantComponent = /** @class */ (function () {
    function CombatantComponent() {
    }
    CombatantComponent.prototype.ngOnInit = function () {
    };
    CombatantComponent.prototype.addToFight = function () {
        this.combatant.selectedForFight = true;
        this.combatant.isGood = this.usedForGood;
    };
    CombatantComponent.prototype.removeFromFight = function () {
        this.combatant.selectedForFight = false;
        this.combatant.isGood = null;
    };
    CombatantComponent.prototype.gotHit = function (hitPoints) {
        this.combatant.currentLife = this.combatant.currentLife - hitPoints;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CombatantComponent.prototype, "combatant", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CombatantComponent.prototype, "usedForGood", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CombatantComponent.prototype, "sequence", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CombatantComponent.prototype, "isActive", void 0);
    CombatantComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'combatant',
            template: __webpack_require__(/*! ./combatant.component.html */ "./src/app/combatant/combatant.component.html"),
            styles: [__webpack_require__(/*! ./combatant.component.css */ "./src/app/combatant/combatant.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CombatantComponent);
    return CombatantComponent;
}());



/***/ }),

/***/ "./src/app/confirm-deletion/confirm-deletion.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/confirm-deletion/confirm-deletion.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".buttonRow {\r\n    margin-top: 30px;\r\n    justify-content: flex-end;\r\n}\r\n\r\n.titleText {\r\n    margin-bottom: 20px;\r\n}"

/***/ }),

/***/ "./src/app/confirm-deletion/confirm-deletion.component.html":
/*!******************************************************************!*\
  !*** ./src/app/confirm-deletion/confirm-deletion.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-col center\">\r\n  <h4><i class=\"fa fa-trash\"></i></h4>\r\n  <h4 class=\"titleText\">\r\n    {{ data.title }}\r\n  </h4>\r\n</div>\r\n<p innerHTML=\"{{ data.text }}\"></p>\r\n<div class=\"buttonRow row\">\r\n  <button (click)=\"raiseCancel()\">Nee, doch nicht</button>\r\n  <button class=\"background-danger\" (click)=\"raiseAccept()\">\r\n    <i class=\"fa fa-trash\"></i> Ja, natürlich\r\n  </button>\r\n</div>\r\n"

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

module.exports = ".messageToConfirm {\r\n    margin-bottom: 10px;\r\n    padding: 10px;\r\n}\r\n\r\n\r\n.confirmationButtons {\r\n    background-color: #fff;\r\n    margin-top: -3px;\r\n    padding-top: 15px;\r\n    width: 180px;\r\n    border: 1px solid #aaa;\r\n    box-shadow: 1px 2px 0px #999;\r\n}\r\n\r\n\r\n.confirmationButton {\r\n    height: 30px;\r\n    width: 90px;\r\n    align-items: center;\r\n    justify-content: center;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.confirmationButton.accept {\r\n    background-color: #8DC071;\r\n    border-right: 1px solid #999;\r\n}\r\n\r\n\r\n.confirmationButton.reject {\r\n    background-color: #eee;\r\n \r\n}"

/***/ }),

/***/ "./src/app/confirmation-sheet/confirmation-sheet.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/confirmation-sheet/confirmation-sheet.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  class=\"confirmationButtons flex-col center\" >\r\n  <div class=\"messageToConfirm\" *ngIf=\"showExternalTemplate !== true\">{{confirmationText}}</div>\r\n  <div class=\"messageToConfirm\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n  <div class=\"flex-row\">\r\n      <div class=\"flex-item flex-col confirmationButton center accept\" (click)=\"raiseConfirm()\">\r\n          <i class=\"fa fa-check\"></i>\r\n      </div>\r\n      <div class=\"flex-item flex-col confirmationButton center reject\" (click)=\"raiseCancel()\">\r\n          <i class=\"fa fa-window-close\"></i>\r\n      </div>\r\n  </div>\r\n</div>"

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

module.exports = ".detailNavigation {\r\n  padding: 10px;\r\n  justify-content: space-between;\r\n}\r\n\r\nbutton {\r\n  margin: 0 0.5rem;\r\n}\r\n"

/***/ }),

/***/ "./src/app/detail-navigation/detail-navigation.component.html":
/*!********************************************************************!*\
  !*** ./src/app/detail-navigation/detail-navigation.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"detailNavigation flex-item flex-row\" *ngIf=\"hero\">\r\n  <button class=\"comic-shadow\" (click)=\"navToOverview()\">\r\n    <i class=\"fa fa-arrow-left\"></i> Übersicht\r\n  </button>\r\n  <div class=\"detailNavButtons\">\r\n    <button (click)=\"updateDetailView('character')\"\r\n      [ngClass]=\"detailArea === 'character' ? 'comic-shadow btn-primary' : 'comic-shadow '\">\r\n      Charakter\r\n    </button>\r\n    <button (click)=\"updateDetailView('talents')\"\r\n      [ngClass]=\"detailArea === 'talents' ? 'comic-shadow btn-primary' : 'comic-shadow '\">\r\n      Talente\r\n    </button>\r\n    <button *ngIf=\"hero.knowsMagic\" (click)=\"updateDetailView('spells')\"\r\n      [ngClass]=\"detailArea === 'spells' ? 'comic-shadow btn-primary' : 'comic-shadow '\">\r\n      Zauber\r\n    </button>\r\n    <button (click)=\"updateDetailView('inventory')\"\r\n      [ngClass]=\"detailArea === 'inventory' ? 'comic-shadow btn-primary' : 'comic-shadow '\">\r\n      Inventar\r\n    </button>\r\n    <button (click)=\"updateDetailView('edit')\"\r\n      [ngClass]=\"detailArea === 'edit' ? 'comic-shadow btn-primary' : 'comic-shadow '\">\r\n      Steigern\r\n    </button>\r\n  </div>\r\n\r\n\r\n</div>"

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
        this._attribute = attribute;
    }
    Object.defineProperty(ActualAttribute.prototype, "value", {
        get: function () {
            return this.valueNumber;
        },
        set: function (value) {
            this.valueNumber = value;
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
    Object.defineProperty(ActualAttribute.prototype, "attribute", {
        get: function () {
            return this._attribute;
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
        this.value = actualSkill ? actualSkill['value'] : 0;
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
/*! exports provided: AdventureService, Adventure, ElementType, Image, Character, Section */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdventureService", function() { return AdventureService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Adventure", function() { return Adventure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementType", function() { return ElementType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Character", function() { return Character; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return Section; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _attribute_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./attribute.service */ "./src/app/domain/attribute.service.ts");
/* harmony import */ var _fight__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fight */ "./src/app/domain/fight.ts");
/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hero */ "./src/app/domain/hero.ts");
/* harmony import */ var _npc__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./npc */ "./src/app/domain/npc.ts");
/* harmony import */ var _skills_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./skills.service */ "./src/app/domain/skills.service.ts");
/* harmony import */ var _spells_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./spells.service */ "./src/app/domain/spells.service.ts");
/* harmony import */ var app_url_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/url.service */ "./src/app/url.service.ts");
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
    function AdventureService(http, skillService, spellService, attributeService) {
        this.http = http;
        this.skillService = skillService;
        this.spellService = spellService;
        this.attributeService = attributeService;
        this.adventuresUrl = app_url_service__WEBPACK_IMPORTED_MODULE_12__["UrlService"].getBaseUrl() + '/adventures/';
        this.npcTypesUrl = app_url_service__WEBPACK_IMPORTED_MODULE_12__["UrlService"].getBaseUrl() + 'npcTypes/';
        this.currentAdventure = 1;
        this.npcsUrl = app_url_service__WEBPACK_IMPORTED_MODULE_12__["UrlService"].getBaseUrl() + "/adventures/" + this.currentAdventure + "/npcs/";
        this.fightsURL = app_url_service__WEBPACK_IMPORTED_MODULE_12__["UrlService"].getBaseUrl() + "/adventures/" + this.currentAdventure + "/fights/";
    }
    AdventureService.prototype.getAdventures = function () {
        var _this = this;
        return this.http.get(this.adventuresUrl)
            .toPromise()
            .then(function (response) {
            return _this.extractAdventures(response);
        });
    };
    AdventureService.prototype.getCurrentAdventureId = function () {
        return 1;
    };
    AdventureService.prototype.extractAdventures = function (res) {
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
    AdventureService.prototype.getNPCTypes = function () {
        return this.http.get(this.npcTypesUrl)
            .toPromise()
            .then(function (response) {
            return response.json().map(function (npcResult) {
                return new _npc__WEBPACK_IMPORTED_MODULE_9__["NPCType"](npcResult.id, npcResult.name);
            });
        });
    };
    AdventureService.prototype.getNPCs = function () {
        var _this = this;
        return this.http.get(this.npcsUrl)
            .toPromise()
            .then(function (response) {
            return response.json().map(function (npcResult) {
                if (npcResult.character) {
                    var character = new _hero__WEBPACK_IMPORTED_MODULE_8__["Hero"](_this.skillService, _this.spellService, _this.attributeService).setData(npcResult.character);
                    character.isHero = false;
                    return character;
                }
                else
                    return new _npc__WEBPACK_IMPORTED_MODULE_9__["NPC"](npcResult.npc.id, npcResult.npc.name, null, npcResult.npc.life, npcResult.npc.initiative, npcResult.npc.weapon_1_name, npcResult.npc.weapon_1_attack, npcResult.npc.weapon_1_parade, npcResult.npc.weapon_1_damage, npcResult.npc.weapon_2_name, npcResult.npc.weapon_2_attack, npcResult.npc.weapon_2_parade, npcResult.npc.weapon_2_damage);
            });
        });
    };
    AdventureService.prototype.getFights = function () {
        return this.http.get(this.fightsURL)
            .toPromise()
            .then(function (response) {
            return response.json().map(function (fight) {
                return new _fight__WEBPACK_IMPORTED_MODULE_7__["Fight"](fight.name);
            });
        });
    };
    AdventureService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _skills_service__WEBPACK_IMPORTED_MODULE_10__["SkillService"], _spells_service__WEBPACK_IMPORTED_MODULE_11__["SpellService"], _attribute_service__WEBPACK_IMPORTED_MODULE_6__["AttributeService"]])
    ], AdventureService);
    return AdventureService;
}());

var Adventure = /** @class */ (function () {
    function Adventure() {
        this.images = [];
        this.characters = [];
    }
    Adventure.prototype.setData = function (dataObject) {
        var _this = this;
        this.id = dataObject.id;
        this.name = dataObject.name;
        dataObject.images.forEach(function (image) {
            var imageObject = new Image(_this.buildImageLink(image.url), image.caption, image.sequence);
            _this.images.push(imageObject);
        });
        dataObject.characters.forEach(function (character) {
            _this.characters.push(new Character(character.name, _this.buildImageLink(character.imageUrl), character.sequence));
        });
    };
    Object.defineProperty(Adventure.prototype, "elements", {
        get: function () {
            var allElements = [];
            for (var i = 0; i < this.images.length; i++) {
                allElements.push(this.images[i]);
            }
            for (var j = 0; j < this.characters.length; j++) {
                allElements.push(this.characters[j]);
            }
            allElements.sort(function (elementA, elementB) {
                return elementA.sequence - elementB.sequence;
            });
            var allElementsGrouped = [];
            var _loop_1 = function (index) {
                var element = allElements[index];
                var existingElementWithThatSequenceIndex = allElementsGrouped.findIndex(function (groupedElement) { return element.sequence === groupedElement.sequence; });
                if (existingElementWithThatSequenceIndex !== -1) {
                    var existingElementWithThatSequence = allElementsGrouped[existingElementWithThatSequenceIndex];
                    if (existingElementWithThatSequence.type === ElementType.Section) {
                        existingElementWithThatSequence.elements.push(element);
                    }
                    else {
                        var newSection = new Section();
                        newSection.sequence = element.sequence;
                        newSection.elements.push(existingElementWithThatSequence);
                        newSection.elements.push(element);
                        allElementsGrouped[existingElementWithThatSequenceIndex] = newSection;
                    }
                }
                else {
                    allElementsGrouped.push(element);
                }
            };
            for (var index = 0; index < allElements.length; index++) {
                _loop_1(index);
            }
            return allElementsGrouped;
        },
        enumerable: true,
        configurable: true
    });
    Adventure.prototype.buildImageLink = function (absolutePath) {
        return "" + app_url_service__WEBPACK_IMPORTED_MODULE_12__["UrlService"].getBaseUrl() + absolutePath;
    };
    return Adventure;
}());

var ElementType;
(function (ElementType) {
    ElementType["Image"] = "image";
    ElementType["Character"] = "character";
    ElementType["Location"] = "location";
    ElementType["Section"] = "section";
})(ElementType || (ElementType = {}));
var Image = /** @class */ (function () {
    function Image(url, caption, sequence) {
        this.url = url;
        this.caption = caption;
        this.sequence = sequence;
    }
    Object.defineProperty(Image.prototype, "imageUrl", {
        get: function () {
            return this.url;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Image.prototype, "type", {
        get: function () {
            return ElementType.Image;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Image.prototype, "title", {
        get: function () {
            return this.caption;
        },
        enumerable: true,
        configurable: true
    });
    return Image;
}());

var Character = /** @class */ (function () {
    function Character(name, imageUrl, sequence) {
        this.name = name;
        this.imageUrl = imageUrl;
        this.sequence = sequence;
    }
    Object.defineProperty(Character.prototype, "title", {
        get: function () {
            return this.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Character.prototype, "type", {
        get: function () {
            return ElementType.Character;
        },
        enumerable: true,
        configurable: true
    });
    return Character;
}());

var Section = /** @class */ (function () {
    function Section() {
        this.type = ElementType.Section;
        this.elements = [];
    }
    return Section;
}());



/***/ }),

/***/ "./src/app/domain/applicationState.ts":
/*!********************************************!*\
  !*** ./src/app/domain/applicationState.ts ***!
  \********************************************/
/*! exports provided: gameState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gameState", function() { return gameState; });
var gameState = {
    gameStarted: false,
    dataInitialized: false
};


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
    function Armor(id, name, rs, behinderung, isEquipped) {
        if (isEquipped === void 0) { isEquipped = false; }
        this.id = id;
        this.name = name;
        this.rs = rs;
        this.behinderung = behinderung;
        this.isEquipped = isEquipped;
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
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var app_url_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/url.service */ "./src/app/url.service.ts");
/* harmony import */ var _ascensionPricing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ascensionPricing */ "./src/app/domain/ascensionPricing.ts");
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
        this.ascensionsUrl = app_url_service__WEBPACK_IMPORTED_MODULE_2__["UrlService"].getBaseUrl() + '/ascensions/';
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
            return new _ascensionPricing__WEBPACK_IMPORTED_MODULE_3__["AscensionPricing"](ascensionResponse, index);
        });
    };
    EnhancementPricingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], EnhancementPricingService);
    return EnhancementPricingService;
}());



/***/ }),

/***/ "./src/app/domain/fight.ts":
/*!*********************************!*\
  !*** ./src/app/domain/fight.ts ***!
  \*********************************/
/*! exports provided: Fight, MatchesCombatantSearchTerm, IsGoodFighter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fight", function() { return Fight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchesCombatantSearchTerm", function() { return MatchesCombatantSearchTerm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsGoodFighter", function() { return IsGoodFighter; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Fight = /** @class */ (function () {
    function Fight(name) {
        this.name = name;
    }
    Object.defineProperty(Fight.prototype, "combatants", {
        get: function () {
            return this._combatants;
        },
        enumerable: true,
        configurable: true
    });
    return Fight;
}());

var MatchesCombatantSearchTerm = /** @class */ (function () {
    function MatchesCombatantSearchTerm() {
    }
    MatchesCombatantSearchTerm.prototype.transform = function (combatants, searchTerm) {
        if (searchTerm != '' && searchTerm !== undefined) {
            return combatants.filter(function (combatant) {
                return (combatant.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
            });
        }
        else {
            return combatants;
        }
    };
    MatchesCombatantSearchTerm = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'MatchesCombatantSearchTerm'
        })
    ], MatchesCombatantSearchTerm);
    return MatchesCombatantSearchTerm;
}());

var IsGoodFighter = /** @class */ (function () {
    function IsGoodFighter() {
    }
    IsGoodFighter.prototype.transform = function (combatants, isGood) {
        return combatants.filter(function (combatant) { return combatant.isGood !== !isGood; });
    };
    IsGoodFighter = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'IsGoodFighter'
        })
    ], IsGoodFighter);
    return IsGoodFighter;
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
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _attribute_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./attribute.service */ "./src/app/domain/attribute.service.ts");
/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hero */ "./src/app/domain/hero.ts");
/* harmony import */ var _skills_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./skills.service */ "./src/app/domain/skills.service.ts");
/* harmony import */ var _spells_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./spells.service */ "./src/app/domain/spells.service.ts");
/* harmony import */ var app_url_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/url.service */ "./src/app/url.service.ts");
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
        this.heroesUrl = app_url_service__WEBPACK_IMPORTED_MODULE_10__["UrlService"].getBaseUrl() + "/characters/";
    }
    HeroService.prototype.getHeroes = function () {
        var _this = this;
        if (this.heroes) {
            return new Promise(function (resolve, reject) {
                resolve(_this.heroes);
            });
        }
        else {
            var characterGetPromise = this.http.get(this.heroesUrl)
                .toPromise()
                .then(function (response) {
                _this.heroes = _this.extractData(response);
                return _this.heroes.sort(function (heroA, heroB) {
                    if (heroA.name > heroB.name)
                        return 1;
                    else
                        return -1;
                });
            });
            characterGetPromise.catch(function (error) {
                console.log('error getting characters');
            });
            return characterGetPromise;
        }
    };
    HeroService.prototype.extractData = function (res) {
        var body = res.json();
        var heroes = [];
        body.forEach(function (hero) {
            var newHero = new _hero__WEBPACK_IMPORTED_MODULE_7__["Hero"](this.skillService, this.spellService, this.attributeService).setData(hero);
            heroes.push(newHero);
        }.bind(this));
        return heroes;
    };
    HeroService.prototype.handleError = function (error) {
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
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _skills_service__WEBPACK_IMPORTED_MODULE_8__["SkillService"], _spells_service__WEBPACK_IMPORTED_MODULE_9__["SpellService"], _attribute_service__WEBPACK_IMPORTED_MODULE_6__["AttributeService"]])
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
/* harmony import */ var _actualAttribute__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actualAttribute */ "./src/app/domain/actualAttribute.ts");
/* harmony import */ var _actualSkill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actualSkill */ "./src/app/domain/actualSkill.ts");
/* harmony import */ var _actualSkillGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actualSkillGroup */ "./src/app/domain/actualSkillGroup.ts");
/* harmony import */ var _actualSpell__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actualSpell */ "./src/app/domain/actualSpell.ts");
/* harmony import */ var _actualSpellGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actualSpellGroup */ "./src/app/domain/actualSpellGroup.ts");
/* harmony import */ var _armor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./armor */ "./src/app/domain/armor.ts");
/* harmony import */ var _inventoryItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./inventoryItem */ "./src/app/domain/inventoryItem.ts");
/* harmony import */ var _moneyInventory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./moneyInventory */ "./src/app/domain/moneyInventory.ts");
/* harmony import */ var _weapon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./weapon */ "./src/app/domain/weapon.ts");
/* harmony import */ var _weaponSkillDistribution__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./weaponSkillDistribution */ "./src/app/domain/weaponSkillDistribution.ts");











var Hero = /** @class */ (function () {
    function Hero(skillService, spellService, attributeService) {
        this.skillService = skillService;
        this.spellService = spellService;
        this.attributeService = attributeService;
        this.isHero = true;
        this.skillService = skillService;
        this.weapons = [];
    }
    Object.defineProperty(Hero.prototype, "damage", {
        get: function () {
            throw new Error('Method not implemented.');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Hero.prototype, "initiative", {
        get: function () {
            return this._initiative;
        },
        set: function (initiative) {
            this._initiative = initiative;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Hero.prototype, "currentInitiative", {
        get: function () {
            return this._currentInitiative;
        },
        set: function (initiative) {
            this._currentInitiative = initiative;
        },
        enumerable: true,
        configurable: true
    });
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
        this._initiative = dataObject['ini_basis'];
        this.knowsMagic = dataObject['knows_magic'];
        this.money = new _moneyInventory__WEBPACK_IMPORTED_MODULE_8__["MoneyInventory"](dataObject['money_dukaten'], dataObject['money_silbertaler'], dataObject['money_kreuzer'], dataObject['money_heller']);
        this.hairColor = dataObject['hair_color'];
        this.eyeColor = dataObject['eye_color'];
        this.weight = dataObject['weight'];
        this.attributes = [
            new _actualAttribute__WEBPACK_IMPORTED_MODULE_1__["ActualAttribute"](dataObject['MU'], this.attributeService.attributes.get('MU')),
            new _actualAttribute__WEBPACK_IMPORTED_MODULE_1__["ActualAttribute"](dataObject['KL'], this.attributeService.attributes.get('KL')),
            new _actualAttribute__WEBPACK_IMPORTED_MODULE_1__["ActualAttribute"](dataObject['IN'], this.attributeService.attributes.get('IN')),
            new _actualAttribute__WEBPACK_IMPORTED_MODULE_1__["ActualAttribute"](dataObject['CH'], this.attributeService.attributes.get('CH')),
            new _actualAttribute__WEBPACK_IMPORTED_MODULE_1__["ActualAttribute"](dataObject['FF'], this.attributeService.attributes.get('FF')),
            new _actualAttribute__WEBPACK_IMPORTED_MODULE_1__["ActualAttribute"](dataObject['GE'], this.attributeService.attributes.get('GE')),
            new _actualAttribute__WEBPACK_IMPORTED_MODULE_1__["ActualAttribute"](dataObject['KO'], this.attributeService.attributes.get('KO')),
            new _actualAttribute__WEBPACK_IMPORTED_MODULE_1__["ActualAttribute"](dataObject['KK'], this.attributeService.attributes.get('KK'))
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
            return new _weaponSkillDistribution__WEBPACK_IMPORTED_MODULE_10__["WeaponSkillDistribution"](weaponSkillDistribution.skill, weaponSkillDistribution.attack, weaponSkillDistribution.parade);
        });
        this.structureSkills(dataObject['skills'], dataObject['weaponSkillDistributions'], dataObject['weapons'], dataObject['armor']);
        if (this.knowsMagic) {
            this.structureSpells(dataObject['spells']);
        }
        this.inventory = dataObject['inventoryItems'].map(function (inventoryItem) {
            return new _inventoryItem__WEBPACK_IMPORTED_MODULE_7__["InventoryItem"](inventoryItem.id, inventoryItem.name, inventoryItem.amount, inventoryItem.weight);
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
                _this.skills.push(new _actualSkill__WEBPACK_IMPORTED_MODULE_2__["ActualSkill"](actualSkill, _this, skill, skillSkillGroup));
            });
            _this.skills.sort(function (skillA, skillB) {
                if (skillA.getSkill().name < skillB.getSkill().name) {
                    return -1;
                }
                if (skillA.getSkill().name > skillB.getSkill().name) {
                    return 1;
                }
                return 0;
            });
            skillGroups.forEach(function (skillGroup) {
                var skills = lodash__WEBPACK_IMPORTED_MODULE_0__["filter"](_this.skills, function (actualSkill) {
                    return actualSkill.getSkill().skillGroupId == skillGroup.id;
                });
                _this.skillGroups.push(new _actualSkillGroup__WEBPACK_IMPORTED_MODULE_3__["ActualSkillGroup"](skillGroup, skills));
            });
            weapons.forEach(function (weapon) {
                _this.addWeapon(new _weapon__WEBPACK_IMPORTED_MODULE_9__["Weapon"](weapon['id'], weapon['name'], weapon['tp_dice'], weapon['tp_add_points'], weapon['extra_tp_from_kk'], lodash__WEBPACK_IMPORTED_MODULE_0__["find"](allSkills, function (skill) {
                    return skill.id === weapon['skill'];
                }), _this.getAttribute('KK').value));
            });
            if (_this.weapons.length > 0)
                _this.currentWeapon = _this.weapons[0];
            armor.forEach(function (armor) {
                _this.addArmor(new _armor__WEBPACK_IMPORTED_MODULE_6__["Armor"](armor['id'], armor['name'], armor['rs'], armor['be']));
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
    Hero.prototype.getArmorById = function (armorId) {
        return this.armor.find(function (armorItem) {
            return armorItem.id === armorId;
        });
    };
    Object.defineProperty(Hero.prototype, "armorValue", {
        get: function () {
            return this.armor.reduce(function (previousArmorValue, armorEntry) {
                if (armorEntry.isEquipped)
                    return previousArmorValue + armorEntry.rs;
                else
                    return previousArmorValue;
            }, 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Hero.prototype, "behinderung", {
        get: function () {
            return this.armor.reduce(function (previousBehinderungValue, armorEntry) {
                if (armorEntry.isEquipped)
                    return previousBehinderungValue + armorEntry.behinderung;
                else
                    return previousBehinderungValue;
            }, 0);
        },
        enumerable: true,
        configurable: true
    });
    Hero.prototype.equipArmorById = function (armorId, isEquipped) {
        this.getArmorById(armorId).isEquipped = isEquipped;
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
    Hero.prototype.getInventoryItemById = function (inventoryItemId) {
        var inventoryIndex = this.inventory.findIndex(function (InventoryItem) {
            return InventoryItem.id === inventoryItemId;
        });
        return this.inventory[inventoryIndex];
    };
    Hero.prototype.deleteInventoryItemById = function (inventoryItemId) {
        var inventoryIndex = this.inventory.findIndex(function (InventoryItem) {
            return InventoryItem.id === inventoryItemId;
        });
        this.inventory.splice(inventoryIndex, 1);
    };
    Hero.prototype.updateInventoryItemAmount = function (inventoryItemId, amount) {
        this.getInventoryItemById(inventoryItemId).amount = amount;
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
                _this.spellGroups.push(new _actualSpellGroup__WEBPACK_IMPORTED_MODULE_5__["ActualSpellGroup"](spellGroup, []));
            });
            allSpells.sort(function (spellA, spellB) {
                if (spellA.name < spellB.name) {
                    return -1;
                }
                if (spellA.name > spellB.name) {
                    return 1;
                }
                return 0;
            });
            allSpells.forEach(function (spell) {
                var actualSpellDataObject = actualSpellsOfHero.find(function (actualSpellData) {
                    return spell.id === actualSpellData['id'];
                });
                var spellGroupOfSpell = _this.spellGroups.find(function (spellGroup) {
                    return spellGroup.getSpellGroup().id === spell.spellGroupId;
                });
                var actualSpell = new _actualSpell__WEBPACK_IMPORTED_MODULE_4__["ActualSpell"](actualSpellDataObject, _this, spell, spellGroupOfSpell.getSpellGroup());
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
    Object.defineProperty(Hero.prototype, "attack", {
        get: function () {
            return this.currentAttack;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Hero.prototype, "parade", {
        get: function () {
            return this.currentParade;
        },
        enumerable: true,
        configurable: true
    });
    Hero.prototype.currentWeaponSkillIsMelee = function () {
        if (this._currentWeapon)
            return this._currentWeapon.skill.skillGroupId === 1;
        else
            return false;
    };
    Hero.prototype.currentWeaponSkillIsLongRange = function () {
        if (this._currentWeapon)
            return this._currentWeapon.skill.skillGroupId === 8;
        else
            return false;
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
    Object.defineProperty(Hero.prototype, "fightTexts", {
        get: function () {
            return this.currentWeapon ? ["" + this.currentWeapon.name, "AT: " + this.currentAttack + ", PA: " + this.currentParade, "TP: " + this.currentWeaponDamageText] : ['keine Waffe gesetzt', 'AT:', 'PA:'];
        },
        enumerable: true,
        configurable: true
    });
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
/* harmony import */ var app_url_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/url.service */ "./src/app/url.service.ts");
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
        this.inventoryItemsUrl = app_url_service__WEBPACK_IMPORTED_MODULE_3__["UrlService"].getBaseUrl() + "/inventoryItems/";
    }
    InventoryService.prototype.updateAccountEntry = function (accountEntry, hero, newAmountValue) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.service.sendUpate({
                heroId: hero.id,
                type: 'updateAccountEntry',
                unit: accountEntry.unit.toLowerCase(),
                amount: newAmountValue
            });
            resolve(accountEntry);
        });
    };
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

/***/ "./src/app/domain/moneyInventory.ts":
/*!******************************************!*\
  !*** ./src/app/domain/moneyInventory.ts ***!
  \******************************************/
/*! exports provided: MoneyInventory, AccountEntry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoneyInventory", function() { return MoneyInventory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountEntry", function() { return AccountEntry; });
var MoneyInventory = /** @class */ (function () {
    function MoneyInventory(dukaten, silbertaler, kreuzer, heller) {
        this.entries = [];
        this.entries.push(new AccountEntry('Dukaten', dukaten));
        this.entries.push(new AccountEntry('Silbertaler', silbertaler));
        this.entries.push(new AccountEntry('Kreuzer', kreuzer));
        this.entries.push(new AccountEntry('Heller', heller));
    }
    Object.defineProperty(MoneyInventory.prototype, "dukaten", {
        get: function () {
            return this.entries.find(function (entry) {
                return entry.unit === 'Dukaten';
            }).amount;
        },
        set: function (amount) {
            this.entries.find(function (entry) {
                return entry.unit === 'Dukaten';
            }).amount = amount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MoneyInventory.prototype, "silbertaler", {
        get: function () {
            return this.entries.find(function (entry) {
                return entry.unit === 'Silbertaler';
            }).amount;
        },
        set: function (amount) {
            this.entries.find(function (entry) {
                return entry.unit === 'Silbertaler';
            }).amount = amount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MoneyInventory.prototype, "kreuzer", {
        get: function () {
            return this.entries.find(function (entry) {
                return entry.unit === 'Kreuzer';
            }).amount;
        },
        set: function (amount) {
            this.entries.find(function (entry) {
                return entry.unit === 'Kreuzer';
            }).amount = amount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MoneyInventory.prototype, "heller", {
        get: function () {
            return this.entries.find(function (entry) {
                return entry.unit === 'Heller';
            }).amount;
        },
        set: function (amount) {
            this.entries.find(function (entry) {
                return entry.unit === 'Heller';
            }).amount = amount;
        },
        enumerable: true,
        configurable: true
    });
    return MoneyInventory;
}());

var AccountEntry = /** @class */ (function () {
    function AccountEntry(unit, amount) {
        this.unit = unit;
        this.amount = amount;
    }
    return AccountEntry;
}());



/***/ }),

/***/ "./src/app/domain/npc.ts":
/*!*******************************!*\
  !*** ./src/app/domain/npc.ts ***!
  \*******************************/
/*! exports provided: NPCType, NPC */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NPCType", function() { return NPCType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NPC", function() { return NPC; });
var NPCType = /** @class */ (function () {
    function NPCType(id, name) {
        this.id = id;
        this.name = name;
    }
    return NPCType;
}());

var NPC = /** @class */ (function () {
    function NPC(id, name, isGood, currentLife, _initiative, _weapon_1, _attack_1, _parade_1, _damage_1, _weapon_2, _attack_2, _parade_2, _damage_2) {
        this.id = id;
        this.name = name;
        this.isGood = isGood;
        this.currentLife = currentLife;
        this._initiative = _initiative;
        this._weapon_1 = _weapon_1;
        this._attack_1 = _attack_1;
        this._parade_1 = _parade_1;
        this._damage_1 = _damage_1;
        this._weapon_2 = _weapon_2;
        this._attack_2 = _attack_2;
        this._parade_2 = _parade_2;
        this._damage_2 = _damage_2;
        this.isHero = false;
    }
    Object.defineProperty(NPC.prototype, "initiative", {
        get: function () {
            return this._initiative;
        },
        set: function (initiative) {
            this._initiative = initiative;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NPC.prototype, "fightTexts", {
        get: function () {
            var fightTexts = ["" + this._weapon_1,
                "AT: " + this._attack_1 + ", PA: " + this._parade_1,
                "TP: " + this._damage_1];
            if (this._weapon_2)
                fightTexts.concat(["" + this._weapon_2,
                    "AT: " + this._attack_2 + ", PA: " + this._parade_2,
                    "TP: " + this._damage_2]);
            return fightTexts;
        },
        enumerable: true,
        configurable: true
    });
    return NPC;
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
    closeImage: 'closeImage',
    createNPC: 'createNPC',
    startFight: 'startFight'
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
/* harmony import */ var _attribute_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attribute.service */ "./src/app/domain/attribute.service.ts");
/* harmony import */ var _skill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./skill */ "./src/app/domain/skill.ts");
/* harmony import */ var _skillgroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./skillgroup */ "./src/app/domain/skillgroup.ts");
/* harmony import */ var app_url_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/url.service */ "./src/app/url.service.ts");
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
        this.skillsUrl = app_url_service__WEBPACK_IMPORTED_MODULE_5__["UrlService"].getBaseUrl() + "/skills/";
        this.skillTypesUrl = app_url_service__WEBPACK_IMPORTED_MODULE_5__["UrlService"].getBaseUrl() + "/skillTypes/";
    }
    SkillService.prototype.getSkills = function () {
        var _this = this;
        if (!this.skillsPromise) {
            this.skillsPromise = this.http.get(this.skillsUrl)
                .toPromise()
                .then(function (response) {
                return _this.extractSkills(response);
            });
            this.skillsPromise.catch(function (error) {
                console.log('error getting skills');
                _this.skillsPromise = null;
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
            this.skillGroupsPromise.catch(function (error) {
                console.log('error getting skill groups');
            });
        }
        return this.skillGroupsPromise;
    };
    SkillService.prototype.extractSkills = function (res) {
        var _this = this;
        var skills = [];
        var body = res.json();
        body.forEach(function (skill) {
            skills.push(new _skill__WEBPACK_IMPORTED_MODULE_3__["Skill"](skill, _this.attributeService));
        });
        return skills;
    };
    SkillService.prototype.extractSkillTypes = function (res) {
        var _this = this;
        var skillTypes = [];
        var body = res.json();
        body.forEach(function (skillType) {
            skillTypes.push(new _skillgroup__WEBPACK_IMPORTED_MODULE_4__["SkillGroup"](skillType, _this.chRef));
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
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _attribute_service__WEBPACK_IMPORTED_MODULE_2__["AttributeService"]])
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
/* harmony import */ var app_url_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/url.service */ "./src/app/url.service.ts");
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
        this.spellsUrl = app_url_service__WEBPACK_IMPORTED_MODULE_4__["UrlService"].getBaseUrl() + "/spells/";
        this.spellTypesUrl = app_url_service__WEBPACK_IMPORTED_MODULE_4__["UrlService"].getBaseUrl() + "/spellTypes/";
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
/* harmony import */ var app_url_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/url.service */ "./src/app/url.service.ts");
/* harmony import */ var _weapon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./weapon */ "./src/app/domain/weapon.ts");
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
        this.weaponsUrl = app_url_service__WEBPACK_IMPORTED_MODULE_3__["UrlService"].getBaseUrl() + "/weapons/";
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
            weapons.push(new _weapon__WEBPACK_IMPORTED_MODULE_4__["Weapon"](weapon['id'], weapon['name'], weapon['tp_dice'], weapon['tp_add_points'], weapon['extra_tp_from_kk']));
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

module.exports = ".editAttributeContainer {\r\n    /* background-color: #D1B99D; */\r\n    padding: 10px 20px 10px 20px;\r\n}\r\n\r\n.attributeName {\r\n    width: 100px;\r\n    text-align: left;\r\n}\r\n\r\n.targetValue, .costOfRaise {\r\n    width: 40px;\r\n}\r\n\r\nbutton {\r\n    z-index: 10;\r\n}"

/***/ }),

/***/ "./src/app/edit-attribute/edit-attribute.component.html":
/*!**************************************************************!*\
  !*** ./src/app/edit-attribute/edit-attribute.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-col center\">\r\n    <button (click)=\"increaseAttribute()\">\r\n        <div class=\"editAttributeContainer flex-row\" >\r\n            <div class=\"attributeName\">{{attribute.name}}</div>\r\n            <div class=\"targetValue\"><i class=\"fa fa-tachometer\"></i> {{targetValue}}</div>\r\n            <div class=\"costOfRaise\"><i class=\"fa fa-dollar\"></i> {{costOfAscension}}</div>\r\n        </div>\r\n    </button>\r\n    \r\n    <confirmation-sheet *ngIf=\"state === 'toBeConfirmed'\" confirmationText=\"Zahle {{costOfAscension}} um {{attribute.name}} zu steigern?\" (confirm)=\"confirmIncrease()\" (cancel)=\"cancelIncrease()\"></confirmation-sheet>\r\n    \r\n</div>"

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
        this._attribute.value = this.targetValue;
        this.hero.experience_used += this.costOfAscension;
    };
    Object.defineProperty(EditAttributeComponent.prototype, "targetValue", {
        get: function () {
            return this._attribute.value + 1;
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

module.exports = ".navigationButton {\r\n    width: 250px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.attributeContainer, .skillEntry {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/edit-dialog/edit-dialog.component.html":
/*!********************************************************!*\
  !*** ./src/app/edit-dialog/edit-dialog.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page flex-col center\">\r\n  <div class=\"pageContent\">\r\n    <div class=\"sheet flex-col center\" *ngIf=\"hero\">\r\n      <h2>Punkte einsetzen</h2>\r\n      <div>{{hero.availablePoints}}</div>\r\n      <div id=\"firstStep\" *ngIf=\"state === 'initial'\" class=\"flex-col center\">\r\n        <h3>Was möchtest Du mit {{hero.name}} tun?</h3>\r\n        <div class=\"flex-col\">\r\n            <button class=\"navigationButton\" (click)=\"setState('raiseAttribute')\">Eigenschaft steigern</button>\r\n            <button class=\"navigationButton\" (click)=\"setState('raiseTalent')\">Talent steigern</button>\r\n            <button class=\"navigationButton\" *ngIf=\"hero.knowsMagic === true\">Zauberfertigkeit steigern</button>\r\n          </div>\r\n      </div>\r\n      <div id=\"raiseAttribute\" *ngIf=\"state === 'raiseAttribute'\" class=\"flex-col center\">\r\n        <h3>Welche Eigenschaft möchtest Du steigern?</h3>\r\n        <div class=\"navigationButton flex-item\" *ngFor=\"let attribute of hero.attributes; index as i; keyvalue\">\r\n          <edit-attribute [attribute]=\"attribute\" [costOfAscension]=\"getCostOfAttributeAscension(attribute)\" [hero]=\"hero\"></edit-attribute>\r\n        </div>\r\n        \r\n      </div>\r\n      <div id=\"raiseTalent\" *ngIf=\"state === 'raiseTalent'\" class=\"flex-col center\">\r\n        <h3>Welches Talent möchtest Du steigern?</h3>\r\n        <div class=\"flex-col flex-item center\">\r\n          <div class=\"flex-row padded searchContainer center\" >\r\n            <input placeholder=\"Suchbegriff\" [value]=\"talentSearchTerm\" (input)=\"talentSearchTerm  = $event.target.value\" />\r\n          </div>\r\n          <div class=\"talente padded\">\r\n            <div class=\"flex-col center\" *ngFor=\"let skillGroup of hero.skillGroups | MatchesTalentSearchTermChildren:talentSearchTerm\">\r\n              <div class=\"skillGroupTitle\">{{skillGroup.skillGroup.name}}</div>\r\n              <div class=\"skillGroupEntries\">\r\n                  <div class=\"skillEntry\" *ngFor=\"let skill of skillGroup.skills | MatchesTalentSearchTerm:talentSearchTerm\">\r\n                    <edit-talent [skill]=\"skill\" [hero]=\"hero\" [costOfAscension]=\"getCostOfSkillAscension(skill)\"></edit-talent>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

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
            return ascensionPricing.levelFrom === attribute.value;
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

/***/ "./src/app/edit-money/edit-money.component.css":
/*!*****************************************************!*\
  !*** ./src/app/edit-money/edit-money.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\r\n  margin-top: 3rem;\r\n  margin-bottom: 3rem;\r\n  font-size: 3rem;\r\n  text-align: center;\r\n}\r\n\r\np {\r\n  font-size: 1.5rem;\r\n}\r\n"

/***/ }),

/***/ "./src/app/edit-money/edit-money.component.html":
/*!******************************************************!*\
  !*** ./src/app/edit-money/edit-money.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-col center\">\r\n  <img src=\"/assets/money-icon.png\" class=\"dialogHeroImage no-border\" />\r\n  <p>\r\n    Aktuell hast Du <span style=\"font-weight: 700;\">{{ accountEntry.amount }} {{ accountEntry.unit }}</span>.\r\n  </p>\r\n  <p>\r\n    Auf welchen Wert möchtest Du es setzen?\r\n  </p>\r\n\r\n  <input type=\"number\" placeholder=\"Die Anzahl deiner {{ accountEntry.unit }}\" [(ngModel)]=\"newAmount\" />\r\n</div>\r\n<hr />\r\n<div class=\"buttonRow row\">\r\n  <button (click)=\"raiseCancel()\">Doch nicht.</button>\r\n  <button class=\"background-danger\" (click)=\"raiseAccept()\">\r\n    <i class=\"fa fa-magic\"></i> So ist das jetzt mit dem Geld\r\n  </button>\r\n</div>"

/***/ }),

/***/ "./src/app/edit-money/edit-money.component.ts":
/*!****************************************************!*\
  !*** ./src/app/edit-money/edit-money.component.ts ***!
  \****************************************************/
/*! exports provided: EditMoneyComponent, EditMoneyData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditMoneyComponent", function() { return EditMoneyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditMoneyData", function() { return EditMoneyData; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_domain_moneyInventory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/domain/moneyInventory */ "./src/app/domain/moneyInventory.ts");
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



var EditMoneyComponent = /** @class */ (function () {
    function EditMoneyComponent(dialog, data) {
        this.dialog = dialog;
        this.data = data;
        this.confirm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.newAmount = data.amount;
        this.accountEntry = data;
    }
    EditMoneyComponent.prototype.ngOnInit = function () {
    };
    EditMoneyComponent.prototype.raiseAccept = function () {
        this.confirm.emit(new EditMoneyData(this.accountEntry, this.newAmount));
    };
    EditMoneyComponent.prototype.raiseCancel = function () {
        this.cancel.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], EditMoneyComponent.prototype, "confirm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], EditMoneyComponent.prototype, "cancel", void 0);
    EditMoneyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-money',
            template: __webpack_require__(/*! ./edit-money.component.html */ "./src/app/edit-money/edit-money.component.html"),
            styles: [__webpack_require__(/*! ./edit-money.component.css */ "./src/app/edit-money/edit-money.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], app_domain_moneyInventory__WEBPACK_IMPORTED_MODULE_2__["AccountEntry"]])
    ], EditMoneyComponent);
    return EditMoneyComponent;
}());

var EditMoneyData = /** @class */ (function () {
    function EditMoneyData(accountEntry, newAmount) {
        this.accountEntry = accountEntry;
        this.newAmount = newAmount;
    }
    return EditMoneyData;
}());



/***/ }),

/***/ "./src/app/edit-talent/edit-talent.component.css":
/*!*******************************************************!*\
  !*** ./src/app/edit-talent/edit-talent.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".skillTitle {\r\n    width: 140px;\r\n    font-weight: 600;\r\n    text-align: left;\r\n}"

/***/ }),

/***/ "./src/app/edit-talent/edit-talent.component.html":
/*!********************************************************!*\
  !*** ./src/app/edit-talent/edit-talent.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-col center\">\r\n  <button (click)=\"increaseSkill()\">\r\n    <div class=\"flex-row skill\">\r\n      <div class=\"skillTitle\">{{skill.getSkill().name}}</div>\r\n      <div class=\"targetValue\"><i class=\"fa fa-tachometer\"></i> {{targetValue}}</div>\r\n      <div class=\"costOfRaise\"><i class=\"fa fa-dollar\"></i> {{costOfAscension}}</div>\r\n    </div>\r\n  </button>\r\n  <confirmation-sheet *ngIf=\"state === 'toBeConfirmed'\" confirmationText=\"Zahle {{costOfAscension}} um {{skill.skill.name}} zu steigern?\" (confirm)=\"confirmIncrease()\" (cancel)=\"cancelIncrease()\"></confirmation-sheet>\r\n</div>"

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

/***/ "./src/app/experience-addition/experience-addition.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/experience-addition/experience-addition.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\r\n    margin-top: 3rem;\r\n    margin-bottom: 3rem;\r\n    font-size: 3rem;\r\n    text-align: center;\r\n}\r\n\r\n.buttonRow {\r\n    margin-top: 3rem;\r\n}"

/***/ }),

/***/ "./src/app/experience-addition/experience-addition.component.html":
/*!************************************************************************!*\
  !*** ./src/app/experience-addition/experience-addition.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-col center\">\r\n  <img src=\"/assets/scroll.png\" class=\"dialogHeroImage no-border\" />\r\n  <h4 class=\"titleText\">\r\n    Neue Abenteuerpunkte\r\n  </h4>\r\n  <input type=\"number\" placeholder=\"Die Anzahl deiner neuen Abenteuerpunkte\" [(ngModel)]=\"newPointsToAdd\" />\r\n</div>\r\n<div class=\"buttonRow row\">\r\n  <button (click)=\"raiseCancel()\">Aaah, Quatsch, kommt doch nichts dazu.</button>\r\n  <button class=\"\" (click)=\"raiseAccept()\"><i class=\"fa fa-magic\"></i> Her mit den Punkten!</button>\r\n</div>"

/***/ }),

/***/ "./src/app/experience-addition/experience-addition.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/experience-addition/experience-addition.component.ts ***!
  \**********************************************************************/
/*! exports provided: ExperienceAdditionComponent, ConfirmationData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceAdditionComponent", function() { return ExperienceAdditionComponent; });
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


var ExperienceAdditionComponent = /** @class */ (function () {
    function ExperienceAdditionComponent(dialog, data) {
        this.dialog = dialog;
        this.data = data;
        this.confirm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.newPointsToAdd = 10;
    }
    ExperienceAdditionComponent.prototype.ngOnInit = function () {
    };
    ExperienceAdditionComponent.prototype.raiseAccept = function () {
        this.confirm.emit(this.newPointsToAdd);
    };
    ExperienceAdditionComponent.prototype.raiseCancel = function () {
        this.cancel.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ExperienceAdditionComponent.prototype, "confirm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ExperienceAdditionComponent.prototype, "cancel", void 0);
    ExperienceAdditionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-experience-addition',
            template: __webpack_require__(/*! ./experience-addition.component.html */ "./src/app/experience-addition/experience-addition.component.html"),
            styles: [__webpack_require__(/*! ./experience-addition.component.css */ "./src/app/experience-addition/experience-addition.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], ConfirmationData])
    ], ExperienceAdditionComponent);
    return ExperienceAdditionComponent;
}());

var ConfirmationData = /** @class */ (function () {
    function ConfirmationData(currentPoints, newPointsToAdd) {
        this.currentPoints = currentPoints;
        this.newPointsToAdd = newPointsToAdd;
    }
    return ConfirmationData;
}());



/***/ }),

/***/ "./src/app/experience-display/experience-display.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/experience-display/experience-display.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".overalContainer {\r\n  /* position: absolute; */\r\n  overflow: visible;\r\n}\r\n\r\n.experienceContainer {\r\n  font-size: 2.5rem;\r\n}\r\n\r\n.overalContainer {\r\n  background-image: url(\"/assets/scroll.png\");\r\n  background-repeat: no-repeat;\r\n  background-size: 5rem;\r\n  background-position: center 0;\r\n  padding-top: 5rem;\r\n  padding-bottom: 4rem;\r\n}\r\n"

/***/ }),

/***/ "./src/app/experience-display/experience-display.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/experience-display/experience-display.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"overalContainer flex flex-col center\">\r\n  <div class=\"experienceContainer\">{{ experience }} Abenteuerpunkte</div>\r\n  <button (click)=\"openAddExperiencePointsDialog()\"><i class=\"fa fa-plus\"></i></button>\r\n  <!-- <div class=\"experienceLeftContainer flex-item\">\r\n    {{ availablePoints }} übrig\r\n  </div> -->\r\n</div>"

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
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_domain_hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/domain/hero */ "./src/app/domain/hero.ts");
/* harmony import */ var app_experience_addition_experience_addition_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/experience-addition/experience-addition.component */ "./src/app/experience-addition/experience-addition.component.ts");
/* harmony import */ var app_hero_controls_hero_life_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/hero-controls/hero-life.service */ "./src/app/hero-controls/hero-life.service.ts");
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
    function ExperienceDisplayComponent(dialog, lifeService) {
        this.dialog = dialog;
        this.lifeService = lifeService;
    }
    ExperienceDisplayComponent.prototype.ngOnInit = function () {
    };
    ExperienceDisplayComponent.prototype.openAddExperiencePointsDialog = function () {
        this.addExperiencePointsDialogRef = this.dialog.open(app_experience_addition_experience_addition_component__WEBPACK_IMPORTED_MODULE_3__["ExperienceAdditionComponent"], { data: new app_experience_addition_experience_addition_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmationData"](this.hero.experience, 0) });
        this.addExperiencePointsDialogRef.componentInstance.confirm.subscribe(this.addExperiencePoints.bind(this));
        this.addExperiencePointsDialogRef.componentInstance.cancel.subscribe(this.closeAddExperiencePointsDialog.bind(this));
    };
    ExperienceDisplayComponent.prototype.addExperiencePoints = function (additionalPoints) {
        this.lifeService.sendUpate({
            type: 'addExperiencePoints',
            heroId: this.hero.id,
            additionalPoints: additionalPoints
        });
        this.closeAddExperiencePointsDialog();
    };
    ExperienceDisplayComponent.prototype.closeAddExperiencePointsDialog = function () {
        this.addExperiencePointsDialogRef.close();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ExperienceDisplayComponent.prototype, "experience", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ExperienceDisplayComponent.prototype, "availablePoints", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", app_domain_hero__WEBPACK_IMPORTED_MODULE_2__["Hero"])
    ], ExperienceDisplayComponent.prototype, "hero", void 0);
    ExperienceDisplayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'experience-display',
            template: __webpack_require__(/*! ./experience-display.component.html */ "./src/app/experience-display/experience-display.component.html"),
            styles: [__webpack_require__(/*! ./experience-display.component.css */ "./src/app/experience-display/experience-display.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], app_hero_controls_hero_life_service__WEBPACK_IMPORTED_MODULE_4__["HeroLifeService"]])
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

module.exports = "<div>\r\n  <div *ngFor=\"let hero of heroes\">\r\n    <span>{{ hero.name }}</span>\r\n  </div>\r\n</div>\r\n"

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

module.exports = ".setupAssistant {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.addHeroes,\r\n.addOpponents {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: 0.5rem;\r\n}\r\n\r\n.Grid-cell {\r\n  margin: 1rem;\r\n}\r\n\r\n.header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  font-size: 2rem;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n#fight-setup-step-3 combatant,\r\n#fight combatant {\r\n  width: 20rem;\r\n  max-width: 20rem;\r\n}\r\n\r\n#fight-setup-step-3 button {\r\n  margin-bottom: 2rem;\r\n}\r\n\r\ncombatant.good {\r\n  margin-left: -1rem;\r\n}\r\n\r\ncombatant.evil {\r\n  margin-left: 1rem;\r\n}\r\n\r\n.searchInput {\r\n  margin: 0 0.5rem 0.5rem 0.5rem;\r\n  -ms-grid-column-align: center;\r\n      justify-self: center;\r\n}\r\n"

/***/ }),

/***/ "./src/app/fight-setup/fight-setup.component.html":
/*!********************************************************!*\
  !*** ./src/app/fight-setup/fight-setup.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-col center page\">\r\n  <div class=\"pageContent\">\r\n    <div *ngIf=\"state === 'initial'\">\r\n      <button (click)=\"startNewFight()\">Neuen Kampf starten</button>\r\n      <div id=\"existingFights\">\r\n        <ul>\r\n          <li *ngFor=\"let fight of existingFights\">\r\n            <span>{{ fight.name }}</span\r\n            ><button (click)=\"continueFight(fight)\">Weiter kämpfen</button>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <div id=\"fight-setup-step-1\" *ngIf=\"state === 'setup_1'\" class=\"flex-col\">\r\n      <div class=\"flex-row space-between\">\r\n        <h2>1. Die Guten</h2>\r\n        <button (click)=\"goToStep2()\">> 2. Gegner</button>\r\n      </div>\r\n      <div class=\"Grid\">\r\n        <div class=\"Grid-cell\">\r\n          <div class=\"header\">\r\n            <div>Helden</div>\r\n            <div class=\"headerButtons\">\r\n              <button (click)=\"addAllHeroes()\">Alle +</button>\r\n              <button (click)=\"removeAllHeroes()\">Alle -</button>\r\n            </div>\r\n          </div>\r\n          <div *ngFor=\"let hero of heroes\">\r\n            <combatant\r\n              [isActive]=\"false\"\r\n              class=\"combatant\"\r\n              [usedForGood]=\"true\"\r\n              [combatant]=\"hero\"\r\n            ></combatant>\r\n          </div>\r\n        </div>\r\n        <div class=\"Grid-cell\">\r\n          <div class=\"header\">\r\n            <div>Andere</div>\r\n            <button (click)=\"initNPCGeneration()\">NPC anlegen</button>\r\n          </div>\r\n          <div class=\"flex-col\">\r\n            <input\r\n              class=\"searchInput\"\r\n              placeholder=\"Suchbegriff\"\r\n              [value]=\"combatantSearchTerm\"\r\n              (input)=\"combatantSearchTerm = $event.target.value\"\r\n            />\r\n          </div>\r\n          <div *ngIf=\"createNPCNow === true\">\r\n            <div class=\"header\">Neuer NPC</div>\r\n            <div *ngFor=\"let npcType of npcTypes\">{{ npcType.name }}</div>\r\n          </div>\r\n\r\n          <div\r\n            *ngFor=\"\r\n              let npc of npcs | MatchesCombatantSearchTerm : combatantSearchTerm\r\n            \"\r\n          >\r\n            <combatant\r\n              [isActive]=\"false\"\r\n              class=\"combatant\"\r\n              [combatant]=\"npc\"\r\n              [usedForGood]=\"true\"\r\n            ></combatant>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div id=\"fight-setup-step-2\" *ngIf=\"state === 'setup_2'\" class=\"flex-col\">\r\n      <div class=\"flex-row space-between\">\r\n        <h2>2. Die Bösen</h2>\r\n        <button (click)=\"goToStep3()\">> 3. Initiative</button>\r\n      </div>\r\n      <div class=\"Grid\">\r\n        <div class=\"Grid-cell\">\r\n          <div class=\"header\">\r\n            <div>Andere</div>\r\n            <button (click)=\"initNPCGeneration()\">NPC anlegen</button>\r\n          </div>\r\n          <div class=\"flex-col\">\r\n            <input\r\n              class=\"searchInput\"\r\n              placeholder=\"Suchbegriff\"\r\n              [value]=\"combatantSearchTerm\"\r\n              (input)=\"combatantSearchTerm = $event.target.value\"\r\n            />\r\n          </div>\r\n          <div *ngIf=\"createNPCNow === true\">\r\n            <div class=\"header\">Neuer NPC</div>\r\n            <div *ngFor=\"let npcType of npcTypes\">{{ npcType.name }}</div>\r\n          </div>\r\n\r\n          <div\r\n            *ngFor=\"\r\n              let npc of npcs\r\n                | IsGoodFighter : false\r\n                | MatchesCombatantSearchTerm : combatantSearchTerm\r\n            \"\r\n          >\r\n            <combatant\r\n              [isActive]=\"false\"\r\n              class=\"combatant\"\r\n              [combatant]=\"npc\"\r\n              [usedForGood]=\"false\"\r\n            ></combatant>\r\n          </div>\r\n        </div>\r\n        <div class=\"Grid-cell\">\r\n          <div class=\"header\">\r\n            <div>Helden</div>\r\n            <div class=\"headerButtons\">\r\n              <button (click)=\"addAllHeroes()\">Alle +</button>\r\n              <button (click)=\"removeAllHeroes()\">Alle -</button>\r\n            </div>\r\n          </div>\r\n          <div *ngFor=\"let hero of heroes | IsGoodFighter : false\">\r\n            <combatant\r\n              [isActive]=\"false\"\r\n              class=\"combatant\"\r\n              [combatant]=\"hero\"\r\n              [usedForGood]=\"false\"\r\n            ></combatant>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div\r\n      id=\"fight-setup-step-3\"\r\n      *ngIf=\"state === 'setup_overview'\"\r\n      class=\"flex-col\"\r\n    >\r\n      <div class=\"flex-row space-between\">\r\n        <h2>3. Initiative</h2>\r\n        <button (click)=\"nameIt()\" [disabled]=\"allSet !== true\">\r\n          > 4. Ein Name noch!\r\n        </button>\r\n      </div>\r\n      <button (click)=\"calculateInititives()\">Initiative berechnen</button>\r\n      <div class=\"flex-col center\">\r\n        <combatant\r\n          [isActive]=\"true\"\r\n          *ngFor=\"let combatant of combatants\"\r\n          [combatant]=\"combatant\"\r\n        ></combatant>\r\n      </div>\r\n    </div>\r\n    <div id=\"fight-setup-step-4\" *ngIf=\"state === 'name'\" class=\"flex-col\">\r\n      <div class=\"flex-row space-between\">\r\n        <h2>Gib dem Kampf einen Namen</h2>\r\n        <button (click)=\"go()\" [disabled]=\"allSet !== true\">\r\n          > 5. Let's go!\r\n        </button>\r\n      </div>\r\n      <input [(ngModel)]=\"fightName\" />\r\n    </div>\r\n    <div id=\"fight\" *ngIf=\"state === 'fight'\">\r\n      <button (click)=\"nextFighter()\">Nächster</button>\r\n\r\n      <div class=\"flex-col center\">\r\n        <combatant\r\n          [isActive]=\"true\"\r\n          *ngFor=\"let combatant of combatants\"\r\n          [combatant]=\"combatant\"\r\n        ></combatant>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

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
/* harmony import */ var app_domain_adventure_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/domain/adventure.service */ "./src/app/domain/adventure.service.ts");
/* harmony import */ var app_domain_hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/domain/hero */ "./src/app/domain/hero.ts");
/* harmony import */ var app_domain_hero_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/domain/hero.service */ "./src/app/domain/hero.service.ts");
/* harmony import */ var app_domain_remoteControlOperation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/domain/remoteControlOperation */ "./src/app/domain/remoteControlOperation.ts");
/* harmony import */ var app_remote_control_remote_control_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/remote-control/remote-control.service */ "./src/app/remote-control/remote-control.service.ts");
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
    function FightSetupComponent(remoteControlService, adventureService, heroService) {
        var _this = this;
        this.remoteControlService = remoteControlService;
        this.adventureService = adventureService;
        this.heroService = heroService;
        this.createNPCNow = false;
        this.fightName = 'Rumble in the djungle';
        this.combatantSearchTerm = '';
        this.state = 'initial';
        this.heroService.getHeroes().then(function (heroes) {
            for (var index = 0; index < heroes.length; index++) {
                var hero = heroes[index];
                hero.selectedForFight = false;
            }
            _this.heroes = heroes;
        });
        this.adventureService.getNPCs().then(function (npcs) {
            for (var index = 0; index < npcs.length; index++) {
                var npc = npcs[index];
                npc.selectedForFight = false;
            }
            _this.npcs = npcs;
        });
        this.adventureService.getNPCTypes().then(function (npcTypes) {
            _this.npcTypes = npcTypes;
        });
        this.adventureService.getFights().then(function (fights) {
            _this.existingFights = fights;
        });
    }
    FightSetupComponent.prototype.ngOnInit = function () {
    };
    FightSetupComponent.prototype.initNPCGeneration = function () {
        this.createNPCNow = true;
    };
    FightSetupComponent.prototype.startNewFight = function () {
        this.state = 'setup_1';
    };
    FightSetupComponent.prototype.goToStep2 = function () {
        this.state = 'setup_2';
        this.combatants = this.heroes.filter(function (hero) { return hero.selectedForFight === true; }).concat(this.npcs.filter(function (npc) { return npc.selectedForFight === true; }));
    };
    FightSetupComponent.prototype.goToStep3 = function () {
        this.state = 'setup_overview';
        this.combatants = this.combatants.concat(this.heroes.filter(function (hero) { return hero.selectedForFight === true && hero.isGood === false; })).concat(this.npcs.filter(function (npc) { return npc.selectedForFight === true && npc.isGood === false; }));
    };
    FightSetupComponent.prototype.calculateInititives = function () {
        for (var index = 0; index < this.combatants.length; index++) {
            var combatant = this.combatants[index];
            combatant.currentInitiative = combatant.initiative + +Math.floor(Math.random() * 6 + 1);
        }
        this.combatants.sort(function (combatantA, combatantB) {
            return combatantB.currentInitiative - combatantA.currentInitiative;
        });
        this.allSet = true;
    };
    FightSetupComponent.prototype.nameIt = function () {
        this.state = 'name';
    };
    FightSetupComponent.prototype.go = function () {
        this.state = 'fight';
        for (var index = 0; index < this.combatants.length; index++) {
            var combatant = this.combatants[index];
            if (index === 0)
                combatant.nextUp = true;
            else
                combatant.nextUp = false;
        }
        this.startFight(this.fightName, this.adventureService.getCurrentAdventureId(), this.combatants.map(function (combatant) {
            return {
                isGood: combatant.isGood,
                isCharacter: combatant instanceof app_domain_hero__WEBPACK_IMPORTED_MODULE_2__["Hero"],
                id: combatant.id,
                initiative: combatant.currentInitiative
            };
        }));
    };
    FightSetupComponent.prototype.nextFighter = function () {
        var nextFighterIsUp = false;
        for (var index = 0; index < this.combatants.length; index++) {
            var combatant = this.combatants[index];
            if (combatant.nextUp === true) {
                nextFighterIsUp = true;
                combatant.nextUp = false;
            }
            else if (nextFighterIsUp) {
                combatant.nextUp = true;
                nextFighterIsUp = false;
            }
        }
        if (nextFighterIsUp)
            this.combatants[0].nextUp = true;
    };
    FightSetupComponent.prototype.createNPC = function (templateId, name) {
        this.remoteControlService.sendRemoteControlInstruction(app_domain_remoteControlOperation__WEBPACK_IMPORTED_MODULE_4__["OperationFactory"].createOperation(app_domain_remoteControlOperation__WEBPACK_IMPORTED_MODULE_4__["operationTypes"].createNPC, 'self', { name: name, templateId: templateId }));
    };
    FightSetupComponent.prototype.startFight = function (fightNameParam, currentAdventureId, participants) {
        this.remoteControlService.sendRemoteControlInstruction(app_domain_remoteControlOperation__WEBPACK_IMPORTED_MODULE_4__["OperationFactory"].createOperation(app_domain_remoteControlOperation__WEBPACK_IMPORTED_MODULE_4__["operationTypes"].startFight, 'self', { name: fightNameParam, adventureId: currentAdventureId, participants: participants }));
    };
    FightSetupComponent.prototype.continueFight = function (fight) {
        console.log(fight);
    };
    FightSetupComponent.prototype.addAllHeroes = function () {
        this.heroes.forEach(function (hero) {
            hero.selectedForFight = true;
        });
    };
    FightSetupComponent.prototype.removeAllHeroes = function () {
        this.heroes.forEach(function (hero) {
            hero.selectedForFight = false;
        });
    };
    FightSetupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fight-setup',
            template: __webpack_require__(/*! ./fight-setup.component.html */ "./src/app/fight-setup/fight-setup.component.html"),
            styles: [__webpack_require__(/*! ./fight-setup.component.css */ "./src/app/fight-setup/fight-setup.component.css")]
        }),
        __metadata("design:paramtypes", [app_remote_control_remote_control_service__WEBPACK_IMPORTED_MODULE_5__["RemoteControlService"], app_domain_adventure_service__WEBPACK_IMPORTED_MODULE_1__["AdventureService"], app_domain_hero_service__WEBPACK_IMPORTED_MODULE_3__["HeroService"]])
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

module.exports = "mat-card {\r\n  padding: 0;\r\n  /* background-color: #f2f1ed; */\r\n  box-shadow: 0 2px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),\r\n    0px 4px 20px 2px rgba(0, 0, 0, 0.48) !important;\r\n}\r\n\r\nmat-card-content {\r\n  display: block;\r\n}\r\n\r\nmat-card-title {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.cardContentContainer {\r\n  margin-right: 2rem;\r\n  margin-left: 2rem;\r\n  height: 100px;\r\n  position: relative;\r\n  overflow: visible;\r\n  padding: 0px;\r\n}\r\n\r\nh2 {\r\n  margin: 0;\r\n  font-size: 1.75rem;\r\n}\r\n\r\n.heroValues {\r\n  height: 50px;\r\n}\r\n\r\n.heroAvatar {\r\n  position: absolute;\r\n  bottom: 53px;\r\n  right: 10px;\r\n  height: 190px;\r\n  z-index: 10;\r\n  display: block;\r\n}\r\n\r\n.heroAvatar img {\r\n  height: 100%;\r\n}\r\n\r\nul {\r\n  list-style-type: none;\r\n  color: #4b4b4b;\r\n  margin-left: 20px;\r\n  padding: 0 0 5px 10px;\r\n  font-family: Neucha, sans-serif;\r\n}\r\n\r\nli::before {\r\n  content: none;\r\n}\r\n\r\ndiv.label {\r\n  width: 96px;\r\n  float: left;\r\n}\r\n\r\n.headerContent {\r\n  cursor: pointer;\r\n  padding-left: 2rem;\r\n  padding-right: 2rem;\r\n}\r\n\r\n.hero-entry-container {\r\n  position: relative;\r\n}\r\n\r\n.heroes-entry {\r\n  overflow: hidden;\r\n  background-color: #fff;\r\n}\r\n\r\n.actionsContainer {\r\n  overflow: visible;\r\n}"

/***/ }),

/***/ "./src/app/hero-card/hero-card.component.html":
/*!****************************************************!*\
  !*** ./src/app/hero-card/hero-card.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"hero-entry-container\">\r\n  <div class=\"heroes-entry comic-shadow border border-3\">\r\n    <div class=\"headerContainer\" (click)=\"gotoDetail()\">\r\n      <!--  -->\r\n      <div class=\"headerContent\">\r\n        <h2>{{ hero.name }}</h2>\r\n        <span>{{ hero.hero_type.name }}, Stufe {{ hero.level }}</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"cardContentContainer\" (click)=\"gotoDetail()\">\r\n      <ul *ngIf=\"hero.currentWeapon && hero.currentWeaponSkillIsMelee()\">\r\n        <li>\r\n          <div class=\"label\">Attacke:</div>\r\n          {{ hero.currentAttack }}\r\n        </li>\r\n        <li>\r\n          <div class=\"label\">Parade:</div>\r\n          {{ hero.currentParade }}\r\n        </li>\r\n        <li>\r\n          <div class=\"label\">Trefferpunkte:</div>\r\n          {{ hero.currentWeaponDamageText }}\r\n        </li>\r\n        <li>\r\n          <p>Rüstung: {{hero.armorValue}}</p>\r\n        </li>\r\n      </ul>\r\n      <ul *ngIf=\"hero.currentWeapon && hero.currentWeaponSkillIsLongRange()\">\r\n        <li>\r\n          <div class=\"label\">Fernkampfwert:</div>\r\n          {{ hero.currentLongRangeValue }}\r\n        </li>\r\n        <li>\r\n          <div class=\"label\">Trefferpunkte:</div>\r\n          {{ hero.currentWeaponDamageText }}\r\n        </li>\r\n        <li>\r\n          <p>Rüstung: {{hero.armorValue}}</p>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"actionsContainer\">\r\n      <hero-controls [hero]=\"hero\"> </hero-controls>\r\n    </div>\r\n  </div>\r\n  <div class=\"heroAvatar\" (click)=\"gotoDetail()\">\r\n    <img class=\"heroAvatarImage no-border\" src=\"{{ baseUrl }}{{ hero.avatar_small }}\" height=\"100%\" />\r\n  </div>\r\n</div>"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_url_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/url.service */ "./src/app/url.service.ts");
/* harmony import */ var _domain_hero_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../domain/hero.service */ "./src/app/domain/hero.service.ts");
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
        this.baseUrl = app_url_service__WEBPACK_IMPORTED_MODULE_2__["UrlService"].getBaseUrl();
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
        __metadata("design:paramtypes", [_domain_hero_service__WEBPACK_IMPORTED_MODULE_3__["HeroService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
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

module.exports = ".buttons {\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\tjustify-content: space-between;\r\n\twidth: 100%;\r\n\theight: 50px;\r\n\r\n}\r\n\r\n.buttons button {\r\n\tborder: none;\r\n}\r\n\r\n.buttons.transparent button {\r\n\tbackground-color: transparent;\r\n}\r\n\r\n.buttons button:hover {\r\n\tbox-shadow: none;\r\n}\r\n\r\n.container {\r\n\twidth: 100%;\r\n\tposition: relative;\r\n\tborder-top: 1px solid #bbb;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n}\r\n\r\n.lifeChangerButton {\r\n\tbackground-color: #fff;\r\n\tflex: 1;\r\n\theight: 100%;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n}\r\n\r\n.buttons .lifeChangerButton:not(:last-child) {\r\n\tborder-right: 1px solid #bbb;\r\n}\r\n\r\n.buttons .lifeChangerButton:first-child {\r\n\tborder-bottom-left-radius: 2px;\r\n}\r\n\r\n.buttons .lifeChangerButton:last-child {\r\n\tborder-bottom-right-radius: 2px;\r\n}\r\n\r\nlife-display,\r\nmagic-display {\r\n\tposition: absolute;\r\n\r\n}\r\n\r\nlife-display {\r\n\ttop: -15px;\r\n\ttransition: all .3s ease-out;\r\n}\r\n\r\nmagic-display {\r\n\ttop: 5px;\r\n\ttransition: all .3s ease-out;\r\n}\r\n\r\nmagic-display.displayActive,\r\nlife-display.displayActive {\r\n\tz-index: 60;\r\n}\r\n\r\nmagic-display.displayInactive,\r\nlife-display.displayInactive {\r\n\tz-index: 30;\r\n\t-webkit-transform: scale(0.7);\r\n\t        transform: scale(0.7)\r\n}\r\n\r\n.displaysContainer {\r\n\twidth: 100%;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n}"

/***/ }),

/***/ "./src/app/hero-controls/hero-controls.component.html":
/*!************************************************************!*\
  !*** ./src/app/hero-controls/hero-controls.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"displaysContainer\">\r\n    <life-display currentLife=\"{{ hero.currentLife }}\" maxLife=\"{{ hero.life }}\" (click)=\"focusLife()\"\r\n      [ngClass]=\"lifeClass\">\r\n    </life-display>\r\n    <magic-display *ngIf=\"hero.knowsMagic\" currentMagicEnergy=\"{{ hero.currentMagicEnergy }}\"\r\n      maxMagicEnergy=\"{{ hero.magicEnergy }}\" (click)=\"focusMagic()\" [ngClass]=\"magicClass\">\r\n    </magic-display>\r\n  </div>\r\n  <div class=\"buttons\" [class.transparent]=\"listMode\">\r\n    <button class=\"lifeChangerButton comic-shadow\" (click)=\"updateValue(-5)\">\r\n      <i class=\"fa fa-angle-double-down\" aria-hidden=\"true\"></i>\r\n    </button>\r\n    <button class=\"lifeChangerButton\" (click)=\"updateValue(-1)\">\r\n      <i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i>\r\n    </button>\r\n    <button class=\"lifeChangerButton\" (click)=\"updateValue(1)\">\r\n      <i class=\"fa fa-angle-up\" aria-hidden=\"true\"></i>\r\n    </button>\r\n    <button class=\"lifeChangerButton\" (click)=\"updateValue(5)\">\r\n      <i class=\"fa fa-angle-double-up\" aria-hidden=\"true\"></i>\r\n    </button>\r\n  </div>\r\n</div>"

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
/* harmony import */ var app_domain_armor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/domain/armor */ "./src/app/domain/armor.ts");
/* harmony import */ var app_domain_inventoryItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/domain/inventoryItem */ "./src/app/domain/inventoryItem.ts");
/* harmony import */ var app_domain_weapon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/domain/weapon */ "./src/app/domain/weapon.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var app_url_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/url.service */ "./src/app/url.service.ts");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _domain_hero_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../domain/hero.service */ "./src/app/domain/hero.service.ts");
/* harmony import */ var _domain_skills_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../domain/skills.service */ "./src/app/domain/skills.service.ts");
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
        this.http = http;
        this.toastr = toastr;
        this.skillService = skillService;
        this.wsUrl = app_url_service__WEBPACK_IMPORTED_MODULE_6__["UrlService"].getBaseURLWS() + "/heroes";
        this.wsClientId = Math.random().toString(36).substring(7);
        this.currentlyConnected = false;
        this.heroService = heroService;
        this.createWebsocket();
    }
    HeroLifeService.prototype.createWebsocket = function () {
        var _this = this;
        try {
            this.socket = new WebSocket(this.wsUrl);
            this.heroSubject = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
            this.heroSubject.subscribe(this.handleIncommingMessage.bind(this));
            this.socket.onmessage = (function (evt) { return _this.heroSubject.next(evt); });
            this.socket.onopen = function (event) {
                _this.currentlyConnected = true;
                _this.toastr.success('Du bist online.');
                clearInterval(_this.connectionInterval);
            };
            this.socket.onerror = function (error) {
                if (_this.socket.readyState === _this.socket.OPEN) {
                    _this.toastr.error('Es gab einen Fehler', 'Wir schließen nun die Verbindung');
                }
            };
            this.socket.addEventListener('error', function (event) {
                console.log('hey');
                event.stopPropagation();
            });
            this.socket.addEventListener('close', function (event) {
                if (_this.currentlyConnected) {
                    _this.currentlyConnected = false;
                    _this.toastr.error('Du bist nicht mehr mit dem Server verbunden', 'Die Verbindung ist abgebaut worden');
                    _this.connectionInterval = window.setInterval(_this.createWebsocket.bind(_this), 4000);
                }
            });
        }
        catch (error) {
            this.toastr.error('bisher hat es noch nicht geklappt', 'Fehler');
        }
    };
    HeroLifeService.prototype.sendUpate = function (data) {
        try {
            this.socket.send(JSON.stringify(data));
        }
        catch (error) {
            this.toastr.error('bisher hat es noch nicht geklappt', 'Fehler');
        }
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
                    hero.getAttribute(messageData['attribute']).value = messageData['value'];
                    _this.toastr.success(hero.name + " hat die Eigenschaft " + hero.getAttribute(messageData['attribute']).name + " gesteigert!", 'Bäähm!');
                    break;
                case 'addWeapon':
                    _this.skillService.getSkill(messageData['skill']).then(function (skill) {
                        hero.addWeapon(new app_domain_weapon__WEBPACK_IMPORTED_MODULE_4__["Weapon"](messageData['weaponId'], messageData['weaponName'], messageData['damageDice'], messageData['damageAddPoints'], messageData['extraPointsFromKk'], skill));
                        _this.toastr.success(hero.name + " hat eine Waffe mehr!", 'Bäähm!');
                    });
                    break;
                case 'deleteWeapon':
                    hero.deleteWeaponById(messageData['weaponId']);
                    _this.toastr.success(hero.name + " hat eine Waffe weniger!", 'Hui!!');
                    break;
                case 'addArmor':
                    hero.addArmor(new app_domain_armor__WEBPACK_IMPORTED_MODULE_2__["Armor"](messageData['armorId'], messageData['armorName'], messageData['armorRS'], messageData['armorBE']));
                    _this.toastr.success(hero.name + " ist nun besser ger\u00FCstet!", 'Zack!');
                    break;
                case 'deleteArmor':
                    hero.deleteArmorById(messageData['armorId']);
                    _this.toastr.success(hero.name + " muss nun aufpassen, er hat weniger Schutz!", 'Zack!');
                    break;
                case 'addInventoryItem':
                    hero.addInventoryItem(new app_domain_inventoryItem__WEBPACK_IMPORTED_MODULE_3__["InventoryItem"](messageData['inventoryId'], messageData['name'], messageData['amount'], messageData['weight']));
                    _this.toastr.success(hero.name + " hat was neues: " + messageData['name'] + "!", 'Zack!');
                    break;
                case 'deleteInventoryItem':
                    var itemName = hero.getInventoryItemById(messageData['inventoryItemId']).name;
                    hero.deleteInventoryItemById(messageData['inventoryItemId']);
                    _this.toastr.success(hero.name + " hat etwas abgegeben: " + itemName + "!", 'Zack!');
                    break;
                case 'updateInventoryItem':
                    hero.updateInventoryItemAmount(messageData['inventoryItemId'], messageData['amount']);
                    break;
                case 'addExperiencePoints':
                    hero.experience = hero.experience + messageData['additionalPoints'];
                    _this.toastr.success(hero.name + " hat " + messageData['additionalPoints'] + " neue Abenteuerpunkte!", 'Hurrrraaaah!');
                case 'updateAccountEntry':
                    hero.money[messageData['unit']] = messageData['amount'];
                default:
                    break;
            }
        });
    };
    HeroLifeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _domain_hero_service__WEBPACK_IMPORTED_MODULE_10__["HeroService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"], _domain_skills_service__WEBPACK_IMPORTED_MODULE_11__["SkillService"]])
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

module.exports = "/** header **/\r\n\r\n.heroDetailHeader {\r\n  /*padding: 20px 20px 0 20px;*/\r\n  display: flex;\r\n}\r\n\r\n.shadow {\r\n  /* box-shadow: 0px 4px 8px 2px rgba(0,0,0,0.75); */\r\n  margin-bottom: 40px !important;\r\n  /* background-color: rgba(255, 255, 255, 1); */\r\n  min-height: 500px;\r\n}\r\n\r\n.page {\r\n  padding-top: 10px;\r\n  height: 100%;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.skillEntry i {\r\n  margin-right: 5px;\r\n}\r\n\r\n.characterDetailNavButton {\r\n  color: #fff;\r\n  font-size: 2rem;\r\n  flex: 1;\r\n  padding: 5px;\r\n}\r\n\r\n.headerContent p {\r\n  margin-top: 0;\r\n}\r\n\r\n.heroBanner {\r\n  background-image: url(\"/assets/banner-hero.png\");\r\n  background-repeat: no-repeat;\r\n  background-position: top center;\r\n  background-size: 600px;\r\n  width: 100%;\r\n  height: 160px;\r\n  padding: 20px 0;\r\n  margin-bottom: -40px;\r\n}\r\n\r\n.heroType {\r\n  font-size: 1rem;\r\n}\r\n\r\n.heroLevel {\r\n  font-size: 2rem;\r\n  font-weight: 700;\r\n  margin-top: 30px;\r\n}\r\n\r\n#combatAttributes {\r\n  padding-top: 2rem;\r\n}\r\n\r\n.heroName::before,\r\n.heroName::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: -1;\r\n  left: -60px;\r\n  top: 24px;\r\n  display: block;\r\n  width: 80px;\r\n  height: 0px;\r\n  border: 30px solid #9b2;\r\n  border-right: 20px solid #791;\r\n  border-bottom-color: #94b81e;\r\n  border-left-color: transparent;\r\n  -webkit-transform: rotate(-5deg);\r\n          transform: rotate(-5deg);\r\n}\r\n\r\n.heroName::after {\r\n  left: auto;\r\n  right: -60px;\r\n  border-left: 20px solid #791;\r\n  border-right: 30px solid transparent;\r\n  -webkit-transform: rotate(5deg);\r\n          transform: rotate(5deg);\r\n}\r\n\r\n.heroClass {\r\n  background-color: #eee;\r\n  padding: 10px;\r\n  border: 1px solid #aaa;\r\n  margin-top: -3px;\r\n  border-radius: 3px;\r\n}\r\n\r\n/** content sections **/\r\n\r\nbasic-data-display {\r\n  background-image: url(\"/assets/hero-icon.png\");\r\n  /* background-image: url(\"/assets/hero-background_desaturated.jpg\"); */\r\n  background-size: 5.5rem;\r\n  padding-left: 5rem;\r\n  background-position: 0 2rem;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\nattributes-display {\r\n  background-image: url(\"/assets/properties-icon.png\");\r\n  /* background-image: url(\"/assets/hero-background_desaturated.jpg\"); */\r\n  background-size: 5.5rem;\r\n  padding-left: 5rem;\r\n  background-position: 0 2rem;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n#combatAttributes {\r\n  /* background-image: url(\"/assets/sword_drawn_desaturated.jpg\"); */\r\n  background-size: 200px;\r\n  background-position: right 100px top 50px;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.heroTalents {\r\n  /* background-image: url(\"/assets/hero-tavern_desaturated.jpg\"); */\r\n  background-size: 300px;\r\n  background-position: right 100px top 50px;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.heroSpells {\r\n  /* background-image: url(\"/assets/wizard_desaturated.jpg\"); */\r\n  background-size: 500px;\r\n  background-position: right 10px top 10px;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.inventory {\r\n  /* background-image: url('/assets/inventory-desaturated.jpg'); */\r\n  background-size: 500px;\r\n  background-position: right 10px top 10px;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n/** end content sections **/\r\n\r\nlabel.long {\r\n  width: 150px;\r\n  display: none;\r\n}\r\n\r\nlabel.short {\r\n  width: 40px;\r\n}\r\n\r\n#avatarContainer {\r\n  order: 1;\r\n  border-bottom: 1px solid #999;\r\n  background-color: #fff;\r\n  /* margin-top: -15px; */\r\n  margin-right: 5px;\r\n}\r\n\r\nexperience-display {\r\n  margin-top: 5rem;\r\n}\r\n\r\n#propertiesContainer {\r\n  order: 2;\r\n}\r\n\r\n#attributesContainer {\r\n  order: 3;\r\n}\r\n\r\n.heroAvatarImage,\r\n.heroAvatar {\r\n  height: 150px;\r\n}\r\n\r\n.heroAvatarImage {\r\n  background-color: white;\r\n  border-color: #999;\r\n}\r\n\r\n.heroAvatar {\r\n  margin-top: -15px;\r\n  margin-bottom: -15px;\r\n  z-index: 100;\r\n}\r\n\r\n.actionsContainer {\r\n  position: fixed;\r\n  bottom: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  z-index: 1000;\r\n}\r\n\r\n.talente {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n}\r\n\r\n.skillGroupEntries {\r\n  width: 100%;\r\n  /* display: flex;\r\n  flex-wrap: wrap; */\r\n}\r\n\r\n.heroName {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.talentSearchBox {\r\n  background-color: rgba(255, 255, 255, 1);\r\n  border-radius: 4px;\r\n  margin: -20px 0 10px 0;\r\n  padding: 10px;\r\n}\r\n\r\n.skillGroupTitle {\r\n  padding: 10px 0;\r\n}\r\n\r\ncombat-data-display {\r\n  flex: 1;\r\n}\r\n\r\n.skillEntry,\r\n.weaponEntry {\r\n  display: flex;\r\n  flex-direction: row;\r\n  width: 100%;\r\n  flex-wrap: wrap;\r\n  font-size: 0.8rem;\r\n  align-items: center;\r\n  justify-content: stretch;\r\n  float: left;\r\n}\r\n\r\ntalent-card {\r\n  flex: 1;\r\n}\r\n\r\n.skillContent,\r\n.weaponEntry {\r\n  margin: 1px;\r\n  /* border: 1px solid #ddd; */\r\n  background-color: #fff;\r\n  flex: 1;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  padding: 4px;\r\n  align-items: center;\r\n}\r\n\r\n.weaponEntry {\r\n  min-height: 30px;\r\n  padding-left: 10px;\r\n}\r\n\r\n.skillTitle {\r\n  width: 150px;\r\n  padding-left: 10px;\r\n  font-size: 0.9rem;\r\n  font-weight: 600;\r\n}\r\n\r\n.skillBe {\r\n  width: 60px;\r\n}\r\n\r\n.skillValue {\r\n  width: 30px;\r\n  color: #ad2003;\r\n}\r\n\r\n.dices,\r\n.fightDices {\r\n  display: flex;\r\n  flex-direction: row;\r\n  padding: 0 10px;\r\n  align-items: center;\r\n}\r\n\r\n.dice {\r\n  width: 30px;\r\n  text-align: center;\r\n}\r\n\r\n.fightDice {\r\n  width: 45px;\r\n}\r\n\r\n/** Search box **/\r\n\r\n::-webkit-input-placeholder {\r\n  text-align: center;\r\n}\r\n\r\n:-moz-placeholder {\r\n  /* Firefox 18- */\r\n  text-align: center;\r\n}\r\n\r\n::-moz-placeholder {\r\n  /* Firefox 19+ */\r\n  text-align: center;\r\n}\r\n\r\n:-ms-input-placeholder {\r\n  text-align: center;\r\n}\r\n\r\ninput.talentSearchInbox {\r\n  text-align: center;\r\n  height: 30px;\r\n  width: 100%;\r\n}\r\n\r\nform.search {\r\n  width: 100%;\r\n  max-width: 1200px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.mat-option.skillOption {\r\n  height: auto;\r\n  line-height: 12px;\r\n}\r\n\r\nmat-radio-button {\r\n  width: 100%;\r\n}\r\n\r\n.weaponChoiceLabel div {\r\n  float: left;\r\n  padding-right: 20px;\r\n}\r\n\r\n.weaponChoiceLabel :nth-child(1) {\r\n  width: 120px;\r\n}\r\n\r\n.inventoryWeaponItem {\r\n  display: flex;\r\n}\r\n\r\n.inventoryItemName {\r\n  width: 200px;\r\n}\r\n\r\n.weaponDamage {\r\n  width: 80px;\r\n}\r\n\r\n.inventoryItemAction {\r\n  width: 40px;\r\n}\r\n\r\n@media (min-width: 48em) {\r\n  #avatarContainer {\r\n    order: 1;\r\n    background-color: transparent;\r\n    border-bottom: none;\r\n  }\r\n\r\n  #propertiesContainer {\r\n    order: 0;\r\n  }\r\n\r\n  #attributesContainer {\r\n    order: 2;\r\n  }\r\n\r\n  .heroAvatarImage,\r\n  .heroAvatar {\r\n    height: 300px;\r\n  }\r\n\r\n  label.long {\r\n    display: inline;\r\n  }\r\n\r\n  label.short {\r\n    display: none;\r\n  }\r\n\r\n  .skillEntry {\r\n    /* width: 50%; */\r\n    float: left;\r\n  }\r\n}"

/***/ }),

/***/ "./src/app/herodetail/hero-detail.component.html":
/*!*******************************************************!*\
  !*** ./src/app/herodetail/hero-detail.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <mat-sidenav #sidenav (keydown.escape)=\"close('escape')\" disableClose> -->\r\n<detail-navigation [hero]=\"hero\" (navToArea)=\"showArea($event)\">\r\n</detail-navigation>\r\n<!-- </mat-sidenav> -->\r\n\r\n<div class=\"page flex-col center\">\r\n  <div class=\"pageContent\">\r\n    <div class=\"sheet\">\r\n      <div class=\"\" *ngIf=\"hero\" style=\"flex: 1\">\r\n        <div class=\"headerContainer contentBox\">\r\n          <a class=\"menuItem\" name=\"Allgemein\"></a>\r\n          <!--  -->\r\n          <div class=\"headerContent\">\r\n            <div class=\"flex-col\">\r\n              <div class=\"heroBanner flex-col center\">\r\n                <h1>{{hero.name}}</h1>\r\n                <div class=\"heroType\">{{ hero.hero_type.name }}</div>\r\n                <div class=\"heroLevel\">{{ hero.level }}</div>\r\n                <!-- <img style=\"width: 600px;\" src=\"/assets/banner-hero.png\" class=\"no-border\" /> -->\r\n                <!-- <h1 class=\"heroName\">{{ hero.name }}</h1>\r\n                <div class=\"flex-item heroClass\">\r\n                  {{ hero.hero_type.name }}, Stufe {{ hero.level }}\r\n                </div> -->\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"Grid Grid--full Grid-cell\">\r\n          <div class=\"actionsContainer Grid-cell\">\r\n            <hero-controls [hero]=\"hero\"> </hero-controls>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"detailArea === 'character'\" class=\"characterDetails\">\r\n          <div class=\"experienceContainer contentBox padded\">\r\n\r\n          </div>\r\n          <div class=\"flex-col\">\r\n            <div id=\"propertiesBox\" id=\"mainAttributes\" class=\"contentBox Grid Grid--cols-2\">\r\n              <div id=\"propertiesContainer\" class=\"Grid-cell flex-item flex-col\">\r\n                <basic-data-display [hero]=\"hero\" class=\"\"></basic-data-display>\r\n                <attributes-display [hero]=\"hero\" class=\"attributes-display\"></attributes-display>\r\n              </div>\r\n              <div id=\"avatarContainer\" class=\"Grid-cell flex-col center\">\r\n                <div class=\"heroAvatar large flex-item\">\r\n                  <img class=\"heroAvatarImage comic-shadow\" src=\"{{ baseUrl }}{{ hero.avatar_small }}\" />\r\n                </div>\r\n                <experience-display [hero]=\"hero\" [experience]=\"hero.experience\"\r\n                  [availablePoints]=\"hero.availablePoints\">\r\n                </experience-display>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"contentBox flex-item borderTop\" id=\"combatAttributes\">\r\n            <a id=\"fightValueContainerAnchor\"></a>\r\n            <combat-data-display [hero]=\"hero\"></combat-data-display>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"detailArea === 'talents'\" class=\"contentBox flex-item flex-row heroTalents\">\r\n          <talent-search mode=\"viewTalents\" [hero]=\"hero\" [searchActive]=\"searchActive\" class=\"flex-item\">\r\n          </talent-search>\r\n        </div>\r\n        <div *ngIf=\"hero.knowsMagic && detailArea === 'spells'\" class=\"contentBox flex-row heroSpells\">\r\n          <spell-search [hero]=\"hero\" class=\"flex-item\"></spell-search>\r\n        </div>\r\n        <div *ngIf=\"detailArea === 'inventory'\" class=\"inventory\">\r\n          <inventory-display [hero]=\"hero\"></inventory-display>\r\n        </div>\r\n        <div *ngIf=\"detailArea === 'edit'\" class=\"editHeroValues\">\r\n          <edit-dialog [hero]=\"hero\"></edit-dialog>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _domain_hero_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../domain/hero.service */ "./src/app/domain/hero.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var app_url_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/url.service */ "./src/app/url.service.ts");
/* harmony import */ var rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/operator/switchMap */ "./node_modules/rxjs-compat/_esm5/add/operator/switchMap.js");
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
        this.baseUrl = app_url_service__WEBPACK_IMPORTED_MODULE_6__["UrlService"].getBaseUrl();
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", String)
    ], HeroDetailComponent.prototype, "_detailArea", void 0);
    HeroDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'hero-details',
            template: __webpack_require__(/*! ./hero-detail.component.html */ "./src/app/herodetail/hero-detail.component.html"),
            styles: [__webpack_require__(/*! ./hero-detail.component.css */ "./src/app/herodetail/hero-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_domain_hero_service__WEBPACK_IMPORTED_MODULE_3__["HeroService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["Location"]])
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

module.exports = ".heroes-list {\r\n  padding: 0;\r\n  width: 100%;\r\n  max-width: 400px;\r\n  transition: visible 1s ease-in;\r\n  -webkit-animation-delay: 2s;\r\n          animation-delay: 2s;\r\n}\r\n\r\nhero-card {\r\n  margin-bottom: 15px;\r\n  display: block;\r\n}\r\n\r\nh1 {\r\n  margin: 2rem 0 -1.6rem 0;\r\n}\r\n\r\n.heroes-banner {\r\n  width: 280px;\r\n  margin-left: 2rem;\r\n  transition: margin-top 0.4s ease-out;\r\n  /* transform: translate3d(0, 0, 1px); */\r\n}\r\n\r\n.heroes-banner-container {\r\n  height: 20rem;\r\n}\r\n\r\n/** navigation behavior **/\r\n\r\n.navColumn {\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-grow: 0;\r\n}\r\n\r\n.navColumn.activeEntry {\r\n  flex-grow: 1;\r\n}\r\n\r\n.navColumn:not(.activeEntry) {\r\n  min-width: 100px;\r\n}\r\n\r\n.navColumn:not(.activeEntry) .heroes-banner {\r\n  width: 100px;\r\n  margin-left: 2rem;\r\n  transition: margin-top 0.4s ease-out;\r\n  /* transform: translate3d(0, 0, 1px); */\r\n  margin-top: 5rem;\r\n}\r\n\r\n.firstNavColumn:not(.activeEntry) {\r\n  margin-left: -50px;\r\n}\r\n\r\n.secondNavColumn:not(.activeEntry) {\r\n  margin-right: -20px;\r\n}\r\n\r\n.landingPage .heroes-banner {\r\n  margin-top: 30rem;\r\n}\r\n\r\nadventure-display {\r\n  margin-bottom: 3rem;\r\n}\r\n"

/***/ }),

/***/ "./src/app/heroes/heroes.component.html":
/*!**********************************************!*\
  !*** ./src/app/heroes/heroes.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\r\n  <div class=\"flex-row\" style=\"flex-wrap: nowrap; align-items: flex-start\">\r\n    <div\r\n      class=\"flex-col center navColumn firstNavColumn\"\r\n      [class.activeEntry]=\"activeMainNavEntry === 'heroes'\"\r\n    >\r\n      <div\r\n        class=\"heroes-banner-container flex-col center flex-item\"\r\n        [ngClass]=\"{ landingPage: gameStarted === false }\"\r\n      >\r\n        <h1 *ngIf=\"gameStarted === true && activeMainNavEntry === 'heroes'\">\r\n          Die Helden\r\n        </h1>\r\n        <img\r\n          src=\"/assets/winged-shield.png\"\r\n          class=\"no-border heroes-banner\"\r\n          (click)=\"activateNavEntry('heroes')\"\r\n        />\r\n      </div>\r\n\r\n      <div\r\n        class=\"flex-col center flex-item\"\r\n        *ngIf=\"successfullyLoaded === false\"\r\n      >\r\n        <p>Ich lade Deine Helden ....</p>\r\n        <button [disabled]=\"currentlyLoading\" (click)=\"loadBasicData()\">\r\n          Hier clicken um es noch mal zu versuchen\r\n        </button>\r\n      </div>\r\n      <div\r\n        class=\"flex-col center\"\r\n        *ngIf=\"gameStarted === false && successfullyLoaded === true\"\r\n      >\r\n        <p>Das Spiel ist bereit ...</p>\r\n        <button (click)=\"startGame()\">Los geht's!</button>\r\n      </div>\r\n      <div\r\n        class=\"heroes-list flex-col flex-item\"\r\n        *ngIf=\"\r\n          successfullyLoaded === true &&\r\n          gameStarted === true &&\r\n          activeMainNavEntry === 'heroes'\r\n        \"\r\n        [@inOutAnimation]\r\n      >\r\n        <hero-card\r\n          *ngFor=\"let hero of heroes\"\r\n          [class.selected]=\"hero === selectedHero\"\r\n          [hero]=\"hero\"\r\n        >\r\n        </hero-card>\r\n      </div>\r\n    </div>\r\n    <div\r\n      class=\"flex-col flex-item navColumn secondNavColumn\"\r\n      *ngIf=\"successfullyLoaded === true && gameStarted === true\"\r\n      [class.activeEntry]=\"activeMainNavEntry === 'adventure'\"\r\n    >\r\n      <div class=\"heroes-banner-container flex-col center flex-item\">\r\n        <h1 *ngIf=\"activeMainNavEntry === 'adventure'\">Der Weg</h1>\r\n        <!-- <p>{{ activeMainNavEntry }}</p> -->\r\n        <img\r\n          src=\"/assets/kompass-adventure.png\"\r\n          class=\"no-border heroes-banner\"\r\n          (click)=\"activateNavEntry('adventure')\"\r\n        />\r\n        <adventure-display\r\n          *ngIf=\"activeMainNavEntry === 'adventure'\"\r\n        ></adventure-display>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

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
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_domain_applicationState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/domain/applicationState */ "./src/app/domain/applicationState.ts");
/* harmony import */ var _domain_hero_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../domain/hero.service */ "./src/app/domain/hero.service.ts");
/* harmony import */ var _domain_skills_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../domain/skills.service */ "./src/app/domain/skills.service.ts");
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
        this.currentlyLoading = false;
        this._activeMainNavEntry = 'heroes';
        this.loadBasicData();
    }
    HeroesComponent.prototype.loadBasicData = function () {
        var _this = this;
        this.currentlyLoading = true;
        var heroesPromise = this.heroService.getHeroes();
        var skillsPromise = this.skillService.getSkills();
        Promise.all([heroesPromise, skillsPromise]).then(function (results) {
            _this.heroes = results[0];
            _this.skills = results[1];
            _this.currentlyLoading = false;
            app_domain_applicationState__WEBPACK_IMPORTED_MODULE_3__["gameState"].dataInitialized = true;
        }).catch(function (error) {
            _this.currentlyLoading = false;
        });
    };
    HeroesComponent.prototype.startGame = function () {
        app_domain_applicationState__WEBPACK_IMPORTED_MODULE_3__["gameState"].gameStarted = true;
    };
    HeroesComponent.prototype.activateNavEntry = function (navEntry) {
        this._activeMainNavEntry = navEntry;
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
    Object.defineProperty(HeroesComponent.prototype, "gameStarted", {
        get: function () {
            return app_domain_applicationState__WEBPACK_IMPORTED_MODULE_3__["gameState"].gameStarted;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeroesComponent.prototype, "successfullyLoaded", {
        get: function () {
            return app_domain_applicationState__WEBPACK_IMPORTED_MODULE_3__["gameState"].dataInitialized;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeroesComponent.prototype, "activeMainNavEntry", {
        get: function () {
            return this._activeMainNavEntry;
        },
        enumerable: true,
        configurable: true
    });
    HeroesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'heroes-list',
            template: __webpack_require__(/*! ./heroes.component.html */ "./src/app/heroes/heroes.component.html"),
            styles: [__webpack_require__(/*! ./heroes.component.css */ "./src/app/heroes/heroes.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('inOutAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s 1s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }))
                    ])
                ])
            ],
        }),
        __metadata("design:paramtypes", [_domain_hero_service__WEBPACK_IMPORTED_MODULE_4__["HeroService"],
            _domain_skills_service__WEBPACK_IMPORTED_MODULE_5__["SkillService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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

module.exports = ".mat-dialog-content {\r\n  max-height: 90%;\r\n  height: 90%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.mat-dialog-title {\r\n  font-family: Neucha, sans-serif;\r\n}\r\n"

/***/ }),

/***/ "./src/app/image-popup/image-popup.component.html":
/*!********************************************************!*\
  !*** ./src/app/image-popup/image-popup.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 mat-dialog-title>{{ data.caption }}</h3>\r\n<div mat-dialog-content>\r\n  <img [src]=\"data.url\" />\r\n</div>\r\n"

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

module.exports = ".inventoryItem {\r\n  display: flex;\r\n  min-height: 30px;\r\n  max-width: 100%;\r\n  align-items: center;\r\n}\r\n\r\n.inventoryGroupTitle {\r\n  margin-top: 3rem;\r\n  background-size: 5.5rem;\r\n  padding-left: 7rem;\r\n  background-position: 0 0;\r\n  background-repeat: no-repeat;\r\n  height: 5rem;\r\n  padding-top: 0.8rem;\r\n}\r\n\r\ntable {\r\n  position: relative;\r\n}\r\n\r\nth {\r\n  padding: 8px;\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top: 0;\r\n  background-color: white;\r\n}\r\n\r\ntr th:first-of-type {\r\n  text-align: left;\r\n}\r\n\r\ntr td:not(:first-of-type) {\r\n  text-align: center;\r\n}\r\n\r\ntr td:last-of-type {\r\n  text-align: right;\r\n}\r\n\r\n.inventoryMoneyTitle {\r\n  background-image: url(\"/assets/money-icon.png\");\r\n}\r\n\r\n.inventoryWeaponsTitle {\r\n  background-image: url(\"/assets/sword-icon.png\");\r\n  background-size: 3rem;\r\n  background-position-x: 0.5rem;\r\n}\r\n\r\n.inventoryArmorTitle {\r\n  background-image: url(\"/assets/armor-icon.png\");\r\n}\r\n\r\n.inventoryMiscTitle {\r\n  background-image: url(\"/assets/bag-icon.png\");\r\n}\r\n\r\n.spellGroupTitle {\r\n  font-size: 24px;\r\n  margin-top: 15px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\nconfirmation-sheet {\r\n  margin-top: -20px;\r\n  display: block;\r\n}\r\n\r\nbutton.addButton {\r\n  margin-bottom: 8px;\r\n  z-index: 10;\r\n}\r\n\r\n.addWeaponForm span {\r\n  display: block;\r\n  padding-top: 15px;\r\n  padding-bottom: 5px;\r\n}\r\n\r\n.addButton {\r\n  width: 300px;\r\n  max-width: 100%;\r\n}\r\n\r\n.inventoryItemName {\r\n  width: 200px;\r\n}\r\n\r\n.inventoryDamage,\r\n.inventoryItemAmount {\r\n  width: 100px;\r\n  font-weight: 600;\r\n}\r\n\r\n.inventoryItemAction {\r\n  padding-left: 20px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/inventory-display/inventory-display.component.html":
/*!********************************************************************!*\
  !*** ./src/app/inventory-display/inventory-display.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"padded flex-col center\">\r\n  <h4 class=\"inventoryGroupTitle inventoryMoneyTitle\">Geld</h4>\r\n  <div class=\"flex-col\">\r\n    <div class=\"row inventoryItem\">\r\n      <div class=\"inventoryItemName\">Dukaten:</div>\r\n      <div class=\"inventoryItemAmount\">{{ hero.money.dukaten }}</div>\r\n      <button (click)=\"editMoney(hero.money.entries[0])\">\r\n        <i class=\"fa fa-pencil\"></i>\r\n      </button>\r\n    </div>\r\n    <div class=\"row inventoryItem\">\r\n      <div class=\"inventoryItemName\">Silbertaler:</div>\r\n      <div class=\"inventoryItemAmount\">{{ hero.money.silbertaler }}</div>\r\n      <button (click)=\"editMoney(hero.money.entries[1])\">\r\n        <i class=\"fa fa-pencil\"></i>\r\n      </button>\r\n    </div>\r\n    <div class=\"row inventoryItem\">\r\n      <div class=\"inventoryItemName\">Kreuzer:</div>\r\n      <div class=\"inventoryItemAmount\">{{ hero.money.kreuzer }}</div>\r\n      <button (click)=\"editMoney(hero.money.entries[2])\">\r\n        <i class=\"fa fa-pencil\"></i>\r\n      </button>\r\n    </div>\r\n    <div class=\"row inventoryItem\">\r\n      <div class=\"inventoryItemName\">Heller:</div>\r\n      <div class=\"inventoryItemAmount\">{{ hero.money.heller }}</div>\r\n      <button (click)=\"editMoney(hero.money.entries[3])\">\r\n        <i class=\"fa fa-pencil\"></i>\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <hr />\r\n  <h4 class=\"inventoryGroupTitle inventoryWeaponsTitle\">Waffen</h4>\r\n  <button (click)=\"addWeaponToInventory()\" class=\"addButton\">\r\n    <i class=\"fa fa-plus-square\"></i> Waffe hinzufügen\r\n  </button>\r\n  <div class=\"addInventoryItem\" *ngIf=\"showAddWeaponSheet === true\">\r\n    <confirmation-sheet\r\n      showExternalTemplate=\"true\"\r\n      (confirm)=\"addWeapon()\"\r\n      (cancel)=\"cancelAddWeaponToInventory()\"\r\n    >\r\n      <div class=\"addWeaponForm\">\r\n        <div>Neue Waffe</div>\r\n        <span>Name</span>\r\n        <input [(ngModel)]=\"newWeapon.name\" />\r\n        <span>Trefferpunkte Würfel</span>\r\n        <input [(ngModel)]=\"newWeapon.damageDice\" />\r\n        <span>Trefferpunkte Zusatzpunkte</span>\r\n        <input [(ngModel)]=\"newWeapon._damageAddPoints\" />\r\n        <span>Körperkraft Zuschlag</span>\r\n        <input [(ngModel)]=\"newWeapon.extraPointsFromKk\" />\r\n        <span>Kampftalent</span>\r\n        <select [(ngModel)]=\"selectedSkillId\">\r\n          <option\r\n            *ngFor=\"let weaponSkill of weaponSkills\"\r\n            [value]=\"weaponSkill.id\"\r\n          >\r\n            {{ weaponSkill.name }}\r\n          </option>\r\n        </select>\r\n      </div>\r\n    </confirmation-sheet>\r\n  </div>\r\n  <table>\r\n    <tr>\r\n      <th>Name</th>\r\n      <th>Schaden</th>\r\n      <th>Talent</th>\r\n      <th></th>\r\n    </tr>\r\n\r\n    <tr *ngFor=\"let weapon of hero.weapons\" class=\"\">\r\n      <td class=\"inventoryItemName\">{{ weapon.name }}</td>\r\n      <td class=\"inventoryDamage\">{{ weapon.damageTextGeneral }}</td>\r\n      <td class=\"inventoryDamage\">{{ weapon.skill.name }}</td>\r\n\r\n      <td class=\"flex-spaces child-borders\">\r\n        <button (click)=\"removeWeaponFromInventory(weapon)\">\r\n          <i class=\"fa fa-trash\"></i>\r\n        </button>\r\n      </td>\r\n      <input class=\"modal-state\" id=\"modal-{{ weapon.id }}\" type=\"checkbox\" />\r\n    </tr>\r\n  </table>\r\n  <hr />\r\n\r\n  <h4 class=\"inventoryGroupTitle inventoryArmorTitle\">Rüstung</h4>\r\n  <button class=\"addButton\" (click)=\"addArmorToInventory()\">\r\n    <i class=\"fa fa-plus-square\"></i> Rüstung hinzufügen\r\n  </button>\r\n  <div class=\"addInventoryItem\" *ngIf=\"showAddArmorSheet === true\">\r\n    <confirmation-sheet\r\n      showExternalTemplate=\"true\"\r\n      (confirm)=\"addArmor()\"\r\n      (cancel)=\"cancelAddArmorToInventory()\"\r\n    >\r\n      <div class=\"addWeaponForm\">\r\n        <div>Neue Rüstung</div>\r\n        <span>Name</span>\r\n        <input [(ngModel)]=\"newArmor.name\" />\r\n        <span>Rüstungsschutz</span>\r\n        <input [(ngModel)]=\"newArmor.rs\" />\r\n        <span>Behinderung</span>\r\n        <input [(ngModel)]=\"newArmor.behinderung\" />\r\n      </div>\r\n    </confirmation-sheet>\r\n  </div>\r\n  <table>\r\n    <tr>\r\n      <th>Name</th>\r\n      <th>Rüstungsschutz</th>\r\n      <th>Behinderung</th>\r\n      <th></th>\r\n    </tr>\r\n    <tr *ngFor=\"let armor of hero.armor\" class=\"\">\r\n      <td class=\"inventoryItemName\">{{ armor.name }}</td>\r\n      <td class=\"inventoryDamage\">{{ armor.rs }}</td>\r\n      <td class=\"inventoryDamage\">{{ armor.behinderung }}</td>\r\n      <td>\r\n        <button (click)=\"removeArmorFromInventory(armor)\">\r\n          <i class=\"fa fa-trash\"></i>\r\n        </button>\r\n      </td>\r\n    </tr>\r\n  </table>\r\n  <hr />\r\n  <h4 class=\"inventoryGroupTitle inventoryMiscTitle\">Anderes</h4>\r\n  <button class=\"addButton\" (click)=\"addInventoryToInventory()\">\r\n    <i class=\"fa fa-plus-square\"></i> Inventar hinzufügen\r\n  </button>\r\n  <div class=\"addInventoryItem\" *ngIf=\"showAddInventorySheet === true\">\r\n    <confirmation-sheet\r\n      showExternalTemplate=\"true\"\r\n      (confirm)=\"addInventory()\"\r\n      (cancel)=\"cancelAddInventoryToInventory()\"\r\n    >\r\n      <div class=\"addWeaponForm\">\r\n        <div>Neues Ding</div>\r\n        <span>Name</span>\r\n        <input [(ngModel)]=\"newInventoryItem.name\" />\r\n        <span>Menge</span>\r\n        <input [(ngModel)]=\"newInventoryItem.amount\" />\r\n        <span>Gewicht</span>\r\n        <input [(ngModel)]=\"newInventoryItem.weight\" />\r\n      </div>\r\n    </confirmation-sheet>\r\n  </div>\r\n  <table>\r\n    <tr>\r\n      <th>Name</th>\r\n      <th>Menge</th>\r\n      <th>Gewicht</th>\r\n      <th></th>\r\n    </tr>\r\n\r\n    <tr *ngFor=\"let inventoryItem of hero.inventory\">\r\n      <td class=\"inventoryItemName\">{{ inventoryItem.name }}</td>\r\n      <td class=\"inventoryItemAmount\">{{ inventoryItem.amount }}</td>\r\n      <td class=\"inventoryItemAmount\">{{ inventoryItem.weight }}</td>\r\n      <td>\r\n        <button (click)=\"addToInventoryAmount(inventoryItem)\">\r\n          <i class=\"fa fa-plus\"></i>\r\n        </button>\r\n        <button\r\n          (click)=\"subtractFromInventoryAmount(inventoryItem)\"\r\n          [class.disabled]=\"inventoryItem.amount < 1\"\r\n        >\r\n          <i class=\"fa fa-minus\"></i>\r\n        </button>\r\n        <button (click)=\"removeInventoryItemFromInventory(inventoryItem)\">\r\n          <i class=\"fa fa-trash\"></i>\r\n        </button>\r\n      </td>\r\n    </tr>\r\n  </table>\r\n</div>\r\n"

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
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_confirm_deletion_confirm_deletion_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/confirm-deletion/confirm-deletion.component */ "./src/app/confirm-deletion/confirm-deletion.component.ts");
/* harmony import */ var app_domain_armor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/domain/armor */ "./src/app/domain/armor.ts");
/* harmony import */ var app_domain_armor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/domain/armor.service */ "./src/app/domain/armor.service.ts");
/* harmony import */ var app_domain_hero__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/domain/hero */ "./src/app/domain/hero.ts");
/* harmony import */ var app_domain_inventory_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/domain/inventory.service */ "./src/app/domain/inventory.service.ts");
/* harmony import */ var app_domain_inventoryItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/domain/inventoryItem */ "./src/app/domain/inventoryItem.ts");
/* harmony import */ var app_domain_skills_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/domain/skills.service */ "./src/app/domain/skills.service.ts");
/* harmony import */ var app_domain_weapon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/domain/weapon */ "./src/app/domain/weapon.ts");
/* harmony import */ var app_domain_weapons_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/domain/weapons.service */ "./src/app/domain/weapons.service.ts");
/* harmony import */ var app_edit_money_edit_money_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/edit-money/edit-money.component */ "./src/app/edit-money/edit-money.component.ts");
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
            _this.newWeapon = new app_domain_weapon__WEBPACK_IMPORTED_MODULE_9__["Weapon"](null, 'new weapon', 1, 4, 14, _this.weaponSkills[0]);
            _this.newArmor = new app_domain_armor__WEBPACK_IMPORTED_MODULE_3__["Armor"](null, 'Neue Rüstung', 2, 2),
                _this.newInventoryItem = new app_domain_inventoryItem__WEBPACK_IMPORTED_MODULE_7__["InventoryItem"](null, 'Neues Ding', 1, 1);
        });
    };
    /** money maintenance */
    InventoryDisplayComponent.prototype.editMoney = function (accountEntry) {
        this.editModeyDialogRef = this.dialog.open(app_edit_money_edit_money_component__WEBPACK_IMPORTED_MODULE_11__["EditMoneyComponent"], { data: accountEntry });
        this.editModeyDialogRef.componentInstance.confirm.subscribe(this.updateAccountEntry.bind(this));
        this.editModeyDialogRef.componentInstance.cancel.subscribe(this.closeEditMoneyDialog.bind(this));
    };
    InventoryDisplayComponent.prototype.updateAccountEntry = function (updateMoneyData) {
        this.inventoryService.updateAccountEntry(updateMoneyData.accountEntry, this.hero, updateMoneyData.newAmount);
        this.editModeyDialogRef.close();
    };
    InventoryDisplayComponent.prototype.closeEditMoneyDialog = function () {
        this.editModeyDialogRef.close();
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
        this.deletionDialogRef = this.dialog.open(app_confirm_deletion_confirm_deletion_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmDeletionComponent"], { data: new app_confirm_deletion_confirm_deletion_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmationData"]('Möchtest Du das Ding wegwerfen?', 'Es handelt sich dabei um die Waffe <strong>"' + weapon.name + '"</strong>') });
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
        this.deletionDialogRef = this.dialog.open(app_confirm_deletion_confirm_deletion_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmDeletionComponent"], { data: new app_confirm_deletion_confirm_deletion_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmationData"]('Möchtest Du die Rüstung wegwerfen?', 'Es handelt sich dabei um die das Rüstungsteil <strong>"' + armor.name + '"</strong>') });
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
        this.deletionDialogRef = this.dialog.open(app_confirm_deletion_confirm_deletion_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmDeletionComponent"], { data: new app_confirm_deletion_confirm_deletion_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmationData"]('Brauchst Du das Stück nicht mehr?', 'Es handelt sich dabei um <strong>"' + inventoryItem.name + '"</strong>') });
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
        __metadata("design:type", app_domain_hero__WEBPACK_IMPORTED_MODULE_5__["Hero"])
    ], InventoryDisplayComponent.prototype, "hero", void 0);
    InventoryDisplayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'inventory-display',
            template: __webpack_require__(/*! ./inventory-display.component.html */ "./src/app/inventory-display/inventory-display.component.html"),
            styles: [__webpack_require__(/*! ./inventory-display.component.css */ "./src/app/inventory-display/inventory-display.component.css")]
        }),
        __metadata("design:paramtypes", [app_domain_skills_service__WEBPACK_IMPORTED_MODULE_8__["SkillService"], app_domain_weapons_service__WEBPACK_IMPORTED_MODULE_10__["WeaponService"], app_domain_armor_service__WEBPACK_IMPORTED_MODULE_4__["ArmorService"], app_domain_inventory_service__WEBPACK_IMPORTED_MODULE_6__["InventoryService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
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

module.exports = ".mainStatus {\t\r\n\t/* ; */\r\n\t/* top: -16px;\r\n\tleft: 50%;\r\n\tz-index: 30; */\r\n}\r\n\r\n.statusValueContainer {\r\n    height: 30px;\r\n    width: 120px;\r\n    display: flex;\r\n    justify-content: center;\r\n\tposition: relative;\r\n    /* left: -50%; */\r\n}\r\n\r\n.mainStatusValue {\r\n\theight: 30px;\r\n\twidth: 120px;\r\n\tborder-radius: 60px;\r\n\tborder: 1px solid #bbb;\r\n\tbackground-color: #fff;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tpadding: 2px 0 0 0;\r\n\tfont-size: 1.5rem;\r\n\tposition: relative;\r\n\t\r\n}\r\n\r\n.statusValueText {\r\n    z-index: 10;\r\n}\r\n\r\n.control-icon {\r\n\twidth: 40px;\r\n\theight: 40px;\r\n\tposition: absolute;\r\n    top: -25px;\r\n    left: 40px;\r\n\tz-index: 200;\r\n}"

/***/ }),

/***/ "./src/app/life-display/life-display.component.html":
/*!**********************************************************!*\
  !*** ./src/app/life-display/life-display.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mainStatus\">\r\n  <img class=\"control-icon no-border\" src=\"/assets/icons/heart.png\"/>\r\n  <div  class=\"mainStatusValue good\">\r\n    <div matRipple matRipple \r\n    matRippleColor=\"#ff0000\"\r\n    matRippleRadius=\"20\" \r\n    matRippleCentered=\"true\"\r\n    matRippleDisabled=\"true\"\r\n    class=\"statusValueContainer\">\r\n      <div class=\"statusValueText\">{{currentLife}}/{{maxLife}}</div>\r\n    </div>\r\n</div>\r\n</div>"

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

module.exports = ".mainStatus {\t\r\n\t/* ; */\r\n\t/* top: -16px;\r\n\tleft: 50%;\r\n\tz-index: 30; */\r\n}\r\n\r\n.statusValueContainer {\r\n    height: 30px;\r\n    width: 120px;\r\n    display: flex;\r\n    justify-content: center;\r\n\tposition: relative;\r\n    /* left: -50%; */\r\n}\r\n\r\n.mainStatusValue {\r\n\theight: 30px;\r\n\twidth: 120px;\r\n\tborder-radius: 60px;\r\n\tborder: 1px solid #bbb;\r\n\tbackground-color: #fff;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tpadding: 2px 0 0 0;\r\n\tfont-size: 1.5rem;\r\n\tposition: relative;\r\n}\r\n\r\n.statusValueText {\r\n    z-index: 10;\r\n}\r\n\r\n.control-icon {\r\n\twidth: 40px;\r\n\theight: 40px;\r\n\tposition: absolute;\r\n    top: 15px;\r\n    left: 40px;\r\n\tz-index: 200;\r\n}"

/***/ }),

/***/ "./src/app/magic-display/magic-display.component.html":
/*!************************************************************!*\
  !*** ./src/app/magic-display/magic-display.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mainStatus\">\r\n    <img class=\"control-icon no-border\" src=\"/assets/icons/upg_wand.png\"/>\r\n    <div  class=\"mainStatusValue good\">\r\n      <div class=\"statusValueContainer\">\r\n        <div class=\"statusValueText\">{{currentMagicEnergy}}/{{maxMagicEnergy}}</div>\r\n      </div>\r\n  </div>\r\n  </div>"

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

module.exports = "<p>\r\n  master works!\r\n</p>\r\n"

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

module.exports = ":host {\r\n  padding: 50px 0;\r\n  position: fixed;\r\n  \r\n}\r\n\r\n#menuContainer {\r\n  display: none;\r\n}\r\n\r\n#menuContainer.open {\r\n\tdisplay: flex;\r\n}\r\n\r\n.mat-menu-content {\r\n  background-color: rgba(90, 90, 90, 0.5);\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"menuContainer\" [ngClass]=\"{'open': open === true }\">\r\n  <!-- <md-nav-list class=\"modal\">\r\n    <md-list-item (click)=\"gotoList()\">\r\n      <a mdLine>Zurück</a>\r\n    </md-list-item>\r\n    <md-list-item>Salt </md-list-item>\r\n    <md-list-item>Paprika </md-list-item>\r\n  </md-nav-list> -->\r\n</div>\r\n"

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

module.exports = "<remote-control-receiver></remote-control-receiver>\r\n<router-outlet></router-outlet>\r\n"

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
    function RemoteControlReceiverComponent(websocketService) {
        this.service = websocketService;
    }
    RemoteControlReceiverComponent.prototype.ngOnInit = function () {
    };
    RemoteControlReceiverComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'remote-control-receiver',
            template: __webpack_require__(/*! ./remote-control-receiver.component.html */ "./src/app/remote-control-receiver/remote-control-receiver.component.html"),
            styles: [__webpack_require__(/*! ./remote-control-receiver.component.css */ "./src/app/remote-control-receiver/remote-control-receiver.component.css")]
        }),
        __metadata("design:paramtypes", [_remote_control_receiver_service__WEBPACK_IMPORTED_MODULE_1__["RemoteControlReceiverService"]])
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
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var app_url_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/url.service */ "./src/app/url.service.ts");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _domain_remoteControlOperation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../domain/remoteControlOperation */ "./src/app/domain/remoteControlOperation.ts");
/* harmony import */ var _image_popup_image_popup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../image-popup/image-popup.component */ "./src/app/image-popup/image-popup.component.ts");
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
    function RemoteControlReceiverService(http, dialog, toastr) {
        var _this = this;
        this.http = http;
        this.dialog = dialog;
        this.toastr = toastr;
        this.operationsMap = new Map([
            [_domain_remoteControlOperation__WEBPACK_IMPORTED_MODULE_8__["operationTypes"].openImage, function (url) {
                    var dialogRef = _this.dialog.open(_image_popup_image_popup_component__WEBPACK_IMPORTED_MODULE_9__["ImagePopupComponent"], {
                        // width: '250px',
                        data: { url: _this.baseUrl + url }
                    });
                    dialogRef.afterClosed().subscribe(function (result) {
                        console.log('The dialog was closed');
                    });
                }
            ]
        ]);
        this.wsUrl = app_url_service__WEBPACK_IMPORTED_MODULE_4__["UrlService"].getBaseURLWS() + "/remoteControlReceiver";
        this.wsClientId = Math.random().toString(36).substring(7);
        this.currentlyConnected = false;
        this.baseUrl = app_url_service__WEBPACK_IMPORTED_MODULE_4__["UrlService"].getBaseUrl();
        // this.createWebsocket()
    }
    RemoteControlReceiverService.prototype.createWebsocket = function () {
        var _this = this;
        try {
            this.socket = new WebSocket(this.wsUrl);
            this.remoteControlReceiverSubject = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
            this.socket.onopen = function (event) {
                _this.currentlyConnected = true;
                _this.toastr.success('Du bist online.');
                clearInterval(_this.connectionInterval);
            };
            this.socket.onerror = function (error) {
                if (_this.socket.readyState === _this.socket.OPEN) {
                    _this.toastr.error('Es gab einen Fehler', 'Wir schließen nun die Verbindung');
                }
            };
            this.socket.addEventListener('error', function (event) {
                console.log('hey');
                event.stopPropagation();
            });
            this.socket.addEventListener('close', function (event) {
                if (_this.currentlyConnected) {
                    _this.currentlyConnected = false;
                    _this.toastr.error('Du bist nicht mehr mit dem Server verbunden', 'Die Verbindung ist abgebaut worden');
                    _this.connectionInterval = window.setInterval(_this.createWebsocket.bind(_this), 4000);
                }
            });
            this.remoteControlReceiverSubscription = this.remoteControlReceiverSubject.subscribe(function (message) {
                var instruction = _domain_remoteControlOperation__WEBPACK_IMPORTED_MODULE_8__["OperationFactory"].createOperationFromJSON(message.data);
                var parameters = instruction.getParameters();
                _this.operationsMap.get(instruction.getType()).apply(_this, instruction.getParameters());
            });
            this.socket.onmessage = (function (evt) { return _this.remoteControlReceiverSubject.next(evt); });
        }
        catch (error) {
            console.log('error setting up web socket with remote control receiver');
        }
    };
    RemoteControlReceiverService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
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

module.exports = "\r\n"

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
/* harmony import */ var app_url_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/url.service */ "./src/app/url.service.ts");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
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
        this.wsUrl = app_url_service__WEBPACK_IMPORTED_MODULE_2__["UrlService"].getBaseURLWS + "/remoteControlSender";
        this.wsClientId = Math.random().toString(36).substring(7);
        this.socket = this.createWebsocket();
        var subject = this.remoteControlSubject = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.socket.onmessage = (function (evt) { return subject.next(evt); });
    }
    RemoteControlService.prototype.createWebsocket = function () {
        try {
            var ws = new WebSocket(this.wsUrl);
            return ws;
        }
        catch (error) {
            console.log('error setting up web socket to remote control sender');
        }
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

module.exports = "<div class=\"flex-col center\">\r\n  <button>\r\n    <div class=\"flex-row skill\">\r\n      <div class=\"skillTitle\">{{spell.getSpell().name}}</div>\r\n      <div class=\"skillBe\">\r\n        <i class=\"fa fa-wheelchair\"></i>{{spell.getSpell().be}}\r\n      </div>\r\n      \r\n      <div class=\"skillValue\">\r\n        <i class=\"fa fa-tachometer\"></i>{{spell.value}}</div>\r\n      <div class=\"dices\">\r\n        <i class=\"fa fa-cubes\"></i>\r\n        <div class=\"dice\">{{spell.getSpell().dice1}}: {{spell.dice1Value}}</div>\r\n        <div class=\"dice\">{{spell.getSpell().dice2}}: {{spell.dice2Value}}</div>\r\n        <div class=\"dice\">{{spell.getSpell().dice3}}: {{spell.dice3Value}}</div>\r\n      </div>\r\n    </div>\r\n  </button>\r\n</div>"

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

module.exports = ".searchContainer {\r\n  justify-content: center;\r\n}\r\n\r\n.spellGroup {\r\n  position: relative;\r\n}\r\n\r\n.spellGroupTitle {\r\n  font-size: 24px;\r\n  margin-top: 15px;\r\n  margin-bottom: 10px;\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top: 0;\r\n  padding: 8px;\r\n  background-color: #efefef;\r\n}\r\n\r\n.spellEntry {\r\n  margin-bottom: 8px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/spell-search/spell-search.component.html":
/*!**********************************************************!*\
  !*** ./src/app/spell-search/spell-search.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-col flex-item\">\r\n  <div class=\"flex-row padded searchContainer center\">\r\n    <input\r\n      placeholder=\"Suchbegriff\"\r\n      [value]=\"spellSearchTerm\"\r\n      (input)=\"spellSearchTerm = $event.target.value\"\r\n    />\r\n  </div>\r\n  <div class=\"talente padded\">\r\n    <div\r\n      class=\"flex-col center spellGroup\"\r\n      *ngFor=\"\r\n        let spellGroup of hero.spellGroups\r\n          | MatchesSpellSearchTermChildren: spellSearchTerm\r\n      \"\r\n    >\r\n      <div class=\"spellGroupTitle border\">{{ spellGroup.spellGroup.name }}</div>\r\n      <div class=\"spellGroupEntries\">\r\n        <div\r\n          class=\"spellEntry\"\r\n          *ngFor=\"\r\n            let spell of spellGroup.spells\r\n              | MatchesSpellSearchTerm: spellSearchTerm\r\n          \"\r\n        >\r\n          <spell-card [spell]=\"spell\"></spell-card>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

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

module.exports = ".flex-row.skill {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    margin: 2px;\r\n    padding: 12px;\r\n    font-size: 16px;\r\n}\r\n\r\n.skillTitle {\r\n    width: 140px;\r\n    font-weight: 600;\r\n    text-align: left;\r\n}\r\n\r\n.skillBe, .skillValue {\r\n    width: 60px;\r\n}\r\n\r\n.fightDices {\r\n    width: 120px;\r\n    display:flex;\r\n}\r\n\r\n.fightDice {\r\n    width: 60px;\r\n}\r\n\r\n.dices {\r\n    display: flex;\r\n    width: 200px;\r\n}\r\n\r\n.dice {\r\n    width: 50px\r\n}\r\n\r\ni {\r\n    margin-right: 5px;\r\n}"

/***/ }),

/***/ "./src/app/talent-card/talent-card.component.html":
/*!********************************************************!*\
  !*** ./src/app/talent-card/talent-card.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-col center\">\r\n  <button class=\"comic-shadow\">\r\n    <div class=\"flex-row skill\">\r\n      <div class=\"skillTitle\">{{skill.getSkill().name}}</div>\r\n      <div class=\"skillBe\">\r\n        <i class=\"fa fa-wheelchair\"></i>{{skill.getSkill().be}}\r\n      </div>\r\n\r\n      <div class=\"skillValue\">\r\n        <i class=\"fa fa-tachometer\"></i>{{skill.value}}\r\n      </div>\r\n      <div class=\"fightDices\" *ngIf=\"skillGroup.hasAttackParade\">\r\n        <i class=\"fa fa-cube\"></i>\r\n        <div class=\"fightDice\">AT: {{skill.getAttack()}}</div>\r\n        <div class=\"fightDice\">PA: {{skill.getParade()}}</div>\r\n      </div>\r\n      <div class=\"dices\" *ngIf=\"skillGroup.hasThreeDices\">\r\n        <i class=\"fa fa-cubes\"></i>\r\n        <div class=\"dice\">{{skill.getSkill().dice1.short}}: {{skill.dice1Value}}</div>\r\n        <div class=\"dice\">{{skill.getSkill().dice2.short}}: {{skill.dice2Value}}</div>\r\n        <div class=\"dice\">{{skill.getSkill().dice3.short}}: {{skill.dice3Value}}</div>\r\n      </div>\r\n    </div>\r\n  </button>\r\n  <div *ngIf=\"state === 'rollDice'\" class=\"confirmationButtons flex-col center\">\r\n    <div class=\"messageToConfirm\">Würfeln</div>\r\n    <div class=\"flex-row\">\r\n      <div class=\"flex-item flex-col confirmationButton center accept\" (click)=\"confirmIncrease()\">\r\n        <i class=\"fa fa-check\"></i>\r\n      </div>\r\n      <div class=\"flex-item flex-col confirmationButton center reject\" (click)=\"cancelIncrease()\">\r\n        <i class=\"fa fa-window-close\"></i>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

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

module.exports = ".searchContainer {\r\n  justify-content: center;\r\n}\r\n\r\n.skillGroup {\r\n  position: relative;\r\n}\r\n\r\n.skillGroupTitle {\r\n  font-size: 24px;\r\n  margin-top: 15px;\r\n  margin-bottom: 10px;\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top: 0;\r\n  padding: 8px;\r\n  background-color: #efefef;\r\n}\r\n\r\n.skillEntry {\r\n  margin-bottom: 8px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/talent-search/talent-search.component.html":
/*!************************************************************!*\
  !*** ./src/app/talent-search/talent-search.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-col flex-item\">\r\n  <div class=\"flex-row padded searchContainer center\">\r\n    <input\r\n      placeholder=\"Suchbegriff\"\r\n      [value]=\"talentSearchTerm\"\r\n      (input)=\"talentSearchTerm = $event.target.value\"\r\n    />\r\n  </div>\r\n  <div class=\"talente padded\">\r\n    <div\r\n      class=\"flex-col center skillGroup\"\r\n      *ngFor=\"\r\n        let skillGroup of hero.skillGroups\r\n          | MatchesTalentSearchTermChildren: talentSearchTerm\r\n      \"\r\n    >\r\n      <div class=\"skillGroupTitle border\">{{ skillGroup.skillGroup.name }}</div>\r\n      <div class=\"skillGroupEntries\">\r\n        <div\r\n          class=\"skillEntry\"\r\n          *ngFor=\"\r\n            let skill of skillGroup.skills\r\n              | MatchesTalentSearchTerm: talentSearchTerm\r\n          \"\r\n        >\r\n          <talent-card [skill]=\"skill\"></talent-card>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

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

/***/ "./src/app/url.service.ts":
/*!********************************!*\
  !*** ./src/app/url.service.ts ***!
  \********************************/
/*! exports provided: UrlService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlService", function() { return UrlService; });
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

var UrlService = /** @class */ (function () {
    function UrlService() {
    }
    UrlService_1 = UrlService;
    UrlService.getBaseUrl = function () {
        return this._baseURL;
    };
    UrlService.getBaseURLWS = function () {
        return this._baseURLWS;
    };
    var UrlService_1;
    UrlService._baseHostProd = window.location.hostname + ":" + window.location.port;
    UrlService._baseHostDev = window.location.hostname + ":8000";
    UrlService._isDev = window.location.hostname === 'localhost' || window.location.hostname === '0.0.0.0' ? true : false;
    UrlService._baseURL = UrlService_1._isDev ? window.location.protocol + "//" + UrlService_1._baseHostDev : window.location.protocol + "//" + UrlService_1._baseHostProd;
    UrlService._protocolWebSockets = window.location.protocol === 'http:' ? 'ws:' : 'wss:';
    UrlService._baseURLWS = UrlService_1._isDev ? UrlService_1._protocolWebSockets + "//" + UrlService_1._baseHostDev : UrlService_1._protocolWebSockets + "//" + UrlService_1._baseHostProd;
    UrlService = UrlService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], UrlService);
    return UrlService;
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

module.exports = __webpack_require__(/*! C:\Users\luthe\jsWorkspace\table-top-client-backup\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map