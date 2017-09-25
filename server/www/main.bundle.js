webpackJsonp([1,4],{

/***/ 115:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 115;


/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(127);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Project Management';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(206),
        styles: [__webpack_require__(196)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__projects_projects_component__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__projectdetails_projectdetails_component__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_project_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_router__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__addproject_addproject_component__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//  ------------------ services

// ------------ routing ---


 // hash url provider
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__projects_projects_component__["a" /* ProjectsComponent */],
            __WEBPACK_IMPORTED_MODULE_6__projectdetails_projectdetails_component__["a" /* ProjectdetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_8__app_router__["a" /* routingComponents */],
            __WEBPACK_IMPORTED_MODULE_9__addproject_addproject_component__["a" /* AddprojectComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_8__app_router__["b" /* AppRoutingModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__services_project_service__["a" /* ProjectService */],
            { provide: __WEBPACK_IMPORTED_MODULE_10__angular_common__["a" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_10__angular_common__["b" /* HashLocationStrategy */] }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__projects_projects_component__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__projectdetails_projectdetails_component__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__addproject_addproject_component__ = __webpack_require__(71);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routingComponents; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__projects_projects_component__["a" /* ProjectsComponent */] },
    { path: 'details/:id', component: __WEBPACK_IMPORTED_MODULE_3__projectdetails_projectdetails_component__["a" /* ProjectdetailsComponent */] },
    { path: 'addproject', component: __WEBPACK_IMPORTED_MODULE_4__addproject_addproject_component__["a" /* AddprojectComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]],
    })
], AppRoutingModule);

var routingComponents = [__WEBPACK_IMPORTED_MODULE_2__projects_projects_component__["a" /* ProjectsComponent */], __WEBPACK_IMPORTED_MODULE_3__projectdetails_projectdetails_component__["a" /* ProjectdetailsComponent */]];
//# sourceMappingURL=app.router.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return contentHeaders; });

var contentHeaders = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Headers */]();
contentHeaders.append('Accept', 'application/json');
contentHeaders.append('Content-Type', 'application/json');
contentHeaders.append('Access-Control-Allow-Origin', '*');
//# sourceMappingURL=headers.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 205:
/***/ (function(module, exports) {

module.exports = "<form class=\"well\" (ngSubmit)=\"addProject($event)\">\n    <div class=\"form-group\">\n        <input type=\"text\" [(ngModel)]=\"projectname\" name=\"projectname\" class=\"form-control\" placeholder=\"Add Name ..\">\n        <input type=\"number\" [(ngModel)]=\"estimation\" name=\"estimation\" class=\"form-control\" placeholder=\"0\">\n        <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\" placeholder=\"John, Jonshon, Brad, ...\">\n    </div>\n    <button type=\"submit\" class=\"btn btn-success\">Add</button>\n</form>"

/***/ }),

/***/ 206:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"jumbotron\">\n        <h1>{{title}}</h1>\n        <p>Welcome to Project Management system. Track your project from anywhere and from any device</p>\n        <button class=\"btn btn-success\"><a routerLink=\"/addproject\">Add New</a></button>\n    </div>\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ 207:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-12\">\n        <h2>{{projectDetails.projectName}} / Estimated for {{projectDetails.estimation}} hours</h2>\n        <p>Status :: Ongoing</p>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-md-6\">\n        <h3>Team Members</h3>\n        <ul *ngFor=\"let member of projectDetails.team\">\n            <li>{{member.name}}</li>\n        </ul>\n    </div>\n    <div class=\"col-md-6\">\n        <h3>Comments</h3>\n        <div *ngFor=\"let teamcomment of projectDetails.team\">\n            <div class=\"media\">\n                <div class=\"media-left\">\n                    {{teamcomment.name}}\n                </div>\n                <div class=\"media-body\">\n                    <!-- <h4 class=\"media-heading\">Media heading</h4> -->\n                    <p *ngFor=\"let comment of teamcomment.comments\">{{comment.message}} | {{comment.duration}} hours | {{comment.date}}</p>\n                </div>\n            </div>\n        </div>\n        <div>\n            <form class=\"form-group\" (ngSubmit)=\"addComment()\">\n                <div class=\"row\">\n                    <div class=\"col-md-7\">\n                        <input type=\"text\" [(ngModel)]=\"message\" name=\"message\" class=\"form-control\" id=\"comment\" placeholder=\"Comment...\">\n                    </div>\n                    <div class=\"col-md-3\">\n                        <input type=\"text\" [(ngModel)]=\"membername\" name=\"membername\" class=\"form-control\" id=\"memname\" placeholder=\"name..\">\n                    </div>\n                    <button type=\"submit\" class=\"btn btn-success col-md-2\">Submit</button>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 208:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-sm-6 col-md-3\" *ngFor=\"let project of projects\">\n        <div class=\"thumbnail\">\n            <div class=\"caption\">\n                <h1>{{project.projectName}}</h1>\n                <p>{{project.estimation}} hours {{project._id}}</p>\n                <button type=\"button\" class=\"btn btn-success\"><a routerLink=\"/details/{{project._id}}\">Details</a></button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 252:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(116);


/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__headers__ = __webpack_require__(126);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProjectService = (function () {
    function ProjectService(http) {
        this.http = http;
        console.log("Project service initialized");
    }
    ProjectService.prototype.getProjects = function () {
        return this.http.get("http://localhost:3000/api/projects")
            .map(function (res) { return res.json(); });
    };
    // get single project
    ProjectService.prototype.getSingleProject = function (_id) {
        return this.http.get("http://localhost:3000/api/project/" + _id, { headers: __WEBPACK_IMPORTED_MODULE_5__headers__["a" /* contentHeaders */] })
            .map(function (res) { return res.json(); });
    };
    // --------- add new project
    ProjectService.prototype.addProjects = function (newProject) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/api/project', JSON.stringify(newProject), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // ---------- add comment 
    ProjectService.prototype.addComment = function (newComment, _id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.put("http://localhost:3000/api/project/" + _id, JSON.stringify(newComment), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return ProjectService;
}());
ProjectService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], ProjectService);

var _a;
//# sourceMappingURL=project.service.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Projects; });
var Projects = (function () {
    function Projects() {
    }
    Projects._id = function (arg0) {
        throw new Error("Method not implemented.");
    };
    return Projects;
}());

/*
[
        {
            "name": "Gopal",
            "comments": [
                {
                    "message": "work dummy message",
                    "duration": 2,
                    "date": "15/09/2017"
                }
            ]
        },
        {
            "name": "Tapas",
            "comments": [
                {
                    "message": "work dummy message",
                    "duration": 3,
                    "date": "15/09/2017"
                }
            ]
        }
    ]
*/ 
//# sourceMappingURL=Projects.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_project_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Projects__ = __webpack_require__(70);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddprojectComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddprojectComponent = (function () {
    /*
    {
      "_id": {
          "$oid": "59bbaf77f36d2832fb04344a"
      },
      "projectName": "abc",
      "estimation": 100,
      "isDome": false,
      "team": [
          {
              "name": "Gopal",
              "comments": [
                  {
                      "message": "work dummy message",
                      "duration": 2,
                      "date": "15/09/2017"
                  }
              ]
          },
          {
              "name": "Tapas",
              "comments": [
                  {
                      "message": "work dummy message",
                      "duration": 3,
                      "date": "15/09/2017"
                  }
              ]
          }
      ]
  }
    
    */
    function AddprojectComponent(projectService) {
        this.projectService = projectService;
        this.projects = [__WEBPACK_IMPORTED_MODULE_2__Projects__["a" /* Projects */]];
        this.names = [];
        // teamMemeber:any = {
        //   name:'',
        //   comments:[{
        //       message:'',
        //       duration:0,
        //       date:''
        //   }
        //   ]
        // }
        this.team = [];
    }
    AddprojectComponent.prototype.addProject = function (event) {
        var _this = this;
        event.preventDefault();
        this.names = this.name.split(',');
        console.log('this.names ', this.names);
        for (var i = 0; i < this.names.length; i++) {
            // itemIds.push(data[0].item);
            this.team.push({
                name: this.names[i]
                // comments: [{
                //   message: '',
                //   duration: 0,
                //   date: ''
                // }
                // ]
            });
        }
        var newProject = {
            projectName: this.projectname,
            estimation: this.estimation,
            isDome: false,
            team: this.team
        };
        this.projectService.addProjects(newProject)
            .subscribe(function (project) {
            _this.projects.push(project);
            //this.projectname = '';
        });
    };
    AddprojectComponent.prototype.ngOnInit = function () {
    };
    return AddprojectComponent;
}());
AddprojectComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-addproject',
        template: __webpack_require__(205),
        styles: [__webpack_require__(195)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_project_service__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_project_service__["a" /* ProjectService */]) === "function" && _a || Object])
], AddprojectComponent);

var _a;
//# sourceMappingURL=addproject.component.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_project_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_socket_io_client__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_socket_io_client__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectdetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProjectdetailsComponent = (function () {
    function ProjectdetailsComponent(route, router, projectService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.projectService = projectService;
        this.projectDetails = {
            projectName: '',
            estimation: 100,
            team: [{
                    name: '',
                }]
        };
        this.project$ = this.route.snapshot.paramMap.get('id');
        console.log('this.project$ ', this.project$);
        this.projectService.getSingleProject(this.project$)
            .subscribe(function (Project) {
            console.log(Project);
            _this.projectDetails = Project;
            console.log(_this.projectDetails);
        });
        this.socket = __WEBPACK_IMPORTED_MODULE_4_socket_io_client__();
        this.socket.on("newComments", function () {
            _this.project$ = _this.route.snapshot.paramMap.get('id');
            console.log('socket on', _this.project$);
            _this.projectService.getSingleProject(_this.project$)
                .subscribe(function (Project) {
                console.log(' Project ', Project);
                _this.projectDetails = Project;
                console.log(_this.projectDetails);
            });
        });
    }
    // add comment
    ProjectdetailsComponent.prototype.addComment = function () {
        console.log('added');
        var newComment = {
            message: this.message,
            duration: 2,
            date: '2017/09/18',
            name: this.membername
        };
        var _id = this.project$;
        this.projectService.addComment(newComment, _id).subscribe(function (data) {
            newComment;
        });
        this.socket.emit('addComment', newComment);
    };
    ProjectdetailsComponent.prototype.ngOnInit = function () {
    };
    ProjectdetailsComponent.prototype.ngAfterViewInit = function () {
    };
    return ProjectdetailsComponent;
}());
ProjectdetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-projectdetails',
        template: __webpack_require__(207),
        styles: [__webpack_require__(197)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_project_service__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_project_service__["a" /* ProjectService */]) === "function" && _c || Object])
], ProjectdetailsComponent);

var _a, _b, _c;
//# sourceMappingURL=projectdetails.component.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_project_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Projects__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_socket_io_client__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectsComponent = (function () {
    function ProjectsComponent(projectService) {
        var _this = this;
        this.projectService = projectService;
        this.projects = [__WEBPACK_IMPORTED_MODULE_2__Projects__["a" /* Projects */]];
        this.projectService.getProjects()
            .subscribe(function (Projects) {
            // console.log(Projects);
            _this.projects = Projects;
        });
        this.socket = __WEBPACK_IMPORTED_MODULE_3_socket_io_client__();
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    return ProjectsComponent;
}());
ProjectsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-projects',
        template: __webpack_require__(208),
        styles: [__webpack_require__(198)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_project_service__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_project_service__["a" /* ProjectService */]) === "function" && _a || Object])
], ProjectsComponent);

var _a;
//# sourceMappingURL=projects.component.js.map

/***/ })

},[254]);
//# sourceMappingURL=main.bundle.js.map