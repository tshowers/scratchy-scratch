import { Injectable, ɵɵdefineInjectable, EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/lick-app-widget-forgot-password.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/router';
import * as ɵngcc2 from '@angular/common';
import * as ɵngcc3 from '@angular/forms';
import * as ɵngcc4 from '@ng-bootstrap/ng-bootstrap';

function LickAppWidgetForgotPasswordComponent_ngb_alert_11_Template(rf, ctx) { if (rf & 1) {
    const _r5 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ngb-alert", 23);
    ɵngcc0.ɵɵlistener("close", function LickAppWidgetForgotPasswordComponent_ngb_alert_11_Template_ngb_alert_close_0_listener() { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.close(); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("type", ctx_r2.alertType);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r2.message);
} }
class LickAppWidgetForgotPasswordService {
    constructor() { }
}
LickAppWidgetForgotPasswordService.ɵfac = function LickAppWidgetForgotPasswordService_Factory(t) { return new (t || LickAppWidgetForgotPasswordService)(); };
LickAppWidgetForgotPasswordService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: LickAppWidgetForgotPasswordService, factory: LickAppWidgetForgotPasswordService.ɵfac, providedIn: 'root' });
/** @nocollapse */
LickAppWidgetForgotPasswordService.ctorParameters = () => [];
/** @nocollapse */ LickAppWidgetForgotPasswordService.ngInjectableDef = ɵɵdefineInjectable({ factory: function LickAppWidgetForgotPasswordService_Factory() { return new LickAppWidgetForgotPasswordService(); }, token: LickAppWidgetForgotPasswordService, providedIn: "root" });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(LickAppWidgetForgotPasswordService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: lib/lick-app-widget-forgot-password.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LickAppWidgetForgotPasswordComponent {
    constructor() {
        this.logoName = "LogoName";
        this.homePageLink = "/";
        this.headingText = "Let's Get Started .!";
        this.subText = "most powerfull most selling Admin Panel In The World";
        this.titleText = "Forgot Your Password?";
        this.instructionText = "Input your registered email to reset your password";
        this.loginPageLink = "/login";
        this.loginButtonText = "Login";
        this.submitButtonText = " Reset Password";
        this.loginText = "I know my Password - Please";
        this.alertType = "info";
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
        this.pageEvent.emit(this.emailAddress);
    }
    /**
     * @return {?}
     */
    close() {
        this.message = null;
    }
}
LickAppWidgetForgotPasswordComponent.ɵfac = function LickAppWidgetForgotPasswordComponent_Factory(t) { return new (t || LickAppWidgetForgotPasswordComponent)(); };
LickAppWidgetForgotPasswordComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: LickAppWidgetForgotPasswordComponent, selectors: [["licky-lick-app-widget-forgot-password"]], inputs: { logoName: "logoName", homePageLink: "homePageLink", headingText: "headingText", subText: "subText", titleText: "titleText", instructionText: "instructionText", loginPageLink: "loginPageLink", loginButtonText: "loginButtonText", submitButtonText: "submitButtonText", loginText: "loginText", alertType: "alertType", message: "message" }, outputs: { pageEvent: "pageEvent" }, decls: 34, vars: 13, consts: [[1, "container-pages", "ta-vertical-center"], [1, "brand-logo", "float-left", "wow", "fadeInDown"], [3, "routerLink"], [1, "pages-tag-line", "text-white"], [1, "h4", "wow", "fadeIn"], [1, "card", "pages-card", "col-lg-6", "col-md-6", "col-sm-6"], [1, "card-body"], [3, "type", "close", 4, "ngIf"], [1, "h4", "text-center", "text-theme", "wow", "fadeIn"], [1, "small", "text-center", "text-dark"], [3, "ngSubmit"], ["userForm", "ngForm"], [1, "form-group"], [1, "input-group"], [1, "input-group-addon", "text-theme"], [1, "fa", "fa-envelope"], ["type", "email", "id", "emailAddress", "name", "emailAddress", "autocomplete", "off", "placeholder", "Email Address", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-group", "form-actions"], ["type", "submit", 1, "btn", "btn-theme", "login-btn", 3, "disabled"], [1, "text-center"], [1, "text-theme", 3, "routerLink"], [1, "half-circle"], [1, "small-circle"], [3, "type", "close"]], template: function LickAppWidgetForgotPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        const _r6 = ɵngcc0.ɵɵgetCurrentView();
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
        ɵngcc0.ɵɵelementStart(7, "small");
        ɵngcc0.ɵɵtext(8);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(9, "div", 5);
        ɵngcc0.ɵɵelementStart(10, "div", 6);
        ɵngcc0.ɵɵtemplate(11, LickAppWidgetForgotPasswordComponent_ngb_alert_11_Template, 2, 2, "ngb-alert", 7);
        ɵngcc0.ɵɵelementStart(12, "div", 8);
        ɵngcc0.ɵɵelementStart(13, "strong");
        ɵngcc0.ɵɵtext(14);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(15, "div", 9);
        ɵngcc0.ɵɵtext(16);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(17, "form", 10, 11);
        ɵngcc0.ɵɵlistener("ngSubmit", function LickAppWidgetForgotPasswordComponent_Template_form_ngSubmit_17_listener() { ɵngcc0.ɵɵrestoreView(_r6); const _r3 = ɵngcc0.ɵɵreference(18); ctx.onSubmit(); return _r3.reset(); });
        ɵngcc0.ɵɵelementStart(19, "div", 12);
        ɵngcc0.ɵɵelementStart(20, "div", 13);
        ɵngcc0.ɵɵelementStart(21, "span", 14);
        ɵngcc0.ɵɵelement(22, "i", 15);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(23, "input", 16);
        ɵngcc0.ɵɵlistener("ngModelChange", function LickAppWidgetForgotPasswordComponent_Template_input_ngModelChange_23_listener($event) { return ctx.emailAddress = $event; });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(24, "div", 17);
        ɵngcc0.ɵɵelementStart(25, "button", 18);
        ɵngcc0.ɵɵtext(26);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(27, "div", 19);
        ɵngcc0.ɵɵelementStart(28, "small");
        ɵngcc0.ɵɵtext(29);
        ɵngcc0.ɵɵelementStart(30, "a", 20);
        ɵngcc0.ɵɵtext(31);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(32, "div", 21);
        ɵngcc0.ɵɵelement(33, "div", 22);
    } if (rf & 2) {
        const _r3 = ɵngcc0.ɵɵreference(18);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵpropertyInterpolate("routerLink", ctx.homePageLink);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate(ctx.logoName);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵtextInterpolate(ctx.headingText);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.subText);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngIf", ctx.message);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵtextInterpolate(ctx.titleText);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.instructionText);
        ɵngcc0.ɵɵadvance(7);
        ɵngcc0.ɵɵproperty("ngModel", ctx.emailAddress);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("disabled", !_r3.form.valid);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate(ctx.submitButtonText);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵtextInterpolate1("", ctx.loginText, " ");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵpropertyInterpolate("routerLink", ctx.loginPageLink);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate(ctx.loginButtonText);
    } }, directives: [ɵngcc1.RouterLinkWithHref, ɵngcc2.NgIf, ɵngcc3.ɵangular_packages_forms_forms_y, ɵngcc3.NgControlStatusGroup, ɵngcc3.NgForm, ɵngcc3.DefaultValueAccessor, ɵngcc3.NgControlStatus, ɵngcc3.NgModel, ɵngcc4.NgbAlert], encapsulation: 2 });
/** @nocollapse */
LickAppWidgetForgotPasswordComponent.ctorParameters = () => [];
LickAppWidgetForgotPasswordComponent.propDecorators = {
    logoName: [{ type: Input }],
    homePageLink: [{ type: Input }],
    headingText: [{ type: Input }],
    subText: [{ type: Input }],
    titleText: [{ type: Input }],
    instructionText: [{ type: Input }],
    loginPageLink: [{ type: Input }],
    loginButtonText: [{ type: Input }],
    submitButtonText: [{ type: Input }],
    loginText: [{ type: Input }],
    message: [{ type: Input }],
    alertType: [{ type: Input }],
    pageEvent: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(LickAppWidgetForgotPasswordComponent, [{
        type: Component,
        args: [{
                selector: 'licky-lick-app-widget-forgot-password',
                template: "<section class=\"container-pages ta-vertical-center\">\n  <div class=\"brand-logo float-left wow fadeInDown\">\n    <a routerLink=\"{{homePageLink}}\">{{logoName}}</a>\n  </div>\n  <div class=\"pages-tag-line text-white\">\n    <div class=\"h4 wow fadeIn\">{{headingText}}</div>\n    <small>{{subText}}</small>\n  </div>\n  <div class=\"card pages-card col-lg-6 col-md-6 col-sm-6\">\n    <div class=\"card-body \">\n      <ngb-alert *ngIf=\"message\" [type]=\"alertType\" (close)=\"close()\">{{ message }}</ngb-alert>\n      <div class=\"h4 text-center text-theme wow fadeIn\">\n        <strong>{{titleText}}</strong>\n      </div>\n      <div class=\"small text-center text-dark\">{{instructionText}}</div>\n      <form #userForm=\"ngForm\"\n            (ngSubmit)=\"onSubmit();userForm.reset()\">\n        <div class=\"form-group\">\n          <div class=\"input-group\">\n            <span class=\"input-group-addon text-theme\">\n              <i class=\"fa fa-envelope\"></i>\n            </span>\n\n            <input [(ngModel)]=\"emailAddress\"\n                   type=\"email\"\n                   id=\"emailAddress\"\n                   name=\"emailAddress\"\n                   class=\"form-control\"\n                   autocomplete=\"off\"\n                   placeholder=\"Email Address\">\n          </div>\n        </div>\n        <div class=\"form-group form-actions\">\n          <button type=\"submit\"\n                  class=\"btn  btn-theme login-btn \"\n                  [disabled]=\"!userForm.form.valid\">{{submitButtonText}}</button>\n        </div>\n      </form>\n      <div class=\"text-center\">\n        <small>{{loginText}}\n          <a routerLink=\"{{loginPageLink}}\"\n             class=\"text-theme\">{{loginButtonText}}</a>\n        </small>\n      </div>\n    </div>\n  </div>\n</section>\n<div class=\"half-circle\"></div>\n<div class=\"small-circle\"></div>\n"
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
        }], instructionText: [{
            type: Input
        }], loginPageLink: [{
            type: Input
        }], loginButtonText: [{
            type: Input
        }], submitButtonText: [{
            type: Input
        }], loginText: [{
            type: Input
        }], alertType: [{
            type: Input
        }], pageEvent: [{
            type: Output
        }], message: [{
            type: Input
        }] }); })();
if (false) {
    /** @type {?} */
    LickAppWidgetForgotPasswordComponent.prototype.logoName;
    /** @type {?} */
    LickAppWidgetForgotPasswordComponent.prototype.homePageLink;
    /** @type {?} */
    LickAppWidgetForgotPasswordComponent.prototype.headingText;
    /** @type {?} */
    LickAppWidgetForgotPasswordComponent.prototype.subText;
    /** @type {?} */
    LickAppWidgetForgotPasswordComponent.prototype.titleText;
    /** @type {?} */
    LickAppWidgetForgotPasswordComponent.prototype.instructionText;
    /** @type {?} */
    LickAppWidgetForgotPasswordComponent.prototype.loginPageLink;
    /** @type {?} */
    LickAppWidgetForgotPasswordComponent.prototype.loginButtonText;
    /** @type {?} */
    LickAppWidgetForgotPasswordComponent.prototype.submitButtonText;
    /** @type {?} */
    LickAppWidgetForgotPasswordComponent.prototype.loginText;
    /** @type {?} */
    LickAppWidgetForgotPasswordComponent.prototype.message;
    /** @type {?} */
    LickAppWidgetForgotPasswordComponent.prototype.alertType;
    /** @type {?} */
    LickAppWidgetForgotPasswordComponent.prototype.pageEvent;
    /** @type {?} */
    LickAppWidgetForgotPasswordComponent.prototype.emailAddress;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/lick-app-widget-forgot-password.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LickAppWidgetForgotPasswordModule {
}
LickAppWidgetForgotPasswordModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: LickAppWidgetForgotPasswordModule });
LickAppWidgetForgotPasswordModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function LickAppWidgetForgotPasswordModule_Factory(t) { return new (t || LickAppWidgetForgotPasswordModule)(); }, imports: [[
            CommonModule,
            RouterModule,
            FormsModule,
            NgbModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(LickAppWidgetForgotPasswordModule, { declarations: function () { return [LickAppWidgetForgotPasswordComponent]; }, imports: function () { return [CommonModule,
        RouterModule,
        FormsModule,
        NgbModule]; }, exports: function () { return [LickAppWidgetForgotPasswordComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(LickAppWidgetForgotPasswordModule, [{
        type: NgModule,
        args: [{
                declarations: [LickAppWidgetForgotPasswordComponent],
                imports: [
                    CommonModule,
                    RouterModule,
                    FormsModule,
                    NgbModule
                ],
                exports: [LickAppWidgetForgotPasswordComponent]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lick-app-widget-forgot-password.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { LickAppWidgetForgotPasswordComponent, LickAppWidgetForgotPasswordModule, LickAppWidgetForgotPasswordService };

//# sourceMappingURL=lick-app-widget-forgot-password.js.map