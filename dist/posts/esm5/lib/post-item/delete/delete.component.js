/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeletePostRequest } from '../../models/requests/delete-post-request';
import { PostsService } from '../../services/posts.service';
var DeleteComponent = /** @class */ (function () {
    function DeleteComponent(postsService, modalService) {
        this.postsService = postsService;
        this.modalService = modalService;
        // An event emitter for post deletion notification.
        this.deleted = new EventEmitter();
        // An indication for current processing state.
        this.deleting = false;
    }
    /**
     * Delete the post item.
     *
     * @return {?}
     */
    DeleteComponent.prototype.deleteItem = /**
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
                // Emit the deleted event.
                // Emit the deleted event.
                _this.deleted.emit(_this.model);
            }
            else {
                console.log("Invoking delete post item request completed with error.");
            }
        }, function (error) {
            console.log("Invoking delete post item request encountered  an error. " + error + ".");
        }, function () {
            // Set the processing state.
            // Set the processing state.
            _this.deleting = false;
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
    DeleteComponent.prototype.confirm = /**
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
            // Set the processing state.
            // Set the processing state.
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
    DeleteComponent.decorators = [
        { type: Component, args: [{
                    selector: 'post-item-delete',
                    template: "<button class=\"btn btn-danger m-3\" (click)=\"confirm(confirmation)\" [disabled]=\"deleting\"><i *ngIf=\"deleting\" class=\"fa fa-spinner fa-spin\"></i>&nbsp; <i class=\"fas fa-trash-alt\"></i> Delete</button>\n\n\n<!-- Confirmation Modal -->\n<ng-template #confirmation let-modal>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"confirmation-modal\">\n      <i class=\"fa fa-exclamation-triangle\"></i>\n      Post Deletion\n    </h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('dismissed')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <p><strong>Are you sure you want to delete <span class=\"text-primary\">\"{{model.title }}\"</span> post?</strong></p>\n    <p>\n      This post will be deleted and would no longer be available.\n      <span class=\"text-danger d-block\">This operation is irreversible!</span>\n    </p>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"modal.dismiss('cancel click')\">Cancel</button>\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"modal.close('Ok click')\">Ok</button>\n\n  </div>\n\n</ng-template>\n"
                }] }
    ];
    /** @nocollapse */
    DeleteComponent.ctorParameters = function () { return [
        { type: PostsService },
        { type: NgbModal }
    ]; };
    DeleteComponent.propDecorators = {
        model: [{ type: Input }],
        deleted: [{ type: Output }]
    };
    return DeleteComponent;
}());
export { DeleteComponent };
if (false) {
    /** @type {?} */
    DeleteComponent.prototype.model;
    /** @type {?} */
    DeleteComponent.prototype.deleted;
    /** @type {?} */
    DeleteComponent.prototype.deleting;
    /** @type {?} */
    DeleteComponent.prototype.postsService;
    /** @type {?} */
    DeleteComponent.prototype.modalService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Bvc3RzLyIsInNvdXJjZXMiOlsibGliL3Bvc3QtaXRlbS9kZWxldGUvZGVsZXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFdEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDOUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDhCQUE4QixDQUFDOztJQW1CMUQseUJBQW9CLFlBQTBCLEVBQVUsWUFBc0I7UUFBMUQsaUJBQVksR0FBWixZQUFZLENBQWM7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBVTs7dUJBTDVDLElBQUksWUFBWSxFQUFZOzt3QkFHbkQsS0FBSztLQUVtRTs7Ozs7O0lBSzVFLG9DQUFVOzs7Ozs7OztRQUdmLElBQU0sT0FBTyxHQUFHLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQzs7UUFHckQsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO2FBQzlCLFNBQVMsQ0FBQyxVQUFDLFFBQVE7O1lBRWxCLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEtBQUssS0FBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUVsQyxPQUFPLENBQUMsR0FBRyxDQUFDLDBEQUEwRCxDQUFDLENBQUM7O2dCQUd4RSxBQURBLDBCQUEwQjtnQkFDMUIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQy9CO1lBQ0QsSUFBSSxDQUFDLENBQUM7Z0JBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyx5REFBeUQsQ0FBQyxDQUFDO2FBQ3hFO1NBRUYsRUFDQyxVQUFDLEtBQUs7WUFHSixPQUFPLENBQUMsR0FBRyxDQUFDLDhEQUE0RCxLQUFLLE1BQUcsQ0FBQyxDQUFDO1NBQ25GLEVBQ0Q7O1lBRUUsQUFEQSw0QkFBNEI7WUFDNUIsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFFdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDO1NBQzdELENBQUMsQ0FBQzs7SUFJVDs7O09BR0c7Ozs7OztJQUNILGlDQUFPOzs7OztJQUFQLFVBQVEsT0FBTztRQUFmLGlCQW9CQzs7UUFqQkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQU07O1lBR2pELE9BQU8sQ0FBQyxHQUFHLENBQUMsc0NBQW9DLE1BQU0sTUFBRyxDQUFDLENBQUE7O1lBRzFELEFBREEsNEJBQTRCO1lBQzVCLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDOztZQUdyQixBQURBLG9CQUFvQjtZQUNwQixLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7U0FFbkIsRUFBRSxVQUFDLE1BQU07O1lBRU4sT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQ0FBa0MsTUFBTSxNQUFHLENBQUMsQ0FBQTs7U0FHM0QsQ0FBQyxDQUFDO0tBQ0o7O2dCQWhGRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIscXZDQUFzQztpQkFDdkM7Ozs7Z0JBTlEsWUFBWTtnQkFIWixRQUFROzs7d0JBYWQsS0FBSzswQkFHTCxNQUFNOzswQkFqQlQ7O1NBV2EsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nYk1vZGFsIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyBQb3N0SXRlbSB9IGZyb20gJy4uLy4uL21vZGVscy9pbnRlcmZhY2VzL3Bvc3QtaXRlbSc7XHJcbmltcG9ydCB7IERlbGV0ZVBvc3RSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL3JlcXVlc3RzL2RlbGV0ZS1wb3N0LXJlcXVlc3QnO1xyXG5pbXBvcnQgeyBQb3N0c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9wb3N0cy5zZXJ2aWNlJztcclxuXHJcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncG9zdC1pdGVtLWRlbGV0ZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9kZWxldGUuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIERlbGV0ZUNvbXBvbmVudCB7XG5cbiAgLy8gVGhlIHBvc3QgaXRlbSBtb2RlbC5cbiAgQElucHV0KCkgbW9kZWw6IFBvc3RJdGVtO1xuXG4gIC8vIEFuIGV2ZW50IGVtaXR0ZXIgZm9yIHBvc3QgZGVsZXRpb24gbm90aWZpY2F0aW9uLlxuICBAT3V0cHV0KClcclxuICBkZWxldGVkOiBFdmVudEVtaXR0ZXI8UG9zdEl0ZW0+ID0gbmV3IEV2ZW50RW1pdHRlcjxQb3N0SXRlbT4oKTtcblxuICAvLyBBbiBpbmRpY2F0aW9uIGZvciBjdXJyZW50IHByb2Nlc3Npbmcgc3RhdGUuXG4gIGRlbGV0aW5nID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwb3N0c1NlcnZpY2U6IFBvc3RzU2VydmljZSwgcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE5nYk1vZGFsKSB7IH1cblxuICAvKipcbiAgICogRGVsZXRlIHRoZSBwb3N0IGl0ZW0uXG4gICAqICovXG4gIHB1YmxpYyBkZWxldGVJdGVtKCkge1xuICAgIFxuICAgIC8vIENyZWF0ZSB0aGUgcmVxdWVzdC5cbiAgICBjb25zdCByZXF1ZXN0ID0gbmV3IERlbGV0ZVBvc3RSZXF1ZXN0KHRoaXMubW9kZWwuaWQpO1xuXG4gICAgLy8gQ2FsbCB0aGUgc2VydmljZS5cbiAgICB0aGlzLnBvc3RzU2VydmljZS5kZWxldGUocmVxdWVzdClcbiAgICAgIC5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIC8vIENoZWNrIGZvciBzdWNjZXNzZnVsIHJlc3BvbnNlLlxuICAgICAgICBpZiAocmVzcG9uc2UuaWQgPT09IHRoaXMubW9kZWwuaWQpIHtcblxuICAgICAgICAgIGNvbnNvbGUubG9nKGBJbnZva2luZyBkZWxldGUgcG9zdCBpdGVtIHJlcXVlc3QgY29tcGxldGVkIHN1Y2Vzc2Z1bGx5LmApO1xuXG4gICAgICAgICAgLy8gRW1pdCB0aGUgZGVsZXRlZCBldmVudC5cbiAgICAgICAgICB0aGlzLmRlbGV0ZWQuZW1pdCh0aGlzLm1vZGVsKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhgSW52b2tpbmcgZGVsZXRlIHBvc3QgaXRlbSByZXF1ZXN0IGNvbXBsZXRlZCB3aXRoIGVycm9yLmApO1xuICAgICAgICB9XG5cbiAgICAgIH0sXG4gICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICBcblxuICAgICAgICAgIGNvbnNvbGUubG9nKGBJbnZva2luZyBkZWxldGUgcG9zdCBpdGVtIHJlcXVlc3QgZW5jb3VudGVyZWQgIGFuIGVycm9yLiAke2Vycm9yfS5gKTtcbiAgICAgICAgfSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIC8vIFNldCB0aGUgcHJvY2Vzc2luZyBzdGF0ZS5cclxuICAgICAgICAgIHRoaXMuZGVsZXRpbmcgPSBmYWxzZTtcblxuICAgICAgICAgIGNvbnNvbGUubG9nKGBDb21wbGV0ZWQgSW52b2tpbmcgZGVsZXRlIHBvc3QgaXRlbSByZXF1ZXN0LmApO1xuICAgICAgICB9KTtcblxuICB9XG5cbiAgLyoqXHJcbiAgICogT3BlbiBkZWxldGlvbiBjb25maXJtYXRpb24gZGlhbG9nIG1vZGFsLlxyXG4gICAqIEBwYXJhbSBjb250ZW50IFRoZSBtb2RhbCB0ZW1wbGF0ZSB0byBzaG93LlxyXG4gICAqL1xuICBjb25maXJtKGNvbnRlbnQpIHtcclxuXHJcbiAgICAvLyBDYWxsIG1vZGFsIHNlcnZpY2UgYW5kIG9wZW4gdGhlIHNwZWNmaWVkIHRlbXBsYXRlIGluIGEgbW9kYWwuXHJcbiAgICB0aGlzLm1vZGFsU2VydmljZS5vcGVuKGNvbnRlbnQpLnJlc3VsdC50aGVuKChyZXN1bHQpID0+IHtcclxuXHJcbiAgICAgIC8vIENvbmZpcm1hdGlvbiBhcHByb3ZlZC5cclxuICAgICAgY29uc29sZS5sb2coYENvbmZpcm1hdGlvbiBtb2RhbCBhcHByb3ZlZCB3aXRoICR7cmVzdWx0fS5gKVxyXG5cclxuICAgICAgLy8gU2V0IHRoZSBwcm9jZXNzaW5nIHN0YXRlLlxyXG4gICAgICB0aGlzLmRlbGV0aW5nID0gdHJ1ZTtcclxuXHJcbiAgICAgIC8vIERlbGV0ZSBwb3N0IGl0ZW0uXHJcbiAgICAgIHRoaXMuZGVsZXRlSXRlbSgpO1xyXG5cclxuICAgIH0sIChyZWFzb24pID0+IHtcclxuICAgICAgICAvLyBDb25maXJtYXRpb24gZGlzbWlzc2VkLlxyXG4gICAgICAgIGNvbnNvbGUubG9nKGBDb25maXJtYXRpb24gbW9kYWwgY2xvc2VkIHdpdGggJHtyZWFzb259LmApXHJcblxyXG4gICAgICAgIC8vIERvIG5vdGhpbmcuXHJcbiAgICB9KTtcclxuICB9XG59XG4iXX0=