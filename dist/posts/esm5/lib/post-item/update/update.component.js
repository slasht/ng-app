/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UpdatePostRequest } from '../../models/requests/update-post-request';
import { PostsService } from '../../services/posts.service';
var UpdateComponent = /** @class */ (function () {
    function UpdateComponent(postsService, modalService) {
        this.postsService = postsService;
        this.modalService = modalService;
        this.model = /** @type {?} */ ({});
        // An event emitter for post creation notification.
        this.updated = new EventEmitter();
        // An indication for current processing state.
        this.updating = false;
    }
    /**
     * @return {?}
     */
    UpdateComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.model = tslib_1.__assign({}, this.postItem);
    };
    /**
     * Update the post item.
     *
     * @return {?}
     */
    UpdateComponent.prototype.updateItem = /**
     * Update the post item.
     *
     * @return {?}
     */
    function () {
        var _this = this;
        // Set the processing state.
        this.updating = true;
        /** @type {?} */
        var request = new UpdatePostRequest(this.model);
        // Call the service.
        this.postsService.update(request)
            .subscribe(function (response) {
            // Check for successful response.
            if (response.postItem.id === request.postItem.id) {
                console.log("Invoking update post item request completed sucessfully.");
                // Emit the updated event.
                // Emit the updated event.
                _this.updated.emit(_this.model);
            }
            else {
                console.log("Invoking update post item request completed with error.");
            }
        }, function (error) {
            console.log("Invoking update post item request encountered  an error. " + error + ".");
        }, function () {
            // Set the processing state.
            // Set the processing state.
            _this.updating = false;
            console.log("Completed Invoking update post item request.");
        });
    };
    /**
     * Open update dialog modal.
     * @param content The modal template to show.
     */
    /**
     * Open update dialog modal.
     * @param {?} content The modal template to show.
     * @return {?}
     */
    UpdateComponent.prototype.open = /**
     * Open update dialog modal.
     * @param {?} content The modal template to show.
     * @return {?}
     */
    function (content) {
        // Call modal service and open the specfied template in a modal.
        this.modalService.open(content).result.then(function (result) {
            // Modal approved.
            console.log("Update modal approved with " + result + ".");
        }, function (reason) {
            // Modal dismissed.
            console.log("Update modal closed with " + reason + ".");
            // Do nothing.
        });
    };
    /**
     * Submit the update new post item form.
     * */
    /**
     * Submit the update new post item form.
     *
     * @return {?}
     */
    UpdateComponent.prototype.onSubmit = /**
     * Submit the update new post item form.
     *
     * @return {?}
     */
    function () {
        // Update post item.
        this.updateItem();
        // Close open modals.
        this.modalService.dismissAll();
    };
    UpdateComponent.decorators = [
        { type: Component, args: [{
                    selector: 'post-item-update',
                    template: "<button class=\"btn btn-primary m-3\" (click)=\"open(update)\" [disabled]=\"updating\"><i *ngIf=\"updating\" class=\"fa fa-spinner fa-spin\"></i>&nbsp;<i class=\"fas fa-edit\"></i> Edit </button>\n\n<!-- Update Post Item Modal -->\n<ng-template #update let-modal>\n  <form name=\"form\" #f=\"ngForm\" novalidate (ngSubmit)=\"onSubmit()\">\n\n\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\" id=\"confirmation-modal\">\n        <i class=\"far fa-newspaper\"></i>\n\n        Post Update\n      </h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('dismissed')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <p><strong>Please fill all details below</strong></p>\n\n      <!-- Title -->\n      <div class=\"form-group\">\n        <label for=\"title\">Title</label>\n        <input type=\"text\" class=\"form-control\" name=\"title\" [(ngModel)]=\"model.title\" #title=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && title.invalid }\" maxlength=\"48\" required />\n        <div *ngIf=\"f.submitted && title.invalid\" class=\"invalid-feedback\">\n          <div *ngIf=\"title.errors.required\">Title is required</div>\n        </div>\n      </div>\n\n      <!-- Body -->\n      <div class=\"form-group\">\n        <label for=\"body\">Body</label>\n        <textarea  rows=\"3\" class=\"form-control\" name=\"body\" [(ngModel)]=\"model.body\" #body=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && body.invalid }\" maxlength=\"255\" required></textarea>\n        <div *ngIf=\"f.submitted && body.invalid\" class=\"invalid-feedback\">\n          <div *ngIf=\"body.errors.required\">Body is required</div>\n        </div>\n      </div>\n\n    </div>\n    <div class=\"modal-footer\">\n      <!-- Cancel -->\n      <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"modal.dismiss('cancel click')\">Cancel</button>\n      <!-- Submit -->\n      <button type=\"submit\" class=\"btn btn-primary\">Update</button>\n\n    </div>\n  </form>\n</ng-template>\n"
                }] }
    ];
    /** @nocollapse */
    UpdateComponent.ctorParameters = function () { return [
        { type: PostsService },
        { type: NgbModal }
    ]; };
    UpdateComponent.propDecorators = {
        postItem: [{ type: Input }],
        updated: [{ type: Output }]
    };
    return UpdateComponent;
}());
export { UpdateComponent };
if (false) {
    /** @type {?} */
    UpdateComponent.prototype.postItem;
    /** @type {?} */
    UpdateComponent.prototype.model;
    /** @type {?} */
    UpdateComponent.prototype.updated;
    /** @type {?} */
    UpdateComponent.prototype.updating;
    /** @type {?} */
    UpdateComponent.prototype.postsService;
    /** @type {?} */
    UpdateComponent.prototype.modalService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Bvc3RzLyIsInNvdXJjZXMiOlsibGliL3Bvc3QtaXRlbS91cGRhdGUvdXBkYXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRXRELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7SUFxQjFELHlCQUFvQixZQUEwQixFQUFVLFlBQXNCO1FBQTFELGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQVU7dUNBVHRFLEVBQWM7O3VCQUlZLElBQUksWUFBWSxFQUFZOzt3QkFHbkQsS0FBSztLQUVtRTs7OztJQUVuRixrQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsS0FBSyx3QkFBUSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDaEM7Ozs7OztJQUtJLG9DQUFVOzs7Ozs7OztRQUdmLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDOztRQUdyQixJQUFNLE9BQU8sR0FBRyxJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzs7UUFHbEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO2FBQzlCLFNBQVMsQ0FBQyxVQUFDLFFBQVE7O1lBRWxCLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxLQUFLLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFFakQsT0FBTyxDQUFDLEdBQUcsQ0FBQywwREFBMEQsQ0FBQyxDQUFDOztnQkFHeEUsQUFEQSwwQkFBMEI7Z0JBQzFCLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUMvQjtZQUNELElBQUksQ0FBQyxDQUFDO2dCQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMseURBQXlELENBQUMsQ0FBQzthQUN4RTtTQUNGLEVBQ0MsVUFBQyxLQUFLO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyw4REFBNEQsS0FBSyxNQUFHLENBQUMsQ0FBQztTQUNuRixFQUNEOztZQUVFLEFBREEsNEJBQTRCO1lBQzVCLEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBRXRCLE9BQU8sQ0FBQyxHQUFHLENBQUMsOENBQThDLENBQUMsQ0FBQztTQUM3RCxDQUFDLENBQUM7O0lBSVQ7OztPQUdHOzs7Ozs7SUFDSCw4QkFBSTs7Ozs7SUFBSixVQUFLLE9BQU87O1FBR1YsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQU07O1lBR2pELE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQThCLE1BQU0sTUFBRyxDQUFDLENBQUE7U0FFckQsRUFBRSxVQUFDLE1BQU07O1lBRVIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBNEIsTUFBTSxNQUFHLENBQUMsQ0FBQTs7U0FHbkQsQ0FBQyxDQUFDO0tBQ0o7SUFFRDs7U0FFSzs7Ozs7O0lBQ0wsa0NBQVE7Ozs7O0lBQVI7O1FBR0UsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDOztRQUdsQixJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDO0tBRWhDOztnQkE3RkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLDZrRUFBc0M7aUJBQ3ZDOzs7O2dCQU5RLFlBQVk7Z0JBSFosUUFBUTs7OzJCQWFkLEtBQUs7MEJBS0wsTUFBTTs7MEJBbkJUOztTQVdhLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nYk1vZGFsIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyBQb3N0SXRlbSB9IGZyb20gJy4uLy4uL21vZGVscy9pbnRlcmZhY2VzL3Bvc3QtaXRlbSc7XHJcbmltcG9ydCB7IFVwZGF0ZVBvc3RSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL3JlcXVlc3RzL3VwZGF0ZS1wb3N0LXJlcXVlc3QnO1xyXG5pbXBvcnQgeyBQb3N0c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9wb3N0cy5zZXJ2aWNlJztcclxuXHJcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncG9zdC1pdGVtLXVwZGF0ZScsXG4gIHRlbXBsYXRlVXJsOiAnLi91cGRhdGUuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFVwZGF0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgLy8gVGhlIHBvc3QgaXRlbSBtb2RlbC5cbiAgQElucHV0KCkgcG9zdEl0ZW06IFBvc3RJdGVtO1xuXG4gIG1vZGVsID0ge30gYXMgUG9zdEl0ZW07XG5cbiAgLy8gQW4gZXZlbnQgZW1pdHRlciBmb3IgcG9zdCBjcmVhdGlvbiBub3RpZmljYXRpb24uXG4gIEBPdXRwdXQoKVxyXG4gIHVwZGF0ZWQ6IEV2ZW50RW1pdHRlcjxQb3N0SXRlbT4gPSBuZXcgRXZlbnRFbWl0dGVyPFBvc3RJdGVtPigpO1xuXG4gIC8vIEFuIGluZGljYXRpb24gZm9yIGN1cnJlbnQgcHJvY2Vzc2luZyBzdGF0ZS5cbiAgdXBkYXRpbmcgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBvc3RzU2VydmljZTogUG9zdHNTZXJ2aWNlLCBwcml2YXRlIG1vZGFsU2VydmljZTogTmdiTW9kYWwpIHsgfVxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLm1vZGVsID0geyAuLi50aGlzLnBvc3RJdGVtfTtcclxuICAgIH1cclxuXG4gIC8qKlxuICAgKiBVcGRhdGUgdGhlIHBvc3QgaXRlbS5cbiAgICogKi9cbiAgcHVibGljIHVwZGF0ZUl0ZW0oKSB7XG5cbiAgICAvLyBTZXQgdGhlIHByb2Nlc3Npbmcgc3RhdGUuXHJcbiAgICB0aGlzLnVwZGF0aW5nID0gdHJ1ZTtcblxuICAgIC8vIFVwZGF0ZSB0aGUgcmVxdWVzdC5cbiAgICBjb25zdCByZXF1ZXN0ID0gbmV3IFVwZGF0ZVBvc3RSZXF1ZXN0KHRoaXMubW9kZWwpO1xuXG4gICAgLy8gQ2FsbCB0aGUgc2VydmljZS5cbiAgICB0aGlzLnBvc3RzU2VydmljZS51cGRhdGUocmVxdWVzdClcbiAgICAgIC5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIC8vIENoZWNrIGZvciBzdWNjZXNzZnVsIHJlc3BvbnNlLiAgICAgICAgXG4gICAgICAgIGlmIChyZXNwb25zZS5wb3N0SXRlbS5pZCA9PT0gcmVxdWVzdC5wb3N0SXRlbS5pZCkge1xuXG4gICAgICAgICAgY29uc29sZS5sb2coYEludm9raW5nIHVwZGF0ZSBwb3N0IGl0ZW0gcmVxdWVzdCBjb21wbGV0ZWQgc3VjZXNzZnVsbHkuYCk7XG5cbiAgICAgICAgICAvLyBFbWl0IHRoZSB1cGRhdGVkIGV2ZW50LlxuICAgICAgICAgIHRoaXMudXBkYXRlZC5lbWl0KHRoaXMubW9kZWwpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGBJbnZva2luZyB1cGRhdGUgcG9zdCBpdGVtIHJlcXVlc3QgY29tcGxldGVkIHdpdGggZXJyb3IuYCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGBJbnZva2luZyB1cGRhdGUgcG9zdCBpdGVtIHJlcXVlc3QgZW5jb3VudGVyZWQgIGFuIGVycm9yLiAke2Vycm9yfS5gKTtcbiAgICAgICAgfSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIC8vIFNldCB0aGUgcHJvY2Vzc2luZyBzdGF0ZS5cclxuICAgICAgICAgIHRoaXMudXBkYXRpbmcgPSBmYWxzZTtcblxuICAgICAgICAgIGNvbnNvbGUubG9nKGBDb21wbGV0ZWQgSW52b2tpbmcgdXBkYXRlIHBvc3QgaXRlbSByZXF1ZXN0LmApO1xuICAgICAgICB9KTtcblxuICB9XG5cbiAgLyoqXHJcbiAgICogT3BlbiB1cGRhdGUgZGlhbG9nIG1vZGFsLlxyXG4gICAqIEBwYXJhbSBjb250ZW50IFRoZSBtb2RhbCB0ZW1wbGF0ZSB0byBzaG93LlxyXG4gICAqL1xuICBvcGVuKGNvbnRlbnQpIHtcclxuXHJcbiAgICAvLyBDYWxsIG1vZGFsIHNlcnZpY2UgYW5kIG9wZW4gdGhlIHNwZWNmaWVkIHRlbXBsYXRlIGluIGEgbW9kYWwuXHJcbiAgICB0aGlzLm1vZGFsU2VydmljZS5vcGVuKGNvbnRlbnQpLnJlc3VsdC50aGVuKChyZXN1bHQpID0+IHtcclxuXHJcbiAgICAgIC8vIE1vZGFsIGFwcHJvdmVkLlxyXG4gICAgICBjb25zb2xlLmxvZyhgVXBkYXRlIG1vZGFsIGFwcHJvdmVkIHdpdGggJHtyZXN1bHR9LmApXHJcblxyXG4gICAgfSwgKHJlYXNvbikgPT4ge1xyXG4gICAgICAvLyBNb2RhbCBkaXNtaXNzZWQuXHJcbiAgICAgIGNvbnNvbGUubG9nKGBVcGRhdGUgbW9kYWwgY2xvc2VkIHdpdGggJHtyZWFzb259LmApXHJcblxyXG4gICAgICAvLyBEbyBub3RoaW5nLlxyXG4gICAgfSk7XHJcbiAgfVxuXG4gIC8qKlxuICAgKiBTdWJtaXQgdGhlIHVwZGF0ZSBuZXcgcG9zdCBpdGVtIGZvcm0uXG4gICAqICovXG4gIG9uU3VibWl0KCkge1xyXG5cclxuICAgIC8vIFVwZGF0ZSBwb3N0IGl0ZW0uXHJcbiAgICB0aGlzLnVwZGF0ZUl0ZW0oKTtcblxyXG4gICAgLy8gQ2xvc2Ugb3BlbiBtb2RhbHMuXHJcbiAgICB0aGlzLm1vZGFsU2VydmljZS5kaXNtaXNzQWxsKCk7XG5cbiAgfVxufVxuIl19