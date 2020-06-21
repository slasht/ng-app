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
var PostsService = /** @class */ (function () {
    function PostsService(_httpClient) {
        var _this = this;
        this._httpClient = _httpClient;
        /**
         * Get all post items.
         */
        this.getPosts = function (request) {
            return _this._httpClient.get(_this.actionUrl + "/posts").pipe(map(function (items) {
                // Create and return a response with the returned items.
                return new GetPostsResponse(items.slice(0, request.max));
            }), catchError(function (err) {
                return observableThrowError(err);
            }));
        };
        /**
         *  Get a specified post item.
         * @param request The request data.
         */
        this.getPost = function (request) {
            // Invoke a get request.
            return _this._httpClient.get(_this.actionUrl + "/posts/" + request.id).pipe(map(function (item) {
                // Create and return response with the returned item.
                return new GetPostResponse(item);
            }), catchError(function (err) {
                return observableThrowError(err);
            }));
        };
        // Set the API url.
        this.actionUrl = 'https://jsonplaceholder.typicode.com';
    }
    /**
     * Create a new  post item.
    * @param request The request data.
     */
    /**
     * Create a new  post item.
     * @param {?} request The request data.
     * @return {?}
     */
    PostsService.prototype.create = /**
     * Create a new  post item.
     * @param {?} request The request data.
     * @return {?}
     */
    function (request) {
        // Invoke a post request.
        return this._httpClient.post(this.actionUrl + "/posts/", request).pipe(map(function (response) {
            // Create and return response with the created item id.
            return new CreatePostResponse(response.id);
        }), catchError(function (err) {
            return observableThrowError(err);
        }));
    };
    /**
   * Updates a post item.
  * @param request The request data.
   */
    /**
     * Updates a post item.
     * @param {?} request The request data.
     * @return {?}
     */
    PostsService.prototype.update = /**
     * Updates a post item.
     * @param {?} request The request data.
     * @return {?}
     */
    function (request) {
        // Invoke a put request.
        return this._httpClient.put(this.actionUrl + "/posts/" + request.postItem.id, request.postItem).pipe(map(function (response) {
            // Create and return response with the created item id.
            return new UpdatePostResponse(response);
        }), catchError(function (err) {
            return observableThrowError(err);
        }));
    };
    /**
     * Deletes a post item.
    * @param request The request data.
     */
    /**
     * Deletes a post item.
     * @param {?} request The request data.
     * @return {?}
     */
    PostsService.prototype.delete = /**
     * Deletes a post item.
     * @param {?} request The request data.
     * @return {?}
     */
    function (request) {
        // Invoke a delete request.
        return from(fetch(this.actionUrl + "/posts/" + request.id, {
            method: 'DELETE'
        }))
            .pipe(map(function (response) {
            console.log(response);
            // Create and return response with the returned item.
            return new DeletePostResponse(request.id);
        }), catchError(function (err) {
            return observableThrowError(err);
        }));
    };
    PostsService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    PostsService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    return PostsService;
}());
export { PostsService };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Bvc3RzLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3Bvc3RzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxJQUFJLEVBQWMsVUFBVSxJQUFJLG9CQUFvQixFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzVFLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFakQsT0FBTyxFQUFxQixrQkFBa0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQy9GLE9BQU8sRUFBcUIsa0JBQWtCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUMvRixPQUFPLEVBQWtCLGVBQWUsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3RGLE9BQU8sRUFBbUIsZ0JBQWdCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN6RixPQUFPLEVBQXFCLGtCQUFrQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7O0lBUTdGLHNCQUFvQixXQUF1QjtRQUEzQyxpQkFHQztRQUhtQixnQkFBVyxHQUFYLFdBQVcsQ0FBWTs7Ozt3QkFRekIsVUFBQyxPQUF3QjtZQUV6QyxNQUFNLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUksS0FBSSxDQUFDLFNBQVMsV0FBUSxDQUFDLENBQUMsSUFBSSxDQUN6RCxHQUFHLENBQUMsVUFBQyxLQUFpQjs7Z0JBR3BCLE1BQU0sQ0FBQyxJQUFJLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBRTFELENBQUMsRUFDRixVQUFVLENBQUMsVUFBQSxHQUFHO2dCQUNaLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNsQyxDQUFDLENBQUMsQ0FBQztTQUNQOzs7Ozt1QkFPZ0IsVUFBQyxPQUF1Qjs7WUFHdkMsTUFBTSxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFJLEtBQUksQ0FBQyxTQUFTLGVBQVUsT0FBTyxDQUFDLEVBQUksQ0FBQyxDQUFDLElBQUksQ0FDdkUsR0FBRyxDQUFDLFVBQUMsSUFBYzs7Z0JBR2pCLE1BQU0sQ0FBQyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUVsQyxDQUFDLEVBQ0YsVUFBVSxDQUFDLFVBQUEsR0FBRztnQkFDWixNQUFNLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDbEMsQ0FBQyxDQUFDLENBQUM7U0FDUDs7UUF0Q0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxzQ0FBc0MsQ0FBQztLQUN6RDtJQXVDRDs7O09BR0c7Ozs7OztJQUNILDZCQUFNOzs7OztJQUFOLFVBQU8sT0FBMEI7O1FBRy9CLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBSSxJQUFJLENBQUMsU0FBUyxZQUFTLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUNwRSxHQUFHLENBQUMsVUFBQyxRQUFhOztZQUVoQixNQUFNLENBQUMsSUFBSSxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7U0FFNUMsQ0FBQyxFQUNGLFVBQVUsQ0FBQyxVQUFBLEdBQUc7WUFDWixNQUFNLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDbEMsQ0FBQyxDQUFDLENBQUM7S0FDUDtJQUdEOzs7S0FHQzs7Ozs7O0lBQ0QsNkJBQU07Ozs7O0lBQU4sVUFBTyxPQUEwQjs7UUFHL0IsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFJLElBQUksQ0FBQyxTQUFTLGVBQVUsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFJLEVBQUUsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FDbEcsR0FBRyxDQUFDLFVBQUMsUUFBa0I7O1lBRXJCLE1BQU0sQ0FBQyxJQUFJLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBRXpDLENBQUMsRUFDRixVQUFVLENBQUMsVUFBQSxHQUFHO1lBQ1osTUFBTSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2xDLENBQUMsQ0FBQyxDQUFDO0tBQ1A7SUFFRDs7O09BR0c7Ozs7OztJQUNILDZCQUFNOzs7OztJQUFOLFVBQU8sT0FBMEI7O1FBRy9CLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFJLElBQUksQ0FBQyxTQUFTLGVBQVUsT0FBTyxDQUFDLEVBQUksRUFBRTtZQUN6RCxNQUFNLEVBQUUsUUFBUTtTQUNqQixDQUFDLENBQUM7YUFDQSxJQUFJLENBQ0gsR0FBRyxDQUFDLFVBQUMsUUFBUTtZQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7O1lBRXRCLE1BQU0sQ0FBQyxJQUFJLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUMzQyxDQUFDLEVBQ0YsVUFBVSxDQUFDLFVBQUEsR0FBRztZQUNaLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNsQyxDQUFDLENBQUMsQ0FBQztLQUNUOztnQkF4R0YsVUFBVTs7OztnQkFYRixVQUFVOzt1QkFBbkI7O1NBWWEsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBmcm9tLCBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIGFzIG9ic2VydmFibGVUaHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgUG9zdEl0ZW0gfSBmcm9tIFwiLi4vbW9kZWxzL2ludGVyZmFjZXMvcG9zdC1pdGVtXCI7XHJcbmltcG9ydCB7IENyZWF0ZVBvc3RSZXF1ZXN0LCBDcmVhdGVQb3N0UmVzcG9uc2UgfSBmcm9tIFwiLi4vbW9kZWxzL3JlcXVlc3RzL2NyZWF0ZS1wb3N0LXJlcXVlc3RcIjtcclxuaW1wb3J0IHsgRGVsZXRlUG9zdFJlcXVlc3QsIERlbGV0ZVBvc3RSZXNwb25zZSB9IGZyb20gXCIuLi9tb2RlbHMvcmVxdWVzdHMvZGVsZXRlLXBvc3QtcmVxdWVzdFwiO1xyXG5pbXBvcnQgeyBHZXRQb3N0UmVxdWVzdCwgR2V0UG9zdFJlc3BvbnNlIH0gZnJvbSBcIi4uL21vZGVscy9yZXF1ZXN0cy9nZXQtcG9zdC1yZXF1ZXN0XCI7XHJcbmltcG9ydCB7IEdldFBvc3RzUmVxdWVzdCwgR2V0UG9zdHNSZXNwb25zZSB9IGZyb20gXCIuLi9tb2RlbHMvcmVxdWVzdHMvZ2V0LXBvc3RzLXJlcXVlc3RcIjtcclxuaW1wb3J0IHsgVXBkYXRlUG9zdFJlcXVlc3QsIFVwZGF0ZVBvc3RSZXNwb25zZSB9IGZyb20gXCIuLi9tb2RlbHMvcmVxdWVzdHMvdXBkYXRlLXBvc3QtcmVxdWVzdFwiO1xyXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQb3N0c1NlcnZpY2Uge1xuXG4gIC8vIFRoZSBBUEkgYmFzZSB1cmwuXG4gIHByaXZhdGUgYWN0aW9uVXJsOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cENsaWVudDogSHR0cENsaWVudCkge1xuICAgIC8vIFNldCB0aGUgQVBJIHVybC5cbiAgICB0aGlzLmFjdGlvblVybCA9ICdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20nO1xuICB9XG5cbiAgLyoqXHJcbiAgICogR2V0IGFsbCBwb3N0IGl0ZW1zLlxyXG4gICAqL1xuICBwdWJsaWMgZ2V0UG9zdHMgPSAocmVxdWVzdDogR2V0UG9zdHNSZXF1ZXN0KTogT2JzZXJ2YWJsZTxHZXRQb3N0c1Jlc3BvbnNlPiA9PiB7XG5cbiAgICByZXR1cm4gdGhpcy5faHR0cENsaWVudC5nZXQoYCR7dGhpcy5hY3Rpb25Vcmx9L3Bvc3RzYCkucGlwZShcbiAgICAgIG1hcCgoaXRlbXM6IFBvc3RJdGVtW10pID0+IHtcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIGFuZCByZXR1cm4gYSByZXNwb25zZSB3aXRoIHRoZSByZXR1cm5lZCBpdGVtcy5cclxuICAgICAgICByZXR1cm4gbmV3IEdldFBvc3RzUmVzcG9uc2UoaXRlbXMuc2xpY2UoMCwgcmVxdWVzdC5tYXgpKTtcclxuXHJcbiAgICAgIH0pLFxuICAgICAgY2F0Y2hFcnJvcihlcnIgPT4ge1xyXG4gICAgICAgIHJldHVybiBvYnNlcnZhYmxlVGhyb3dFcnJvcihlcnIpO1xyXG4gICAgICB9KSk7XG4gIH1cblxuXG4gIC8qKlxuICAgKiAgR2V0IGEgc3BlY2lmaWVkIHBvc3QgaXRlbS5cbiAgICogQHBhcmFtIHJlcXVlc3QgVGhlIHJlcXVlc3QgZGF0YS5cbiAgICovXG4gIHB1YmxpYyBnZXRQb3N0ID0gKHJlcXVlc3Q6IEdldFBvc3RSZXF1ZXN0KTogT2JzZXJ2YWJsZTxHZXRQb3N0UmVzcG9uc2U+ID0+IHtcblxuICAgIC8vIEludm9rZSBhIGdldCByZXF1ZXN0LlxuICAgIHJldHVybiB0aGlzLl9odHRwQ2xpZW50LmdldChgJHt0aGlzLmFjdGlvblVybH0vcG9zdHMvJHtyZXF1ZXN0LmlkfWApLnBpcGUoXG4gICAgICBtYXAoKGl0ZW06IFBvc3RJdGVtKSA9PiB7XHJcblxyXG4gICAgICAgIC8vIENyZWF0ZSBhbmQgcmV0dXJuIHJlc3BvbnNlIHdpdGggdGhlIHJldHVybmVkIGl0ZW0uXHJcbiAgICAgICAgcmV0dXJuIG5ldyBHZXRQb3N0UmVzcG9uc2UoaXRlbSk7XHJcblxyXG4gICAgICB9KSxcbiAgICAgIGNhdGNoRXJyb3IoZXJyID0+IHtcclxuICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZVRocm93RXJyb3IoZXJyKTtcclxuICAgICAgfSkpO1xuICB9XG5cbiAgLyoqXHJcbiAgICogQ3JlYXRlIGEgbmV3ICBwb3N0IGl0ZW0uXHJcbiAgKiBAcGFyYW0gcmVxdWVzdCBUaGUgcmVxdWVzdCBkYXRhLlxyXG4gICAqL1xyXG4gIGNyZWF0ZShyZXF1ZXN0OiBDcmVhdGVQb3N0UmVxdWVzdCk6IE9ic2VydmFibGU8Q3JlYXRlUG9zdFJlc3BvbnNlPiB7XHJcblxyXG4gICAgLy8gSW52b2tlIGEgcG9zdCByZXF1ZXN0LlxuICAgIHJldHVybiB0aGlzLl9odHRwQ2xpZW50LnBvc3QoYCR7dGhpcy5hY3Rpb25Vcmx9L3Bvc3RzL2AsIHJlcXVlc3QpLnBpcGUoXG4gICAgICBtYXAoKHJlc3BvbnNlOiBhbnkpID0+IHtcclxuICAgICAgICAvLyBDcmVhdGUgYW5kIHJldHVybiByZXNwb25zZSB3aXRoIHRoZSBjcmVhdGVkIGl0ZW0gaWQuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBDcmVhdGVQb3N0UmVzcG9uc2UocmVzcG9uc2UuaWQpO1xyXG5cclxuICAgICAgfSksXG4gICAgICBjYXRjaEVycm9yKGVyciA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG9ic2VydmFibGVUaHJvd0Vycm9yKGVycik7XHJcbiAgICAgIH0pKTtcclxuICB9XG5cblxuICAvKipcclxuICogVXBkYXRlcyBhIHBvc3QgaXRlbS5cclxuKiBAcGFyYW0gcmVxdWVzdCBUaGUgcmVxdWVzdCBkYXRhLlxyXG4gKi9cclxuICB1cGRhdGUocmVxdWVzdDogVXBkYXRlUG9zdFJlcXVlc3QpOiBPYnNlcnZhYmxlPFVwZGF0ZVBvc3RSZXNwb25zZT4ge1xyXG5cclxuICAgIC8vIEludm9rZSBhIHB1dCByZXF1ZXN0LlxuICAgIHJldHVybiB0aGlzLl9odHRwQ2xpZW50LnB1dChgJHt0aGlzLmFjdGlvblVybH0vcG9zdHMvJHtyZXF1ZXN0LnBvc3RJdGVtLmlkfWAsIHJlcXVlc3QucG9zdEl0ZW0pLnBpcGUoXG4gICAgICBtYXAoKHJlc3BvbnNlOiBQb3N0SXRlbSkgPT4ge1xyXG4gICAgICAgIC8vIENyZWF0ZSBhbmQgcmV0dXJuIHJlc3BvbnNlIHdpdGggdGhlIGNyZWF0ZWQgaXRlbSBpZC5cclxuICAgICAgICByZXR1cm4gbmV3IFVwZGF0ZVBvc3RSZXNwb25zZShyZXNwb25zZSk7XHJcblxyXG4gICAgICB9KSxcbiAgICAgIGNhdGNoRXJyb3IoZXJyID0+IHtcclxuICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZVRocm93RXJyb3IoZXJyKTtcclxuICAgICAgfSkpO1xyXG4gIH1cblxyXG4gIC8qKlxyXG4gICAqIERlbGV0ZXMgYSBwb3N0IGl0ZW0uXHJcbiAgKiBAcGFyYW0gcmVxdWVzdCBUaGUgcmVxdWVzdCBkYXRhLlxyXG4gICAqL1xyXG4gIGRlbGV0ZShyZXF1ZXN0OiBEZWxldGVQb3N0UmVxdWVzdCk6IE9ic2VydmFibGU8RGVsZXRlUG9zdFJlc3BvbnNlPiB7XHJcblxyXG4gICAgLy8gSW52b2tlIGEgZGVsZXRlIHJlcXVlc3QuXHJcbiAgICByZXR1cm4gZnJvbShmZXRjaChgJHt0aGlzLmFjdGlvblVybH0vcG9zdHMvJHtyZXF1ZXN0LmlkfWAsIHtcclxuICAgICAgbWV0aG9kOiAnREVMRVRFJ1xyXG4gICAgfSkpXHJcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAvLyBDcmVhdGUgYW5kIHJldHVybiByZXNwb25zZSB3aXRoIHRoZSByZXR1cm5lZCBpdGVtLlxyXG4gICAgICAgICAgcmV0dXJuIG5ldyBEZWxldGVQb3N0UmVzcG9uc2UocmVxdWVzdC5pZCk7XHJcbiAgICAgICAgfSksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyID0+IHtcclxuICAgICAgICAgIHJldHVybiBvYnNlcnZhYmxlVGhyb3dFcnJvcihlcnIpO1xyXG4gICAgICAgIH0pKTtcclxuICB9XG59XG4iXX0=