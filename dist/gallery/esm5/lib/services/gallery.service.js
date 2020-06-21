/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { GetGalleryResponse } from '../models/requests/get-gallery-request';
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
                return observableThrowError(err);
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
export { GalleryService };
if (false) {
    /** @type {?} */
    GalleryService.prototype.actionUrl;
    /**
     * Get all gallery items.
     * @type {?}
     */
    GalleryService.prototype.get;
    /** @type {?} */
    GalleryService.prototype._httpClient;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ2FsbGVyeS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9nYWxsZXJ5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxVQUFVLElBQUksb0JBQW9CLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVqRCxPQUFPLEVBQXFCLGtCQUFrQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7O0lBUzdGLHdCQUFvQixXQUF1QjtRQUEzQyxpQkFHQztRQUhtQixnQkFBVyxHQUFYLFdBQVcsQ0FBWTs7OzttQkFROUIsVUFBQyxPQUEwQjtZQUV0QyxNQUFNLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUksS0FBSSxDQUFDLFNBQVMsWUFBUyxDQUFDLENBQUMsSUFBSSxDQUMxRCxHQUFHLENBQUMsVUFBQyxLQUFvQjs7Z0JBR3ZCLE1BQU0sQ0FBQyxJQUFJLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBRTVELENBQUMsRUFDRixVQUFVLENBQUMsVUFBQSxHQUFHO2dCQUNaLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNsQyxDQUFDLENBQUMsQ0FBQztTQUNQOztRQWxCQyxJQUFJLENBQUMsU0FBUyxHQUFHLHNDQUFzQyxDQUFDO0tBQ3pEOztnQkFURixVQUFVOzs7O2dCQVJGLFVBQVU7O3lCQUFuQjs7U0FTYSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIHRocm93RXJyb3IgYXMgb2JzZXJ2YWJsZVRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBHYWxsZXJ5SXRlbSB9IGZyb20gXCIuLi9tb2RlbHMvaW50ZXJmYWNlcy9nYWxsZXJ5LWl0ZW1cIjtcclxuaW1wb3J0IHsgR2V0R2FsbGVyeVJlcXVlc3QsIEdldEdhbGxlcnlSZXNwb25zZSB9IGZyb20gJy4uL21vZGVscy9yZXF1ZXN0cy9nZXQtZ2FsbGVyeS1yZXF1ZXN0JztcclxuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBHYWxsZXJ5U2VydmljZSB7XG5cbiAgLy8gVGhlIEFQSSBiYXNlIHVybC5cbiAgcHJpdmF0ZSBhY3Rpb25Vcmw6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwQ2xpZW50OiBIdHRwQ2xpZW50KSB7XG4gICAgLy8gU2V0IHRoZSBBUEkgdXJsLlxuICAgIHRoaXMuYWN0aW9uVXJsID0gJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbSc7XG4gIH1cblxuICAvKipcclxuICAgKiBHZXQgYWxsIGdhbGxlcnkgaXRlbXMuXHJcbiAgICovXG4gIHB1YmxpYyBnZXQgPSAocmVxdWVzdDogR2V0R2FsbGVyeVJlcXVlc3QpOiBPYnNlcnZhYmxlPEdldEdhbGxlcnlSZXNwb25zZT4gPT4ge1xuXG4gICAgcmV0dXJuIHRoaXMuX2h0dHBDbGllbnQuZ2V0KGAke3RoaXMuYWN0aW9uVXJsfS9waG90b3NgKS5waXBlKFxuICAgICAgbWFwKChpdGVtczogR2FsbGVyeUl0ZW1bXSkgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIENyZWF0ZSBhbmQgcmV0dXJuIHJlc3BvbnNlIHdpdGggdGhlIHJldHVybmVkIGl0ZW1zLlxyXG4gICAgICAgIHJldHVybiBuZXcgR2V0R2FsbGVyeVJlc3BvbnNlKGl0ZW1zLnNsaWNlKDAsIHJlcXVlc3QubWF4KSk7XHJcblxyXG4gICAgICB9KSxcbiAgICAgIGNhdGNoRXJyb3IoZXJyID0+IHtcclxuICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZVRocm93RXJyb3IoZXJyKTtcclxuICAgICAgfSkpO1xuICB9XG59XG4iXX0=