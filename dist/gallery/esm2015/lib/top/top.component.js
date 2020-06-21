/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { GetGalleryRequest } from '../models/requests/get-gallery-request';
import { GalleryService } from '../services/gallery.service';
export class TopComponent {
    /**
     * @param {?} galleryService
     */
    constructor(galleryService) {
        this.galleryService = galleryService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const request = new GetGalleryRequest(10);
        // Call the service.
        this.galleryService.get(request)
            .subscribe((response) => {
            // Set the items with the response.
            this.galleryItems = response.items;
        }, (error) => {
            console.log(`Invoking get gallery top request encountered  an error. ${error}.`);
        }, () => {
            console.log(`Completed invoking get gallery top request.`);
        });
    }
}
TopComponent.decorators = [
    { type: Component, args: [{
                selector: 'gallery-top',
                template: "<section>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div *ngFor=\"let galleryItem of galleryItems\">\n        <!-- Gallery item -->\n        <gallery-item [model]=\"galleryItem\"></gallery-item>\n      </div>\n    </div>\n  </div>\n</section>\n"
            }] }
];
/** @nocollapse */
TopComponent.ctorParameters = () => [
    { type: GalleryService }
];
if (false) {
    /** @type {?} */
    TopComponent.prototype.galleryItems;
    /** @type {?} */
    TopComponent.prototype.galleryService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9wLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dhbGxlcnkvIiwic291cmNlcyI6WyJsaWIvdG9wL3RvcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFbEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBTTdELE1BQU07Ozs7SUFLSixZQUFvQixjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7S0FBSzs7OztJQUd2RCxRQUFROztRQUdOLE1BQU0sT0FBTyxHQUFHLElBQUksaUJBQWlCLENBQUMsRUFBRSxDQUFDLENBQUM7O1FBRzFDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQzthQUM3QixTQUFTLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTs7WUFFdEIsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDO1NBQ3BDLEVBQ0MsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUVSLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkRBQTJELEtBQUssR0FBRyxDQUFDLENBQUM7U0FDbEYsRUFDRCxHQUFHLEVBQUU7WUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLDZDQUE2QyxDQUFDLENBQUM7U0FDNUQsQ0FBQyxDQUFDO0tBQ1I7OztZQTlCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLG1SQUFtQzthQUNwQzs7OztZQUxRLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBHYWxsZXJ5SXRlbSB9IGZyb20gJy4uL21vZGVscy9pbnRlcmZhY2VzL2dhbGxlcnktaXRlbSc7XHJcbmltcG9ydCB7IEdldEdhbGxlcnlSZXF1ZXN0IH0gZnJvbSAnLi4vbW9kZWxzL3JlcXVlc3RzL2dldC1nYWxsZXJ5LXJlcXVlc3QnO1xyXG5pbXBvcnQgeyBHYWxsZXJ5U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2dhbGxlcnkuc2VydmljZSc7XHJcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2FsbGVyeS10b3AnLFxuICB0ZW1wbGF0ZVVybDogJy4vdG9wLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBUb3BDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIC8vIFRoZSBnYWxsZXJ5IGl0ZW1zIHRvIHNob3cuXG4gIGdhbGxlcnlJdGVtczogR2FsbGVyeUl0ZW1bXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGdhbGxlcnlTZXJ2aWNlOiBHYWxsZXJ5U2VydmljZSkgeyB9XG5cblxuICBuZ09uSW5pdCgpIHtcclxuXHJcbiAgICAvLyBDcmVhdGUgdGhlIHJlcXVlc3QuXHJcbiAgICBjb25zdCByZXF1ZXN0ID0gbmV3IEdldEdhbGxlcnlSZXF1ZXN0KDEwKTtcclxuXHJcbiAgICAvLyBDYWxsIHRoZSBzZXJ2aWNlLlxyXG4gICAgdGhpcy5nYWxsZXJ5U2VydmljZS5nZXQocmVxdWVzdClcbiAgICAgIC5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIC8vIFNldCB0aGUgaXRlbXMgd2l0aCB0aGUgcmVzcG9uc2UuXG4gICAgICAgIHRoaXMuZ2FsbGVyeUl0ZW1zID0gcmVzcG9uc2UuaXRlbXM7XG4gICAgICB9LFxuICAgICAgICAoZXJyb3IpID0+IHtcblxuICAgICAgICAgIGNvbnNvbGUubG9nKGBJbnZva2luZyBnZXQgZ2FsbGVyeSB0b3AgcmVxdWVzdCBlbmNvdW50ZXJlZCAgYW4gZXJyb3IuICR7ZXJyb3J9LmApO1xuICAgICAgICB9LFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coYENvbXBsZXRlZCBpbnZva2luZyBnZXQgZ2FsbGVyeSB0b3AgcmVxdWVzdC5gKTtcbiAgICAgICAgfSk7XHJcbiAgfVxyXG59XG4iXX0=