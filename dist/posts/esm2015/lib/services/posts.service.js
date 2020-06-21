/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { from, throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { CreatePostResponse } from "../models/requests/create-post-request";
import { DeletePostResponse } from "../models/requests/delete-post-request";
import { GetPostResponse } from "../models/requests/get-post-request";
import { GetPostsResponse } from "../models/requests/get-posts-request";
import { UpdatePostResponse } from "../models/requests/update-post-request";
export class PostsService {
    /**
     * @param {?} _httpClient
     */
    constructor(_httpClient) {
        this._httpClient = _httpClient;
        /**
         * Get all post items.
         */
        this.getPosts = (request) => {
            return this._httpClient.get(`${this.actionUrl}/posts`).pipe(map((items) => {
                // Create and return a response with the returned items.
                return new GetPostsResponse(items.slice(0, request.max));
            }), catchError(err => {
                return observableThrowError(err);
            }));
        };
        /**
         *  Get a specified post item.
         * @param request The request data.
         */
        this.getPost = (request) => {
            // Invoke a get request.
            return this._httpClient.get(`${this.actionUrl}/posts/${request.id}`).pipe(map((item) => {
                // Create and return response with the returned item.
                return new GetPostResponse(item);
            }), catchError(err => {
                return observableThrowError(err);
            }));
        };
        // Set the API url.
        this.actionUrl = 'https://jsonplaceholder.typicode.com';
    }
    /**
     * Create a new  post item.
     * @param {?} request The request data.
     * @return {?}
     */
    create(request) {
        // Invoke a post request.
        return this._httpClient.post(`${this.actionUrl}/posts/`, request).pipe(map((response) => {
            // Create and return response with the created item id.
            return new CreatePostResponse(response.id);
        }), catchError(err => {
            return observableThrowError(err);
        }));
    }
    /**
     * Updates a post item.
     * @param {?} request The request data.
     * @return {?}
     */
    update(request) {
        // Invoke a put request.
        return this._httpClient.put(`${this.actionUrl}/posts/${request.postItem.id}`, request.postItem).pipe(map((response) => {
            // Create and return response with the created item id.
            return new UpdatePostResponse(response);
        }), catchError(err => {
            return observableThrowError(err);
        }));
    }
    /**
     * Deletes a post item.
     * @param {?} request The request data.
     * @return {?}
     */
    delete(request) {
        // Invoke a delete request.
        return from(fetch(`${this.actionUrl}/posts/${request.id}`, {
            method: 'DELETE'
        }))
            .pipe(map((response) => {
            console.log(response);
            // Create and return response with the returned item.
            return new DeletePostResponse(request.id);
        }), catchError(err => {
            return observableThrowError(err);
        }));
    }
}
PostsService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
PostsService.ctorParameters = () => [
    { type: HttpClient }
];
if (false) {
    /** @type {?} */
    PostsService.prototype.actionUrl;
    /**
     * Get all post items.
     * @type {?}
     */
    PostsService.prototype.getPosts;
    /**
     *  Get a specified post item.
     * \@param request The request data.
     * @type {?}
     */
    PostsService.prototype.getPost;
    /** @type {?} */
    PostsService.prototype._httpClient;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Bvc3RzLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3Bvc3RzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxJQUFJLEVBQWMsVUFBVSxJQUFJLG9CQUFvQixFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzVFLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFakQsT0FBTyxFQUFxQixrQkFBa0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQy9GLE9BQU8sRUFBcUIsa0JBQWtCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUMvRixPQUFPLEVBQWtCLGVBQWUsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3RGLE9BQU8sRUFBbUIsZ0JBQWdCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN6RixPQUFPLEVBQXFCLGtCQUFrQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFHL0YsTUFBTTs7OztJQUtKLFlBQW9CLFdBQXVCO1FBQXZCLGdCQUFXLEdBQVgsV0FBVyxDQUFZOzs7O3dCQVF6QixDQUFDLE9BQXdCLEVBQWdDLEVBQUU7WUFFM0UsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUN6RCxHQUFHLENBQUMsQ0FBQyxLQUFpQixFQUFFLEVBQUU7O2dCQUd4QixNQUFNLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUUxRCxDQUFDLEVBQ0YsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNmLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNsQyxDQUFDLENBQUMsQ0FBQztTQUNQOzs7Ozt1QkFPZ0IsQ0FBQyxPQUF1QixFQUErQixFQUFFOztZQUd4RSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxVQUFVLE9BQU8sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDdkUsR0FBRyxDQUFDLENBQUMsSUFBYyxFQUFFLEVBQUU7O2dCQUdyQixNQUFNLENBQUMsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7YUFFbEMsQ0FBQyxFQUNGLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDZixNQUFNLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDbEMsQ0FBQyxDQUFDLENBQUM7U0FDUDs7UUF0Q0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxzQ0FBc0MsQ0FBQztLQUN6RDs7Ozs7O0lBMkNELE1BQU0sQ0FBQyxPQUEwQjs7UUFHL0IsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDcEUsR0FBRyxDQUFDLENBQUMsUUFBYSxFQUFFLEVBQUU7O1lBRXBCLE1BQU0sQ0FBQyxJQUFJLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUU1QyxDQUFDLEVBQ0YsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2YsTUFBTSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2xDLENBQUMsQ0FBQyxDQUFDO0tBQ1A7Ozs7OztJQU9ELE1BQU0sQ0FBQyxPQUEwQjs7UUFHL0IsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsVUFBVSxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxFQUFFLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQ2xHLEdBQUcsQ0FBQyxDQUFDLFFBQWtCLEVBQUUsRUFBRTs7WUFFekIsTUFBTSxDQUFDLElBQUksa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7U0FFekMsQ0FBQyxFQUNGLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNmLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNsQyxDQUFDLENBQUMsQ0FBQztLQUNQOzs7Ozs7SUFNRCxNQUFNLENBQUMsT0FBMEI7O1FBRy9CLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsVUFBVSxPQUFPLENBQUMsRUFBRSxFQUFFLEVBQUU7WUFDekQsTUFBTSxFQUFFLFFBQVE7U0FDakIsQ0FBQyxDQUFDO2FBQ0EsSUFBSSxDQUNILEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7WUFFdEIsTUFBTSxDQUFDLElBQUksa0JBQWtCLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQzNDLENBQUMsRUFDRixVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDZixNQUFNLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDbEMsQ0FBQyxDQUFDLENBQUM7S0FDVDs7O1lBeEdGLFVBQVU7Ozs7WUFYRixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGZyb20sIE9ic2VydmFibGUsIHRocm93RXJyb3IgYXMgb2JzZXJ2YWJsZVRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBQb3N0SXRlbSB9IGZyb20gXCIuLi9tb2RlbHMvaW50ZXJmYWNlcy9wb3N0LWl0ZW1cIjtcclxuaW1wb3J0IHsgQ3JlYXRlUG9zdFJlcXVlc3QsIENyZWF0ZVBvc3RSZXNwb25zZSB9IGZyb20gXCIuLi9tb2RlbHMvcmVxdWVzdHMvY3JlYXRlLXBvc3QtcmVxdWVzdFwiO1xyXG5pbXBvcnQgeyBEZWxldGVQb3N0UmVxdWVzdCwgRGVsZXRlUG9zdFJlc3BvbnNlIH0gZnJvbSBcIi4uL21vZGVscy9yZXF1ZXN0cy9kZWxldGUtcG9zdC1yZXF1ZXN0XCI7XHJcbmltcG9ydCB7IEdldFBvc3RSZXF1ZXN0LCBHZXRQb3N0UmVzcG9uc2UgfSBmcm9tIFwiLi4vbW9kZWxzL3JlcXVlc3RzL2dldC1wb3N0LXJlcXVlc3RcIjtcclxuaW1wb3J0IHsgR2V0UG9zdHNSZXF1ZXN0LCBHZXRQb3N0c1Jlc3BvbnNlIH0gZnJvbSBcIi4uL21vZGVscy9yZXF1ZXN0cy9nZXQtcG9zdHMtcmVxdWVzdFwiO1xyXG5pbXBvcnQgeyBVcGRhdGVQb3N0UmVxdWVzdCwgVXBkYXRlUG9zdFJlc3BvbnNlIH0gZnJvbSBcIi4uL21vZGVscy9yZXF1ZXN0cy91cGRhdGUtcG9zdC1yZXF1ZXN0XCI7XHJcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBvc3RzU2VydmljZSB7XG5cbiAgLy8gVGhlIEFQSSBiYXNlIHVybC5cbiAgcHJpdmF0ZSBhY3Rpb25Vcmw6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwQ2xpZW50OiBIdHRwQ2xpZW50KSB7XG4gICAgLy8gU2V0IHRoZSBBUEkgdXJsLlxuICAgIHRoaXMuYWN0aW9uVXJsID0gJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbSc7XG4gIH1cblxuICAvKipcclxuICAgKiBHZXQgYWxsIHBvc3QgaXRlbXMuXHJcbiAgICovXG4gIHB1YmxpYyBnZXRQb3N0cyA9IChyZXF1ZXN0OiBHZXRQb3N0c1JlcXVlc3QpOiBPYnNlcnZhYmxlPEdldFBvc3RzUmVzcG9uc2U+ID0+IHtcblxuICAgIHJldHVybiB0aGlzLl9odHRwQ2xpZW50LmdldChgJHt0aGlzLmFjdGlvblVybH0vcG9zdHNgKS5waXBlKFxuICAgICAgbWFwKChpdGVtczogUG9zdEl0ZW1bXSkgPT4ge1xyXG5cclxuICAgICAgICAvLyBDcmVhdGUgYW5kIHJldHVybiBhIHJlc3BvbnNlIHdpdGggdGhlIHJldHVybmVkIGl0ZW1zLlxyXG4gICAgICAgIHJldHVybiBuZXcgR2V0UG9zdHNSZXNwb25zZShpdGVtcy5zbGljZSgwLCByZXF1ZXN0Lm1heCkpO1xyXG5cclxuICAgICAgfSksXG4gICAgICBjYXRjaEVycm9yKGVyciA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG9ic2VydmFibGVUaHJvd0Vycm9yKGVycik7XHJcbiAgICAgIH0pKTtcbiAgfVxuXG5cbiAgLyoqXG4gICAqICBHZXQgYSBzcGVjaWZpZWQgcG9zdCBpdGVtLlxuICAgKiBAcGFyYW0gcmVxdWVzdCBUaGUgcmVxdWVzdCBkYXRhLlxuICAgKi9cbiAgcHVibGljIGdldFBvc3QgPSAocmVxdWVzdDogR2V0UG9zdFJlcXVlc3QpOiBPYnNlcnZhYmxlPEdldFBvc3RSZXNwb25zZT4gPT4ge1xuXG4gICAgLy8gSW52b2tlIGEgZ2V0IHJlcXVlc3QuXG4gICAgcmV0dXJuIHRoaXMuX2h0dHBDbGllbnQuZ2V0KGAke3RoaXMuYWN0aW9uVXJsfS9wb3N0cy8ke3JlcXVlc3QuaWR9YCkucGlwZShcbiAgICAgIG1hcCgoaXRlbTogUG9zdEl0ZW0pID0+IHtcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIGFuZCByZXR1cm4gcmVzcG9uc2Ugd2l0aCB0aGUgcmV0dXJuZWQgaXRlbS5cclxuICAgICAgICByZXR1cm4gbmV3IEdldFBvc3RSZXNwb25zZShpdGVtKTtcclxuXHJcbiAgICAgIH0pLFxuICAgICAgY2F0Y2hFcnJvcihlcnIgPT4ge1xyXG4gICAgICAgIHJldHVybiBvYnNlcnZhYmxlVGhyb3dFcnJvcihlcnIpO1xyXG4gICAgICB9KSk7XG4gIH1cblxuICAvKipcclxuICAgKiBDcmVhdGUgYSBuZXcgIHBvc3QgaXRlbS5cclxuICAqIEBwYXJhbSByZXF1ZXN0IFRoZSByZXF1ZXN0IGRhdGEuXHJcbiAgICovXHJcbiAgY3JlYXRlKHJlcXVlc3Q6IENyZWF0ZVBvc3RSZXF1ZXN0KTogT2JzZXJ2YWJsZTxDcmVhdGVQb3N0UmVzcG9uc2U+IHtcclxuXHJcbiAgICAvLyBJbnZva2UgYSBwb3N0IHJlcXVlc3QuXG4gICAgcmV0dXJuIHRoaXMuX2h0dHBDbGllbnQucG9zdChgJHt0aGlzLmFjdGlvblVybH0vcG9zdHMvYCwgcmVxdWVzdCkucGlwZShcbiAgICAgIG1hcCgocmVzcG9uc2U6IGFueSkgPT4ge1xyXG4gICAgICAgIC8vIENyZWF0ZSBhbmQgcmV0dXJuIHJlc3BvbnNlIHdpdGggdGhlIGNyZWF0ZWQgaXRlbSBpZC5cclxuICAgICAgICByZXR1cm4gbmV3IENyZWF0ZVBvc3RSZXNwb25zZShyZXNwb25zZS5pZCk7XHJcblxyXG4gICAgICB9KSxcbiAgICAgIGNhdGNoRXJyb3IoZXJyID0+IHtcclxuICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZVRocm93RXJyb3IoZXJyKTtcclxuICAgICAgfSkpO1xyXG4gIH1cblxuXG4gIC8qKlxyXG4gKiBVcGRhdGVzIGEgcG9zdCBpdGVtLlxyXG4qIEBwYXJhbSByZXF1ZXN0IFRoZSByZXF1ZXN0IGRhdGEuXHJcbiAqL1xyXG4gIHVwZGF0ZShyZXF1ZXN0OiBVcGRhdGVQb3N0UmVxdWVzdCk6IE9ic2VydmFibGU8VXBkYXRlUG9zdFJlc3BvbnNlPiB7XHJcblxyXG4gICAgLy8gSW52b2tlIGEgcHV0IHJlcXVlc3QuXG4gICAgcmV0dXJuIHRoaXMuX2h0dHBDbGllbnQucHV0KGAke3RoaXMuYWN0aW9uVXJsfS9wb3N0cy8ke3JlcXVlc3QucG9zdEl0ZW0uaWR9YCwgcmVxdWVzdC5wb3N0SXRlbSkucGlwZShcbiAgICAgIG1hcCgocmVzcG9uc2U6IFBvc3RJdGVtKSA9PiB7XHJcbiAgICAgICAgLy8gQ3JlYXRlIGFuZCByZXR1cm4gcmVzcG9uc2Ugd2l0aCB0aGUgY3JlYXRlZCBpdGVtIGlkLlxyXG4gICAgICAgIHJldHVybiBuZXcgVXBkYXRlUG9zdFJlc3BvbnNlKHJlc3BvbnNlKTtcclxuXHJcbiAgICAgIH0pLFxuICAgICAgY2F0Y2hFcnJvcihlcnIgPT4ge1xyXG4gICAgICAgIHJldHVybiBvYnNlcnZhYmxlVGhyb3dFcnJvcihlcnIpO1xyXG4gICAgICB9KSk7XHJcbiAgfVxuXHJcbiAgLyoqXHJcbiAgICogRGVsZXRlcyBhIHBvc3QgaXRlbS5cclxuICAqIEBwYXJhbSByZXF1ZXN0IFRoZSByZXF1ZXN0IGRhdGEuXHJcbiAgICovXHJcbiAgZGVsZXRlKHJlcXVlc3Q6IERlbGV0ZVBvc3RSZXF1ZXN0KTogT2JzZXJ2YWJsZTxEZWxldGVQb3N0UmVzcG9uc2U+IHtcclxuXHJcbiAgICAvLyBJbnZva2UgYSBkZWxldGUgcmVxdWVzdC5cclxuICAgIHJldHVybiBmcm9tKGZldGNoKGAke3RoaXMuYWN0aW9uVXJsfS9wb3N0cy8ke3JlcXVlc3QuaWR9YCwge1xyXG4gICAgICBtZXRob2Q6ICdERUxFVEUnXHJcbiAgICB9KSlcclxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgIC8vIENyZWF0ZSBhbmQgcmV0dXJuIHJlc3BvbnNlIHdpdGggdGhlIHJldHVybmVkIGl0ZW0uXHJcbiAgICAgICAgICByZXR1cm4gbmV3IERlbGV0ZVBvc3RSZXNwb25zZShyZXF1ZXN0LmlkKTtcclxuICAgICAgICB9KSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnIgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIG9ic2VydmFibGVUaHJvd0Vycm9yKGVycik7XHJcbiAgICAgICAgfSkpO1xyXG4gIH1cbn1cbiJdfQ==