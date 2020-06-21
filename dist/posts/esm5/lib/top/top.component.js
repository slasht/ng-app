/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { GetPostsRequest } from '../models/requests/get-posts-request';
import { PostsService } from '../services/posts.service';
var TopComponent = /** @class */ (function () {
    function TopComponent(postsService) {
        this.postsService = postsService;
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
        var request = new GetPostsRequest(10);
        // Call the service and retrieve posts.
        this.postsService.getPosts(request)
            .subscribe(function (response) {
            // Set the items returned in the response.
            // Set the items returned in the response.
            _this.postItems = response.items;
        }, function (error) {
            console.log("Invoking get posts top request encountered  an error. " + error + ".");
        }, function () {
            console.log("Completed invoking get posts top request.");
        });
    };
    TopComponent.decorators = [
        { type: Component, args: [{
                    selector: 'posts-top',
                    template: "<section>\n  <div class=\"container\">\n    <div *ngFor=\"let postItem of postItems\">\n      <!-- Post item -->\n      <post-item [model]=\"postItem\"></post-item>\n    </div>\n  </div>\n</section>\n"
                }] }
    ];
    /** @nocollapse */
    TopComponent.ctorParameters = function () { return [
        { type: PostsService }
    ]; };
    return TopComponent;
}());
export { TopComponent };
if (false) {
    /** @type {?} */
    TopComponent.prototype.postItems;
    /** @type {?} */
    TopComponent.prototype.postsService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9wLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Bvc3RzLyIsInNvdXJjZXMiOlsibGliL3RvcC90b3AuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRWxELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7O0lBV3ZELHNCQUFvQixZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztLQUFLOzs7O0lBR25ELCtCQUFROzs7SUFBUjtRQUFBLGlCQW1CQzs7UUFoQkMsSUFBTSxPQUFPLEdBQUcsSUFBSSxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7O1FBR3hDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQzthQUNoQyxTQUFTLENBQUMsVUFBQyxRQUFROztZQUdsQixBQURBLDBDQUEwQztZQUMxQyxLQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUM7U0FDakMsRUFDQyxVQUFDLEtBQUs7WUFFSixPQUFPLENBQUMsR0FBRyxDQUFDLDJEQUF5RCxLQUFLLE1BQUcsQ0FBQyxDQUFDO1NBQ2hGLEVBQ0Q7WUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7U0FDMUQsQ0FBQyxDQUFDO0tBQ1I7O2dCQS9CRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLG9OQUFtQztpQkFDcEM7Ozs7Z0JBTFEsWUFBWTs7dUJBSHJCOztTQVNhLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQb3N0SXRlbSB9IGZyb20gJy4uL21vZGVscy9pbnRlcmZhY2VzL3Bvc3QtaXRlbSc7XHJcbmltcG9ydCB7IEdldFBvc3RzUmVxdWVzdCB9IGZyb20gJy4uL21vZGVscy9yZXF1ZXN0cy9nZXQtcG9zdHMtcmVxdWVzdCc7XHJcbmltcG9ydCB7IFBvc3RzU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3Bvc3RzLnNlcnZpY2UnO1xyXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Bvc3RzLXRvcCcsXG4gIHRlbXBsYXRlVXJsOiAnLi90b3AuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFRvcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgLy8gVGhlIHBvc3QgaXRlbXMgdG8gc2hvdy5cbiAgcG9zdEl0ZW1zOiBQb3N0SXRlbVtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcG9zdHNTZXJ2aWNlOiBQb3N0c1NlcnZpY2UpIHsgfVxuXG5cbiAgbmdPbkluaXQoKSB7XHJcblxuICAgIC8vIENyZWF0ZSBnZXQgcG9zdHMgcmVxdWVzdC5cbiAgICBjb25zdCByZXF1ZXN0ID0gbmV3IEdldFBvc3RzUmVxdWVzdCgxMCk7XHJcblxyXG4gICAgLy8gQ2FsbCB0aGUgc2VydmljZSBhbmQgcmV0cmlldmUgcG9zdHMuXHJcbiAgICB0aGlzLnBvc3RzU2VydmljZS5nZXRQb3N0cyhyZXF1ZXN0KVxuICAgICAgLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcblxuICAgICAgICAvLyBTZXQgdGhlIGl0ZW1zIHJldHVybmVkIGluIHRoZSByZXNwb25zZS5cbiAgICAgICAgdGhpcy5wb3N0SXRlbXMgPSByZXNwb25zZS5pdGVtcztcbiAgICAgIH0sXG4gICAgICAgIChlcnJvcikgPT4ge1xuXG4gICAgICAgICAgY29uc29sZS5sb2coYEludm9raW5nIGdldCBwb3N0cyB0b3AgcmVxdWVzdCBlbmNvdW50ZXJlZCAgYW4gZXJyb3IuICR7ZXJyb3J9LmApO1xuICAgICAgICB9LFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coYENvbXBsZXRlZCBpbnZva2luZyBnZXQgcG9zdHMgdG9wIHJlcXVlc3QuYCk7XG4gICAgICAgIH0pO1xyXG4gIH1cclxufVxuIl19