/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { GetGalleryResponse } from '../models/requests/get-gallery-request';
export class GalleryService {
    /**
     * @param {?} _httpClient
     */
    constructor(_httpClient) {
        this._httpClient = _httpClient;
        /**
         * Get all gallery items.
         */
        this.get = (request) => {
            return this._httpClient.get(`${this.actionUrl}/photos`).pipe(map((items) => {
                // Create and return response with the returned items.
                return new GetGalleryResponse(items.slice(0, request.max));
            }), catchError(err => {
                return observableThrowError(err);
            }));
        };
        // Set the API url.
        this.actionUrl = 'https://jsonplaceholder.typicode.com';
    }
}
GalleryService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
GalleryService.ctorParameters = () => [
    { type: HttpClient }
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ2FsbGVyeS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9nYWxsZXJ5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxVQUFVLElBQUksb0JBQW9CLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVqRCxPQUFPLEVBQXFCLGtCQUFrQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFJL0YsTUFBTTs7OztJQUtKLFlBQW9CLFdBQXVCO1FBQXZCLGdCQUFXLEdBQVgsV0FBVyxDQUFZOzs7O21CQVE5QixDQUFDLE9BQTBCLEVBQWtDLEVBQUU7WUFFMUUsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUMxRCxHQUFHLENBQUMsQ0FBQyxLQUFvQixFQUFFLEVBQUU7O2dCQUczQixNQUFNLENBQUMsSUFBSSxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUU1RCxDQUFDLEVBQ0YsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNmLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNsQyxDQUFDLENBQUMsQ0FBQztTQUNQOztRQWxCQyxJQUFJLENBQUMsU0FBUyxHQUFHLHNDQUFzQyxDQUFDO0tBQ3pEOzs7WUFURixVQUFVOzs7O1lBUkYsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIGFzIG9ic2VydmFibGVUaHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgR2FsbGVyeUl0ZW0gfSBmcm9tIFwiLi4vbW9kZWxzL2ludGVyZmFjZXMvZ2FsbGVyeS1pdGVtXCI7XHJcbmltcG9ydCB7IEdldEdhbGxlcnlSZXF1ZXN0LCBHZXRHYWxsZXJ5UmVzcG9uc2UgfSBmcm9tICcuLi9tb2RlbHMvcmVxdWVzdHMvZ2V0LWdhbGxlcnktcmVxdWVzdCc7XHJcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR2FsbGVyeVNlcnZpY2Uge1xuXG4gIC8vIFRoZSBBUEkgYmFzZSB1cmwuXG4gIHByaXZhdGUgYWN0aW9uVXJsOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cENsaWVudDogSHR0cENsaWVudCkge1xuICAgIC8vIFNldCB0aGUgQVBJIHVybC5cbiAgICB0aGlzLmFjdGlvblVybCA9ICdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20nO1xuICB9XG5cbiAgLyoqXHJcbiAgICogR2V0IGFsbCBnYWxsZXJ5IGl0ZW1zLlxyXG4gICAqL1xuICBwdWJsaWMgZ2V0ID0gKHJlcXVlc3Q6IEdldEdhbGxlcnlSZXF1ZXN0KTogT2JzZXJ2YWJsZTxHZXRHYWxsZXJ5UmVzcG9uc2U+ID0+IHtcblxuICAgIHJldHVybiB0aGlzLl9odHRwQ2xpZW50LmdldChgJHt0aGlzLmFjdGlvblVybH0vcGhvdG9zYCkucGlwZShcbiAgICAgIG1hcCgoaXRlbXM6IEdhbGxlcnlJdGVtW10pID0+IHtcclxuICAgICAgICBcclxuICAgICAgICAvLyBDcmVhdGUgYW5kIHJldHVybiByZXNwb25zZSB3aXRoIHRoZSByZXR1cm5lZCBpdGVtcy5cclxuICAgICAgICByZXR1cm4gbmV3IEdldEdhbGxlcnlSZXNwb25zZShpdGVtcy5zbGljZSgwLCByZXF1ZXN0Lm1heCkpO1xyXG5cclxuICAgICAgfSksXG4gICAgICBjYXRjaEVycm9yKGVyciA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG9ic2VydmFibGVUaHJvd0Vycm9yKGVycik7XHJcbiAgICAgIH0pKTtcbiAgfVxufVxuIl19