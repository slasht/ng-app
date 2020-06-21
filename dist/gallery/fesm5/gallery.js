import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { Component, Injectable, Input, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var GalleryComponent = /** @class */ (function () {
    function GalleryComponent() {
    }
    /**
     * @return {?}
     */
    GalleryComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    GalleryComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gallery',
                    template: "<!-- Page Content  -->\n<div id=\"content\">\n\n  <router-outlet></router-outlet>\n\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    GalleryComponent.ctorParameters = function () { return []; };
    return GalleryComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 *  The get gallery request model.
 * @param max The max items to retrieve.
 *
 */
var /**
 *  The get gallery request model.
 * @param max The max items to retrieve.
 *
 */
GetGalleryRequest = /** @class */ (function () {
    function GetGalleryRequest(max) {
        if (max === void 0) { max = 9999; }
        this.max = max;
    }
    return GetGalleryRequest;
}());
/**
 *  The get gallery response model.
 *
 */
var /**
 *  The get gallery response model.
 *
 */
GetGalleryResponse = /** @class */ (function () {
    function GetGalleryResponse(items) {
        this.items = items;
    }
    return GetGalleryResponse;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var GalleryService = /** @class */ (function () {
    function GalleryService(_httpClient) {
        var _this = this;
        this._httpClient = _httpClient;
        /**
         * Get all gallery items.
         */
        this.get = function (request) {
            return _this._httpClient.get(_this.actionUrl + "/photos").pipe(map(function (items) {
                // Create and return response with the returned items.
                return new GetGalleryResponse(items.slice(0, request.max));
            }), catchError(function (err) {
                return throwError(err);
            }));
        };
        // Set the API url.
        this.actionUrl = 'https://jsonplaceholder.typicode.com';
    }
    GalleryService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    GalleryService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    return GalleryService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var TopComponent = /** @class */ (function () {
    function TopComponent(galleryService) {
        this.galleryService = galleryService;
    }
    /**
     * @return {?}
     */
    TopComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var request = new GetGalleryRequest(10);
        // Call the service.
        this.galleryService.get(request)
            .subscribe(function (response) {
            // Set the items with the response.
            // Set the items with the response.
            _this.galleryItems = response.items;
        }, function (error) {
            console.log("Invoking get gallery top request encountered  an error. " + error + ".");
        }, function () {
            console.log("Completed invoking get gallery top request.");
        });
    };
    TopComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gallery-top',
                    template: "<section>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div *ngFor=\"let galleryItem of galleryItems\">\n        <!-- Gallery item -->\n        <gallery-item [model]=\"galleryItem\"></gallery-item>\n      </div>\n    </div>\n  </div>\n</section>\n"
                }] }
    ];
    /** @nocollapse */
    TopComponent.ctorParameters = function () { return [
        { type: GalleryService }
    ]; };
    return TopComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var GalleryItemComponent = /** @class */ (function () {
    function GalleryItemComponent() {
    }
    GalleryItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gallery-item',
                    template: "\n  <div class=\"card\">\n    <img [src]=\"model.thumbnailUrl\" />\n    <div class=\"card-body\">\n      \n      <h5 class=\"card-title\">\n        \u2022 {{model.id}} \u2022\n      </h5>\n      <p class=\"card-text\">{{model.title}}</p>\n    </div>\n    <a class=\"btn btn-primary\" [href]=\"model.url\" target=\"_blank\">\n      Open\n    </a>\n\n  </div>\n",
                    styles: ["img{height:150px;width:100%}.card{width:200px;height:400px;transition:.5s;padding:10px;margin:10px}.card:hover{transform:scale(1.05);box-shadow:10px 10px 15px rgba(0,0,0,.3)}.card::after,.card::before{position:absolute;top:0;right:0;bottom:0;left:0;transform:scale3d(0,0,1);transition:transform .3s ease-out;background:rgba(255,255,255,.1);content:'';pointer-events:none}.card::before{transform-origin:left top}.card::after{transform-origin:right bottom}.card:focus::after,.card:focus::before,.card:hover::after,.card:hover::before{transform:scale3d(1,1,1)}"]
                }] }
    ];
    /** @nocollapse */
    GalleryItemComponent.ctorParameters = function () { return []; };
    GalleryItemComponent.propDecorators = {
        model: [{ type: Input }]
    };
    return GalleryItemComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var HomeComponent = /** @class */ (function () {
    function HomeComponent(galleryService) {
        this.galleryService = galleryService;
    }
    /**
     * @return {?}
     */
    HomeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var request = new GetGalleryRequest(100);
        // Set loading state.
        this.loading = true;
        // Call the service.
        this.galleryService.get(request)
            .subscribe(function (response) {
            // Set the items with the response.
            // Set the items with the response.
            _this.galleryItems = response.items;
        }, function (error) {
            console.log("Invoking get gallery request encountered  an error. " + error + ".");
        }, function () {
            // Set loading state.
            // Set loading state.
            _this.loading = false;
            console.log("Completed invoking get gallery request.");
        });
    };
    HomeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gallery-home',
                    template: "<section>\n  <div class=\"container\">\n    <h2 class=\"text-center\">\n      My Gallery\n    </h2>\n\n    <!-- Loading spinner -->\n    <div *ngIf=\"loading\" class=\"fa fa-spinner fa-spin spinner\"></div>\n\n\n    <div class=\"row\">\n      <div *ngFor=\"let galleryItem of galleryItems\">\n        <!-- Gallery item -->\n        <gallery-item [model]=\"galleryItem\"></gallery-item>\n      </div>\n    </div>\n  </div>\n</section>\n",
                    styles: ["section{padding:20px;width:100%;height:100%;background-color:#ffa;color:#383838}"]
                }] }
    ];
    /** @nocollapse */
    HomeComponent.ctorParameters = function () { return [
        { type: GalleryService }
    ]; };
    return HomeComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var routes = [
    {
        path: 'gallery', component: GalleryComponent, children: [
            { path: '', component: HomeComponent },
            { path: 'home', component: HomeComponent },
            { path: 'gallery-item', component: GalleryItemComponent },
        ]
    },
];
var GalleryRoutingModule = /** @class */ (function () {
    function GalleryRoutingModule() {
    }
    GalleryRoutingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        RouterModule.forRoot(routes)
                    ],
                    exports: [
                        RouterModule
                    ]
                },] }
    ];
    return GalleryRoutingModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var GalleryModule = /** @class */ (function () {
    function GalleryModule() {
    }
    GalleryModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        GalleryComponent,
                        HomeComponent,
                        TopComponent,
                        GalleryItemComponent
                    ],
                    imports: [
                        CommonModule,
                        GalleryRoutingModule,
                        HttpClientModule,
                        NgbModule.forRoot()
                    ],
                    exports: [
                        GalleryComponent,
                        TopComponent
                    ],
                    providers: [
                        GalleryService
                    ]
                },] }
    ];
    return GalleryModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { GalleryComponent, TopComponent, GalleryModule, GalleryItemComponent as ɵc, GalleryRoutingModule as ɵd, HomeComponent as ɵb, GalleryService as ɵa };

//# sourceMappingURL=gallery.js.map