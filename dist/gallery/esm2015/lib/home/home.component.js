/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { GetGalleryRequest } from '../models/requests/get-gallery-request';
import { GalleryService } from '../services/gallery.service';
export class HomeComponent {
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
        const request = new GetGalleryRequest(100);
        // Set loading state.
        this.loading = true;
        // Call the service.
        this.galleryService.get(request)
            .subscribe((response) => {
            // Set the items with the response.
            this.galleryItems = response.items;
        }, (error) => {
            console.log(`Invoking get gallery request encountered  an error. ${error}.`);
        }, () => {
            // Set loading state.
            this.loading = false;
            console.log(`Completed invoking get gallery request.`);
        });
    }
}
HomeComponent.decorators = [
    { type: Component, args: [{
                selector: 'gallery-home',
                template: "<section>\n  <div class=\"container\">\n    <h2 class=\"text-center\">\n      My Gallery\n    </h2>\n\n    <!-- Loading spinner -->\n    <div *ngIf=\"loading\" class=\"fa fa-spinner fa-spin spinner\"></div>\n\n\n    <div class=\"row\">\n      <div *ngFor=\"let galleryItem of galleryItems\">\n        <!-- Gallery item -->\n        <gallery-item [model]=\"galleryItem\"></gallery-item>\n      </div>\n    </div>\n  </div>\n</section>\n",
                styles: ["section{padding:20px;width:100%;height:100%;background-color:#ffa;color:#383838}"]
            }] }
];
/** @nocollapse */
HomeComponent.ctorParameters = () => [
    { type: GalleryService }
];
if (false) {
    /** @type {?} */
    HomeComponent.prototype.loading;
    /** @type {?} */
    HomeComponent.prototype.galleryItems;
    /** @type {?} */
    HomeComponent.prototype.galleryService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nYWxsZXJ5LyIsInNvdXJjZXMiOlsibGliL2hvbWUvaG9tZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFbEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBTzdELE1BQU07Ozs7SUFRSixZQUFvQixjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7S0FBSzs7OztJQUd2RCxRQUFROztRQUdOLE1BQU0sT0FBTyxHQUFHLElBQUksaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUM7O1FBRzNDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDOztRQUdwQixJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUM7YUFDN0IsU0FBUyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7O1lBRXRCLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQztTQUNwQyxFQUNDLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFFUixPQUFPLENBQUMsR0FBRyxDQUFDLHVEQUF1RCxLQUFLLEdBQUcsQ0FBQyxDQUFDO1NBQzlFLEVBQ0QsR0FBRyxFQUFFOztZQUVILElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBRXJCLE9BQU8sQ0FBQyxHQUFHLENBQUMseUNBQXlDLENBQUMsQ0FBQztTQUN4RCxDQUFDLENBQUM7S0FDUjs7O1lBeENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsK2JBQW9DOzthQUVyQzs7OztZQU5RLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBHYWxsZXJ5SXRlbSB9IGZyb20gJy4uL21vZGVscy9pbnRlcmZhY2VzL2dhbGxlcnktaXRlbSc7XHJcbmltcG9ydCB7IEdldEdhbGxlcnlSZXF1ZXN0IH0gZnJvbSAnLi4vbW9kZWxzL3JlcXVlc3RzL2dldC1nYWxsZXJ5LXJlcXVlc3QnO1xyXG5pbXBvcnQgeyBHYWxsZXJ5U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2dhbGxlcnkuc2VydmljZSc7XHJcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2FsbGVyeS1ob21lJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2hvbWUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9ob21lLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgLy8gTG9hZGluZyBpbmRpY2F0aW9uLlxuICBsb2FkaW5nOiBib29sZWFuO1xuXG4gIC8vIFRoZSBnYWxsZXJ5IGl0ZW1zIHRvIHNob3cuXG4gIGdhbGxlcnlJdGVtczogR2FsbGVyeUl0ZW1bXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGdhbGxlcnlTZXJ2aWNlOiBHYWxsZXJ5U2VydmljZSkgeyB9XG5cblxuICBuZ09uSW5pdCgpIHtcclxuXHJcbiAgICAvLyBDcmVhdGUgdGhlIHJlcXVlc3QuXHJcbiAgICBjb25zdCByZXF1ZXN0ID0gbmV3IEdldEdhbGxlcnlSZXF1ZXN0KDEwMCk7XHJcblxyXG4gICAgLy8gU2V0IGxvYWRpbmcgc3RhdGUuXG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuXHJcbiAgICAvLyBDYWxsIHRoZSBzZXJ2aWNlLlxyXG4gICAgdGhpcy5nYWxsZXJ5U2VydmljZS5nZXQocmVxdWVzdClcbiAgICAgIC5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIC8vIFNldCB0aGUgaXRlbXMgd2l0aCB0aGUgcmVzcG9uc2UuXG4gICAgICAgIHRoaXMuZ2FsbGVyeUl0ZW1zID0gcmVzcG9uc2UuaXRlbXM7XG4gICAgICB9LFxuICAgICAgICAoZXJyb3IpID0+IHtcblxuICAgICAgICAgIGNvbnNvbGUubG9nKGBJbnZva2luZyBnZXQgZ2FsbGVyeSByZXF1ZXN0IGVuY291bnRlcmVkICBhbiBlcnJvci4gJHtlcnJvcn0uYCk7XG4gICAgICAgIH0sXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICAvLyBTZXQgbG9hZGluZyBzdGF0ZS5cbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcblxuICAgICAgICAgIGNvbnNvbGUubG9nKGBDb21wbGV0ZWQgaW52b2tpbmcgZ2V0IGdhbGxlcnkgcmVxdWVzdC5gKTtcbiAgICAgICAgfSk7XHJcbiAgfVxyXG59XG4iXX0=