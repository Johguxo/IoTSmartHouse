function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-register-register-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.page.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.page.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsRegisterRegisterPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>register</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list>\r\n  \r\n    <ion-item>\r\n    <ion-label position=\"floating\">Nombre Usuario</ion-label>\r\n    <ion-input type=\"text\" [(ngModel)]=\"name\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n    <ion-label position=\"floating\">Email</ion-label>\r\n    <ion-input type=\"text\" [(ngModel)]=\"email\"></ion-input>\r\n    </ion-item>\r\n    \r\n    <ion-item>\r\n    <ion-label position=\"floating\">Contraseña</ion-label>\r\n    <ion-input type=\"password\" [(ngModel)]=\"password\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n    <ion-label position=\"floating\">Confirmar Contraseña</ion-label>\r\n    <ion-input type=\"password\" [(ngModel)]=\"cpassword\"></ion-input>\r\n    </ion-item>\r\n  \r\n  </ion-list>\r\n\r\n  <ion-button fill=\"solid\" expand=\"block\" color=\"dark\" (click)=\"OnRegister()\">Sign up</ion-button>\r\n\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/components/register/register-routing.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/components/register/register-routing.module.ts ***!
    \****************************************************************/

  /*! exports provided: RegisterPageRoutingModule */

  /***/
  function srcAppComponentsRegisterRegisterRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function () {
      return RegisterPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./register.page */
    "./src/app/components/register/register.page.ts");

    var routes = [{
      path: '',
      component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }];

    var RegisterPageRoutingModule = function RegisterPageRoutingModule() {
      _classCallCheck(this, RegisterPageRoutingModule);
    };

    RegisterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RegisterPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/components/register/register.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/components/register/register.module.ts ***!
    \********************************************************/

  /*! exports provided: RegisterPageModule */

  /***/
  function srcAppComponentsRegisterRegisterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function () {
      return RegisterPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./register-routing.module */
    "./src/app/components/register/register-routing.module.ts");
    /* harmony import */


    var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./register.page */
    "./src/app/components/register/register.page.ts");

    var RegisterPageModule = function RegisterPageModule() {
      _classCallCheck(this, RegisterPageModule);
    };

    RegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"]],
      declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })], RegisterPageModule);
    /***/
  },

  /***/
  "./src/app/components/register/register.page.scss":
  /*!********************************************************!*\
    !*** ./src/app/components/register/register.page.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsRegisterRegisterPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/register/register.page.ts":
  /*!******************************************************!*\
    !*** ./src/app/components/register/register.page.ts ***!
    \******************************************************/

  /*! exports provided: RegisterPage */

  /***/
  function srcAppComponentsRegisterRegisterPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPage", function () {
      return RegisterPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var RegisterPage = /*#__PURE__*/function () {
      function RegisterPage(auth, router, alertController) {
        _classCallCheck(this, RegisterPage);

        this.auth = auth;
        this.router = router;
        this.alertController = alertController;
        this.email = "";
        this.password = "";
        this.cpassword = "";
        this.name = "";
      }

      _createClass(RegisterPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "OnRegister",
        value: function OnRegister() {
          var _this = this;

          if (this.password != this.cpassword) {
            this.showAlert("Error!", "Contraseña no coincide");
            return console.error("Contraseña nono coindice");
          } else {
            this.auth.register(this.email, this.password, this.name).then(function (res) {
              _this.showAlert("Success!", "Bienvenido a Nancy");

              _this.router.navigate(['./home']);
            })["catch"](function (err) {
              return _this.showAlert("Error:", err);
            });
          }
        }
      }, {
        key: "showAlert",
        value: function showAlert(header, message) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertController.create({
                      header: header,
                      message: message,
                      buttons: ['Ok']
                    });

                  case 2:
                    alert = _context.sent;
                    _context.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return RegisterPage;
    }();

    RegisterPage.ctorParameters = function () {
      return [{
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }];
    };

    RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./register.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./register.page.scss */
      "./src/app/components/register/register.page.scss"))["default"]]
    })], RegisterPage);
    /***/
  }
}]);
//# sourceMappingURL=components-register-register-module-es5.js.map