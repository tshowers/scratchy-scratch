import { Injectable, ɵɵdefineInjectable, EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/lick-app-widget-signup.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/router';
import * as ɵngcc2 from '@angular/forms';
class LickAppWidgetSignupService {
    constructor() { }
}
LickAppWidgetSignupService.ɵfac = function LickAppWidgetSignupService_Factory(t) { return new (t || LickAppWidgetSignupService)(); };
LickAppWidgetSignupService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: LickAppWidgetSignupService, factory: LickAppWidgetSignupService.ɵfac, providedIn: 'root' });
/** @nocollapse */
LickAppWidgetSignupService.ctorParameters = () => [];
/** @nocollapse */ LickAppWidgetSignupService.ngInjectableDef = ɵɵdefineInjectable({ factory: function LickAppWidgetSignupService_Factory() { return new LickAppWidgetSignupService(); }, token: LickAppWidgetSignupService, providedIn: "root" });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(LickAppWidgetSignupService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: lib/lick-app-widget-signup.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LickAppWidgetSignupComponent {
    constructor() {
        this.logoName = "LogoName";
        this.homePageLink = "/";
        this.headingText = "Let's Get Started .!";
        this.subText = " most powerfull most selling Admin Panel In The World";
        this.titleText = "Signup";
        this.subTitleText = "Create an Account";
        this.submitButtonText = "Signup";
        this.loginText = "Already have an account? Please";
        this.loginButtonText = "Login";
        this.loginLink = "/login";
        this.pageEvent = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    onSubmit() {
        this.onPageEvent('submit');
    }
    /**
     * @param {?} type
     * @return {?}
     */
    onPageEvent(type) {
        this.pageEvent.emit({
            type: type,
            firstName: this.firstName,
            lastName: this.lastName,
            emailAddress: this.emailAddress,
            password: this.password
        });
    }
}
LickAppWidgetSignupComponent.ɵfac = function LickAppWidgetSignupComponent_Factory(t) { return new (t || LickAppWidgetSignupComponent)(); };
LickAppWidgetSignupComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: LickAppWidgetSignupComponent, selectors: [["licky-lick-app-widget-signup"]], inputs: { logoName: "logoName", homePageLink: "homePageLink", headingText: "headingText", subText: "subText", titleText: "titleText", subTitleText: "subTitleText", submitButtonText: "submitButtonText", loginText: "loginText", loginButtonText: "loginButtonText", loginLink: "loginLink" }, outputs: { pageEvent: "pageEvent" }, decls: 48, vars: 14, consts: [[1, "container-pages", "ta-vertical-center"], [1, "brand-logo", "float-left"], [1, "", 3, "routerLink"], [1, "pages-tag-line", "text-white"], [1, "h4", "wow", "fadeIn"], [1, "wow", "fadeIn"], [1, "card", "pages-card", "col-lg-4", "col-md-6", "col-sm-6"], [1, "card-body"], [1, "h4", "text-center", "text-theme"], [1, "small", "text-center", "text-dark"], [3, "ngSubmit"], ["userForm", "ngForm"], [1, "form-group"], [1, "input-group"], [1, "input-group-addon", "text-theme"], [1, "fa", "fa-user"], ["tabindex", "1", "autofocus", "", "type", "text", "id", "firstName", "name", "firstName", "autocomplete", "off", "placeholder", "First Name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["tabindex", "2", "type", "text", "autocomplete", "off", "id", "lastName", "name", "lastName", "placeholder", "Last Name", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "fa", "fa-envelope"], ["tabindex", "3", "type", "email", "autocomplete", "off", "id", "emailAddress", "name", "emailAddress", "placeholder", "Email Address", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "fa", "fa-asterisk"], ["tabindex", "4", "type", "password", "id", "password", "autocomplete", "off", "name", "password", "placeholder", "Password", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-group", "form-actions"], ["type", "submit", "tabindex", "5", 1, "btn", "btn-theme", "login-btn"], [1, "text-center"], [1, "text-theme", 3, "routerLink"], [1, "half-circle"], [1, "small-circle"]], template: function LickAppWidgetSignupComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = ɵngcc0.ɵɵgetCurrentView();
        ɵngcc0.ɵɵelementStart(0, "section", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "a", 2);
        ɵngcc0.ɵɵtext(3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(4, "div", 3);
        ɵngcc0.ɵɵelementStart(5, "div", 4);
        ɵngcc0.ɵɵtext(6);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(7, "small", 5);
        ɵngcc0.ɵɵtext(8);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(9, "div", 6);
        ɵngcc0.ɵɵelementStart(10, "div", 7);
        ɵngcc0.ɵɵelementStart(11, "div", 8);
        ɵngcc0.ɵɵelementStart(12, "strong");
        ɵngcc0.ɵɵtext(13);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(14, "div", 9);
        ɵngcc0.ɵɵtext(15);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(16, "form", 10, 11);
        ɵngcc0.ɵɵlistener("ngSubmit", function LickAppWidgetSignupComponent_Template_form_ngSubmit_16_listener() { ɵngcc0.ɵɵrestoreView(_r1); const _r0 = ɵngcc0.ɵɵreference(17); ctx.onSubmit(); return _r0.reset(); });
        ɵngcc0.ɵɵelementStart(18, "div", 12);
        ɵngcc0.ɵɵelementStart(19, "div", 13);
        ɵngcc0.ɵɵelementStart(20, "span", 14);
        ɵngcc0.ɵɵelement(21, "i", 15);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(22, "input", 16);
        ɵngcc0.ɵɵlistener("ngModelChange", function LickAppWidgetSignupComponent_Template_input_ngModelChange_22_listener($event) { return ctx.firstName = $event; });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(23, "div", 12);
        ɵngcc0.ɵɵelementStart(24, "div", 13);
        ɵngcc0.ɵɵelementStart(25, "span", 14);
        ɵngcc0.ɵɵelement(26, "i", 15);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(27, "input", 17);
        ɵngcc0.ɵɵlistener("ngModelChange", function LickAppWidgetSignupComponent_Template_input_ngModelChange_27_listener($event) { return ctx.lastName = $event; });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(28, "div", 12);
        ɵngcc0.ɵɵelementStart(29, "div", 13);
        ɵngcc0.ɵɵelementStart(30, "span", 14);
        ɵngcc0.ɵɵelement(31, "i", 18);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(32, "input", 19);
        ɵngcc0.ɵɵlistener("ngModelChange", function LickAppWidgetSignupComponent_Template_input_ngModelChange_32_listener($event) { return ctx.emailAddress = $event; });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(33, "div", 12);
        ɵngcc0.ɵɵelementStart(34, "div", 13);
        ɵngcc0.ɵɵelementStart(35, "span", 14);
        ɵngcc0.ɵɵelement(36, "i", 20);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(37, "input", 21);
        ɵngcc0.ɵɵlistener("ngModelChange", function LickAppWidgetSignupComponent_Template_input_ngModelChange_37_listener($event) { return ctx.password = $event; });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(38, "div", 22);
        ɵngcc0.ɵɵelementStart(39, "button", 23);
        ɵngcc0.ɵɵtext(40);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(41, "div", 24);
        ɵngcc0.ɵɵelementStart(42, "small");
        ɵngcc0.ɵɵtext(43);
        ɵngcc0.ɵɵelementStart(44, "a", 25);
        ɵngcc0.ɵɵtext(45);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(46, "div", 26);
        ɵngcc0.ɵɵelement(47, "div", 27);
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵpropertyInterpolate("routerLink", ctx.homePageLink);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate(ctx.logoName);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵtextInterpolate(ctx.headingText);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.subText);
        ɵngcc0.ɵɵadvance(5);
        ɵngcc0.ɵɵtextInterpolate(ctx.titleText);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.subTitleText);
        ɵngcc0.ɵɵadvance(7);
        ɵngcc0.ɵɵproperty("ngModel", ctx.firstName);
        ɵngcc0.ɵɵadvance(5);
        ɵngcc0.ɵɵproperty("ngModel", ctx.lastName);
        ɵngcc0.ɵɵadvance(5);
        ɵngcc0.ɵɵproperty("ngModel", ctx.emailAddress);
        ɵngcc0.ɵɵadvance(5);
        ɵngcc0.ɵɵproperty("ngModel", ctx.password);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵtextInterpolate(ctx.submitButtonText);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵtextInterpolate1("", ctx.loginText, " ");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵpropertyInterpolate("routerLink", ctx.loginLink);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate(ctx.loginButtonText);
    } }, directives: [ɵngcc1.RouterLinkWithHref, ɵngcc2.ɵangular_packages_forms_forms_y, ɵngcc2.NgControlStatusGroup, ɵngcc2.NgForm, ɵngcc2.DefaultValueAccessor, ɵngcc2.NgControlStatus, ɵngcc2.NgModel], encapsulation: 2 });
/** @nocollapse */
LickAppWidgetSignupComponent.ctorParameters = () => [];
LickAppWidgetSignupComponent.propDecorators = {
    logoName: [{ type: Input }],
    homePageLink: [{ type: Input }],
    headingText: [{ type: Input }],
    subText: [{ type: Input }],
    titleText: [{ type: Input }],
    subTitleText: [{ type: Input }],
    submitButtonText: [{ type: Input }],
    loginText: [{ type: Input }],
    loginButtonText: [{ type: Input }],
    loginLink: [{ type: Input }],
    pageEvent: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(LickAppWidgetSignupComponent, [{
        type: Component,
        args: [{
                selector: 'licky-lick-app-widget-signup',
                template: "<section class=\"container-pages ta-vertical-center\">\n  <div class=\"brand-logo float-left\"><a class=\"\"\n       routerLink=\"{{homePageLink}}\">{{logoName}}</a></div>\n  <div class=\"pages-tag-line text-white\">\n    <div class=\"h4 wow fadeIn\">{{headingText}}</div>\n    <small class=\"wow fadeIn\">{{subText}}</small>\n  </div>\n  <div class=\"card pages-card col-lg-4 col-md-6 col-sm-6\">\n    <div class=\"card-body \">\n      <div class=\"h4 text-center text-theme\"><strong>{{titleText}}</strong></div>\n      <div class=\"small text-center text-dark\">{{subTitleText}}</div>\n      <form #userForm=\"ngForm\"\n            (ngSubmit)=\"onSubmit();userForm.reset();\">\n        <div class=\"form-group\">\n          <div class=\"input-group\">\n            <span class=\"input-group-addon text-theme\"><i class=\"fa fa-user\"></i>\n            </span>\n\n            <input [(ngModel)]=\"firstName\"\n                   tabindex=\"1\"\n                   autofocus\n                   type=\"text\"\n                   id=\"firstName\"\n                   name=\"firstName\"\n                   class=\"form-control\"\n                   autocomplete=\"off\"\n                   placeholder=\"First Name\">\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"input-group\">\n            <span class=\"input-group-addon text-theme\"><i class=\"fa fa-user\"></i>\n            </span>\n\n            <input [(ngModel)]=\"lastName\"\n                   tabindex=\"2\"\n                   type=\"text\"\n                   autocomplete=\"off\"\n                   id=\"lastName\"\n                   name=\"lastName\"\n                   class=\"form-control\"\n                   placeholder=\"Last Name\">\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"input-group\">\n            <span class=\"input-group-addon text-theme\"><i class=\"fa fa-envelope\"></i>\n            </span>\n\n            <input [(ngModel)]=\"emailAddress\"\n                   tabindex=\"3\"\n                   type=\"email\"\n                   autocomplete=\"off\"\n                   id=\"emailAddress\"\n                   name=\"emailAddress\"\n                   class=\"form-control\"\n                   placeholder=\"Email Address\">\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"input-group\">\n            <span class=\"input-group-addon text-theme\"><i class=\"fa fa-asterisk\"></i></span>\n\n            <input [(ngModel)]=\"password\"\n                   tabindex=\"4\"\n                   type=\"password\"\n                   id=\"password\"\n                   autocomplete=\"off\"\n                   name=\"password\"\n                   class=\"form-control\"\n                   placeholder=\"Password\">\n          </div>\n        </div>\n        <div class=\"form-group form-actions\">\n          <button type=\"submit\"\n                  tabindex=\"5\"\n                  class=\"btn  btn-theme login-btn \">{{submitButtonText}}</button>\n        </div>\n      </form>\n      <div class=\"text-center\">\n        <small>{{loginText}}\n          <a routerLink=\"{{loginLink}}\"\n             class=\"text-theme\">{{loginButtonText}}</a>\n        </small>\n      </div>\n    </div>\n  </div>\n</section>\n<div class=\"half-circle\"></div>\n<div class=\"small-circle\"></div>\n"
            }]
    }], function () { return []; }, { logoName: [{
            type: Input
        }], homePageLink: [{
            type: Input
        }], headingText: [{
            type: Input
        }], subText: [{
            type: Input
        }], titleText: [{
            type: Input
        }], subTitleText: [{
            type: Input
        }], submitButtonText: [{
            type: Input
        }], loginText: [{
            type: Input
        }], loginButtonText: [{
            type: Input
        }], loginLink: [{
            type: Input
        }], pageEvent: [{
            type: Output
        }] }); })();
if (false) {
    /** @type {?} */
    LickAppWidgetSignupComponent.prototype.logoName;
    /** @type {?} */
    LickAppWidgetSignupComponent.prototype.homePageLink;
    /** @type {?} */
    LickAppWidgetSignupComponent.prototype.headingText;
    /** @type {?} */
    LickAppWidgetSignupComponent.prototype.subText;
    /** @type {?} */
    LickAppWidgetSignupComponent.prototype.titleText;
    /** @type {?} */
    LickAppWidgetSignupComponent.prototype.subTitleText;
    /** @type {?} */
    LickAppWidgetSignupComponent.prototype.submitButtonText;
    /** @type {?} */
    LickAppWidgetSignupComponent.prototype.loginText;
    /** @type {?} */
    LickAppWidgetSignupComponent.prototype.loginButtonText;
    /** @type {?} */
    LickAppWidgetSignupComponent.prototype.loginLink;
    /** @type {?} */
    LickAppWidgetSignupComponent.prototype.pageEvent;
    /** @type {?} */
    LickAppWidgetSignupComponent.prototype.firstName;
    /** @type {?} */
    LickAppWidgetSignupComponent.prototype.lastName;
    /** @type {?} */
    LickAppWidgetSignupComponent.prototype.emailAddress;
    /** @type {?} */
    LickAppWidgetSignupComponent.prototype.password;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/lick-app-widget-signup.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LickAppWidgetSignupModule {
}
LickAppWidgetSignupModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: LickAppWidgetSignupModule });
LickAppWidgetSignupModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function LickAppWidgetSignupModule_Factory(t) { return new (t || LickAppWidgetSignupModule)(); }, imports: [[
            CommonModule,
            RouterModule,
            FormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(LickAppWidgetSignupModule, { declarations: function () { return [LickAppWidgetSignupComponent]; }, imports: function () { return [CommonModule,
        RouterModule,
        FormsModule]; }, exports: function () { return [LickAppWidgetSignupComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(LickAppWidgetSignupModule, [{
        type: NgModule,
        args: [{
                declarations: [LickAppWidgetSignupComponent],
                imports: [
                    CommonModule,
                    RouterModule,
                    FormsModule
                ],
                exports: [LickAppWidgetSignupComponent]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lick-app-widget-signup.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { LickAppWidgetSignupComponent, LickAppWidgetSignupModule, LickAppWidgetSignupService };

//# sourceMappingURL=lick-app-widget-signup.js.map