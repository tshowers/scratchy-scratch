import { Injectable, ɵɵdefineInjectable, Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LickDataModule } from 'lick-data';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/lick-marketing-reviews1.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function LickMarketingReviews1Component_div_8_span_17_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtext(1, ", ");
    ɵngcc0.ɵɵelementEnd();
} }
const _c0 = function (a0) { return { "no": a0 }; };
function LickMarketingReviews1Component_div_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 6);
    ɵngcc0.ɵɵelementStart(1, "div", 7);
    ɵngcc0.ɵɵelementStart(2, "div", 8);
    ɵngcc0.ɵɵelement(3, "img", 9);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(4, "span", 10);
    ɵngcc0.ɵɵelement(5, "i", 11);
    ɵngcc0.ɵɵelement(6, "i", 11);
    ɵngcc0.ɵɵelement(7, "i", 11);
    ɵngcc0.ɵɵelement(8, "i", 11);
    ɵngcc0.ɵɵelement(9, "i", 11);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(10, "div", 12);
    ɵngcc0.ɵɵelementStart(11, "p");
    ɵngcc0.ɵɵtext(12);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(13, "h3");
    ɵngcc0.ɵɵtext(14);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(15, "p");
    ɵngcc0.ɵɵtext(16);
    ɵngcc0.ɵɵtemplate(17, LickMarketingReviews1Component_div_8_span_17_Template, 2, 0, "span", 13);
    ɵngcc0.ɵɵtext(18);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵpropertyInterpolate("src", item_r1.icon, ɵngcc0.ɵɵsanitizeUrl);
    ɵngcc0.ɵɵpropertyInterpolate("alt", item_r1.name);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(17, _c0, !item_r1.stars[0]));
    ɵngcc0.ɵɵattribute("aria-hidden", true);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(19, _c0, !item_r1.stars[1]));
    ɵngcc0.ɵɵattribute("aria-hidden", true);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(21, _c0, !item_r1.stars[2]));
    ɵngcc0.ɵɵattribute("aria-hidden", true);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(23, _c0, !item_r1.stars[3]));
    ɵngcc0.ɵɵattribute("aria-hidden", true);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(25, _c0, !item_r1.stars[4]));
    ɵngcc0.ɵɵattribute("aria-hidden", true);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵtextInterpolate1(" ", item_r1 == null ? null : item_r1.description, " ");
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(item_r1 == null ? null : item_r1.name);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(item_r1 == null ? null : item_r1.profession);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", item_r1.profession);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", item_r1 == null ? null : item_r1.company.name, "");
} }
class LickMarketingReviews1Service {
    constructor() { }
}
LickMarketingReviews1Service.ɵfac = function LickMarketingReviews1Service_Factory(t) { return new (t || LickMarketingReviews1Service)(); };
LickMarketingReviews1Service.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: LickMarketingReviews1Service, factory: LickMarketingReviews1Service.ɵfac, providedIn: 'root' });
/** @nocollapse */
LickMarketingReviews1Service.ctorParameters = () => [];
/** @nocollapse */ LickMarketingReviews1Service.ngInjectableDef = ɵɵdefineInjectable({ factory: function LickMarketingReviews1Service_Factory() { return new LickMarketingReviews1Service(); }, token: LickMarketingReviews1Service, providedIn: "root" });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(LickMarketingReviews1Service, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: lib/lick-marketing-reviews1.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LickMarketingReviews1Component {
    constructor() {
        this.headingText = 'licky-lick-marketing-reviews1';
        this.descriptionText = 'Earum rerum necessitatibus saepe eveniet, ut labore. Dicta sunt, explicabo laborum et harum quidem rerum hic tenetur. Itaque earum rerum hic tenetur a sapiente delectus, ut et.';
        this.reviews = [
            {
                "id": Math.floor(Math.random() * 1000).toString(),
                "stars": [true, true, true, true, false],
                "description": "Integer id quam. Morbi mi. Quisque nisl felis, venenatis tristique, dignissim in, ultrices sit amet, augue.",
                "userName": "Miles Jeffries",
                "profession": "Photographer",
                "icon": "https://via.placeholder.com/1024x768.png",
                "url": "https://via.placeholder.com/1024x768.png",
                "shared": true,
                "name": "Miles Jeffries",
                "userImage": "https://via.placeholder.com/1024x768.png",
                "user_id": Math.floor(Math.random() * 1000).toString(),
                "publishedAt": new Date(),
                "lastUpdated": new Date(),
                "timeStamp": new Date(),
                "company": { "name": "Miles Studio" }
            },
            {
                "id": Math.floor(Math.random() * 1000).toString(),
                "stars": [true, true, true, true, true],
                "description": "Proin sodales libero eget ante. Nulla quam.",
                "userName": "Janet Buckner",
                "profession": "CEO",
                "icon": "https://via.placeholder.com/1024x768.png",
                "url": "https://via.placeholder.com/1024x768.png",
                "shared": true,
                "name": "Janet Buckner",
                "userImage": "https://via.placeholder.com/1024x768.png",
                "user_id": Math.floor(Math.random() * 1000).toString(),
                "publishedAt": new Date(),
                "lastUpdated": new Date(),
                "timeStamp": new Date(),
                "company": { "name": "Valid Software" }
            },
            {
                "id": Math.floor(Math.random() * 1000).toString(),
                "stars": [true, true, true, true, false],
                "description": "Aenean laoreet. Vestibulum nisi lectus, commodo ac, facilisis ac, ultricies eu, pede. Ut orci risus, accumsan porttitor, cursus quis, aliquet eget, justo. ",
                "userName": "Phyllis Kim",
                "profession": "Business Owner",
                "icon": "https://via.placeholder.com/1024x768.png",
                "url": "https://via.placeholder.com/1024x768.png",
                "shared": true,
                "name": "Phyllis Kim",
                "userImage": "https://via.placeholder.com/1024x768.png",
                "user_id": Math.floor(Math.random() * 1000).toString(),
                "publishedAt": new Date(),
                "lastUpdated": new Date(),
                "timeStamp": new Date(),
                "company": { "name": "The Cake Place" }
            },
        ];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
LickMarketingReviews1Component.ɵfac = function LickMarketingReviews1Component_Factory(t) { return new (t || LickMarketingReviews1Component)(); };
LickMarketingReviews1Component.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: LickMarketingReviews1Component, selectors: [["licky-lick-marketing-reviews1"]], inputs: { headingText: "headingText", descriptionText: "descriptionText", reviews: "reviews" }, decls: 9, vars: 3, consts: [["id", "reviews---3", 1, "container-fluid", "section-block", "reviews", "reviews-3", "color-block"], [1, "container"], [1, "row"], [1, "wow", "shake"], [1, "block-desc", "wow", "swing"], ["class", "col-md-6 review wow fadeInUp", 4, "ngFor", "ngForOf"], [1, "col-md-6", "review", "wow", "fadeInUp"], [1, "border-box"], [1, "avatar"], [3, "src", "alt"], [1, "stars"], [1, "fa", "fa-star", 3, "ngClass"], [1, "review-text"], [4, "ngIf"]], template: function LickMarketingReviews1Component_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "section", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵelementStart(3, "h2", 3);
        ɵngcc0.ɵɵtext(4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(5, "div", 4);
        ɵngcc0.ɵɵelementStart(6, "p");
        ɵngcc0.ɵɵtext(7);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(8, LickMarketingReviews1Component_div_8_Template, 19, 27, "div", 5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(4);
        ɵngcc0.ɵɵtextInterpolate(ctx.headingText);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵtextInterpolate(ctx.descriptionText);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.reviews);
    } }, directives: [ɵngcc1.NgForOf, ɵngcc1.NgClass, ɵngcc1.NgIf], encapsulation: 2 });
/** @nocollapse */
LickMarketingReviews1Component.ctorParameters = () => [];
LickMarketingReviews1Component.propDecorators = {
    headingText: [{ type: Input }],
    descriptionText: [{ type: Input }],
    reviews: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(LickMarketingReviews1Component, [{
        type: Component,
        args: [{
                selector: 'licky-lick-marketing-reviews1',
                template: "<section id=\"reviews---3\" class=\"container-fluid section-block reviews reviews-3 color-block\">\n  <div class=\"container\">\n    <div class=\"row\">\n\n      <h2 class=\"wow shake\">{{headingText}}</h2>\n      <div class=\"block-desc wow swing\">\n        <p>{{descriptionText}}</p>\n      </div>\n\n      <!-- Review 1 -->\n      <div class=\"col-md-6 review wow fadeInUp\" *ngFor=\"let item of reviews; let i = index\">\n        <div class=\"border-box\">\n\n          <div class=\"avatar\">\n            <img src=\"{{item.icon}}\" alt=\"{{item.name}}\">\n          </div>\n\n          <!-- Rating -->\n          <span class=\"stars\">\n            <i class=\"fa fa-star\" [ngClass]=\"{'no' : !item.stars[0]}\" [attr.aria-hidden]=\"true\"></i>\n            <i class=\"fa fa-star\" [ngClass]=\"{'no' : !item.stars[1]}\" [attr.aria-hidden]=\"true\"></i>\n            <i class=\"fa fa-star\" [ngClass]=\"{'no' : !item.stars[2]}\" [attr.aria-hidden]=\"true\"></i>\n            <i class=\"fa fa-star\" [ngClass]=\"{'no' : !item.stars[3]}\" [attr.aria-hidden]=\"true\"></i>\n            <i class=\"fa fa-star\" [ngClass]=\"{'no' : !item.stars[4]}\" [attr.aria-hidden]=\"true\"></i>\n          </span>\n\n          <div class=\"review-text\">\n            <p>\n              {{item?.description}}\n            </p>\n          </div> <!-- .review-text -->\n\n          <h3>{{item?.name}}</h3>\n          <p>{{item?.profession}}<span *ngIf=\"item.profession\">, </span> {{item?.company.name}}</p>\n\n        </div>\n      </div> <!-- .review -->\n\n\n    </div> <!-- .row -->\n  </div> <!-- .container -->\n</section>\n"
            }]
    }], function () { return []; }, { headingText: [{
            type: Input
        }], descriptionText: [{
            type: Input
        }], reviews: [{
            type: Input
        }] }); })();
if (false) {
    /** @type {?} */
    LickMarketingReviews1Component.prototype.headingText;
    /** @type {?} */
    LickMarketingReviews1Component.prototype.descriptionText;
    /** @type {?} */
    LickMarketingReviews1Component.prototype.reviews;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/lick-marketing-reviews1.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LickMarketingReviews1Module {
}
LickMarketingReviews1Module.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: LickMarketingReviews1Module });
LickMarketingReviews1Module.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function LickMarketingReviews1Module_Factory(t) { return new (t || LickMarketingReviews1Module)(); }, imports: [[
            CommonModule,
            RouterModule,
            LickDataModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(LickMarketingReviews1Module, { declarations: function () { return [LickMarketingReviews1Component]; }, imports: function () { return [CommonModule,
        RouterModule,
        LickDataModule]; }, exports: function () { return [LickMarketingReviews1Component]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(LickMarketingReviews1Module, [{
        type: NgModule,
        args: [{
                declarations: [LickMarketingReviews1Component],
                imports: [
                    CommonModule,
                    RouterModule,
                    LickDataModule
                ],
                exports: [LickMarketingReviews1Component]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lick-marketing-reviews1.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { LickMarketingReviews1Component, LickMarketingReviews1Module, LickMarketingReviews1Service };

//# sourceMappingURL=lick-marketing-reviews1.js.map