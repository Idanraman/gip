webpackJsonp(["home.module"],{

/***/ "../../../../../src/app/user/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_routing__ = __webpack_require__("../../../../../src/app/user/home/home.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home__ = __webpack_require__("../../../../../src/app/user/home/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__usernotification_usernotification_component__ = __webpack_require__("../../../../../src/app/user/home/usernotification/usernotification.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__home_routing__["a" /* HomeRoutes */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__home__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_5__home__["c" /* UsersettingComponent */], __WEBPACK_IMPORTED_MODULE_6__usernotification_usernotification_component__["a" /* UsernotificationComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_5__home__["b" /* NoAuthGuard */]]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "../../../../../src/app/user/home/home.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home__ = __webpack_require__("../../../../../src/app/user/home/index.ts");

var HomeRoutes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_0__home__["a" /* HomeComponent */] },
    { path: 'usersetting', component: __WEBPACK_IMPORTED_MODULE_0__home__["c" /* UsersettingComponent */] }
];


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

module.exports = "<div class=\"content\">\n  <div class=\"container-fluid\">\n\n\n    <div class=\"col-md-12\">\n      <div class=\"card card-plain\">\n        <div class=\"card-header\" data-background-color=\"purple\">\n          <h4 class=\"title\">Notifications</h4>\n          <p class=\"category\">See whats going on with your page</p>\n        </div>\n        <div class=\"card-content table-responsive\">\n          <table class=\"table table-hover\">\n            <tbody>\n              <tr>\n                <td>1</td>\n                <td>Your weekly report is ready</td>\n                <td>5 Minutes ago</td>\n\n              </tr>\n              <tr>\n                <td>2</td>\n                <td>Your competitor\n                  <b>Google</b> has just posted a new post</td>\n                <td>10 Minutes ago</td>\n              </tr>\n              <tr>\n                <td>3</td>\n                <td>You have a new message that we analyzed as a complaint</td>\n                <td>3:45 PM</td>\n              </tr>\n              <tr>\n                <td>4</td>\n                <td>Your data files are avilable for download</td>\n                <td>2:21 PM</td>\n              </tr>\n              <tr>\n                <td>5</td>\n                <td>\n                  <b>First processing have been completed.</b> Check out the different sections to see what we came up with</td>\n                <td>Yesterday at 7:03 PM</td>\n              </tr>\n              <tr>\n                <td>6</td>\n                <td>\n                  <b>We have collected all of your posts.</b> Processing has began</td>\n                <td>November 16th 6:43PM</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <footer class=\"footer\">\n    <div class=\"container-fluid\">\n      <nav class=\"pull-left\">\n        <ul>\n          <li>\n            <a href=\"#\">\n              Home\n            </a>\n          </li>\n          <li>\n            <a href=\"#\">\n              Company\n            </a>\n          </li>\n          <li>\n            <a href=\"#\">\n              Portfolio\n            </a>\n          </li>\n          <li>\n            <a href=\"#\">\n              Blog\n            </a>\n          </li>\n        </ul>\n      </nav>\n      <p class=\"copyright pull-right\">\n        &copy;\n        <script>document.write(new Date().getFullYear())</script>\n        <a href=\"http://www.creative-tim.com\">Creative Tim</a>, made with love for a better web\n      </p>\n    </div>\n  </footer>\n</div>"

/***/ }),

/***/ "../../../../../src/app/user/home/usernotification/usernotification.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsernotificationComponent; });
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

var UsernotificationComponent = (function () {
    function UsernotificationComponent() {
    }
    UsernotificationComponent.prototype.ngOnInit = function () {
    };
    UsernotificationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-usernotification',
            template: __webpack_require__("../../../../../src/app/user/home/usernotification/usernotification.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/home/usernotification/usernotification.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UsernotificationComponent);
    return UsernotificationComponent;
}());



/***/ })

});
//# sourceMappingURL=home.module.chunk.js.map