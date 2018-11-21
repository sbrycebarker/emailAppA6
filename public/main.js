(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./app/app.component.css":
/*!*******************************!*\
  !*** ./app/app.component.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#title-con {\r\n  padding: 10px;\r\n}\r\n\r\n@media screen and  (max-width: 1000px) {\r\n  #info-panel div {\r\n    font-size: 1rem;\r\n    width: 200px;\r\n    margin: 100px 5%;\r\n  }\r\n}\r\n\r\nbody {\r\n  height: 100%;\r\n  width: 100%;\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: monospace;\r\n}\r\n\r\n#title-con {\r\n  height: 100px;\r\n  margin: 0;\r\n  padding: 15px;\r\n  background-color: white;\r\n  box-sizing: border-box;\r\n}\r\n\r\n#title-con h1 {\r\n  margin: 0;\r\n  font-size: 18px;\r\n}\r\n\r\n#info-panel {\r\n  height: 350px;\r\n  width: 100%;\r\n  margin: auto;\r\n  font-size: 1.2rem;\r\n  position: relative;\r\n  background-color: #363732;\r\n  color: white;\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n#info-panel div {\r\n  font-size: 1rem;\r\n  width: 200px;\r\n  margin: 50px 5%;\r\n}\r\n\r\n@media screen and (min-width: 800px) {\r\n\r\n  #title-con {\r\n    height: 130px;\r\n    margin: 0 0 25px;\r\n    background-color: white;\r\n    box-sizing: border-box;\r\n    /* border: 2px solid black; */\r\n    /* box-shadow: 5px 5px 5px */\r\n  }\r\n\r\n  #title-con h1 {\r\n    margin: 0;\r\n  }\r\n\r\n  #info-panel {\r\n    height: 400px;\r\n    width: 100%;\r\n    font-size: 1.2rem;\r\n    position: absolute;\r\n    background-color: #363732;\r\n    -webkit-transform: skewY(-5deg);\r\n    transform: skewY(-5deg);\r\n    color: white;\r\n    bottom: 100px;\r\n    right: 0;\r\n    z-index: -1;\r\n    box-shadow: 5px 5px 5px white;\r\n    display: flex;\r\n    flex-direction: row;\r\n  }\r\n\r\n  #info-panel div {\r\n    width: 200px;\r\n    margin: 100px 100px;\r\n  }\r\n\r\n}\r\n"

/***/ }),

/***/ "./app/app.component.html":
/*!********************************!*\
  !*** ./app/app.component.html ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<!-- <flash-messages></flash-messages> -->\r\n<div id=\"title-con\" style=\"text-align:center\">\r\n  <h1>\r\n    Welcome to {{ title }}!\r\n    <flash-messages></flash-messages>\r\n  </h1>\r\n  <!-- <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\"> -->\r\n  <h1>\r\n    <flash-messages></flash-messages>\r\n  </h1>\r\n</div>\r\n\r\n<div id=\"info-panel\">\r\n<div class=\"items\">\r\n  <h1>Built with</h1>\r\n  <ul>Angular 6</ul>\r\n  <ul>HTML5</ul>\r\n  <ul>CSS3</ul>\r\n  <ul>NodeJs</ul>\r\n  <ul>Nodemailer</ul>\r\n</div>\r\n<!-- <div class=\"items\">\r\n  <img src=\"./assets/nodemailer.png\" alt=\"\">\r\n</div> -->\r\n</div>\r\n\r\n<app-emailform></app-emailform>\r\n"

/***/ }),

/***/ "./app/app.component.ts":
/*!******************************!*\
  !*** ./app/app.component.ts ***!
  \******************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Sergios Angular6 Email App';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./app/app.module.ts":
/*!***************************!*\
  !*** ./app/app.module.ts ***!
  \***************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _emailform_emailform_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./emailform/emailform.component */ "./app/emailform/emailform.component.ts");
/* harmony import */ var _services_mail_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/mail.service */ "./app/services/mail.service.ts");
/* harmony import */ var _services_httpreq_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/httpreq.service */ "./app/services/httpreq.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular2-flash-messages */ "../node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_8__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _emailform_emailform_component__WEBPACK_IMPORTED_MODULE_5__["EmailformComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_8__["FlashMessagesModule"].forRoot()
            ],
            providers: [_services_mail_service__WEBPACK_IMPORTED_MODULE_6__["MailService"], _services_httpreq_service__WEBPACK_IMPORTED_MODULE_7__["HttpreqService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./app/emailform/emailform.component.css":
/*!***********************************************!*\
  !*** ./app/emailform/emailform.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\r\n  height: 650px;\r\n  width: 100%;\r\n  margin: auto;\r\n  background-color: #3285B1;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\nform ul {\r\n  margin: auto;\r\n  height: 70px;\r\n  width: 60%;\r\n  min-width: 275px;\r\n  position: relative;\r\n  background-color: #363732;\r\n  color: white;\r\n  border-radius: 10px;\r\n  box-shadow: black 2px 2px 2px 2px;\r\n}\r\n\r\n#message {\r\n  height: 275px;\r\n}\r\n\r\nform ul h1 {\r\n  margin: 5px auto;\r\n  font-size: 18px;\r\n}\r\n\r\nform input {\r\n  margin: 5px 0;\r\n  border-radius: 5px;\r\n  padding-left: 5px;\r\n  box-shadow: black 2px 2px 2px;\r\n}\r\n\r\ntextarea {\r\n  border-radius: 5px;\r\n  box-shadow: 2px 2px 2px black;\r\n}\r\n\r\nbutton {\r\n  margin: 10px;\r\n  border: none;\r\n  border-radius: 2px;\r\n  background-color: #3285B1;\r\n  box-shadow: 2px 2px 2px;\r\n}\r\n\r\n@media screen and (min-width: 800px) {\r\n\r\nform {\r\n  height: 650px;\r\n  width: 400px;\r\n  margin: auto;\r\n  background-color: #3285B1;\r\n  display: flex;\r\n  flex-direction: column;\r\n  border-radius: 10px;\r\n  box-shadow: 5px 5px 5px 5px;\r\n}\r\n\r\nform ul {\r\n  margin: auto;\r\n  height: 70px;\r\n  width: 80%;\r\n  position: relative;\r\n  background-color: #363732;\r\n  color: white;\r\n  border-radius: 10px;\r\n  box-shadow: black 2px 2px 2px 2px;\r\n}\r\n\r\n#message {\r\n  height: 275px;\r\n}\r\n\r\nform ul h1 {\r\n  margin: 5px auto;\r\n  font-size: 18px;\r\n}\r\n\r\nform input {\r\n  margin: 5px 0;\r\n  border-radius: 5px;\r\n  padding-left: 5px;\r\n  box-shadow: black 2px 2px 2px;\r\n}\r\n\r\ntextarea {\r\n  border-radius: 5px;\r\n  box-shadow: 2px 2px 2px black;\r\n}\r\n\r\nbutton {\r\n  margin: 10px;\r\n  border: none;\r\n  border-radius: 2px;\r\n  background-color: #3285B1;\r\n  box-shadow: 2px 2px 2px;\r\n}\r\n\r\n}\r\n"

/***/ }),

/***/ "./app/emailform/emailform.component.html":
/*!************************************************!*\
  !*** ./app/emailform/emailform.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"onFormSubmit()\" action=\"\">\r\n  <!-- <h1><flash-messages></flash-messages></h1> -->\r\n<ul class=\"form-group\">\r\n  <h1>First Name</h1>\r\n  <input type=\"text\" [(ngModel)]=\"first_name\" name=\"first_name\" placeholder=\"First Name\">\r\n</ul>\r\n<ul>\r\n  <h1>Last Name</h1>\r\n  <input [(ngModel)]=\"last_name\" type=\"text\" name=\"last_name\" placeholder=\"Last Name\">\r\n</ul>\r\n<ul>\r\n  <h1>Email</h1>\r\n  <input [(ngModel)]=\"email\" type=\"email\" name=\"email\" placeholder=\"Email\">\r\n</ul>\r\n<ul id=\"message\">\r\n  <h1>Subject</h1>\r\n  <input [(ngModel)]=\"subject\" type=\"text\" name=\"subject\" placeholder=\"Subject\">\r\n  <h1>\r\n    <textarea [(ngModel)]=\"message\" name=\"message\" id=\"\" cols=\"30\" rows=\"10\" style=\"resize: none\" placeholder=\"...\"></textarea>\r\n  </h1>\r\n  <div>\r\n    <button>Submit</button>\r\n    <!-- <flash-messages></flash-messages> -->\r\n  </div>\r\n</ul>\r\n\r\n</form>\r\n"

/***/ }),

/***/ "./app/emailform/emailform.component.ts":
/*!**********************************************!*\
  !*** ./app/emailform/emailform.component.ts ***!
  \**********************************************/
/*! exports provided: EmailformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailformComponent", function() { return EmailformComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_mail_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/mail.service */ "./app/services/mail.service.ts");
/* harmony import */ var _services_httpreq_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/httpreq.service */ "./app/services/httpreq.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "../node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmailformComponent = /** @class */ (function () {
    function EmailformComponent(mailService, FlashMessagesService, HttpreqService) {
        this.mailService = mailService;
        this.FlashMessagesService = FlashMessagesService;
        this.HttpreqService = HttpreqService;
    }
    EmailformComponent.prototype.ngOnInit = function () {
    };
    EmailformComponent.prototype.onFormSubmit = function () {
        var _this = this;
        var form = {
            first_name: this.first_name,
            last_name: this.last_name,
            email: this.email,
            subject: this.subject,
            message: this.message
        };
        if (!this.mailService.validateForm(form)) {
            this.FlashMessagesService.show('Please fill all fields!', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        if (!this.mailService.validateEmail(form.email)) {
            this.FlashMessagesService.show('Please use valid email!', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        this.HttpreqService.sendEmail(form).subscribe(function (data) {
            console.log(data);
            if (data) {
                console.log("please wait");
            }
            else {
                if (data) {
                    _this.FlashMessagesService.show('EMAIL SENT!', { cssClass: 'alert-success', timeout: 3000 });
                }
                else {
                    _this.FlashMessagesService.show('Try Again', { cssClass: 'alert-danger', timeout: 3000 });
                }
            }
        });
    };
    EmailformComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-emailform',
            template: __webpack_require__(/*! ./emailform.component.html */ "./app/emailform/emailform.component.html"),
            styles: [__webpack_require__(/*! ./emailform.component.css */ "./app/emailform/emailform.component.css")]
        }),
        __metadata("design:paramtypes", [_services_mail_service__WEBPACK_IMPORTED_MODULE_1__["MailService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _services_httpreq_service__WEBPACK_IMPORTED_MODULE_2__["HttpreqService"]])
    ], EmailformComponent);
    return EmailformComponent;
}());



/***/ }),

/***/ "./app/services/httpreq.service.ts":
/*!*****************************************!*\
  !*** ./app/services/httpreq.service.ts ***!
  \*****************************************/
/*! exports provided: HttpreqService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpreqService", function() { return HttpreqService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import 'rxjs/add/operator/map';
var HttpreqService = /** @class */ (function () {
    function HttpreqService(http) {
        this.http = http;
    }
    HttpreqService.prototype.sendEmail = function (message) {
        var send = console.log(message);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        return this.http.post('http://localhost:8000/sendmail', message, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return data;
        }));
    };
    HttpreqService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpreqService);
    return HttpreqService;
}());



/***/ }),

/***/ "./app/services/mail.service.ts":
/*!**************************************!*\
  !*** ./app/services/mail.service.ts ***!
  \**************************************/
/*! exports provided: MailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailService", function() { return MailService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MailService = /** @class */ (function () {
    function MailService() {
    }
    MailService.prototype.validateForm = function (form) {
        if (form.first_name == undefined || form.last_name == undefined || form.email == undefined || form.subject == undefined || form.message == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    MailService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    MailService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], MailService);
    return MailService;
}());



/***/ }),

/***/ "./environments/environment.ts":
/*!*************************************!*\
  !*** ./environments/environment.ts ***!
  \*************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./main.ts":
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***********************!*\
  !*** multi ./main.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Sergio\home\projects\emailAppA6\emailAppA6\src\main.ts */"./main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map