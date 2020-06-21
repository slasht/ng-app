/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { DeletePostRequest } from '../models/requests/delete-post-request';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
var PostItemComponent = /** @class */ (function () {
    function PostItemComponent(postsService, modalService) {
        this.postsService = postsService;
        this.modalService = modalService;
        // An event emitter for post deletion notification.
        this.delete = new EventEmitter();
        this.deleting = false;
    }
    /**
     * Delete the post item.
     *
     * @return {?}
     */
    PostItemComponent.prototype.deleteItem = /**
     * Delete the post item.
     *
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var request = new DeletePostRequest(this.model.id);
        // Call the service.
        this.postsService.delete(request)
            .subscribe(function (response) {
            // Check for successful response.
            if (response.id === _this.model.id) {
                console.log("Invoking delete post item request completed sucessfully.");
                _this.delete.emit(_this.model);
            }
            else {
                console.log("Invoking delete post item request completed with error.");
            }
        }, function (error) {
            console.log("Invoking delete post item request encountered  an error. " + error + ".");
        }, function () {
            console.log("Completed Invoking delete post item request.");
        });
    };
    /**
     * Open deletion confirmation dialog modal.
     * @param content The modal template to show.
     */
    /**
     * Open deletion confirmation dialog modal.
     * @param {?} content The modal template to show.
     * @return {?}
     */
    PostItemComponent.prototype.confirm = /**
     * Open deletion confirmation dialog modal.
     * @param {?} content The modal template to show.
     * @return {?}
     */
    function (content) {
        var _this = this;
        // Call modal service and open the specfied template in a modal.
        this.modalService.open(content).result.then(function (result) {
            // Confirmation approved.
            console.log("Confirmation modal approved with " + result + ".");
            _this.deleting = true;
            // Delete post item.
            // Delete post item.
            _this.deleteItem();
        }, function (reason) {
            // Confirmation dismissed.
            console.log("Confirmation modal closed with " + reason + ".");
            // Do nothing.
        });
    };
    PostItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'post-item',
                    template: "<div class=\"card m-3\">\n\n  <div class=\"card-body\">\n    <h4 class=\"card-title\">{{ model.title | uppercase}}</h4>\n\n    <p>{{ model.body }}</p>\n  </div>  \n</div>\n\r\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    PostItemComponent.ctorParameters = function () { return [
        { type: PostsService },
        { type: NgbModal }
    ]; };
    PostItemComponent.propDecorators = {
        model: [{ type: Input }],
        delete: [{ type: Output }]
    };
    return PostItemComponent;
}());
export { PostItemComponent };
if (false) {
    /** @type {?} */
    PostItemComponent.prototype.model;
    /** @type {?} */
    PostItemComponent.prototype.delete;
    /** @type {?} */
    PostItemComponent.prototype.deleting;
    /** @type {?} */
    PostItemComponent.prototype.postsService;
    /** @type {?} */
    PostItemComponent.prototype.modalService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdC1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Bvc3RzLyIsInNvdXJjZXMiOlsibGliL3Bvc3QtaXRlbS9wb3N0LWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXZFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUUzRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7O0lBaUJwRCwyQkFBb0IsWUFBMEIsRUFBVSxZQUFzQjtRQUExRCxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFVOztzQkFIN0MsSUFBSSxZQUFZLEVBQVk7d0JBRWxELEtBQUs7S0FDbUU7Ozs7OztJQUs1RSxzQ0FBVTs7Ozs7Ozs7UUFHZixJQUFNLE9BQU8sR0FBRyxJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7O1FBR3JELElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQzthQUM5QixTQUFTLENBQUMsVUFBQyxRQUFROztZQUVsQixFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxLQUFLLEtBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFFbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQywwREFBMEQsQ0FBQyxDQUFDO2dCQUN4RSxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDOUI7WUFDRCxJQUFJLENBQUMsQ0FBQztnQkFDSixPQUFPLENBQUMsR0FBRyxDQUFDLHlEQUF5RCxDQUFDLENBQUM7YUFDeEU7U0FFRixFQUNDLFVBQUMsS0FBSztZQUdKLE9BQU8sQ0FBQyxHQUFHLENBQUMsOERBQTRELEtBQUssTUFBRyxDQUFDLENBQUM7U0FDbkYsRUFDRDtZQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsOENBQThDLENBQUMsQ0FBQztTQUM3RCxDQUFDLENBQUM7O0lBSVQ7OztPQUdHOzs7Ozs7SUFDSCxtQ0FBTzs7Ozs7SUFBUCxVQUFRLE9BQU87UUFBZixpQkFtQkM7O1FBaEJDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFNOztZQUdqRCxPQUFPLENBQUMsR0FBRyxDQUFDLHNDQUFvQyxNQUFNLE1BQUcsQ0FBQyxDQUFBO1lBRTFELEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDOztZQUVyQixBQURBLG9CQUFvQjtZQUNwQixLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7U0FFbkIsRUFBRSxVQUFDLE1BQU07O1lBR04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQ0FBa0MsTUFBTSxNQUFHLENBQUMsQ0FBQTs7U0FHM0QsQ0FBQyxDQUFDO0tBQ0o7O2dCQXpFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLDRMQUF5Qzs7aUJBRTFDOzs7O2dCQVRRLFlBQVk7Z0JBR1osUUFBUTs7O3dCQVVkLEtBQUs7eUJBR0wsTUFBTTs7NEJBbEJUOztTQVlhLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQb3N0SXRlbSB9IGZyb20gJy4uL21vZGVscy9pbnRlcmZhY2VzL3Bvc3QtaXRlbSc7XHJcbmltcG9ydCB7IFBvc3RzU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3Bvc3RzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEZWxldGVQb3N0UmVxdWVzdCB9IGZyb20gJy4uL21vZGVscy9yZXF1ZXN0cy9kZWxldGUtcG9zdC1yZXF1ZXN0JztcclxuXHJcbmltcG9ydCB7IE5nYk1vZGFsIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xyXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Bvc3QtaXRlbScsXG4gIHRlbXBsYXRlVXJsOiAnLi9wb3N0LWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wb3N0LWl0ZW0uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQb3N0SXRlbUNvbXBvbmVudCB7XG5cbiAgLy8gVGhlIHBvc3QgaXRlbSBtb2RlbC5cbiAgQElucHV0KCkgbW9kZWw6IFBvc3RJdGVtO1xuXG4gIC8vIEFuIGV2ZW50IGVtaXR0ZXIgZm9yIHBvc3QgZGVsZXRpb24gbm90aWZpY2F0aW9uLlxuICBAT3V0cHV0KClcclxuICBkZWxldGU6IEV2ZW50RW1pdHRlcjxQb3N0SXRlbT4gPSBuZXcgRXZlbnRFbWl0dGVyPFBvc3RJdGVtPigpO1xuXG4gIGRlbGV0aW5nID0gZmFsc2U7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcG9zdHNTZXJ2aWNlOiBQb3N0c1NlcnZpY2UsIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBOZ2JNb2RhbCkgeyB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSB0aGUgcG9zdCBpdGVtLlxuICAgKiAqL1xuICBwdWJsaWMgZGVsZXRlSXRlbSgpIHtcbiAgICBcbiAgICAvLyBDcmVhdGUgdGhlIHJlcXVlc3QuXG4gICAgY29uc3QgcmVxdWVzdCA9IG5ldyBEZWxldGVQb3N0UmVxdWVzdCh0aGlzLm1vZGVsLmlkKTtcblxuICAgIC8vIENhbGwgdGhlIHNlcnZpY2UuXG4gICAgdGhpcy5wb3N0c1NlcnZpY2UuZGVsZXRlKHJlcXVlc3QpXG4gICAgICAuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAvLyBDaGVjayBmb3Igc3VjY2Vzc2Z1bCByZXNwb25zZS5cbiAgICAgICAgaWYgKHJlc3BvbnNlLmlkID09PSB0aGlzLm1vZGVsLmlkKSB7XG5cbiAgICAgICAgICBjb25zb2xlLmxvZyhgSW52b2tpbmcgZGVsZXRlIHBvc3QgaXRlbSByZXF1ZXN0IGNvbXBsZXRlZCBzdWNlc3NmdWxseS5gKTtcbiAgICAgICAgICB0aGlzLmRlbGV0ZS5lbWl0KHRoaXMubW9kZWwpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGBJbnZva2luZyBkZWxldGUgcG9zdCBpdGVtIHJlcXVlc3QgY29tcGxldGVkIHdpdGggZXJyb3IuYCk7XG4gICAgICAgIH1cblxuICAgICAgfSxcbiAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgIFxuXG4gICAgICAgICAgY29uc29sZS5sb2coYEludm9raW5nIGRlbGV0ZSBwb3N0IGl0ZW0gcmVxdWVzdCBlbmNvdW50ZXJlZCAgYW4gZXJyb3IuICR7ZXJyb3J9LmApO1xuICAgICAgICB9LFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coYENvbXBsZXRlZCBJbnZva2luZyBkZWxldGUgcG9zdCBpdGVtIHJlcXVlc3QuYCk7XG4gICAgICAgIH0pO1xuXG4gIH1cblxuICAvKipcclxuICAgKiBPcGVuIGRlbGV0aW9uIGNvbmZpcm1hdGlvbiBkaWFsb2cgbW9kYWwuXHJcbiAgICogQHBhcmFtIGNvbnRlbnQgVGhlIG1vZGFsIHRlbXBsYXRlIHRvIHNob3cuXHJcbiAgICovXG4gIGNvbmZpcm0oY29udGVudCkge1xyXG5cclxuICAgIC8vIENhbGwgbW9kYWwgc2VydmljZSBhbmQgb3BlbiB0aGUgc3BlY2ZpZWQgdGVtcGxhdGUgaW4gYSBtb2RhbC5cclxuICAgIHRoaXMubW9kYWxTZXJ2aWNlLm9wZW4oY29udGVudCkucmVzdWx0LnRoZW4oKHJlc3VsdCkgPT4ge1xyXG5cclxuICAgICAgLy8gQ29uZmlybWF0aW9uIGFwcHJvdmVkLlxyXG4gICAgICBjb25zb2xlLmxvZyhgQ29uZmlybWF0aW9uIG1vZGFsIGFwcHJvdmVkIHdpdGggJHtyZXN1bHR9LmApXHJcblxyXG4gICAgICB0aGlzLmRlbGV0aW5nID0gdHJ1ZTtcclxuICAgICAgLy8gRGVsZXRlIHBvc3QgaXRlbS5cclxuICAgICAgdGhpcy5kZWxldGVJdGVtKCk7XHJcblxyXG4gICAgfSwgKHJlYXNvbikgPT4ge1xyXG5cclxuICAgICAgICAvLyBDb25maXJtYXRpb24gZGlzbWlzc2VkLlxyXG4gICAgICAgIGNvbnNvbGUubG9nKGBDb25maXJtYXRpb24gbW9kYWwgY2xvc2VkIHdpdGggJHtyZWFzb259LmApXHJcblxyXG4gICAgICAgIC8vIERvIG5vdGhpbmcuXHJcbiAgICB9KTtcclxuICB9XG59XG4iXX0=