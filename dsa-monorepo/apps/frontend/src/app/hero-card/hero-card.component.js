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
var core_1 = require("@angular/core");
var hero_service_1 = require("../domain/hero.service");
var router_1 = require("@angular/router");
var HeroCard = (function () {
    function HeroCard(heroService, router) {
        this.heroService = heroService;
        this.router = router;
    }
    HeroCard.prototype.ngOnInit = function () {
    };
    Object.defineProperty(HeroCard.prototype, "hero", {
        get: function () {
            return this.heroProp;
        },
        set: function (hero) {
            this.heroProp = hero;
        },
        enumerable: true,
        configurable: true
    });
    HeroCard.prototype.onSelect = function (hero) {
        this.hero = hero;
        this.gotoDetail();
    };
    HeroCard.prototype.gotoDetail = function () {
        this.router.navigate(['/hero', this.heroProp.id]);
    };
    return HeroCard;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], HeroCard.prototype, "hero", null);
HeroCard = __decorate([
    core_1.Component({
        selector: 'hero-card',
        templateUrl: './hero-card.component.html',
        styleUrls: ['./hero-card.component.css'],
    }),
    __metadata("design:paramtypes", [hero_service_1.HeroService,
        router_1.Router])
], HeroCard);
exports.HeroCard = HeroCard;
//# sourceMappingURL=hero-card.component.js.map