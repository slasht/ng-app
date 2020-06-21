/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreatePostRequest } from '../../models/requests/create-post-request';
import { PostsService } from '../../services/posts.service';
var CreateComponent = /** @class */ (function () {
    function CreateComponent(postsService, modalService) {
        this.postsService = postsService;
        this.modalService = modalService;
        // The post item model.
        this.model = /** @type {?} */ ({});
        // An event emitter for post creation notification.
        this.created = new EventEmitter();
        // An indication for current processing state.
        this.creating = false;
    }
    /**
     * Create the post item.
     *
     * @return {?}
     */
    CreateComponent.prototype.createItem = /**
     * Create the post item.
     *
     * @return {?}
     */
    function () {
        var _this = this;
        // Set the processing state.
        this.creating = true;
        /** @type {?} */
        var request = new CreatePostRequest(this.model);
        // Call the service.
        this.postsService.create(request)
            .subscribe(function (response) {
            // Check for successful response.
            if (response.id > 0) {
                console.log("Invoking create post item request completed sucessfully.");
                // Emit the created event.
                // Emit the created event.
                _this.created.emit(_this.model);
            }
            else {
                console.log("Invoking create post item request completed with error.");
            }
        }, function (error) {
            console.log("Invoking create post item request encountered  an error. " + error + ".");
        }, function () {
            // Set the processing state.
            // Set the processing state.
            _this.creating = false;
            console.log("Completed Invoking create post item request.");
        });
    };
    /**
     * Open creation dialog modal.
     * @param content The modal template to show.
     */
    /**
     * Open creation dialog modal.
     * @param {?} content The modal template to show.
     * @return {?}
     */
    CreateComponent.prototype.open = /**
     * Open creation dialog modal.
     * @param {?} content The modal template to show.
     * @return {?}
     */
    function (content) {
        // Call modal service and open the specfied template in a modal.
        this.modalService.open(content).result.then(function (result) {
            // Modal approved.
            console.log("Creation modal approved with " + result + ".");
        }, function (reason) {
            // Modal dismissed.
            console.log("Creation modal closed with " + reason + ".");
            // Do nothing.
        });
    };
    /**
     * Submit the create new post item form.
     * */
    /**
     * Submit the create new post item form.
     *
     * @return {?}
     */
    CreateComponent.prototype.onSubmit = /**
     * Submit the create new post item form.
     *
     * @return {?}
     */
    function () {
        // Create post item.
        this.createItem();
        // Close open modals.
        this.modalService.dismissAll();
    };
    CreateComponent.decorators = [
        { type: Component, args: [{
                    selector: 'post-item-create',
                    template: "<button class=\"btn btn-success m-3\" (click)=\"open(create)\" [disabled]=\"creating\"><i *ngIf=\"creating\" class=\"fa fa-spinner fa-spin\"></i> <i class=\"fas fa-plus\"></i> New</button>\n\n<!-- Create Post Item Modal -->\n<ng-template #create let-modal>\n  <form name=\"form\" #f=\"ngForm\" novalidate (ngSubmit)=\"onSubmit()\">\n\n\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\" id=\"confirmation-modal\">\n        <i class=\"far fa-newspaper\"></i>\n\n\n        Post Creation\n      </h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('dismissed')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <p><strong>Please fill all details below</strong></p>\n\n\n      <!-- Title -->\n      <div class=\"form-group\">\n        <label for=\"title\">Title</label>\n        <input type=\"text\" class=\"form-control\" name=\"title\" [(ngModel)]=\"model.title\" #title=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && title.invalid }\" maxlength=\"48\" required />\n        <div *ngIf=\"f.submitted && title.invalid\" class=\"invalid-feedback\">\n          <div *ngIf=\"title.errors.required\">Title is required</div>\n        </div>\n      </div>\n\n      <!-- Body -->\n      <div class=\"form-group\">\n        <label for=\"body\">Body</label>\n        <textarea  rows=\"3\" class=\"form-control\" name=\"body\" [(ngModel)]=\"model.body\" #body=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && body.invalid }\" maxlength=\"255\" required></textarea>\n        <div *ngIf=\"f.submitted && body.invalid\" class=\"invalid-feedback\">\n          <div *ngIf=\"body.errors.required\">Body is required</div>\n        </div>\n      </div>\n\n    </div>\n    <div class=\"modal-footer\">\n      <!-- Cancel -->\n      <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"modal.dismiss('cancel click')\">Cancel</button>\n      <!-- Submit -->\n      <button type=\"submit\" class=\"btn btn-primary\">Create</button>\n\n    </div>\n  </form>\n</ng-template>\n"
                }] }
    ];
    /** @nocollapse */
    CreateComponent.ctorParameters = function () { return [
        { type: PostsService },
        { type: NgbModal }
    ]; };
    CreateComponent.propDecorators = {
        created: [{ type: Output }]
    };
    return CreateComponent;
}());
export { CreateComponent };
if (false) {
    /** @type {?} */
    CreateComponent.prototype.model;
    /** @type {?} */
    CreateComponent.prototype.created;
    /** @type {?} */
    CreateComponent.prototype.creating;
    /** @type {?} */
    CreateComponent.prototype.postsService;
    /** @type {?} */
    CreateComponent.prototype.modalService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Bvc3RzLyIsInNvdXJjZXMiOlsibGliL3Bvc3QtaXRlbS9jcmVhdGUvY3JlYXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUV0RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sOEJBQThCLENBQUM7O0lBbUIxRCx5QkFBb0IsWUFBMEIsRUFBVSxZQUFzQjtRQUExRCxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFVOzt1Q0FUdEUsRUFBYzs7dUJBSVksSUFBSSxZQUFZLEVBQVk7O3dCQUduRCxLQUFLO0tBRW1FOzs7Ozs7SUFLNUUsb0NBQVU7Ozs7Ozs7O1FBR2YsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7O1FBR3JCLElBQU0sT0FBTyxHQUFHLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDOztRQUdsRCxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7YUFDOUIsU0FBUyxDQUFDLFVBQUMsUUFBUTs7WUFFbEIsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUVwQixPQUFPLENBQUMsR0FBRyxDQUFDLDBEQUEwRCxDQUFDLENBQUM7O2dCQUd4RSxBQURBLDBCQUEwQjtnQkFDMUIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQy9CO1lBQ0QsSUFBSSxDQUFDLENBQUM7Z0JBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyx5REFBeUQsQ0FBQyxDQUFDO2FBQ3hFO1NBQ0YsRUFDQyxVQUFDLEtBQUs7WUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLDhEQUE0RCxLQUFLLE1BQUcsQ0FBQyxDQUFDO1NBQ25GLEVBQ0Q7O1lBRUUsQUFEQSw0QkFBNEI7WUFDNUIsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFFdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDO1NBQzdELENBQUMsQ0FBQzs7SUFJVDs7O09BR0c7Ozs7OztJQUNILDhCQUFJOzs7OztJQUFKLFVBQUssT0FBTzs7UUFHVixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQUMsTUFBTTs7WUFHakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQ0FBZ0MsTUFBTSxNQUFHLENBQUMsQ0FBQTtTQUV2RCxFQUFFLFVBQUMsTUFBTTs7WUFFUixPQUFPLENBQUMsR0FBRyxDQUFDLGdDQUE4QixNQUFNLE1BQUcsQ0FBQyxDQUFBOztTQUdyRCxDQUFDLENBQUM7S0FDSjtJQUVEOztTQUVLOzs7Ozs7SUFDTCxrQ0FBUTs7Ozs7SUFBUjs7UUFHRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7O1FBR2xCLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUM7S0FFaEM7O2dCQXZGRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsNGtFQUFzQztpQkFDdkM7Ozs7Z0JBTlEsWUFBWTtnQkFIWixRQUFROzs7MEJBZ0JkLE1BQU07OzBCQWpCVDs7U0FXYSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ2JNb2RhbCB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgUG9zdEl0ZW0gfSBmcm9tICcuLi8uLi9tb2RlbHMvaW50ZXJmYWNlcy9wb3N0LWl0ZW0nO1xyXG5pbXBvcnQgeyBDcmVhdGVQb3N0UmVxdWVzdCB9IGZyb20gJy4uLy4uL21vZGVscy9yZXF1ZXN0cy9jcmVhdGUtcG9zdC1yZXF1ZXN0JztcclxuaW1wb3J0IHsgUG9zdHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcG9zdHMuc2VydmljZSc7XHJcblxyXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Bvc3QtaXRlbS1jcmVhdGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vY3JlYXRlLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBDcmVhdGVDb21wb25lbnQge1xuXG4gIC8vIFRoZSBwb3N0IGl0ZW0gbW9kZWwuXG4gIG1vZGVsID0ge30gYXMgUG9zdEl0ZW07XG5cbiAgLy8gQW4gZXZlbnQgZW1pdHRlciBmb3IgcG9zdCBjcmVhdGlvbiBub3RpZmljYXRpb24uXG4gIEBPdXRwdXQoKVxyXG4gIGNyZWF0ZWQ6IEV2ZW50RW1pdHRlcjxQb3N0SXRlbT4gPSBuZXcgRXZlbnRFbWl0dGVyPFBvc3RJdGVtPigpO1xuXG4gIC8vIEFuIGluZGljYXRpb24gZm9yIGN1cnJlbnQgcHJvY2Vzc2luZyBzdGF0ZS5cbiAgY3JlYXRpbmcgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBvc3RzU2VydmljZTogUG9zdHNTZXJ2aWNlLCBwcml2YXRlIG1vZGFsU2VydmljZTogTmdiTW9kYWwpIHsgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgdGhlIHBvc3QgaXRlbS5cbiAgICogKi9cbiAgcHVibGljIGNyZWF0ZUl0ZW0oKSB7XG5cbiAgICAvLyBTZXQgdGhlIHByb2Nlc3Npbmcgc3RhdGUuXHJcbiAgICB0aGlzLmNyZWF0aW5nID0gdHJ1ZTtcblxuICAgIC8vIENyZWF0ZSB0aGUgcmVxdWVzdC5cbiAgICBjb25zdCByZXF1ZXN0ID0gbmV3IENyZWF0ZVBvc3RSZXF1ZXN0KHRoaXMubW9kZWwpO1xuXG4gICAgLy8gQ2FsbCB0aGUgc2VydmljZS5cbiAgICB0aGlzLnBvc3RzU2VydmljZS5jcmVhdGUocmVxdWVzdClcbiAgICAgIC5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIC8vIENoZWNrIGZvciBzdWNjZXNzZnVsIHJlc3BvbnNlLiAgICAgICAgXG4gICAgICAgIGlmIChyZXNwb25zZS5pZCA+IDApIHtcblxuICAgICAgICAgIGNvbnNvbGUubG9nKGBJbnZva2luZyBjcmVhdGUgcG9zdCBpdGVtIHJlcXVlc3QgY29tcGxldGVkIHN1Y2Vzc2Z1bGx5LmApO1xuXG4gICAgICAgICAgLy8gRW1pdCB0aGUgY3JlYXRlZCBldmVudC5cbiAgICAgICAgICB0aGlzLmNyZWF0ZWQuZW1pdCh0aGlzLm1vZGVsKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhgSW52b2tpbmcgY3JlYXRlIHBvc3QgaXRlbSByZXF1ZXN0IGNvbXBsZXRlZCB3aXRoIGVycm9yLmApO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhgSW52b2tpbmcgY3JlYXRlIHBvc3QgaXRlbSByZXF1ZXN0IGVuY291bnRlcmVkICBhbiBlcnJvci4gJHtlcnJvcn0uYCk7XG4gICAgICAgIH0sXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICAvLyBTZXQgdGhlIHByb2Nlc3Npbmcgc3RhdGUuXHJcbiAgICAgICAgICB0aGlzLmNyZWF0aW5nID0gZmFsc2U7XG5cbiAgICAgICAgICBjb25zb2xlLmxvZyhgQ29tcGxldGVkIEludm9raW5nIGNyZWF0ZSBwb3N0IGl0ZW0gcmVxdWVzdC5gKTtcbiAgICAgICAgfSk7XG5cbiAgfVxuXG4gIC8qKlxyXG4gICAqIE9wZW4gY3JlYXRpb24gZGlhbG9nIG1vZGFsLlxyXG4gICAqIEBwYXJhbSBjb250ZW50IFRoZSBtb2RhbCB0ZW1wbGF0ZSB0byBzaG93LlxyXG4gICAqL1xuICBvcGVuKGNvbnRlbnQpIHtcclxuXHJcbiAgICAvLyBDYWxsIG1vZGFsIHNlcnZpY2UgYW5kIG9wZW4gdGhlIHNwZWNmaWVkIHRlbXBsYXRlIGluIGEgbW9kYWwuXHJcbiAgICB0aGlzLm1vZGFsU2VydmljZS5vcGVuKGNvbnRlbnQpLnJlc3VsdC50aGVuKChyZXN1bHQpID0+IHtcclxuXHJcbiAgICAgIC8vIE1vZGFsIGFwcHJvdmVkLlxyXG4gICAgICBjb25zb2xlLmxvZyhgQ3JlYXRpb24gbW9kYWwgYXBwcm92ZWQgd2l0aCAke3Jlc3VsdH0uYClcclxuXHJcbiAgICB9LCAocmVhc29uKSA9PiB7XHJcbiAgICAgIC8vIE1vZGFsIGRpc21pc3NlZC5cclxuICAgICAgY29uc29sZS5sb2coYENyZWF0aW9uIG1vZGFsIGNsb3NlZCB3aXRoICR7cmVhc29ufS5gKVxyXG5cclxuICAgICAgLy8gRG8gbm90aGluZy5cclxuICAgIH0pO1xyXG4gIH1cblxuICAvKipcbiAgICogU3VibWl0IHRoZSBjcmVhdGUgbmV3IHBvc3QgaXRlbSBmb3JtLlxuICAgKiAqL1xuICBvblN1Ym1pdCgpIHtcclxuXHJcbiAgICAvLyBDcmVhdGUgcG9zdCBpdGVtLlxyXG4gICAgdGhpcy5jcmVhdGVJdGVtKCk7XG5cclxuICAgIC8vIENsb3NlIG9wZW4gbW9kYWxzLlxyXG4gICAgdGhpcy5tb2RhbFNlcnZpY2UuZGlzbWlzc0FsbCgpO1xuXG4gIH1cbn1cbiJdfQ==