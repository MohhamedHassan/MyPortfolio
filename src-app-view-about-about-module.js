(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-view-about-about-module"],{

/***/ "20tq":
/*!********************************************!*\
  !*** ./src/app/view/about/about.module.ts ***!
  \********************************************/
/*! exports provided: AboutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModule", function() { return AboutModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _about_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about-routing.module */ "jEZK");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about/about.component */ "C+BW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class AboutModule {
}
AboutModule.ɵfac = function AboutModule_Factory(t) { return new (t || AboutModule)(); };
AboutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AboutModule });
AboutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _about_routing_module__WEBPACK_IMPORTED_MODULE_1__["AboutRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AboutModule, { declarations: [_about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _about_routing_module__WEBPACK_IMPORTED_MODULE_1__["AboutRoutingModule"]] }); })();


/***/ }),

/***/ "C+BW":
/*!*****************************************************!*\
  !*** ./src/app/view/about/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 32, vars: 0, consts: [[1, "pt-5", "about", 2, "min-height", "100vh"], [1, "w-100"], [1, "mainH2", "text-center", "mb-5"], [1, "container"], [1, "row", "align-items-center"], [1, "col-md-6", "mb-5", "first"], [1, "d-flex"], [1, "font-weight-bold", "text-white"], [1, "gry"], [1, "gry", 2, "word-break", "break-all"], [1, "col-md-6", "mb-5"], [1, "text-center"], [1, "completed"], [1, "yellow", "mr-2"], [1, "d-flex", "justify-content-center"], ["target", "_blank", "href", "https://drive.google.com/file/d/1Jc3geWq2WYaPjkwKRumn1f28UQDuOrce/view?usp=sharing", 1, "button"], [1, "fas", "fa-download", "ml-2"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "About Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Mohhamed Hassan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "fed.mohamed.hassan@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Phone:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "01110-848-124");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Projects completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " DOWNLOAD MY CV ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".about[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: black;\n}\n.about[_ngcontent-%COMP%]   .gry[_ngcontent-%COMP%] {\n  color: gray;\n  transition: 0.5s;\n}\n.about[_ngcontent-%COMP%]   .gry[_ngcontent-%COMP%]:hover {\n  color: #f5b535;\n}\n.about[_ngcontent-%COMP%]   .completed[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: bold;\n  font-size: 25px;\n}\n.about[_ngcontent-%COMP%]   .yellow[_ngcontent-%COMP%] {\n  color: #f5b535;\n}\n.about[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  width: 400px;\n}\n.about[_ngcontent-%COMP%]   .first[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  display: inline-block;\n  width: 65px;\n}\n.about[_ngcontent-%COMP%]   .first[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  display: inline-block;\n  width: 250px;\n}\n.about[_ngcontent-%COMP%]   .first[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\na.button[_ngcontent-%COMP%] {\n  transition: 0.5s;\n}\na.button[_ngcontent-%COMP%]:hover {\n  color: #f5b535 !important;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYWJvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFBRyxZQUFBO0FBQ1A7QUFBSTtFQUlJLFdBQUE7RUFDQSxnQkFBQTtBQURSO0FBSFE7RUFDSSxjQUFBO0FBS1o7QUFBSTtFQUVJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFDUjtBQUNJO0VBQ0ksY0FBQTtBQUNSO0FBQ0k7RUFDRyxZQUFBO0FBQ1A7QUFFUTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtBQUFaO0FBR0M7RUFDTyxxQkFBQTtFQUNBLFlBQUE7QUFEUjtBQUlBO0VBQVMsbUJBQUE7QUFEVDtBQU1BO0VBQVUsZ0JBQUE7QUFGVjtBQUdBO0VBQWUseUJBQUE7RUFBeUIscUJBQUE7QUFFeEMiLCJmaWxlIjoiYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWJvdXQge1xyXG4gICAgYSB7Y29sb3I6YmxhY2t9XHJcbiAgICAuZ3J5IHtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6I2Y1YjUzNTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29sb3I6Z3JheTtcclxuICAgICAgICB0cmFuc2l0aW9uOiAuNXM7XHJcbiAgICB9XHJcbiAgICAuY29tcGxldGVkXHJcbiAgICB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIH1cclxuICAgIC55ZWxsb3cge1xyXG4gICAgICAgIGNvbG9yOiNmNWI1MzU7XHJcbiAgICB9XHJcbiAgICAuYnV0dG9uIHtcclxuICAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgIH1cclxuICAgIC5maXJzdCAge1xyXG4gICAgICAgIHNwYW46Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOiA2NXB4O1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gc3BhbjpsYXN0LWNoaWxkIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgXHJcbn1cclxuLmQtZmxleCB7bWFyZ2luLWJvdHRvbTogMjBweDt9XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5hLmJ1dHRvbiB7dHJhbnNpdGlvbjogLjVzO31cclxuYS5idXR0b246aG92ZXJ7Y29sb3I6I2Y1YjUzNSAhaW1wb3J0YW50O3RleHQtZGVjb3JhdGlvbjogbm9uZTt9Il19 */"] });


/***/ }),

/***/ "jEZK":
/*!****************************************************!*\
  !*** ./src/app/view/about/about-routing.module.ts ***!
  \****************************************************/
/*! exports provided: AboutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutRoutingModule", function() { return AboutRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about/about.component */ "C+BW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _about_about_component__WEBPACK_IMPORTED_MODULE_1__["AboutComponent"]
    }
];
class AboutRoutingModule {
}
AboutRoutingModule.ɵfac = function AboutRoutingModule_Factory(t) { return new (t || AboutRoutingModule)(); };
AboutRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AboutRoutingModule });
AboutRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AboutRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=src-app-view-about-about-module.js.map