(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-view-projects-projects-module"],{

/***/ "C/nr":
/*!**********************************************************!*\
  !*** ./src/app/view/projects/projects-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: ProjectsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsRoutingModule", function() { return ProjectsRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects/projects.component */ "oQXu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_1__["ProjectsComponent"]
    }
];
class ProjectsRoutingModule {
}
ProjectsRoutingModule.ɵfac = function ProjectsRoutingModule_Factory(t) { return new (t || ProjectsRoutingModule)(); };
ProjectsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ProjectsRoutingModule });
ProjectsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ProjectsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "YO03":
/*!**************************************************!*\
  !*** ./src/app/view/projects/projects.module.ts ***!
  \**************************************************/
/*! exports provided: ProjectsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsModule", function() { return ProjectsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _projects_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects-routing.module */ "C/nr");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects/projects.component */ "oQXu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class ProjectsModule {
}
ProjectsModule.ɵfac = function ProjectsModule_Factory(t) { return new (t || ProjectsModule)(); };
ProjectsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ProjectsModule });
ProjectsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _projects_routing_module__WEBPACK_IMPORTED_MODULE_1__["ProjectsRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ProjectsModule, { declarations: [_projects_projects_component__WEBPACK_IMPORTED_MODULE_2__["ProjectsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _projects_routing_module__WEBPACK_IMPORTED_MODULE_1__["ProjectsRoutingModule"]] }); })();


/***/ }),

/***/ "oQXu":
/*!**************************************************************!*\
  !*** ./src/app/view/projects/projects/projects.component.ts ***!
  \**************************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function ProjectsComponent_div_65_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsComponent_div_65_Template_i_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.modalOne = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Project Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "RestaurantApp");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "About:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " There is a control panel that enables the admin to add, delete and modify products and see orders. Users can add products to the cart and then create orders, whether he is logged in or not. If the user creates an account, he can see the orders he created and his account information ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\nAdmin Account : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "admin@admin.com ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\nPassword : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "adminadmin ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "tools:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " html5, css3, bootstrap, scss, angular +2, angular material, ng bootstrap, ngx toaster ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h3", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Backend:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Nodejs (by another developer) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectsComponent_div_66_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsComponent_div_66_Template_i_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.modalTwo = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Project Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "GoodReads");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "About:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " It is a book-sharing site. Each user can create an account and add information about his book, such as the book's picture, the name of the book, and the description of the book. He must have an account to do so. All users' books and reviews appear on the home page. Each user can rate the books of others from one to five.\nAnd the user can see his books and personal information on his personal page ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "tools:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " html5, css3, bootstrap, scss, angular +2, angular material, ng bootstrap, ngx toaster , ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Backend:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Nodejs (by another developer) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectsComponent_div_67_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsComponent_div_67_Template_i_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.modalThree = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Project Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "FAKEBOOK");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "About:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "The website is available in four languages: Arabic, Turkish, German and English");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "the user can add edit and delete profile and cover picture");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "the user can add edit and delete person personal info");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "user can add edit and delete post with text or image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "user can follow other useres ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "there is a home page to show user's following posts");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "user can make a comment or reactions ( sad , like , love , wow , angry , haha )");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "realtime notifications for reactions comments and following");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h3", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "tools:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Html, css, bootstrap, sass, Typescript, angular , Fontawesome ,ngxbootstrap ,angular material, ngx skeleton loder,swiper js , socket io , ngxTranslate ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h3", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Backend:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Nodejs (by another developer) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ProjectsComponent {
    constructor() {
        this.modalOne = false;
        this.modalTwo = false;
        this.modalThree = false;
    }
    ngOnInit() {
    }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(); };
ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["app-projects"]], decls: 68, vars: 3, consts: [[1, "projects", "text-center", "pt-5", 2, "min-height", "100vh"], [1, "container"], [1, "mainH2", "mb-5"], [1, "row"], [1, "col-md-12", "mb-5"], [1, "position-relative", "overflow-hidden"], ["src", "assets/undraw_Social_media_re_w12q.png", "alt", "", 1, "w-100", 2, "height", "285px"], [1, "over", "d-flex", "justify-content-center", "align-items-center"], [1, "mb-3"], [1, "d-flex", "justify-content-center"], [1, "gray", 3, "click"], [1, "fas", "fa-tools"], ["href", "https://github.com/MohhamedHassan/fakebook.git", "target", "_blank", 1, "mx-3", "gray"], [1, "fas", "fa-code"], ["href", "https://mohhamedhassan.github.io/fakebook/", "target", "_blanket", 1, "gray"], [1, "far", "fa-eye"], [1, "col-md-6", "mb-5"], ["src", "assets/restaurant.png", "alt", "", 1, "w-100", 2, "height", "285px"], ["href", "https://github.com/MohhamedHassan/Restaurant", "target", "_blank", 1, "mx-3", "gray"], ["href", "https://mohhamedhassan.github.io/Restaurant/", "target", "_blanket", 1, "gray"], ["src", "assets/goodreads.png", "alt", "", 1, "w-100", 2, "height", "285px", "border-radius", "20px"], ["href", "https://github.com/MohhamedHassan/goodReads", "target", "_blank", 1, "mx-3", "gray"], ["href", "https://mohhamedhassan.github.io/goodReads/", "target", "_blanket", 1, "gray"], ["class", "popupone one d-flex justify-content-center align-items-center", 4, "ngIf"], [1, "popupone", "one", "d-flex", "justify-content-center", "align-items-center"], [1, "inner", "bg-white", "w-75", "p-4", "position-relative"], [1, "fas", "fa-times", 3, "click"], [1, "scrl", "mr-0", "mr-md-5", 2, "height", "200px", "overflow", "auto", "margin-top", "30px"], [1, "mb-2", "font-weight-bold"], [1, "font-weight-bold"], [1, "pr-3", 2, "line-height", "30px"], [2, "text-transform", "lowercase !important"], [2, "line-height", "30px"]], template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Facebook_Clone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsComponent_Template_div_click_13_listener() { return ctx.modalThree = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Live");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "RestaurantApp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsComponent_Template_div_click_33_listener() { return ctx.modalOne = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Live");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "GoodReads");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsComponent_Template_div_click_53_listener() { return ctx.modalTwo = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Live");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, ProjectsComponent_div_65_Template, 28, 0, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, ProjectsComponent_div_66_Template, 20, 0, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, ProjectsComponent_div_67_Template, 35, 0, "div", 23);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.modalOne);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.modalTwo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.modalThree);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".projects[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: bold;\n}\n.projects[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: white;\n}\n.projects[_ngcontent-%COMP%]   .position-relative[_ngcontent-%COMP%] {\n  border-radius: 20px;\n}\n.projects[_ngcontent-%COMP%]   .position-relative[_ngcontent-%COMP%]   .over[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: -100%;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  background: #f5b535;\n  opacity: 0.8;\n  transition: 0.5s;\n  border-radius: 20px;\n}\n.projects[_ngcontent-%COMP%]   .position-relative[_ngcontent-%COMP%]:hover   .over[_ngcontent-%COMP%] {\n  left: 0;\n  border-radius: 20px;\n}\n.projects[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transition: 0.5s 0.5s;\n  border-radius: 20px;\n}\n.projects[_ngcontent-%COMP%]   .position-relative[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.5);\n  border-radius: 20px;\n}\n.projects[_ngcontent-%COMP%]   .gray[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: 0.5s;\n  color: black !important;\n}\n.projects[_ngcontent-%COMP%]   .gray[_ngcontent-%COMP%]:hover {\n  color: white !important;\n}\n.popupone[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  background: #f5b535;\n  opacity: 0.95;\n  z-index: 11111;\n  overflow: auto;\n  \n  \n  \n  \n}\n.popupone[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  line-height: 30px;\n  font-size: 20px;\n  text-transform: uppercase;\n}\n.popupone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 15px;\n  font-size: 25px;\n  top: 15px;\n  border: 2px solid black;\n  border-radius: 6px;\n  padding: 5px;\n  cursor: pointer;\n}\n.popupone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n  background: black;\n  color: white;\n}\n.popupone[_ngcontent-%COMP%]   .scrl[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 10px;\n}\n.popupone[_ngcontent-%COMP%]   .scrl[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 5px grey;\n  border-radius: 10px;\n}\n.popupone[_ngcontent-%COMP%]   .scrl[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #f5b535;\n  border-radius: 10px;\n}\n.popupone[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #f5b535;\n}\n@media (max-width: 768px) {\n  .popupone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n\n  .popupone[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .popupone[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: small;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccHJvamVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUFDSjtBQUFJO0VBQUcsWUFBQTtBQUdQO0FBRkk7RUFDRSxtQkFBQTtBQUlOO0FBSEk7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFLTjtBQUZJO0VBQ0UsT0FBQTtFQUFTLG1CQUFBO0FBS2Y7QUFKTTtFQUFJLHFCQUFBO0VBQW1CLG1CQUFBO0FBUTdCO0FBUE07RUFDRSxxQkFBQTtFQUFzQixtQkFBQTtBQVU5QjtBQVRRO0VBSUUsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFRVjtBQWJVO0VBQ0UsdUJBQUE7QUFlWjtBQVJVO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQXNCRSxVQUFBO0VBS2QsVUFBQTtFQU1BLFdBQUE7RUFNQSxvQkFBQTtBQXhCQTtBQWRZO0VBRUUsaUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFlZDtBQWJZO0VBTUUsa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFVZDtBQXRCYztFQUVJLGlCQUFBO0VBQ0EsWUFBQTtBQXVCbEI7QUFYQTtFQUNFLFdBQUE7QUFhRjtBQVRBO0VBQ0UsOEJBQUE7RUFDQSxtQkFBQTtBQVdGO0FBUEE7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0FBU0Y7QUFMQTtFQUNFLG1CQUFBO0FBT0Y7QUFKVTtFQUNFO0lBQ0UsZUFBQTtFQU9aOztFQU5VO0lBQ0UsZ0JBQUE7RUFTWjtBQUNGIiwiZmlsZSI6InByb2plY3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2plY3RzIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyBcclxuICAgIGgze2NvbG9yOiB3aGl0ZTt9XHJcbiAgICAucG9zaXRpb24tcmVsYXRpdmUge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgLm92ZXIge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICBsZWZ0OiAtMTAwJTtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmNWI1MzU7XHJcbiAgICAgIG9wYWNpdHk6IC44O1xyXG4gICAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgfVxyXG4gICAgLnBvc2l0aW9uLXJlbGF0aXZlOmhvdmVyIC5vdmVyIHtcclxuICAgICAgbGVmdDogMDsgYm9yZGVyLXJhZGl1czogMjBweDt9XHJcbiAgICAgIGltZ3t0cmFuc2l0aW9uOi41cyAuNXM7Ym9yZGVyLXJhZGl1czogMjBweDt9XHJcbiAgICAgIC5wb3NpdGlvbi1yZWxhdGl2ZTpob3ZlciBpbWcge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtib3JkZXItcmFkaXVzOiAyMHB4OyB9XHJcbiAgICAgICAgLmdyYXkge1xyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50OyBcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIHRyYW5zaXRpb246IC41cztcclxuICAgICAgICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50OyB9XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnBvcHVwb25lIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmNWI1MzU7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IC45NTtcclxuICAgICAgICAgICAgei1pbmRleDogMTExMTE7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAvLyBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTsgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICByaWdodDogMTVweDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgICAgICAgdG9wOiAxNXB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7IFxyXG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8qIHdpZHRoICovXHJcbi5zY3JsOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDEwcHg7XHJcbn1cclxuXHJcbi8qIFRyYWNrICovXHJcbi5zY3JsOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDVweCBncmV5OyBcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbiBcclxuLyogSGFuZGxlICovXHJcbi5zY3JsOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZDogI2Y1YjUzNTs7IFxyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZjViNTM1O1xyXG59XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgICAgLnBvcHVwb25lIGkge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDsgfVxyXG4gICAgICAgICAgICAucG9wdXBvbmUgLmlubmVyIHAsIC5wb3B1cG9uZSAuaW5uZXIgaDMge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogc21hbGw7IH0gfVxyXG5cclxuICAgXHJcblxyXG5cclxuXHJcbiAgXHJcblxyXG5cclxuIl19 */"] });


/***/ })

}]);
//# sourceMappingURL=src-app-view-projects-projects-module.js.map