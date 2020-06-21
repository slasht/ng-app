/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { GetGalleryRequest } from '../models/requests/get-gallery-request';
import { GalleryService } from '../services/gallery.service';
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
export { HomeComponent };
if (false) {
    /** @type {?} */
    HomeComponent.prototype.loading;
    /** @type {?} */
    HomeComponent.prototype.galleryItems;
    /** @type {?} */
    HomeComponent.prototype.galleryService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nYWxsZXJ5LyIsInNvdXJjZXMiOlsibGliL2hvbWUvaG9tZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFbEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDZCQUE2QixDQUFDOztJQWUzRCx1QkFBb0IsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0tBQUs7Ozs7SUFHdkQsZ0NBQVE7OztJQUFSO1FBQUEsaUJBd0JDOztRQXJCQyxJQUFNLE9BQU8sR0FBRyxJQUFJLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDOztRQUczQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzs7UUFHcEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDO2FBQzdCLFNBQVMsQ0FBQyxVQUFDLFFBQVE7O1lBRWxCLEFBREEsbUNBQW1DO1lBQ25DLEtBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQztTQUNwQyxFQUNDLFVBQUMsS0FBSztZQUVKLE9BQU8sQ0FBQyxHQUFHLENBQUMseURBQXVELEtBQUssTUFBRyxDQUFDLENBQUM7U0FDOUUsRUFDRDs7WUFFRSxBQURBLHFCQUFxQjtZQUNyQixLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUVyQixPQUFPLENBQUMsR0FBRyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7U0FDeEQsQ0FBQyxDQUFDO0tBQ1I7O2dCQXhDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLCtiQUFvQzs7aUJBRXJDOzs7O2dCQU5RLGNBQWM7O3dCQUh2Qjs7U0FVYSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgR2FsbGVyeUl0ZW0gfSBmcm9tICcuLi9tb2RlbHMvaW50ZXJmYWNlcy9nYWxsZXJ5LWl0ZW0nO1xyXG5pbXBvcnQgeyBHZXRHYWxsZXJ5UmVxdWVzdCB9IGZyb20gJy4uL21vZGVscy9yZXF1ZXN0cy9nZXQtZ2FsbGVyeS1yZXF1ZXN0JztcclxuaW1wb3J0IHsgR2FsbGVyeVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9nYWxsZXJ5LnNlcnZpY2UnO1xyXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dhbGxlcnktaG9tZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9ob21lLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaG9tZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIC8vIExvYWRpbmcgaW5kaWNhdGlvbi5cbiAgbG9hZGluZzogYm9vbGVhbjtcblxuICAvLyBUaGUgZ2FsbGVyeSBpdGVtcyB0byBzaG93LlxuICBnYWxsZXJ5SXRlbXM6IEdhbGxlcnlJdGVtW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBnYWxsZXJ5U2VydmljZTogR2FsbGVyeVNlcnZpY2UpIHsgfVxuXG5cbiAgbmdPbkluaXQoKSB7XHJcblxyXG4gICAgLy8gQ3JlYXRlIHRoZSByZXF1ZXN0LlxyXG4gICAgY29uc3QgcmVxdWVzdCA9IG5ldyBHZXRHYWxsZXJ5UmVxdWVzdCgxMDApO1xyXG5cclxuICAgIC8vIFNldCBsb2FkaW5nIHN0YXRlLlxuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcblxyXG4gICAgLy8gQ2FsbCB0aGUgc2VydmljZS5cclxuICAgIHRoaXMuZ2FsbGVyeVNlcnZpY2UuZ2V0KHJlcXVlc3QpXG4gICAgICAuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAvLyBTZXQgdGhlIGl0ZW1zIHdpdGggdGhlIHJlc3BvbnNlLlxuICAgICAgICB0aGlzLmdhbGxlcnlJdGVtcyA9IHJlc3BvbnNlLml0ZW1zO1xuICAgICAgfSxcbiAgICAgICAgKGVycm9yKSA9PiB7XG5cbiAgICAgICAgICBjb25zb2xlLmxvZyhgSW52b2tpbmcgZ2V0IGdhbGxlcnkgcmVxdWVzdCBlbmNvdW50ZXJlZCAgYW4gZXJyb3IuICR7ZXJyb3J9LmApO1xuICAgICAgICB9LFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgLy8gU2V0IGxvYWRpbmcgc3RhdGUuXG4gICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG5cbiAgICAgICAgICBjb25zb2xlLmxvZyhgQ29tcGxldGVkIGludm9raW5nIGdldCBnYWxsZXJ5IHJlcXVlc3QuYCk7XG4gICAgICAgIH0pO1xyXG4gIH1cclxufVxuIl19