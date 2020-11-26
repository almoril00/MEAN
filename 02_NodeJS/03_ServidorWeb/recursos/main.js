(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\JAVA\workspaces\AJAX_HTML_JS\MEAN\MEAN-GETAFE-2020\05_MEAN\03_Tienda_2.0\Angular\src\main.ts */"zUnb");


/***/ }),

/***/ "1eAL":
/*!****************************************************************!*\
  !*** ./src/app/componentes/maquetacion/menu/menu.component.ts ***!
  \****************************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_servicios_session_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/servicios/session.service */ "v8k3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class MenuComponent {
    constructor(sessionService) {
        this.sessionService = sessionService;
        this.usuario = sessionService.getItem("usuario");
    }
    ngOnInit() {
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_servicios_session_service__WEBPACK_IMPORTED_MODULE_1__["SessionService"])); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], decls: 20, vars: 1, consts: [[1, "navbar", "navbar-expand-sm", "bg-dark", "navbar-dark"], [1, "navbar-nav"], [1, "nav-item"], ["routerLink", "/tienda/perfil", 1, "nav-link"], ["routerLink", "/tienda/catalogo", 1, "nav-link"], ["routerLink", "/tienda/cesta", 1, "nav-link"], [1, "nav-link"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Cat\u00E1logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Cesta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Pedidos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Facturas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Salir");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.usuario.login);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL21hcXVldGFjaW9uL21lbnUvbWVudS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu',
                templateUrl: './menu.component.html',
                styleUrls: ['./menu.component.css']
            }]
    }], function () { return [{ type: src_app_servicios_session_service__WEBPACK_IMPORTED_MODULE_1__["SessionService"] }]; }, null); })();


/***/ }),

/***/ "5XhP":
/*!*********************************************************************!*\
  !*** ./src/app/componentes/usuarios/registro/registro.component.ts ***!
  \*********************************************************************/
/*! exports provided: RegistroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroComponent", function() { return RegistroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_entidades_usuario__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/entidades/usuario */ "zNaa");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_servicios_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/servicios/session.service */ "v8k3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function RegistroComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.mensaje);
} }
class RegistroComponent {
    constructor(router, sessionService) {
        this.router = router;
        this.sessionService = sessionService;
        this.usuario = new src_app_entidades_usuario__WEBPACK_IMPORTED_MODULE_1__["Usuario"]();
        this.mensaje = "";
        console.log("Creando RegistroComponent");
        //Podemos usar el sessionStorage
        /*
        let usrJSON = sessionStorage.getItem("usuario")
        if(usrJSON){
          this.usuario = JSON.parse(usrJSON)
          sessionStorage.removeItem("usuario")
        }*/
        let usr = sessionService.getItem("usuario");
        if (usr) {
            this.usuario = usr;
            sessionService.removeItem("usuario");
        }
    }
    ngOnInit() {
    }
    siguiente() {
        if (this.usuario.pw == null || this.usuario.pw.trim().length < 10) {
            this.mensaje = "El pasword debe contener al menos 10 caracteres";
            return;
        }
        if (this.usuario.pw != this.confirmacionPw) {
            this.mensaje = "El password y la confirmación no coinciden";
            return;
        }
        //Guardamos el usuario en el session storage antes de navegar
        //sessionStorage.setItem("usuario",JSON.stringify(this.usuario))
        //Antes de navegar guardamos el usuario en el sessionService
        this.sessionService.setItem("usuario", this.usuario);
        //this.router.navigate(['/usuarios/aceptacion'])
        this.router.navigateByUrl('/usuarios/aceptacion');
    }
}
RegistroComponent.ɵfac = function RegistroComponent_Factory(t) { return new (t || RegistroComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_servicios_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"])); };
RegistroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegistroComponent, selectors: [["app-registro"]], decls: 43, vars: 7, consts: [[1, "text-center"], ["id", "formulario", 1, "form-horizontal"], [1, "form-group"], ["for", "nombre", 1, "control-label", "col-xs-2"], [1, "col-xs-8"], ["type", "text", "required", "required", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "login", 1, "control-label", "col-xs-2"], ["for", "password", 1, "control-label", "col-xs-2"], ["type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "cp", 1, "control-label", "col-xs-2"], ["for", "correoE", 1, "control-label", "col-xs-2"], ["for", "idioma", 1, "control-label", "col-xs-2"], [1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "alert alert-danger", 4, "ngIf"], ["type", "button", "value", "Siguiente", 1, "btn", "mr-1", "btn-primary", 2, "width", "110px", 3, "click"], ["type", "button", "value", "Cancelar", "routerLink", "/", 1, "btn", "mr-1", "btn-warning", 2, "width", "110px"], [1, "alert", "alert-danger"]], template: function RegistroComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Alta de usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegistroComponent_Template_input_ngModelChange_9_listener($event) { return ctx.usuario.nombre = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegistroComponent_Template_input_ngModelChange_14_listener($event) { return ctx.usuario.login = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegistroComponent_Template_input_ngModelChange_19_listener($event) { return ctx.usuario.pw = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Confirmar password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegistroComponent_Template_input_ngModelChange_24_listener($event) { return ctx.confirmacionPw = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Correo E.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegistroComponent_Template_input_ngModelChange_29_listener($event) { return ctx.usuario.correoE = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Idioma");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegistroComponent_Template_select_ngModelChange_34_listener($event) { return ctx.usuario.idioma = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "ES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "EN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, RegistroComponent_div_39_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistroComponent_Template_input_click_41_listener() { return ctx.siguiente(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.usuario.nombre);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.usuario.login);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.usuario.pw);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.confirmacionPw);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.usuario.correoE);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.usuario.idioma);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mensaje);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL3VzdWFyaW9zL3JlZ2lzdHJvL3JlZ2lzdHJvLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistroComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-registro',
                templateUrl: './registro.component.html',
                styleUrls: ['./registro.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_servicios_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"] }]; }, null); })();


/***/ }),

/***/ "61L1":
/*!*****************************************************************************************!*\
  !*** ./src/app/componentes/tienda/confirmacion-compra/confirmacion-compra.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ConfirmacionCompraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmacionCompraComponent", function() { return ConfirmacionCompraComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_servicios_session_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/servicios/session.service */ "v8k3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class ConfirmacionCompraComponent {
    constructor(sessionService) {
        this.sessionService = sessionService;
        this.cesta = sessionService.getItem("cesta");
        //Arovechamos este momento para añadirle a la cesta el usuario
        if (!this.cesta.usuario) {
            this.cesta.usuario = sessionService.getItem("usuario");
            //Si la cesta no tiene direccion le ponemos la del usuario como valor inicial
            this.cesta.dirEntrega = this.cesta.usuario.direccion;
        }
    }
    ngOnInit() {
    }
}
ConfirmacionCompraComponent.ɵfac = function ConfirmacionCompraComponent_Factory(t) { return new (t || ConfirmacionCompraComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_servicios_session_service__WEBPACK_IMPORTED_MODULE_1__["SessionService"])); };
ConfirmacionCompraComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfirmacionCompraComponent, selectors: [["app-confirmacion-compra"]], decls: 21, vars: 3, consts: [[1, "text-center", "mt-4"], ["id", "formulario", 1, "form-horizontal"], [1, "form-group"], ["for", "direccion", 1, "control-label", "col-xs-2"], [1, "col-xs-8"], ["type", "text", "id", "direccion", "required", "required", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "fechaEntrega", 1, "control-label", "col-xs-2"], ["type", "text", "id", "fechaEntrega", "required", "required", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "formaPago", 1, "control-label", "col-xs-2"], ["type", "text", "id", "formaPago", "required", "required", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "text-center"], ["type", "button", "value", "Confirmar", 1, "btn", "mr-1", "btn-primary", 2, "width", "110px"], ["type", "button", "value", "Cancelar", "routerLink", "/tienda/cesta", 1, "btn", "mr-1", "btn-danger", 2, "width", "110px"]], template: function ConfirmacionCompraComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Confirmaci\u00F3n de la compra\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Direccion de entrega");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConfirmacionCompraComponent_Template_input_ngModelChange_7_listener($event) { return ctx.cesta.dirEntrega = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Fecha de entrega");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConfirmacionCompraComponent_Template_input_ngModelChange_12_listener($event) { return ctx.cesta.fechaEntrega = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Forma de pago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConfirmacionCompraComponent_Template_input_ngModelChange_17_listener($event) { return ctx.cesta.formaPago = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.cesta.dirEntrega);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.cesta.fechaEntrega);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.cesta.formaPago);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL3RpZW5kYS9jb25maXJtYWNpb24tY29tcHJhL2NvbmZpcm1hY2lvbi1jb21wcmEuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfirmacionCompraComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-confirmacion-compra',
                templateUrl: './confirmacion-compra.component.html',
                styleUrls: ['./confirmacion-compra.component.css']
            }]
    }], function () { return [{ type: src_app_servicios_session_service__WEBPACK_IMPORTED_MODULE_1__["SessionService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "DUq4":
/*!***************************************************************************************!*\
  !*** ./src/app/componentes/usuarios/maquetacion-login/maquetacion-login.component.ts ***!
  \***************************************************************************************/
/*! exports provided: MaquetacionLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaquetacionLoginComponent", function() { return MaquetacionLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class MaquetacionLoginComponent {
    constructor() { }
    ngOnInit() {
    }
}
MaquetacionLoginComponent.ɵfac = function MaquetacionLoginComponent_Factory(t) { return new (t || MaquetacionLoginComponent)(); };
MaquetacionLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MaquetacionLoginComponent, selectors: [["app-maquetacion-login"]], decls: 3, vars: 0, consts: [[1, "row"], [1, "col-6", "offset-3"]], template: function MaquetacionLoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL3VzdWFyaW9zL21hcXVldGFjaW9uLWxvZ2luL21hcXVldGFjaW9uLWxvZ2luLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaquetacionLoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-maquetacion-login',
                templateUrl: './maquetacion-login.component.html',
                styleUrls: ['./maquetacion-login.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Fx4D":
/*!***************************************************************!*\
  !*** ./src/app/componentes/usuarios/login/login.component.ts ***!
  \***************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_entidades_pedido__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/entidades/pedido */ "rMqn");
/* harmony import */ var src_app_entidades_usuario__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/entidades/usuario */ "zNaa");
/* harmony import */ var src_app_servicios_autenticacion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/servicios/autenticacion.service */ "vJ27");
/* harmony import */ var src_app_servicios_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/servicios/session.service */ "v8k3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









function LoginComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.mensaje);
} }
class LoginComponent {
    constructor(autenticacionService, sessionService, router) {
        this.autenticacionService = autenticacionService;
        this.sessionService = sessionService;
        this.router = router;
        this.mensaje = "";
        //Inicializar en constructor las propiedades del componene es más ortodoxo 
        this.usuario = new src_app_entidades_usuario__WEBPACK_IMPORTED_MODULE_2__["Usuario"]();
    }
    ngOnInit() {
    }
    entrar() {
        if (!this.usuario.login || !this.usuario.pw) {
            this.mensaje = "IMBECIL";
            return;
        }
        this
            .autenticacionService
            .getToken(this.usuario)
            .subscribe(respuesta => {
            this.sessionService.setItem("JWT", respuesta.JWT);
            this.sessionService.setItem("usuario", respuesta.usuario);
            //Si descrubrimos que inicializar la tienda es algo más que esta simple 
            //línea nos lo llevariamos a otra parte
            this.sessionService.setItem("cesta", new src_app_entidades_pedido__WEBPACK_IMPORTED_MODULE_1__["Pedido"]());
            this.router.navigateByUrl("/tienda/catalogo");
        }, (error) => this.mensaje = "Credenciales incorrectas");
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_servicios_autenticacion_service__WEBPACK_IMPORTED_MODULE_3__["AutenticacionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_servicios_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 21, vars: 3, consts: [[1, "card", "card-primary"], [1, "card-header"], [1, "card-body"], ["id", "formulario", 1, "form-horizontal"], [1, "form-group"], ["for", "login", 1, "control-label", "col-xs-2"], [1, "col-xs-10"], ["id", "login", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "pw", 1, "control-label", "col-xs-2"], ["id", "pw", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "alert alert-danger", 4, "ngIf"], [1, "text-center"], ["type", "button", "value", "Entrar", 1, "btn", "mr-1", "btn-primary", 2, "width", "110px", 3, "click"], ["type", "button", "routerLink", "/usuarios/registro", "value", "Registrarse", 1, "btn", "mr-1", "btn-primary", 2, "width", "110px"], [1, "alert", "alert-danger"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_11_listener($event) { return ctx.usuario.login = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Pw");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_16_listener($event) { return ctx.usuario.pw = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, LoginComponent_div_17_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_input_click_19_listener() { return ctx.entrar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.usuario.login);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.usuario.pw);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mensaje);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL3VzdWFyaW9zL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: src_app_servicios_autenticacion_service__WEBPACK_IMPORTED_MODULE_3__["AutenticacionService"] }, { type: src_app_servicios_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "GuxG":
/*!************************************************!*\
  !*** ./src/app/servicios/productos.service.ts ***!
  \************************************************/
/*! exports provided: ProductosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductosService", function() { return ProductosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _util_configuracion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/configuracion */ "MdKM");




class ProductosService {
    constructor(httpClient, configuracion) {
        this.httpClient = httpClient;
        this.configuracion = configuracion;
    }
    //listarProductos(criterio)
    listarProductos( /*criterio*/) {
        return this.httpClient.get(this.configuracion.url_servidor + "/productos");
    }
}
ProductosService.ɵfac = function ProductosService_Factory(t) { return new (t || ProductosService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_util_configuracion__WEBPACK_IMPORTED_MODULE_2__["Configuracion"])); };
ProductosService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProductosService, factory: ProductosService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductosService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _util_configuracion__WEBPACK_IMPORTED_MODULE_2__["Configuracion"] }]; }, null); })();


/***/ }),

/***/ "L5X7":
/*!**************************************************************!*\
  !*** ./src/app/componentes/maquetacion/pie/pie.component.ts ***!
  \**************************************************************/
/*! exports provided: PieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieComponent", function() { return PieComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PieComponent {
    constructor() { }
    ngOnInit() {
    }
}
PieComponent.ɵfac = function PieComponent_Factory(t) { return new (t || PieComponent)(); };
PieComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PieComponent, selectors: [["app-pie"]], decls: 3, vars: 0, consts: [[1, "text-center"]], template: function PieComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Este pie es una cosa estupenda. Nov. 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL21hcXVldGFjaW9uL3BpZS9waWUuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PieComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pie',
                templateUrl: './pie.component.html',
                styleUrls: ['./pie.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "LCnO":
/*!************************************************************!*\
  !*** ./src/app/interceptores/interceptor.autenticacion.ts ***!
  \************************************************************/
/*! exports provided: InterceptorAutenticacion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterceptorAutenticacion", function() { return InterceptorAutenticacion; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _servicios_session_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../servicios/session.service */ "v8k3");



//Los interceptores son servicios
//Se registran en el módulo (en este caso en AppModule)
//Deben implementar la interfaz HttpInterceptor
//Una interfaz es un contrato que firma una clase en el que se compromete a tener
//una serie de funciones
//La interfaz HttpInterceptor obliga a tener la funcion 'intercept'
class InterceptorAutenticacion {
    constructor(sessionService) {
        this.sessionService = sessionService;
    }
    intercept(req, next) {
        console.log("Interceptando una petición AJAX");
        let JWT = this.sessionService.getItem("JWT");
        if (JWT) {
            //Los objetos request en Angular son inmutables
            //Una vez creado no puede modificarse así que lo que hacemos es un clon
            //y le añadimos o modificamos cosas
            req = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${JWT}`
                }
            });
        }
        //Si no invocamos 'next' la petición no se enviará
        return next.handle(req);
    }
}
InterceptorAutenticacion.ɵfac = function InterceptorAutenticacion_Factory(t) { return new (t || InterceptorAutenticacion)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_servicios_session_service__WEBPACK_IMPORTED_MODULE_1__["SessionService"])); };
InterceptorAutenticacion.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: InterceptorAutenticacion, factory: InterceptorAutenticacion.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InterceptorAutenticacion, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _servicios_session_service__WEBPACK_IMPORTED_MODULE_1__["SessionService"] }]; }, null); })();


/***/ }),

/***/ "MdKM":
/*!***************************************!*\
  !*** ./src/app/util/configuracion.ts ***!
  \***************************************/
/*! exports provided: Configuracion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Configuracion", function() { return Configuracion; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class Configuracion {
    constructor() {
        this.url_servidor = "https://localhost:9000";
    }
}
Configuracion.ɵfac = function Configuracion_Factory(t) { return new (t || Configuracion)(); };
Configuracion.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: Configuracion, factory: Configuracion.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Configuracion, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], null, null); })();


/***/ }),

/***/ "Pbhe":
/*!***************************************************************************************!*\
  !*** ./src/app/componentes/tienda/maquetacion-tienda/maquetacion-tienda.component.ts ***!
  \***************************************************************************************/
/*! exports provided: MaquetacionTiendaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaquetacionTiendaComponent", function() { return MaquetacionTiendaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_servicios_session_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/servicios/session.service */ "v8k3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _maquetacion_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../maquetacion/menu/menu.component */ "1eAL");





class MaquetacionTiendaComponent {
    constructor(sessionService, router) {
        this.sessionService = sessionService;
        this.router = router;
        if (!sessionService.getItem("usuario")) {
            router.navigateByUrl("/");
        }
    }
    ngOnInit() {
    }
}
MaquetacionTiendaComponent.ɵfac = function MaquetacionTiendaComponent_Factory(t) { return new (t || MaquetacionTiendaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_servicios_session_service__WEBPACK_IMPORTED_MODULE_1__["SessionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
MaquetacionTiendaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MaquetacionTiendaComponent, selectors: [["app-maquetacion-tienda"]], decls: 6, vars: 0, consts: [[1, "row"], [1, "col-2"], [1, "col-8"]], template: function MaquetacionTiendaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_maquetacion_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__["MenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL3RpZW5kYS9tYXF1ZXRhY2lvbi10aWVuZGEvbWFxdWV0YWNpb24tdGllbmRhLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaquetacionTiendaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-maquetacion-tienda',
                templateUrl: './maquetacion-tienda.component.html',
                styleUrls: ['./maquetacion-tienda.component.css']
            }]
    }], function () { return [{ type: src_app_servicios_session_service__WEBPACK_IMPORTED_MODULE_1__["SessionService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _componentes_maquetacion_cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./componentes/maquetacion/cabecera/cabecera.component */ "jpJ4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _componentes_maquetacion_pie_pie_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./componentes/maquetacion/pie/pie.component */ "L5X7");





class AppComponent {
    constructor() {
        this.title = 'Angular';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-cabecera");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-pie");
    } }, directives: [_componentes_maquetacion_cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_1__["CabeceraComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _componentes_maquetacion_pie_pie_component__WEBPACK_IMPORTED_MODULE_3__["PieComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _componentes_usuarios_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./componentes/usuarios/login/login.component */ "Fx4D");
/* harmony import */ var _componentes_usuarios_registro_registro_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./componentes/usuarios/registro/registro.component */ "5XhP");
/* harmony import */ var _componentes_usuarios_aceptacion_terminos_aceptacion_terminos_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./componentes/usuarios/aceptacion-terminos/aceptacion-terminos.component */ "sOIe");
/* harmony import */ var _componentes_maquetacion_cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./componentes/maquetacion/cabecera/cabecera.component */ "jpJ4");
/* harmony import */ var _componentes_maquetacion_pie_pie_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./componentes/maquetacion/pie/pie.component */ "L5X7");
/* harmony import */ var _componentes_tienda_catalogo_catalogo_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./componentes/tienda/catalogo/catalogo.component */ "hdT5");
/* harmony import */ var _componentes_usuarios_maquetacion_login_maquetacion_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./componentes/usuarios/maquetacion-login/maquetacion-login.component */ "DUq4");
/* harmony import */ var _componentes_tienda_maquetacion_tienda_maquetacion_tienda_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./componentes/tienda/maquetacion-tienda/maquetacion-tienda.component */ "Pbhe");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_rutas_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.rutas.module */ "lPxS");
/* harmony import */ var _componentes_maquetacion_menu_menu_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./componentes/maquetacion/menu/menu.component */ "1eAL");
/* harmony import */ var _componentes_usuarios_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./componentes/usuarios/perfil/perfil.component */ "jNQp");
/* harmony import */ var _interceptores_interceptor_autenticacion__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./interceptores/interceptor.autenticacion */ "LCnO");
/* harmony import */ var _componentes_tienda_producto_producto_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./componentes/tienda/producto/producto.component */ "zWP2");
/* harmony import */ var _componentes_tienda_cesta_cesta_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./componentes/tienda/cesta/cesta.component */ "pOza");
/* harmony import */ var _componentes_tienda_detallePedido_detallePedido_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./componentes/tienda/detallePedido/detallePedido.component */ "unZE");
/* harmony import */ var _componentes_tienda_confirmacion_compra_confirmacion_compra_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./componentes/tienda/confirmacion-compra/confirmacion-compra.component */ "61L1");






















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        //Los interceptores de httpClient se registran aqui
        //'multi: true' indica que pueden haber más de uno formando una cadena
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
            useClass: _interceptores_interceptor_autenticacion__WEBPACK_IMPORTED_MODULE_16__["InterceptorAutenticacion"],
            multi: true
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _app_rutas_module__WEBPACK_IMPORTED_MODULE_13__["AppRutasModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_componentes_maquetacion_pie_pie_component__WEBPACK_IMPORTED_MODULE_8__["PieComponent"],
        _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _componentes_maquetacion_menu_menu_component__WEBPACK_IMPORTED_MODULE_14__["MenuComponent"],
        _componentes_tienda_cesta_cesta_component__WEBPACK_IMPORTED_MODULE_18__["CestaComponent"],
        _componentes_usuarios_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
        _componentes_usuarios_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_15__["PerfilComponent"],
        _componentes_tienda_producto_producto_component__WEBPACK_IMPORTED_MODULE_17__["ProductoComponent"],
        _componentes_usuarios_registro_registro_component__WEBPACK_IMPORTED_MODULE_5__["RegistroComponent"],
        _componentes_maquetacion_cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_7__["CabeceraComponent"],
        _componentes_tienda_catalogo_catalogo_component__WEBPACK_IMPORTED_MODULE_9__["CatalogoComponent"],
        _componentes_tienda_detallePedido_detallePedido_component__WEBPACK_IMPORTED_MODULE_19__["DetallePedidoComponent"],
        _componentes_usuarios_maquetacion_login_maquetacion_login_component__WEBPACK_IMPORTED_MODULE_10__["MaquetacionLoginComponent"],
        _componentes_tienda_maquetacion_tienda_maquetacion_tienda_component__WEBPACK_IMPORTED_MODULE_11__["MaquetacionTiendaComponent"],
        _componentes_usuarios_aceptacion_terminos_aceptacion_terminos_component__WEBPACK_IMPORTED_MODULE_6__["AceptacionTerminosComponent"],
        _componentes_tienda_confirmacion_compra_confirmacion_compra_component__WEBPACK_IMPORTED_MODULE_20__["ConfirmacionCompraComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _app_rutas_module__WEBPACK_IMPORTED_MODULE_13__["AppRutasModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _componentes_maquetacion_pie_pie_component__WEBPACK_IMPORTED_MODULE_8__["PieComponent"],
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _componentes_maquetacion_menu_menu_component__WEBPACK_IMPORTED_MODULE_14__["MenuComponent"],
                    _componentes_tienda_cesta_cesta_component__WEBPACK_IMPORTED_MODULE_18__["CestaComponent"],
                    _componentes_usuarios_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                    _componentes_usuarios_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_15__["PerfilComponent"],
                    _componentes_tienda_producto_producto_component__WEBPACK_IMPORTED_MODULE_17__["ProductoComponent"],
                    _componentes_usuarios_registro_registro_component__WEBPACK_IMPORTED_MODULE_5__["RegistroComponent"],
                    _componentes_maquetacion_cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_7__["CabeceraComponent"],
                    _componentes_tienda_catalogo_catalogo_component__WEBPACK_IMPORTED_MODULE_9__["CatalogoComponent"],
                    _componentes_tienda_detallePedido_detallePedido_component__WEBPACK_IMPORTED_MODULE_19__["DetallePedidoComponent"],
                    _componentes_usuarios_maquetacion_login_maquetacion_login_component__WEBPACK_IMPORTED_MODULE_10__["MaquetacionLoginComponent"],
                    _componentes_tienda_maquetacion_tienda_maquetacion_tienda_component__WEBPACK_IMPORTED_MODULE_11__["MaquetacionTiendaComponent"],
                    _componentes_usuarios_aceptacion_terminos_aceptacion_terminos_component__WEBPACK_IMPORTED_MODULE_6__["AceptacionTerminosComponent"],
                    _componentes_tienda_confirmacion_compra_confirmacion_compra_component__WEBPACK_IMPORTED_MODULE_20__["ConfirmacionCompraComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _app_rutas_module__WEBPACK_IMPORTED_MODULE_13__["AppRutasModule"]
                ],
                providers: [
                    //Los interceptores de httpClient se registran aqui
                    //'multi: true' indica que pueden haber más de uno formando una cadena
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
                        useClass: _interceptores_interceptor_autenticacion__WEBPACK_IMPORTED_MODULE_16__["InterceptorAutenticacion"],
                        multi: true
                    }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "hdT5":
/*!*******************************************************************!*\
  !*** ./src/app/componentes/tienda/catalogo/catalogo.component.ts ***!
  \*******************************************************************/
/*! exports provided: CatalogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogoComponent", function() { return CatalogoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_servicios_productos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/servicios/productos.service */ "GuxG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _producto_producto_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../producto/producto.component */ "zWP2");





function CatalogoComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-producto", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("producto", p_r1);
} }
class CatalogoComponent {
    constructor(productosService) {
        this.productosService = productosService;
        this.listarProductos();
    }
    ngOnInit() {
    }
    listarProductos() {
        this
            .productosService
            .listarProductos()
            .subscribe(productos => this.productos = productos, error => {
            console.log(error);
        });
    }
}
CatalogoComponent.ɵfac = function CatalogoComponent_Factory(t) { return new (t || CatalogoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_servicios_productos_service__WEBPACK_IMPORTED_MODULE_1__["ProductosService"])); };
CatalogoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CatalogoComponent, selectors: [["app-catalogo"]], decls: 39, vars: 1, consts: [["id", "accordion", 1, "mt-3"], [1, "card"], [1, "card-header"], ["data-toggle", "collapse", "href", "#collapseOne", 1, "card-link"], ["id", "collapseOne", "data-parent", "#accordion", 1, "collapse"], [1, "card-body"], ["id", "formulario", 1, "form-horizontal"], [1, "form-group"], ["for", "nombre", 1, "control-label", "col-xs-2"], [1, "col-xs-8"], ["type", "text", "id", "nombre", "required", "required", 1, "form-control"], ["for", "fabricante", 1, "control-label", "col-xs-2"], ["id", "fabricante", 1, "form-control"], ["for", "categoria", 1, "control-label", "col-xs-2"], ["id", "categoria", 1, "form-control"], [1, "row"], [1, "form-group", "col-6"], ["for", "precioMin", 1, "control-label", "col-xs-2"], ["type", "text", "id", "precioMin", 1, "form-control"], ["for", "precioMax", 1, "control-label", "col-xs-2"], ["type", "text", "id", "precioMax", 1, "form-control"], [1, "text-center"], ["type", "button", "value", "Buscar", 1, "btn", "mr-1", "btn-primary", 2, "width", "110px"], ["type", "button", "value", "Vaciar", 1, "btn", "mr-1", "btn-danger", 2, "width", "110px"], ["class", "col-4", 4, "ngFor", "ngForOf"], [1, "col-4"], [3, "producto"]], template: function CatalogoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "B\u00FAsqueda");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Fabricante");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Categor\u00EDa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Precio m\u00EDn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Precio m\u00E1x");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, CatalogoComponent_div_38_Template, 2, 1, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.productos);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _producto_producto_component__WEBPACK_IMPORTED_MODULE_3__["ProductoComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL3RpZW5kYS9jYXRhbG9nby9jYXRhbG9nby5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CatalogoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-catalogo',
                templateUrl: './catalogo.component.html',
                styleUrls: ['./catalogo.component.css']
            }]
    }], function () { return [{ type: src_app_servicios_productos_service__WEBPACK_IMPORTED_MODULE_1__["ProductosService"] }]; }, null); })();


/***/ }),

/***/ "jNQp":
/*!*****************************************************************!*\
  !*** ./src/app/componentes/usuarios/perfil/perfil.component.ts ***!
  \*****************************************************************/
/*! exports provided: PerfilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilComponent", function() { return PerfilComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_servicios_session_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/servicios/session.service */ "v8k3");
/* harmony import */ var src_app_servicios_usuarios_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/servicios/usuarios.service */ "mRib");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function PerfilComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.mensaje);
} }
class PerfilComponent {
    constructor(sessionService, usuariosService, router) {
        this.sessionService = sessionService;
        this.usuariosService = usuariosService;
        this.router = router;
        //usr es el usuario que está en la sesión
        let usr = sessionService.getItem("usuario");
        //en vez de unirlo directamente al formulario usaremos una copia
        //la clonación de objetos en js es una mierda pinchada en un palo porque 
        //no es en profundidad
        let usrCopia_1 = Object.create(usr);
        //Podemos serializar el objeto a JSON y luego deserializarlo
        //'clonaria' en profundidad pero se perderían el prototipo y cualquier funcion
        let usrCopia_2 = JSON.parse(JSON.stringify(usr));
        //Si queremos añadirle las funciones le podemos asignar el prototipo del objeto original
        Object.setPrototypeOf(usrCopia_2, usr);
        this.usuario = usrCopia_2;
        //Si usamos directamente el sessionService
        this.usuario = sessionService.getItemCopia("usuario");
    }
    ngOnInit() {
    }
    guardar() {
        this
            .usuariosService
            .modificarUsuario(this.usuario)
            .subscribe(usuarioModificado => {
            //Como todo ha ido bien sustituimos el usuario que está
            //en el sessionService por el nuevo
            //this.sessionService.setItem("usuario", this.usuario)
            //Tambien podemos utilizar el objeto que nos ha devuelto el servicio ReST
            this.sessionService.setItem("usuario", usuarioModificado);
            this.usuario = usuarioModificado;
            this.mensaje = "";
        }, error => {
            console.log(error);
            this.mensaje = "Ha fallado algo";
        });
    }
    baja() {
        this
            .usuariosService
            .borrarUsuario(this.usuario)
            .subscribe(respuesta => {
            //this.sessionService.removeItem("usuario")
            //this.sessionService.removeItem("JWT")
            this.sessionService.vaciar();
            this.router.navigateByUrl("/");
        }, error => console.log(error));
    }
}
PerfilComponent.ɵfac = function PerfilComponent_Factory(t) { return new (t || PerfilComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_servicios_session_service__WEBPACK_IMPORTED_MODULE_1__["SessionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_servicios_usuarios_service__WEBPACK_IMPORTED_MODULE_2__["UsuariosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
PerfilComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PerfilComponent, selectors: [["app-perfil"]], decls: 52, vars: 7, consts: [[1, "text-center"], ["id", "formulario", 1, "form-horizontal"], [1, "form-group"], ["for", "nombre", 1, "control-label", "col-xs-2"], [1, "col-xs-8"], ["type", "text", "id", "nombre", "required", "required", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "direccion", 1, "control-label", "col-xs-2"], ["type", "text", "id", "direccion", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["for", "telefono", 1, "control-label", "col-xs-2"], ["type", "text", "id", "telefono", "required", "required", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "correoE", 1, "control-label", "col-xs-2"], ["type", "text", "id", "correoE", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "idioma", 1, "control-label", "col-xs-2"], ["id", "idioma", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "alert alert-danger", 4, "ngIf"], ["type", "button", "value", "Guardar", 1, "btn", "mr-1", "btn-primary", 2, "width", "110px", 3, "click"], ["type", "button", "value", "Baja", "data-toggle", "modal", "data-target", "#myModal", 1, "btn", "mr-1", "btn-danger", 2, "width", "110px"], ["id", "myModal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", 1, "close"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-success"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-danger", 3, "click"], [1, "alert", "alert-danger"]], template: function PerfilComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Perfil de usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PerfilComponent_Template_input_ngModelChange_8_listener($event) { return ctx.usuario.nombre = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Direcci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PerfilComponent_Template_input_ngModelChange_13_listener($event) { return ctx.usuario.direccion = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Tel\u00E9fono");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PerfilComponent_Template_input_ngModelChange_18_listener($event) { return ctx.usuario.telefono = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Correo E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PerfilComponent_Template_input_ngModelChange_23_listener($event) { return ctx.usuario.correoE = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Idioma");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PerfilComponent_Template_select_ngModelChange_28_listener($event) { return ctx.usuario.idioma = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "ES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "EN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, PerfilComponent_div_33_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PerfilComponent_Template_input_click_35_listener() { return ctx.guardar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h4", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Borrar usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " \u00BFEst\u00E1 seguro de querer darse de baja? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PerfilComponent_Template_button_click_50_listener() { return ctx.baja(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Baja");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.usuario.nombre);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "form-control " + ctx.estiloLogin)("ngModel", ctx.usuario.direccion);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.usuario.telefono);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.usuario.correoE);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.usuario.idioma);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mensaje);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL3VzdWFyaW9zL3BlcmZpbC9wZXJmaWwuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PerfilComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-perfil',
                templateUrl: './perfil.component.html',
                styleUrls: ['./perfil.component.css']
            }]
    }], function () { return [{ type: src_app_servicios_session_service__WEBPACK_IMPORTED_MODULE_1__["SessionService"] }, { type: src_app_servicios_usuarios_service__WEBPACK_IMPORTED_MODULE_2__["UsuariosService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "jpJ4":
/*!************************************************************************!*\
  !*** ./src/app/componentes/maquetacion/cabecera/cabecera.component.ts ***!
  \************************************************************************/
/*! exports provided: CabeceraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CabeceraComponent", function() { return CabeceraComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CabeceraComponent {
    constructor() { }
    ngOnInit() {
    }
}
CabeceraComponent.ɵfac = function CabeceraComponent_Factory(t) { return new (t || CabeceraComponent)(); };
CabeceraComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CabeceraComponent, selectors: [["app-cabecera"]], decls: 4, vars: 0, consts: [[1, "text-center", "page-header"]], template: function CabeceraComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Tienda 3000 2.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL21hcXVldGFjaW9uL2NhYmVjZXJhL2NhYmVjZXJhLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CabeceraComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cabecera',
                templateUrl: './cabecera.component.html',
                styleUrls: ['./cabecera.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "lPxS":
/*!*************************************!*\
  !*** ./src/app/app.rutas.module.ts ***!
  \*************************************/
/*! exports provided: AppRutasModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRutasModule", function() { return AppRutasModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _componentes_usuarios_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./componentes/usuarios/login/login.component */ "Fx4D");
/* harmony import */ var _componentes_usuarios_registro_registro_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./componentes/usuarios/registro/registro.component */ "5XhP");
/* harmony import */ var _componentes_usuarios_aceptacion_terminos_aceptacion_terminos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./componentes/usuarios/aceptacion-terminos/aceptacion-terminos.component */ "sOIe");
/* harmony import */ var _componentes_tienda_catalogo_catalogo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./componentes/tienda/catalogo/catalogo.component */ "hdT5");
/* harmony import */ var _componentes_usuarios_maquetacion_login_maquetacion_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./componentes/usuarios/maquetacion-login/maquetacion-login.component */ "DUq4");
/* harmony import */ var _componentes_tienda_maquetacion_tienda_maquetacion_tienda_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./componentes/tienda/maquetacion-tienda/maquetacion-tienda.component */ "Pbhe");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _componentes_usuarios_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./componentes/usuarios/perfil/perfil.component */ "jNQp");
/* harmony import */ var _componentes_tienda_cesta_cesta_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./componentes/tienda/cesta/cesta.component */ "pOza");
/* harmony import */ var _componentes_tienda_confirmacion_compra_confirmacion_compra_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./componentes/tienda/confirmacion-compra/confirmacion-compra.component */ "61L1");













//Estas rutas son para el router-outlet que hay en MaquetacionLogin.html
const rutasMaquetacionLogin = [
    {
        path: '',
        component: _componentes_usuarios_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]
    },
    {
        path: 'registro',
        component: _componentes_usuarios_registro_registro_component__WEBPACK_IMPORTED_MODULE_2__["RegistroComponent"]
    },
    {
        path: 'aceptacion',
        component: _componentes_usuarios_aceptacion_terminos_aceptacion_terminos_component__WEBPACK_IMPORTED_MODULE_3__["AceptacionTerminosComponent"]
    }
];
//Estas rutas son para el router-outlet que hay en MaquetacionTienda.html
const rutasMaquetacionTienda = [
    {
        path: 'catalogo',
        component: _componentes_tienda_catalogo_catalogo_component__WEBPACK_IMPORTED_MODULE_4__["CatalogoComponent"]
    },
    {
        path: 'perfil',
        component: _componentes_usuarios_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_8__["PerfilComponent"]
    },
    {
        path: 'cesta',
        component: _componentes_tienda_cesta_cesta_component__WEBPACK_IMPORTED_MODULE_9__["CestaComponent"]
    },
    {
        path: 'confirmacion',
        component: _componentes_tienda_confirmacion_compra_confirmacion_compra_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmacionCompraComponent"]
    }
];
//Estas rutas son para el router-outlet que hay en AppComponent.html
const rutas = [
    {
        path: '',
        component: _componentes_usuarios_maquetacion_login_maquetacion_login_component__WEBPACK_IMPORTED_MODULE_5__["MaquetacionLoginComponent"],
        children: rutasMaquetacionLogin
    },
    {
        path: 'usuarios',
        component: _componentes_usuarios_maquetacion_login_maquetacion_login_component__WEBPACK_IMPORTED_MODULE_5__["MaquetacionLoginComponent"],
        children: rutasMaquetacionLogin
    },
    {
        path: 'tienda',
        component: _componentes_tienda_maquetacion_tienda_maquetacion_tienda_component__WEBPACK_IMPORTED_MODULE_6__["MaquetacionTiendaComponent"],
        children: rutasMaquetacionTienda
    }
];
class AppRutasModule {
}
AppRutasModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRutasModule });
AppRutasModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRutasModule_Factory(t) { return new (t || AppRutasModule)(); }, providers: [], imports: [[
            //Estas son las rutas que se asociarán a la primera carpeta de la url
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(rutas)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRutasModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRutasModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    //Estas son las rutas que se asociarán a la primera carpeta de la url
                    _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(rutas)
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]],
                providers: [],
                bootstrap: []
            }]
    }], null, null); })();


/***/ }),

/***/ "mRib":
/*!***********************************************!*\
  !*** ./src/app/servicios/usuarios.service.ts ***!
  \***********************************************/
/*! exports provided: UsuariosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosService", function() { return UsuariosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _util_configuracion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/configuracion */ "MdKM");




class UsuariosService {
    constructor(httpClient, configuracion) {
        this.httpClient = httpClient;
        this.configuracion = configuracion;
    }
    //POST /usuarios
    //Content-type: application/json
    //------------------------------
    //{ usuario }    
    registrarUsuario(usuario) {
        return this.httpClient.post(this.configuracion.url_servidor + "/usuarios", usuario);
    }
    //PUT /usuarios/:id
    //Content-type: application/json
    //Authorization: Bearer fuywggfgfew.ghfjkhgkjshg.hfjkdahfsjkdfh=
    //------------------------------
    //{ usuario }
    modificarUsuario(usuario) {
        //De esto se encarga el IterceptorAutenticacion
        //let opciones = {
        //    headers : {
        //        Authorization : 'Bearer asereje.ja.deje'
        //    }
        //}
        return this.httpClient.put(this.configuracion.url_servidor + "/usuarios/" + usuario._id, usuario /*, opciones*/);
    }
    //borrarUsuario (un usuario solo podrá darse de baja a si mismo)
    //DELETE /usuarios/:id
    //Authorization: Bearer fuywggfgfew.ghfjkhgkjshg.hfjkdahfsjkdfh=
    borrarUsuario(usuario) {
        return this.httpClient.delete(this.configuracion.url_servidor + "/usuarios/" + usuario._id);
    }
}
UsuariosService.ɵfac = function UsuariosService_Factory(t) { return new (t || UsuariosService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_util_configuracion__WEBPACK_IMPORTED_MODULE_2__["Configuracion"])); };
UsuariosService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UsuariosService, factory: UsuariosService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsuariosService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _util_configuracion__WEBPACK_IMPORTED_MODULE_2__["Configuracion"] }]; }, null); })();


/***/ }),

/***/ "pOza":
/*!*************************************************************!*\
  !*** ./src/app/componentes/tienda/cesta/cesta.component.ts ***!
  \*************************************************************/
/*! exports provided: CestaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CestaComponent", function() { return CestaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_servicios_session_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/servicios/session.service */ "v8k3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _detallePedido_detallePedido_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../detallePedido/detallePedido.component */ "unZE");






function CestaComponent_h4_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Todav\u00EDa no hay productos en la cesta\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CestaComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-detallePedido", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dp_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("detalle", dp_r2)("cesta", ctx_r1.cesta);
} }
class CestaComponent {
    constructor(sessionService) {
        this.sessionService = sessionService;
        sessionService.saludar();
        this.cesta = sessionService.getItem("cesta");
    }
    ngOnInit() {
    }
    //comprar
    vaciarCesta() {
        //Le podemos pedir a la cesta, que está guardada en el sessionService, que elimine sus detalles
        this.cesta.eliminarDetalles();
        //Tambien podemos directamente sustituir la cesta que hay en el sessionService por un pedido nuevo
        //this.sessionService.setItem("cesta", new Pedido())
        //this.cesta = this.sessionService.getItem("cesta")
    }
}
CestaComponent.ɵfac = function CestaComponent_Factory(t) { return new (t || CestaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_servicios_session_service__WEBPACK_IMPORTED_MODULE_1__["SessionService"])); };
CestaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CestaComponent, selectors: [["app-cesta"]], decls: 10, vars: 3, consts: [["class", "d-flex justify-content-center mt-4 mb-4", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-center", "mt-4", "mb-4"], ["type", "button", "value", "Guardar", 1, "btn", "btn-primary", "ml-2", 2, "width", "110px"], ["routerLink", "/tienda/confirmacion", 1, "btn", "btn-primary", "ml-2"], [1, "btn", "btn-danger", "ml-2", 3, "click"], [3, "detalle", "cesta"]], template: function CestaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CestaComponent_h4_0_Template, 2, 0, "h4", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CestaComponent_div_1_Template, 2, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Comprar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CestaComponent_Template_button_click_8_listener() { return ctx.vaciarCesta(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Vaciar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cesta.getDetalles().length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cesta.getDetalles());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Total ", ctx.cesta.total, " \u20AC ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _detallePedido_detallePedido_component__WEBPACK_IMPORTED_MODULE_4__["DetallePedidoComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL3RpZW5kYS9jZXN0YS9jZXN0YS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CestaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cesta',
                templateUrl: './cesta.component.html',
                styleUrls: ['./cesta.component.css']
            }]
    }], function () { return [{ type: src_app_servicios_session_service__WEBPACK_IMPORTED_MODULE_1__["SessionService"] }]; }, null); })();


/***/ }),

/***/ "rMqn":
/*!*************************************!*\
  !*** ./src/app/entidades/pedido.ts ***!
  \*************************************/
/*! exports provided: Pedido */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pedido", function() { return Pedido; });
class Pedido {
    constructor(_id = null, 
    //Composición de objetos
    usuario = null, fechaEntrega = null, formaPago = null, dirEntrega = null, estado = null, total = null, detalles = []) {
        this._id = _id;
        this.usuario = usuario;
        this.fechaEntrega = fechaEntrega;
        this.formaPago = formaPago;
        this.dirEntrega = dirEntrega;
        this.estado = estado;
        this.total = total;
        this.detalles = detalles;
    }
    //Añade un detalle al pedido
    //Si el pedido cuenta ya con un detalle que incñuye el producto recibido los suma
    addDetalle(nuevoDetalle) {
        let encontrado = false;
        for (let dp of this.detalles) {
            if (dp.producto._id == nuevoDetalle.producto._id) {
                //dp.cantidad = dp.cantidad + nuevoDetalle.cantidad
                dp.cantidad += nuevoDetalle.cantidad;
                encontrado = true;
                break;
            }
        }
        if (!encontrado) {
            this.detalles.push(nuevoDetalle);
        }
        this.calcularTotal();
    }
    //Aumenta la cantidad del detalle que tiene el producto indicado en 1
    aumentarCantidadDetalle(idProducto) {
        for (let dp of this.detalles) {
            if (dp.producto._id == idProducto) {
                dp.cantidad++;
                break;
            }
        }
        this.calcularTotal();
    }
    //Disminuye la cantidad del detalle que tiene el producto indicado en 1
    //La cantidad nunca llegará a 0
    reducirCantidadDetalle(idProducto) {
        for (let dp of this.detalles) {
            if (dp.producto._id == idProducto && dp.cantidad > 1) {
                dp.cantidad--;
                break;
            }
        }
        this.calcularTotal();
    }
    //Elimina el detalle que contiene el producto indicado
    eliminarDetalle(idProducto) {
        for (let a = 0; a < this.detalles.length; a++) {
            let dp = this.detalles[a];
            if (dp.producto._id == idProducto) {
                this.detalles.splice(a, 1);
                break;
            }
        }
        this.calcularTotal();
    }
    eliminarDetalles() {
        this.detalles = [];
        this.calcularTotal();
    }
    calcularTotal() {
        let total = 0;
        for (let dp of this.detalles) {
            total += dp.cantidad * dp.precio;
        }
        this.total = total;
    }
    getDetalles() {
        //Aqui devolveremos una copia del array para no hacer el canelo
        return this.detalles;
    }
}
/*

Cod: PED-17
Fecha: 19/11/2020
Cliente: Venancia

------------------------------------
PROD   DESC            CANT   PRECIO

p1     movida             6       10
p2     movidón            6       10
p3     movidote           6       10

*/


/***/ }),

/***/ "sOIe":
/*!*******************************************************************************************!*\
  !*** ./src/app/componentes/usuarios/aceptacion-terminos/aceptacion-terminos.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: AceptacionTerminosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AceptacionTerminosComponent", function() { return AceptacionTerminosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_servicios_session_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/servicios/session.service */ "v8k3");
/* harmony import */ var src_app_servicios_usuarios_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/servicios/usuarios.service */ "mRib");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







function AceptacionTerminosComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.mensaje);
} }
class AceptacionTerminosComponent {
    constructor(sessionService, usuariosService, router) {
        this.sessionService = sessionService;
        this.usuariosService = usuariosService;
        this.router = router;
        this.acepta = false;
        this.mensaje = "";
    }
    ngOnInit() {
    }
    registrar() {
        if (!this.acepta) {
            this.mensaje = "Debe aceptar los terminos";
            return;
        }
        let usuarioARegistrar = this.sessionService.getItem("usuario");
        this
            .usuariosService
            .registrarUsuario(usuarioARegistrar)
            .subscribe(
        //function(data){ console.log(data) }
        data => this.router.navigateByUrl("/"), error => this.mensaje = "DATOS INCORRECTOS");
    }
}
AceptacionTerminosComponent.ɵfac = function AceptacionTerminosComponent_Factory(t) { return new (t || AceptacionTerminosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_servicios_session_service__WEBPACK_IMPORTED_MODULE_1__["SessionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_servicios_usuarios_service__WEBPACK_IMPORTED_MODULE_2__["UsuariosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AceptacionTerminosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AceptacionTerminosComponent, selectors: [["app-aceptacion-terminos"]], decls: 19, vars: 2, consts: [[1, "text-center"], [1, "text-justify"], ["class", "alert alert-danger", 4, "ngIf"], [1, "control-label", "mr-2"], ["type", "checkbox", 1, "mr-2", 3, "ngModel", "ngModelChange"], ["routerLink", "/usuarios/registro", 1, "btn", "mr-2", "btn-warning", 2, "width", "110px"], [1, "btn", "mr-2", "btn-success", 2, "width", "110px", 3, "click"], [1, "alert", "alert-danger"]], template: function AceptacionTerminosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Aceptaci\u00F3n de condiciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Lorem fistrum nostrud tiene musho peligro ullamco a gramenawer nostrud voluptate te voy a borrar el cerito elit me cago en tus muelas reprehenderit. Llevame al sircoo reprehenderit hasta luego Lucas incididunt commodo jarl est\u00E1 la cosa muy malar officia. No te digo trigo por no llamarte Rodrigor quis incididunt labore laboris se calle ust\u00E9e tempor magna. Elit torpedo tempor caballo blanco caballo negroorl te va a has\u00E9 pupitaa consequat hasta luego Lucas.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Qui torpedo et ese pedazo de apetecan ullamco sed sit amet magna. Tempor nisi cillum caballo blanco caballo negroorl. De la pradera tiene musho peligro consequat elit veniam ex labore ese pedazo de cillum. Voluptate ese que llega consectetur incididunt por la gloria de mi madre caballo blanco caballo negroorl labore labore. A peich exercitation llevame al sircoo consequat tempor. Sexuarl reprehenderit amatomaa magna magna quis a peich apetecan ahorarr. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " A gramenawer sit amet jarl aliqua officia commodo condemor no puedor va ust\u00E9 muy cargadoo ese que llega. Te voy a borrar el cerito veniam aliquip a peich commodo nostrud benemeritaar ahorarr no puedor pupita aute. Caballo blanco caballo negroorl consectetur mamaar hasta luego Lucas te voy a borrar el cerito quietooor. Dolor te va a has\u00E9 pupitaa quietooor sed veniam ese pedazo de ut la caidita diodenoo se calle ust\u00E9e. Aliquip pecador no te digo trigo por no llamarte Rodrigor occaecat jarl.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AceptacionTerminosComponent_div_10_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Acepto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AceptacionTerminosComponent_Template_input_ngModelChange_14_listener($event) { return ctx.acepta = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Volver");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AceptacionTerminosComponent_Template_button_click_17_listener() { return ctx.registrar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Registrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mensaje);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.acepta);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL3VzdWFyaW9zL2FjZXB0YWNpb24tdGVybWlub3MvYWNlcHRhY2lvbi10ZXJtaW5vcy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AceptacionTerminosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-aceptacion-terminos',
                templateUrl: './aceptacion-terminos.component.html',
                styleUrls: ['./aceptacion-terminos.component.css']
            }]
    }], function () { return [{ type: src_app_servicios_session_service__WEBPACK_IMPORTED_MODULE_1__["SessionService"] }, { type: src_app_servicios_usuarios_service__WEBPACK_IMPORTED_MODULE_2__["UsuariosService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "unZE":
/*!*****************************************************************************!*\
  !*** ./src/app/componentes/tienda/detallePedido/detallePedido.component.ts ***!
  \*****************************************************************************/
/*! exports provided: DetallePedidoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallePedidoComponent", function() { return DetallePedidoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class DetallePedidoComponent {
    constructor() {
    }
    ngOnInit() {
    }
    aumentarCantidad() {
        this.cesta.aumentarCantidadDetalle(this.detalle.producto._id);
    }
    disminuirCantidad() {
        this.cesta.reducirCantidadDetalle(this.detalle.producto._id);
    }
    borrarDetalle() {
        this.cesta.eliminarDetalle(this.detalle.producto._id);
    }
}
DetallePedidoComponent.ɵfac = function DetallePedidoComponent_Factory(t) { return new (t || DetallePedidoComponent)(); };
DetallePedidoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetallePedidoComponent, selectors: [["app-detallePedido"]], inputs: { detalle: "detalle", cesta: "cesta" }, decls: 24, vars: 6, consts: [[1, "card", "mt-4"], [1, "row"], [1, "col-3"], ["alt", "Card image", 1, "card-img-top", 3, "src"], [1, "col-9"], [1, "card-title"], [1, "card-text"], [1, "d-flex", "mb-3"], [1, "p-2", "mr-auto"], [1, "p-2"], [1, "btn", "btn-primary", "ml-1", "mr-1", 3, "click"], [1, "btn", "btn-danger", "ml-1", "mr-1", 3, "click"]], template: function DetallePedidoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetallePedidoComponent_Template_button_click_16_listener() { return ctx.disminuirCantidad(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetallePedidoComponent_Template_button_click_20_listener() { return ctx.aumentarCantidad(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetallePedidoComponent_Template_button_click_22_listener() { return ctx.borrarDetalle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Borrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://picsum.photos/300/200?random=", ctx.detalle.producto._id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.detalle.producto.nombre);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.detalle.producto.fabricante);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.detalle.producto.descripcion.substring(0, 200), "...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.detalle.precio, " \u20AC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.detalle.cantidad, " ");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL3RpZW5kYS9kZXRhbGxlUGVkaWRvL2RldGFsbGVQZWRpZG8uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetallePedidoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-detallePedido',
                templateUrl: './detallePedido.component.html',
                styleUrls: ['./detallePedido.component.css']
            }]
    }], function () { return []; }, { detalle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cesta: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "v8k3":
/*!**********************************************!*\
  !*** ./src/app/servicios/session.service.ts ***!
  \**********************************************/
/*! exports provided: SessionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionService", function() { return SessionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


//Con providedIn:root convertimos a este servicio en global para la aplicacion
class SessionService {
    constructor() {
        //Nuestro SessionService guarda las movidas EN MEMORIA
        this.valores = [];
        console.log("Creando SessionService");
    }
    setItem(clave, valor) {
        //Guardamos las cosas EN MEMORIA!
        this.valores[clave] = valor;
    }
    setItemCopia(clave, valor) {
        //Guardamos una copia
        let copia = JSON.parse(JSON.stringify(valor));
        Object.setPrototypeOf(copia, valor);
        this.valores[clave] = valor;
    }
    getItem(clave) {
        return this.valores[clave];
    }
    getItemCopia(clave) {
        let objeto = this.valores[clave];
        let copia = JSON.parse(JSON.stringify(objeto));
        Object.setPrototypeOf(copia, objeto);
        return copia;
    }
    removeItem(clave) {
        //Para borrar una entrada en un array asociativo
        delete this.valores[clave];
    }
    vaciar() {
        this.valores = [];
    }
    saludar() {
        console.log("Hola, soy el SessionService!");
    }
}
SessionService.ɵfac = function SessionService_Factory(t) { return new (t || SessionService)(); };
SessionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SessionService, factory: SessionService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SessionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vJ27":
/*!****************************************************!*\
  !*** ./src/app/servicios/autenticacion.service.ts ***!
  \****************************************************/
/*! exports provided: AutenticacionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutenticacionService", function() { return AutenticacionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _util_configuracion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/configuracion */ "MdKM");




class AutenticacionService {
    constructor(httpClient, configuracion) {
        this.httpClient = httpClient;
        this.configuracion = configuracion;
    }
    getToken(usuario) {
        return this.httpClient.post(this.configuracion.url_servidor + "/login", usuario);
    }
}
AutenticacionService.ɵfac = function AutenticacionService_Factory(t) { return new (t || AutenticacionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_util_configuracion__WEBPACK_IMPORTED_MODULE_2__["Configuracion"])); };
AutenticacionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AutenticacionService, factory: AutenticacionService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutenticacionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _util_configuracion__WEBPACK_IMPORTED_MODULE_2__["Configuracion"] }]; }, null); })();


/***/ }),

/***/ "vXwx":
/*!********************************************!*\
  !*** ./src/app/entidades/detallePedido.ts ***!
  \********************************************/
/*! exports provided: DetallePedido */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallePedido", function() { return DetallePedido; });
class DetallePedido {
    constructor(cantidad = null, precio = null, descuento = null, producto = null) {
        this.cantidad = cantidad;
        this.precio = precio;
        this.descuento = descuento;
        this.producto = producto;
    }
}


/***/ }),

/***/ "zNaa":
/*!**************************************!*\
  !*** ./src/app/entidades/usuario.ts ***!
  \**************************************/
/*! exports provided: Usuario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Usuario", function() { return Usuario; });
class Usuario {
    constructor(_id = null, login = null, 
    //
    //A VER QUE PASA CON ESTO:
    //
    pw = null, nombre = null, 
    //¿necesitamos realmente el rol?
    rol = null, correoE = null, direccion = null, telefono = null, idioma = null) {
        this._id = _id;
        this.login = login;
        this.pw = pw;
        this.nombre = nombre;
        this.rol = rol;
        this.correoE = correoE;
        this.direccion = direccion;
        this.telefono = telefono;
        this.idioma = idioma;
    }
}


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zWP2":
/*!*******************************************************************!*\
  !*** ./src/app/componentes/tienda/producto/producto.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProductoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoComponent", function() { return ProductoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_entidades_detallePedido__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/entidades/detallePedido */ "vXwx");
/* harmony import */ var src_app_servicios_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/servicios/session.service */ "v8k3");




class ProductoComponent {
    constructor(sessionService) {
        this.sessionService = sessionService;
    }
    ngOnInit() {
    }
    comprar() {
        let cesta = this.sessionService.getItem("cesta");
        let detalle = new src_app_entidades_detallePedido__WEBPACK_IMPORTED_MODULE_1__["DetallePedido"](1, this.producto.precio, 0, this.producto);
        cesta.addDetalle(detalle);
    }
}
ProductoComponent.ɵfac = function ProductoComponent_Factory(t) { return new (t || ProductoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_servicios_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"])); };
ProductoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductoComponent, selectors: [["app-producto"]], inputs: { producto: "producto" }, decls: 14, vars: 5, consts: [[1, "card", "mt-4"], ["alt", "Card image", 1, "card-img-top", 3, "src"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "row"], [1, "col-8"], [1, "btn", "btn-primary", "col-4", 3, "click"]], template: function ProductoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductoComponent_Template_button_click_12_listener() { return ctx.comprar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Comprar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://picsum.photos/300/200?random=", ctx.producto._id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.producto.nombre);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.producto.fabricante);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.producto.descripcion.substring(0, 200), "...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.producto.precio, " \u20AC");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL3RpZW5kYS9wcm9kdWN0by9wcm9kdWN0by5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-producto',
                templateUrl: './producto.component.html',
                styleUrls: ['./producto.component.css']
            }]
    }], function () { return [{ type: src_app_servicios_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"] }]; }, { producto: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map