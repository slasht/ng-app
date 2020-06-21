/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class GalleryItemComponent {
    constructor() { }
}
GalleryItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'gallery-item',
                template: "\n  <div class=\"card\">\n    <img [src]=\"model.thumbnailUrl\" />\n    <div class=\"card-body\">\n      \n      <h5 class=\"card-title\">\n        \u2022 {{model.id}} \u2022\n      </h5>\n      <p class=\"card-text\">{{model.title}}</p>\n    </div>\n    <a class=\"btn btn-primary\" [href]=\"model.url\" target=\"_blank\">\n      Open\n    </a>\n\n  </div>\n",
                styles: ["img{height:150px;width:100%}.card{width:200px;height:400px;transition:.5s;padding:10px;margin:10px}.card:hover{transform:scale(1.05);box-shadow:10px 10px 15px rgba(0,0,0,.3)}.card::after,.card::before{position:absolute;top:0;right:0;bottom:0;left:0;transform:scale3d(0,0,1);transition:transform .3s ease-out;background:rgba(255,255,255,.1);content:'';pointer-events:none}.card::before{transform-origin:left top}.card::after{transform-origin:right bottom}.card:focus::after,.card:focus::before,.card:hover::after,.card:hover::before{transform:scale3d(1,1,1)}"]
            }] }
];
/** @nocollapse */
GalleryItemComponent.ctorParameters = () => [];
GalleryItemComponent.propDecorators = {
    model: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    GalleryItemComponent.prototype.model;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dhbGxlcnkvIiwic291cmNlcyI6WyJsaWIvZ2FsbGVyeS1pdGVtL2dhbGxlcnktaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUWpELE1BQU07SUFHSixpQkFBaUI7OztZQVJsQixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLG1YQUE0Qzs7YUFFN0M7Ozs7O29CQUdDLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHYWxsZXJ5SXRlbSB9IGZyb20gJy4uL21vZGVscy9pbnRlcmZhY2VzL2dhbGxlcnktaXRlbSc7XHJcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2FsbGVyeS1pdGVtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dhbGxlcnktaXRlbS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2dhbGxlcnktaXRlbS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEdhbGxlcnlJdGVtQ29tcG9uZW50IHtcblxuIEBJbnB1dCgpIG1vZGVsOiBHYWxsZXJ5SXRlbTtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxufVxuIl19