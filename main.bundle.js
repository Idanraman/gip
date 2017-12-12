webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/user/home/home.module": [
		"../../../../../src/app/user/home/home.module.ts",
		"home.module"
	],
	"app/user/login/login.module": [
		"../../../../../src/app/user/login/login.module.ts",
		"login.module"
	],
	"app/user/register/register.module": [
		"../../../../../src/app/user/register/register.module.ts",
		"register.module"
	],
	"app/user/resetpassword/resetpassword.module": [
		"../../../../../src/app/user/resetpassword/resetpassword.module.ts",
		"resetpassword.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__layout__ = __webpack_require__("../../../../../src/app/layout/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_service_loginapi_index__ = __webpack_require__("../../../../../src/app/shared/service/loginapi/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__layout_userafterlogin_userafterlogin_component__ = __webpack_require__("../../../../../src/app/layout/userafterlogin/userafterlogin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_user_home__ = __webpack_require__("../../../../../src/app/user/home/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular2_cookie_core__ = __webpack_require__("../../../../angular2-cookie/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular2_social_login__ = __webpack_require__("../../../../angular2-social-login/dist/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


 ///User For form page must be added.....
 ///User For Service must be added.....
 //routing for page












var providers = {
    // "google": {
    //   "clientId": "GOOGLE_CLIENT_ID"
    // },
    // "linkedin": {
    //   "clientId": "LINKEDIN_CLIENT_ID"
    // },
    "facebook": {
        "clientId": "290907454582778",
        "apiVersion": "v2.10" //like v2.4 
    }
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__layout__["b" /* UserloginComponent */],
                __WEBPACK_IMPORTED_MODULE_12__layout_userafterlogin_userafterlogin_component__["a" /* UserafterloginComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_common_http__["b" /* HttpClientModule */], __WEBPACK_IMPORTED_MODULE_10__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_routing__["a" /* AppRoutes */]),
                __WEBPACK_IMPORTED_MODULE_15_angular2_social_login__["a" /* Angular2SocialLoginModule */]
            ],
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_10__angular_common__["LocationStrategy"], useClass: __WEBPACK_IMPORTED_MODULE_10__angular_common__["HashLocationStrategy"] }, {
                    provide: __WEBPACK_IMPORTED_MODULE_3__angular_http__["g" /* XSRFStrategy */],
                    useValue: new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* CookieXSRFStrategy */]('csrftoken', 'X-CSRFToken')
                }, __WEBPACK_IMPORTED_MODULE_9__shared__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_9__shared__["d" /* JwtService */], __WEBPACK_IMPORTED_MODULE_8__shared_service_loginapi_index__["c" /* UserService */], __WEBPACK_IMPORTED_MODULE_8__shared_service_loginapi_index__["a" /* RegistersService */], __WEBPACK_IMPORTED_MODULE_13__app_user_home__["b" /* NoAuthGuard */], __WEBPACK_IMPORTED_MODULE_14_angular2_cookie_core__["CookieService"], __WEBPACK_IMPORTED_MODULE_8__shared_service_loginapi_index__["b" /* UserNotificationService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

__WEBPACK_IMPORTED_MODULE_15_angular2_social_login__["a" /* Angular2SocialLoginModule */].loadProvidersScripts(providers);


/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layout__ = __webpack_require__("../../../../../src/app/layout/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_user_home__ = __webpack_require__("../../../../../src/app/user/home/index.ts");


var AppRoutes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
    },
    { loadChildren: 'app/user/login/login.module#LoginModule', path: 'login', component: __WEBPACK_IMPORTED_MODULE_0__layout__["b" /* UserloginComponent */] },
    { loadChildren: 'app/user/home/home.module#HomeModule', path: 'home', component: __WEBPACK_IMPORTED_MODULE_0__layout__["a" /* UserafterloginComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__app_user_home__["b" /* NoAuthGuard */]] },
    { loadChildren: 'app/user/register/register.module#RegisterModule', path: 'register', component: __WEBPACK_IMPORTED_MODULE_0__layout__["b" /* UserloginComponent */] },
    { loadChildren: 'app/user/resetpassword/resetpassword.module#ResetpasswordModule', path: 'resetpassword', component: __WEBPACK_IMPORTED_MODULE_0__layout__["b" /* UserloginComponent */] }
];


/***/ }),

/***/ "../../../../../src/app/layout/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__userlogin__ = __webpack_require__("../../../../../src/app/layout/userlogin/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__userlogin__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__userafterlogin__ = __webpack_require__("../../../../../src/app/layout/userafterlogin/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__userafterlogin__["a"]; });




/***/ }),

/***/ "../../../../../src/app/layout/userafterlogin/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__userafterlogin_component__ = __webpack_require__("../../../../../src/app/layout/userafterlogin/userafterlogin.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__userafterlogin_component__["a"]; });



/***/ }),

/***/ "../../../../../src/app/layout/userafterlogin/userafterlogin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/userafterlogin/userafterlogin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n\n  <div class=\"sidebar\" data-color=\"blue\" data-image=\"../assets/img/sidebar-1.jpg\" data-background-color=\"black\">\n\n    <div class=\"logo\">\n      <a href=\"http://www.creative-tim.com\" class=\"simple-text\">\n        DATANINJA\n      </a>\n    </div>\n\n    <div class=\"sidebar-wrapper\">\n      <ul class=\"nav\">\n        <li class=\"active\">\n          <a [routerLink]=\"['usersetting']\" routerLinkActive=\"active\">\n            <i class=\"material-icons\">dashboard</i>\n            <p>Dashboard</p>\n          </a>\n        </li>\n        <li>\n          <a [routerLink]=\"['usersetting']\" routerLinkActive=\"active\">\n            <i class=\"material-icons\">person</i>\n            <p>User settings</p>\n          </a>\n        </li>\n        <li>\n          <a [routerLink]=\"['usersetting']\" routerLinkActive=\"active\">\n            <i class=\"material-icons\">content_paste</i>\n            <p>Competitors</p>\n          </a>\n        </li>\n        <li>\n          <a [routerLink]=\"['usersetting']\" routerLinkActive=\"active\">\n            <i class=\"material-icons\">bubble_chart</i>\n            <p>Community</p>\n          </a>\n        </li>\n        <li>\n          <a [routerLink]=\"['usersetting']\" routerLinkActive=\"active\">\n            <i class=\"material-icons\">library_books</i>\n            <p>Data Files</p>\n          </a>\n        </li>\n        <li>\n          <a [routerLink]=\"['usersetting']\" routerLinkActive=\"active\">\n            <i class=\"material-icons\">location_on</i>\n            <p>Automatic actions</p>\n          </a>\n        </li>\n        <li>\n          <a [routerLink]=\"['usernotification']\" routerLinkActive=\"active\">\n            <i class=\"material-icons text-gray\">notifications</i>\n            <p>Notifications</p>\n          </a>\n        </li>\n        <li class=\"active-pro\">\n          <a href=\"javascript:void(0);\" (click)=\"logout()\">\n            <i class=\"material-icons\">unarchive</i>\n            <p>LogOut</p>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n\n  <div class=\"main-panel\">\n    <nav class=\"navbar navbar-transparent navbar-absolute\">\n      <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand\" href=\"#\">\"SouthPark\" page Analysis</a>\n\n        </div>\n        <div class=\"collapse navbar-collapse\">\n          <ul class=\"nav navbar-nav navbar-right\">\n            <li>\n              <a href=\"#pablo\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                <i class=\"material-icons\">dashboard</i>\n                <p class=\"hidden-lg hidden-md\">Dashboard</p>\n              </a>\n            </li>\n            <li class=\"dropdown\">\n              <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                <i class=\"material-icons\">notifications</i>\n                <span class=\"notification\">5</span>\n                <p class=\"hidden-lg hidden-md\">Notifications</p>\n              </a>\n              <ul class=\"dropdown-menu\">\n                <li>\n                  <a href=\"#\">Mike John responded to your email</a>\n                </li>\n                <li>\n                  <a href=\"#\">You have 5 new tasks</a>\n                </li>\n                <li>\n                  <a href=\"#\">You're now friend with Andrew</a>\n                </li>\n                <li>\n                  <a href=\"#\">Another Notification</a>\n                </li>\n                <li>\n                  <a href=\"#\">Another One</a>\n                </li>\n              </ul>\n            </li>\n            <li>\n              <a href=\"#pablo\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                <i class=\"material-icons\">person</i>{{_EmployeeInfo.email}}\n                <p class=\"hidden-lg hidden-md\">Profile</p>\n              </a>\n            </li>\n          </ul>\n\n          <form class=\"navbar-form navbar-right\" role=\"search\">\n            <div class=\"form-group  is-empty\">\n              <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n              <span class=\"material-input\"></span>\n            </div>\n            <button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\n              <i class=\"material-icons\">search</i>\n              <div class=\"ripple-container\"></div>\n            </button>\n          </form>\n        </div>\n      </div>\n    </nav>\n\n    <div class=\"content\">\n      <div class=\"container-fluid\">\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/layout/userafterlogin/userafterlogin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserafterloginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_service_loginapi_user_service__ = __webpack_require__("../../../../../src/app/shared/service/loginapi/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_service_loginapi_register_service__ = __webpack_require__("../../../../../src/app/shared/service/loginapi/register.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserafterloginComponent = (function () {
    function UserafterloginComponent(_UserService, router, _RegistersService) {
        this._UserService = _UserService;
        this.router = router;
        this._RegistersService = _RegistersService;
        this._EmployeeInfo = new __WEBPACK_IMPORTED_MODULE_1__shared__["c" /* EmployeeInfo */]();
    }
    UserafterloginComponent.prototype.ngOnInit = function () {
        this._EmployeeInfo.email = sessionStorage.getItem("EmployeeInfo");
        //this.GetUser();
    };
    //Logout event code here....!
    UserafterloginComponent.prototype.logout = function () {
        var _this = this;
        this._UserService.logOut("rest-auth/logout/").subscribe(function (data) { _this.router.navigateByUrl('/'); });
    };
    UserafterloginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-userafterlogin',
            template: __webpack_require__("../../../../../src/app/layout/userafterlogin/userafterlogin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/userafterlogin/userafterlogin.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_service_loginapi_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_4__shared_service_loginapi_register_service__["a" /* RegistersService */]])
    ], UserafterloginComponent);
    return UserafterloginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/userlogin/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__userlogin_component__ = __webpack_require__("../../../../../src/app/layout/userlogin/userlogin.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__userlogin_component__["a"]; });



/***/ }),

/***/ "../../../../../src/app/layout/userlogin/userlogin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/userlogin/userlogin.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet>\n</router-outlet>"

/***/ }),

/***/ "../../../../../src/app/layout/userlogin/userlogin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserloginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserloginComponent = (function () {
    function UserloginComponent() {
    }
    UserloginComponent.prototype.ngOnInit = function () {
    };
    UserloginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-userlogin',
            template: __webpack_require__("../../../../../src/app/layout/userlogin/userlogin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/userlogin/userlogin.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserloginComponent);
    return UserloginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service__ = __webpack_require__("../../../../../src/app/shared/service/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__service__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__service__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model__ = __webpack_require__("../../../../../src/app/shared/model/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__model__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__model__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__model__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_1__model__["d"]; });




/***/ }),

/***/ "../../../../../src/app/shared/model/Error.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ErrorInfo */
var ErrorInfo = (function () {
    function ErrorInfo() {
    }
    return ErrorInfo;
}());



/***/ }),

/***/ "../../../../../src/app/shared/model/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Error_model__ = __webpack_require__("../../../../../src/app/shared/model/Error.model.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loginmodel__ = __webpack_require__("../../../../../src/app/shared/model/loginmodel/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__loginmodel__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__loginmodel__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__loginmodel__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__loginmodel__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__loginmodel__["e"]; });




/***/ }),

/***/ "../../../../../src/app/shared/model/loginmodel/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_model__ = __webpack_require__("../../../../../src/app/shared/model/loginmodel/login.model.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__login_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__register_model__ = __webpack_require__("../../../../../src/app/shared/model/loginmodel/register.model.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__register_model__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__register_model__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__register_model__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__usernotification_model__ = __webpack_require__("../../../../../src/app/shared/model/loginmodel/usernotification.model.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__usernotification_model__["a"]; });





/***/ }),

/***/ "../../../../../src/app/shared/model/loginmodel/login.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeInfo; });
var EmployeeInfo = (function () {
    function EmployeeInfo() {
    }
    return EmployeeInfo;
}());



/***/ }),

/***/ "../../../../../src/app/shared/model/loginmodel/register.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RegisterInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePassWord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return UserInfo; });
var RegisterInfo = (function () {
    function RegisterInfo() {
    }
    return RegisterInfo;
}());

var ChangePassWord = (function () {
    function ChangePassWord() {
    }
    return ChangePassWord;
}());

var UserInfo = (function () {
    function UserInfo() {
    }
    return UserInfo;
}());



/***/ }),

/***/ "../../../../../src/app/shared/model/loginmodel/usernotification.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Result */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserNotification; });
var Result = (function () {
    function Result() {
    }
    return Result;
}());

var UserNotification = (function () {
    function UserNotification() {
    }
    return UserNotification;
}());



/***/ }),

/***/ "../../../../../src/app/shared/service/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__jwt_service__ = __webpack_require__("../../../../../src/app/shared/service/jwt.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ApiService = (function () {
    function ApiService(http, HttpClient, jwtService) {
        this.http = http;
        this.HttpClient = HttpClient;
        this.jwtService = jwtService;
    }
    // var form = new FormData();
    // for (var key in paramval) {
    //   form.append(key, paramval[key]);
    // }
    ApiService.prototype.setHeaders = function () {
        var headersConfig = {
            'Content-Type': 'application/json',
        };
        if (this.jwtService.getToken()) {
            headersConfig['Authorization'] = "Token " + this.jwtService.getToken();
        }
        return new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */](headersConfig);
    };
    ApiService.prototype.formatErrors = function (error) {
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["a" /* Observable */].throw(error.json());
    };
    ApiService.prototype.get = function (path, params) {
        if (params === void 0) { params = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["f" /* URLSearchParams */](); }
        return this.http.get("" + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].api_url + path, { headers: this.setHeaders(), search: params })
            .catch(this.formatErrors)
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.put = function (path, body) {
        if (body === void 0) { body = {}; }
        return this.http.put("" + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].api_url + path, JSON.stringify(body), new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* RequestOptions */]({ headers: this.setHeaders() }))
            .catch(this.formatErrors)
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.post = function (path, body) {
        if (body === void 0) { body = {}; }
        return this.http.post("" + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].api_url + path, JSON.stringify(body), new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* RequestOptions */]({ headers: this.setHeaders() }))
            .catch(this.formatErrors)
            .map(function (res) {
            return res.json();
        });
    };
    ApiService.prototype.postWithToken = function (path, body) {
        if (body === void 0) { body = {}; }
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('Authorization', "Token " + this.jwtService.getToken());
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* RequestOptions */]({ headers: headers });
        return this.http.post("" + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].api_url + path, JSON.stringify(body), options)
            .catch(this.formatErrors)
            .map(function (res) {
            return res.json();
        });
        // let bodyString = JSON.stringify(deed);
        // let headers = new Headers({ 'Content-Type': 'application/json' });
        // headers.append('Authorization', `Bearer ${this.authService.token()}`);
        // let options = new RequestOptions({ headers: headers });
        // return this.http.post(`${this.baseUrl}/create`, bodyString, options)
        //     .map((res: Response) => res.json())
    };
    ApiService.prototype.GetWithToken = function (path) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('Authorization', "Token " + this.jwtService.getToken());
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* RequestOptions */]({ headers: headers });
        return this.http.get("" + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].api_url + path, options)
            .catch(this.formatErrors)
            .map(function (res) {
            return res.json();
        });
        // let bodyString = JSON.stringify(deed);
        // let headers = new Headers({ 'Content-Type': 'application/json' });
        // headers.append('Authorization', `Bearer ${this.authService.token()}`);
        // let options = new RequestOptions({ headers: headers });
        // return this.http.post(`${this.baseUrl}/create`, bodyString, options)
        //     .map((res: Response) => res.json())
    };
    ApiService.prototype.delete = function (path, params) {
        if (params === void 0) { params = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["f" /* URLSearchParams */](); }
        return this.http.delete("" + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].api_url + path, { headers: this.setHeaders(), search: params })
            .catch(this.formatErrors)
            .map(function (res) { res.json(); });
    };
    ApiService.prototype.getWithUrl = function (path, params) {
        if (params === void 0) { params = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["f" /* URLSearchParams */](); }
        return this.http.get("" + path, { headers: this.setHeaders(), search: params })
            .catch(this.formatErrors)
            .map(function (res) { return res.json(); });
    };
    ApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_7__jwt_service__["a" /* JwtService */]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/service/common.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonModel; });
var CommonModel = (function () {
    function CommonModel() {
    }
    return CommonModel;
}());



/***/ }),

/***/ "../../../../../src/app/shared/service/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_service__ = __webpack_require__("../../../../../src/app/shared/service/api.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__api_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jwt_service__ = __webpack_require__("../../../../../src/app/shared/service/jwt.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__jwt_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_model__ = __webpack_require__("../../../../../src/app/shared/service/common.model.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__common_model__["a"]; });
 //comman method for API
 //get ,set ,distory  token method



/***/ }),

/***/ "../../../../../src/app/shared/service/jwt.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JwtService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JwtService = (function () {
    function JwtService(router) {
        this.router = router;
    }
    JwtService.prototype.getCookie = function (name) {
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");
        if (parts.length == 2)
            return parts.pop().split(";").shift();
    };
    JwtService.prototype.getToken = function () {
        return localStorage.getItem('jwtToken');
    };
    JwtService.prototype.getCsrt = function () {
        return localStorage.getItem('csrftoken');
    };
    JwtService.prototype.saveToken = function (token) {
        localStorage.setItem('csrftoken', this.getCookie('csrftoken'));
        localStorage.setItem('jwtToken', token.toString());
    };
    JwtService.prototype.destroyToken = function () {
        localStorage.removeItem('csrftoken');
        localStorage.removeItem('jwtToken');
    };
    JwtService.prototype.getError = function () {
        return localStorage.getItem('jwtToken');
    };
    JwtService.prototype.saveError = function (Error) {
        localStorage.setItem('jwtError', Error.toString());
    };
    JwtService.prototype.destroyError = function () {
        localStorage.removeItem('jwtError');
    };
    JwtService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], JwtService);
    return JwtService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/service/loginapi/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_service__ = __webpack_require__("../../../../../src/app/shared/service/loginapi/user.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__user_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__register_service__ = __webpack_require__("../../../../../src/app/shared/service/loginapi/register.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__register_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__usernotification_service__ = __webpack_require__("../../../../../src/app/shared/service/loginapi/usernotification.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__usernotification_service__["a"]; });





/***/ }),

/***/ "../../../../../src/app/shared/service/loginapi/register.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_service__ = __webpack_require__("../../../../../src/app/shared/service/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__jwt_service__ = __webpack_require__("../../../../../src/app/shared/service/jwt.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




 // It's for get set token
 //dirstory token method
var RegistersService = (function () {
    //constructor for create object for class then create all object for service like...
    function RegistersService(apiService, http, jwtService) {
        this.apiService = apiService;
        this.http = http;
        this.jwtService = jwtService;
    }
    //Register Codee here.......
    RegistersService.prototype.RegisterInsertUpdate = function (route, _RegisterInfo) {
        var body = { email: _RegisterInfo.email, password1: _RegisterInfo.password1, password2: _RegisterInfo.password2 };
        return this.apiService.post(route, body)
            .map(function (data) { return data; });
    };
    RegistersService.prototype.Verifyemail = function (route) {
        return this.apiService.get(route)
            .map(function (data) { return data; });
    };
    RegistersService.prototype.Resetpassword = function (route, _RegisterInfo) {
        var body = { email: _RegisterInfo.email };
        return this.apiService.post(route, body)
            .map(function (data) { return data; });
    };
    RegistersService.prototype.ChangePassword = function (route, _ChangePassWord) {
        var body = { old_password: _ChangePassWord.old_password, new_password1: _ChangePassWord.new_password1, new_password2: _ChangePassWord.new_password2 };
        return this.apiService.post(route, body)
            .map(function (data) { return data; });
    };
    RegistersService.prototype.GetUserDetails = function (route) {
        return this.apiService.GetWithToken(route).map(function (data) { return data; });
    };
    RegistersService.prototype.UpdateUserDetails = function (route, _UserInfo) {
        return this.apiService.put(route, _UserInfo)
            .map(function (data) { return data; });
    };
    RegistersService.prototype.RegisterWithFaceBook = function (route, access_token, code) {
        var body = { access_token: access_token, code: code };
        return this.apiService.post(route, body)
            .map(function (data) { return data; });
    };
    RegistersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */], __WEBPACK_IMPORTED_MODULE_5__jwt_service__["a" /* JwtService */]])
    ], RegistersService);
    return RegistersService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/service/loginapi/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_ReplaySubject__ = __webpack_require__("../../../../rxjs/_esm5/ReplaySubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__index__ = __webpack_require__("../../../../../src/app/shared/service/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__api_service__ = __webpack_require__("../../../../../src/app/shared/service/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__jwt_service__ = __webpack_require__("../../../../../src/app/shared/service/jwt.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







 // It's for get set token
 //dirstory token method
var UserService = (function () {
    //constructor for create object for class then create all object for service like...
    function UserService(apiService, http, jwtService) {
        this.apiService = apiService;
        this.http = http;
        this.jwtService = jwtService;
        this.currentUserSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](new __WEBPACK_IMPORTED_MODULE_6__index__["b" /* CommonModel */]());
        this.currentUser = this.currentUserSubject.asObservable().distinctUntilChanged();
        this.isAuthenticatedSubject = new __WEBPACK_IMPORTED_MODULE_3_rxjs_ReplaySubject__["a" /* ReplaySubject */](1);
        this.isAuthenticated = this.isAuthenticatedSubject.asObservable();
    }
    //set authentication return value for web service 
    UserService.prototype.setAuthentication = function (_CommonModel) {
        // Save JWT sent from server in localstorage
        this.jwtService.saveToken(_CommonModel['key']);
    };
    //attempt authentication
    UserService.prototype.attemptAuth = function (route, credentials) {
        var _this = this;
        return this.apiService.post(route, credentials)
            .map(function (data) {
            _this.setAuthentication(data);
            return data;
        });
    };
    //delete all localstorage
    UserService.prototype.purgeAuth = function () {
        // Remove JWT from localstorage
        this.jwtService.destroyToken();
        // Set auth status to false
        this.isAuthenticatedSubject.next(false);
    };
    UserService.prototype.logOut = function (route) {
        var _this = this;
        return this.apiService.post(route)
            .map(function (data) { _this.purgeAuth(); return data; });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */], __WEBPACK_IMPORTED_MODULE_8__jwt_service__["a" /* JwtService */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/service/loginapi/usernotification.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserNotificationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_service__ = __webpack_require__("../../../../../src/app/shared/service/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__jwt_service__ = __webpack_require__("../../../../../src/app/shared/service/jwt.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




 // It's for get set token
 //dirstory token method
var UserNotificationService = (function () {
    //constructor for create object for class then create all object for service like...
    function UserNotificationService(apiService, http, jwtService) {
        this.apiService = apiService;
        this.http = http;
        this.jwtService = jwtService;
    }
    //Get Notification Codee here.......
    UserNotificationService.prototype.GetNotification = function (route) {
        return this.apiService.getWithUrl(route)
            .map(function (data) { return data; });
    };
    //Get Notification Codee here.......
    UserNotificationService.prototype.DeleteNotification = function (route) {
        return this.apiService.delete(route)
            .map(function (data) { return data; });
    };
    UserNotificationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */], __WEBPACK_IMPORTED_MODULE_5__jwt_service__["a" /* JwtService */]])
    ], UserNotificationService);
    return UserNotificationService;
}());



/***/ }),

/***/ "../../../../../src/app/user/home/home-auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoAuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NoAuthGuard = (function () {
    function NoAuthGuard(router, _JwtService) {
        this.router = router;
        this._JwtService = _JwtService;
    }
    NoAuthGuard.prototype.canActivate = function (route, state) {
        // return this.userService.isAuthenticated.take(1).map(bool => !bool);        
        if (this._JwtService.getToken() != null) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].of(true);
        }
        else {
            this.router.navigateByUrl("login");
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].of(false);
        }
    };
    NoAuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_3__shared__["d" /* JwtService */]])
    ], NoAuthGuard);
    return NoAuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/user/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/user/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_service_loginapi_register_service__ = __webpack_require__("../../../../../src/app/shared/service/loginapi/register.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(router, _RegistersService) {
        this.router = router;
        this._RegistersService = _RegistersService;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.LogOut = function () {
        this.router.navigateByUrl('login');
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/user/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/home/home.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__shared_service_loginapi_register_service__["a" /* RegistersService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user/home/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_component__ = __webpack_require__("../../../../../src/app/user/home/home.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__home_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_auth_service__ = __webpack_require__("../../../../../src/app/user/home/home-auth.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__home_auth_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__usersetting__ = __webpack_require__("../../../../../src/app/user/home/usersetting/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__usersetting__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__usernotification__ = __webpack_require__("../../../../../src/app/user/home/usernotification/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__usernotification__["a"]; });






/***/ }),

/***/ "../../../../../src/app/user/home/usernotification/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__usernotification_component__ = __webpack_require__("../../../../../src/app/user/home/usernotification/usernotification.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__usernotification_component__["a"]; });



/***/ }),

/***/ "../../../../../src/app/user/home/usernotification/usernotification.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/home/usernotification/usernotification.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <div class=\"container-fluid\">\n\n\n    <div class=\"col-md-12\">\n      <div class=\"card card-plain\">\n        <div class=\"card-header\" data-background-color=\"purple\">\n          <h4 class=\"title\">Notifications</h4>\n          <p class=\"category\">See whats going on with your page</p>\n        </div>\n        <div class=\"card-content table-responsive\">\n          <table class=\"table table-hover\">\n            <tbody *ngFor=\"let item of this._UserNotification.results\">\n              <tr>\n                <td>{{item.id}}</td>\n                <td>{{item.text}}</td>\n                <td>{{item.time_created | date : 'MMM d, y h:mm:ss a' }}</td>\n                <td>\n                  <a href=\"javascript:void(0);\" (click)=\"NotificationDelete(item.id); \"><i class=\" fa fa-trash-o \" aria-hidden=\"true \"></i></a>\n                </td>\n              </tr>\n            </tbody>\n            <tfoot>\n              <tr>\n\n                <td>\n                  <button type=\"button \" class=\"btn btn-primary pull-left \" (click)=\"BtnNotification(this._UserNotification.previous)\n                    \" [disabled]=\"!this._UserNotification.previous \">Prev</button>\n                </td>\n                <td>\n                  <button type=\"button \" class=\"btn btn-primary pull-right \" (click)=\"BtnNotification(this._UserNotification.next)\n                    \" [disabled]=\"!this._UserNotification.next \">Next</button>\n                </td>\n              </tr>\n            </tfoot>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/user/home/usernotification/usernotification.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsernotificationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service_loginapi__ = __webpack_require__("../../../../../src/app/shared/service/loginapi/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_model__ = __webpack_require__("../../../../../src/app/shared/model/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsernotificationComponent = (function () {
    function UsernotificationComponent(_UserNotificationService) {
        this._UserNotificationService = _UserNotificationService;
        this._UserNotification = new __WEBPACK_IMPORTED_MODULE_2__shared_model__["e" /* UserNotification */]();
        this.GetNotification("" + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].api_url + 'notification/?limit=10');
    }
    UsernotificationComponent.prototype.ngOnInit = function () {
    };
    UsernotificationComponent.prototype.BtnNotification = function (Url) {
        this.GetNotification(Url);
    };
    UsernotificationComponent.prototype.GetNotification = function (Url) {
        var _this = this;
        if (Url != null) {
            this._UserNotificationService.GetNotification(Url).subscribe(function (data) {
                _this._UserNotification.count = data.count,
                    _this._UserNotification.next = data.next,
                    _this._UserNotification.previous = data.previous,
                    _this._UserNotification.results = data.results;
            });
        }
    };
    UsernotificationComponent.prototype.NotificationDelete = function (id) {
        var _this = this;
        this._UserNotificationService.DeleteNotification('notification/' + id + '/').subscribe(function (data) { _this.GetNotification("" + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].api_url + 'notification/?limit=10'); });
    };
    UsernotificationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-usernotification',
            template: __webpack_require__("../../../../../src/app/user/home/usernotification/usernotification.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/home/usernotification/usernotification.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_service_loginapi__["b" /* UserNotificationService */]])
    ], UsernotificationComponent);
    return UsernotificationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user/home/usersetting/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__usersetting_component__ = __webpack_require__("../../../../../src/app/user/home/usersetting/usersetting.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__usersetting_component__["a"]; });



/***/ }),

/***/ "../../../../../src/app/user/home/usersetting/usersetting.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/home/usersetting/usersetting.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-8\">\n    <div class=\"card\">\n      <div class=\"card-header\" data-background-color=\"purple\">\n        <h4 class=\"title\">Edit Profile</h4>\n\n      </div>\n      <div class=\"card-content\">\n        <form>\n          <div class=\"row\">\n            <div class=\"col-md-4\">\n              <div class=\"form-group label-floating \">\n                <label class=\"control-label\">Fist Name</label>\n                <input type=\"text\" class=\"form-control Profile\" [(ngModel)]=\"_UserInfo.first_name\" name=\"first_name\">\n                <span class=\"material-input\"></span>\n              </div>\n            </div>\n            <div class=\"col-md-4\">\n              <div class=\"form-group label-floating \">\n                <label class=\"control-label\">Last Name</label>\n                <input type=\"text\" class=\"form-control Profile\" [(ngModel)]=\"_UserInfo.last_name\" name=\"last_name\">\n                <span class=\"material-input\"></span>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-md-5\">\n              <div class=\"form-group label-floating \">\n                <label class=\"control-label\">Username</label>\n                <input type=\"text\" class=\"form-control Profile\" [(ngModel)]=\"_UserInfo.username\" name=\"username\">\n                <span class=\"material-input\" *ngIf=\"!_UserInfo.username\" style=\"color:red \">This field may required</span>\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"form-group label-floating \">\n                <label class=\"control-label\">Phone number</label>\n                <input type=\"text\" class=\"form-control Profile\" [(ngModel)]=\"_UserInfo.phone_number\" name=\"phone_number\">\n                <span class=\"material-input\"></span>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-5\">\n              <div class=\"form-group label-floating \">\n                <label class=\"control-label\">Email</label>\n                <input type=\"text\" class=\"form-control Profile\" [(ngModel)]=\"_UserInfo.email\" name=\"email\" disabled=\"disabled\">\n                <span class=\"material-input\"></span>\n              </div>\n            </div>\n\n          </div>\n        </form>\n\n\n        <br>\n\n        <label class=\"checkbox-inline\">\n          <input type=\"checkbox\" value=\"\" [checked]=\"_UserInfo.email_sub\" (change)=\"_UserInfo.email_sub = !_UserInfo.email_sub\" name=\"email_sub\"> Send me weekly reports</label>\n        <div class=\"clearfix\" style=\"color: red\">{{_UpdateProfileError}}</div>\n        <!-- <button type=\"button\" class=\"btn btn-primary pull-right\" (click)=\"UpdateProfile()\">Update Profile</button> -->\n        <br>\n        <br>\n        <hr>\n        <form>\n          <h4>Change Password</h4>\n          <div class=\"row\">\n            <div class=\"col-md-2\">\n              <div class=\"form-group label-floating\">\n                <label class=\"control-label\">Current</label>\n                <input id=\"\" type=\"password\" id=\"old_password\" name=\"old_password\" class=\"form-control required\" [(ngModel)]=\"_ChangePassWord.old_password\"\n                  maxlength=\"20\">\n                <p style=\"color: red\"></p>\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"form-group label-floating\">\n                <label class=\"control-label\">New password</label>\n                <input type=\"password\" id=\"new_password1\" name=\"new_password1\" class=\"form-control required\" [(ngModel)]=\"_ChangePassWord.new_password1\"\n                  maxlength=\"20\">\n                <p style=\"color: red\"></p>\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"form-group label-floating\">\n                <label class=\"control-label\">And again</label>\n                <input type=\"password\" id=\"new_password2\" name=\"new_password2\" class=\"form-control required\" [(ngModel)]=\"_ChangePassWord.new_password2\"\n                  maxlength=\"20\">\n                <p style=\"color: red\"></p>\n              </div>\n            </div>\n            <div class=\"col-md-4\">\n              <div class=\"form-group label-floating\">\n                <label>At least 8 charecters, combining letters and numbers</label>\n              </div>\n            </div>\n          </div>\n          <button type=\"button\" class=\"btn btn-primary pull-right\" (click)=\"ProfileUpdate()\">Update User Setting</button>\n          <div class=\"clearfix\" style=\"color: red\">{{_ChangePasswordError}}</div>\n        </form>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/user/home/usersetting/usersetting.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersettingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_service_loginapi_register_service__ = __webpack_require__("../../../../../src/app/shared/service/loginapi/register.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsersettingComponent = (function () {
    function UsersettingComponent(_RegistersService, elRef, router) {
        this._RegistersService = _RegistersService;
        this.elRef = elRef;
        this.router = router;
        this._ChangePassWord = new __WEBPACK_IMPORTED_MODULE_1__shared__["b" /* ChangePassWord */]();
        this._UserInfo = new __WEBPACK_IMPORTED_MODULE_1__shared__["f" /* UserInfo */]();
    }
    UsersettingComponent.prototype.GetUserProfile = function () {
        this._UserInfo.first_name = sessionStorage.getItem("first_name");
        this._UserInfo.last_name = sessionStorage.getItem("last_name");
        this._UserInfo.phone_number = sessionStorage.getItem("phone_number");
        this._UserInfo.username = sessionStorage.getItem("username");
        this._UserInfo.email_sub = (sessionStorage.getItem("email_sub") === "true");
        this._UserInfo.access_token = sessionStorage.getItem("access_token");
        this._UserInfo.email = sessionStorage.getItem("email");
    };
    UsersettingComponent.prototype.ngOnInit = function () {
        if (sessionStorage.getItem("username") != null) {
            this.GetUserProfile();
        }
        else {
            this._UserInfo.username = ' ';
        }
        document.getElementById("old_password").focus();
    };
    //Required funtion for UserProfile
    UsersettingComponent.prototype.RequiredForUseProfile = function () {
        var cnt = 0;
        var boolean = false;
        var hElement = this.elRef.nativeElement;
        var allDivs = hElement.getElementsByClassName('Profile'); //Profile is class name for acccess all input controll
        for (var i = 0; i < allDivs.length; i++) {
            if (allDivs[i]['value'].replace(' ', '') != sessionStorage.getItem(allDivs[i]['name'])) {
                cnt = cnt + 1;
            }
        }
        if (cnt > 0) {
            if (this._UserInfo.username.replace(' ', '').length === 0) {
                boolean = false;
            }
            else {
                boolean = true;
            }
        }
        return boolean;
    };
    //Change For UserProfile
    UsersettingComponent.prototype.UpdateProfile = function () {
        var _this = this;
        if (this._UserInfo.username) {
            this._RegistersService.UpdateUserDetails("rest-auth/user/", this._UserInfo).subscribe(function (data) {
                _this._UpdateProfileError = "Profile saved successfully";
                setTimeout(function () {
                    _this._UpdateProfileError = "";
                }, 2000);
                var obj = data;
                sessionStorage.setItem("username", (data.username) ? data.username : "");
                sessionStorage.setItem("email", (data.email) ? data.email : "");
                sessionStorage.setItem("first_name", (data.first_name) ? data.first_name : "");
                sessionStorage.setItem("last_name", (data.last_name) ? data.last_name : "");
                sessionStorage.setItem("phone_number", (data.phone_number) ? data.phone_number : "");
                sessionStorage.setItem("access_token", data.access_token);
                sessionStorage.setItem("email_sub", data.email_sub);
            }, function (error) {
                var obj = error;
                _this._UpdateProfileError = Object.keys(obj)[0] + " : " + obj[Object.keys(obj)[0]][0];
                setTimeout(function () {
                    _this._UpdateProfileError = "";
                }, 2000);
            });
        }
    };
    // funtion for ChangePassWord
    UsersettingComponent.prototype.PostChangePassword = function () {
        var _this = this;
        this._RegistersService.ChangePassword("rest-auth/password/change/", this._ChangePassWord).subscribe(function (data) {
            var obj = data;
            _this._ChangePasswordError = data.detail;
            setTimeout(function () {
                _this._ChangePasswordError = "";
            }, 2000);
            _this._ChangePassWord = new __WEBPACK_IMPORTED_MODULE_1__shared__["b" /* ChangePassWord */]();
        }, function (error) {
            var obj = error;
            _this._ChangePasswordError = obj[Object.keys(obj)[0]][0];
            setTimeout(function () {
                _this._ChangePasswordError = "";
            }, 2000);
        });
    };
    //required filed validation here....!
    UsersettingComponent.prototype.RequiredForPassWord = function () {
        var boolean = true;
        var hElement = this.elRef.nativeElement;
        var allDivs = hElement.getElementsByClassName('required');
        for (var i = 0; i < hElement.getElementsByTagName('p').length; i++) {
            hElement.getElementsByTagName('p')[i].innerText = '';
        }
        for (var i = 0; i < allDivs.length; i++) {
            if (allDivs[i]['value'].replace(' ', '').length === 0) {
                //hElement.getElementsByTagName('p')[i].innerText = allDivs[i]['id'] + ' is Compalsory..';
                boolean = false;
            }
        }
        if (boolean) {
            if (this._ChangePassWord.new_password1 !== this._ChangePassWord.new_password2) {
                hElement.getElementsByTagName('p')[2].innerText = "password1 or passowrd2 dsoesn't Match.....!!";
                boolean = false;
            }
        }
        return boolean;
    };
    //clear code here...!
    UsersettingComponent.prototype.clear = function () {
        var hElement = this.elRef.nativeElement;
        var allDivs = hElement.getElementsByClassName('required');
        for (var i = 0; i < hElement.getElementsByTagName('p').length; i++) {
            hElement.getElementsByTagName('p')[i].innerText = '';
        }
    };
    //Profile Update For change filed value 
    UsersettingComponent.prototype.ProfileUpdate = function () {
        if (this.RequiredForUseProfile()) {
            this.UpdateProfile();
        }
        if (this.RequiredForPassWord()) {
            this.PostChangePassword();
        }
        else {
            this._ChangePassWord = new __WEBPACK_IMPORTED_MODULE_1__shared__["b" /* ChangePassWord */]();
        }
    };
    UsersettingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-usersetting',
            template: __webpack_require__("../../../../../src/app/user/home/usersetting/usersetting.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/home/usersetting/usersetting.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_service_loginapi_register_service__["a" /* RegistersService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], UsersettingComponent);
    return UsersettingComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: true,
    api_url: 'https://api.coll.io/api/'
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map