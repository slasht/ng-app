/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
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
export { GalleryItemComponent };
if (false) {
    /** @type {?} */
    GalleryItemComponent.prototype.model;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dhbGxlcnkvIiwic291cmNlcyI6WyJsaWIvZ2FsbGVyeS1pdGVtL2dhbGxlcnktaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztJQVcvQztLQUFpQjs7Z0JBUmxCLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsbVhBQTRDOztpQkFFN0M7Ozs7O3dCQUdDLEtBQUs7OytCQVZQOztTQVFhLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEdhbGxlcnlJdGVtIH0gZnJvbSAnLi4vbW9kZWxzL2ludGVyZmFjZXMvZ2FsbGVyeS1pdGVtJztcclxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnYWxsZXJ5LWl0ZW0nLFxuICB0ZW1wbGF0ZVVybDogJy4vZ2FsbGVyeS1pdGVtLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZ2FsbGVyeS1pdGVtLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgR2FsbGVyeUl0ZW1Db21wb25lbnQge1xuXG4gQElucHV0KCkgbW9kZWw6IEdhbGxlcnlJdGVtO1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG59XG4iXX0=