/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeletePostRequest } from '../../models/requests/delete-post-request';
import { PostsService } from '../../services/posts.service';
export class DeleteComponent {
    /**
     * @param {?} postsService
     * @param {?} modalService
     */
    constructor(postsService, modalService) {
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
    deleteItem() {
        /** @type {?} */
        const request = new DeletePostRequest(this.model.id);
        // Call the service.
        this.postsService.delete(request)
            .subscribe((response) => {
            // Check for successful response.
            if (response.id === this.model.id) {
                console.log(`Invoking delete post item request completed sucessfully.`);
                // Emit the deleted event.
                this.deleted.emit(this.model);
            }
            else {
                console.log(`Invoking delete post item request completed with error.`);
            }
        }, (error) => {
            console.log(`Invoking delete post item request encountered  an error. ${error}.`);
        }, () => {
            // Set the processing state.
            this.deleting = false;
            console.log(`Completed Invoking delete post item request.`);
        });
    }
    /**
     * Open deletion confirmation dialog modal.
     * @param {?} content The modal template to show.
     * @return {?}
     */
    confirm(content) {
        // Call modal service and open the specfied template in a modal.
        this.modalService.open(content).result.then((result) => {
            // Confirmation approved.
            console.log(`Confirmation modal approved with ${result}.`);
            // Set the processing state.
            this.deleting = true;
            // Delete post item.
            this.deleteItem();
        }, (reason) => {
            // Confirmation dismissed.
            console.log(`Confirmation modal closed with ${reason}.`);
            // Do nothing.
        });
    }
}
DeleteComponent.decorators = [
    { type: Component, args: [{
                selector: 'post-item-delete',
                template: "<button class=\"btn btn-danger m-3\" (click)=\"confirm(confirmation)\" [disabled]=\"deleting\"><i *ngIf=\"deleting\" class=\"fa fa-spinner fa-spin\"></i>&nbsp; <i class=\"fas fa-trash-alt\"></i> Delete</button>\n\n\n<!-- Confirmation Modal -->\n<ng-template #confirmation let-modal>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"confirmation-modal\">\n      <i class=\"fa fa-exclamation-triangle\"></i>\n      Post Deletion\n    </h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('dismissed')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <p><strong>Are you sure you want to delete <span class=\"text-primary\">\"{{model.title }}\"</span> post?</strong></p>\n    <p>\n      This post will be deleted and would no longer be available.\n      <span class=\"text-danger d-block\">This operation is irreversible!</span>\n    </p>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"modal.dismiss('cancel click')\">Cancel</button>\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"modal.close('Ok click')\">Ok</button>\n\n  </div>\n\n</ng-template>\n"
            }] }
];
/** @nocollapse */
DeleteComponent.ctorParameters = () => [
    { type: PostsService },
    { type: NgbModal }
];
DeleteComponent.propDecorators = {
    model: [{ type: Input }],
    deleted: [{ type: Output }]
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Bvc3RzLyIsInNvdXJjZXMiOlsibGliL3Bvc3QtaXRlbS9kZWxldGUvZGVsZXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFdEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDOUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBTzVELE1BQU07Ozs7O0lBWUosWUFBb0IsWUFBMEIsRUFBVSxZQUFzQjtRQUExRCxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFVOzt1QkFMNUMsSUFBSSxZQUFZLEVBQVk7O3dCQUduRCxLQUFLO0tBRW1FOzs7Ozs7SUFLNUUsVUFBVTs7UUFHZixNQUFNLE9BQU8sR0FBRyxJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7O1FBR3JELElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQzthQUM5QixTQUFTLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTs7WUFFdEIsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBRWxDLE9BQU8sQ0FBQyxHQUFHLENBQUMsMERBQTBELENBQUMsQ0FBQzs7Z0JBR3hFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUMvQjtZQUNELElBQUksQ0FBQyxDQUFDO2dCQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMseURBQXlELENBQUMsQ0FBQzthQUN4RTtTQUVGLEVBQ0MsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUdSLE9BQU8sQ0FBQyxHQUFHLENBQUMsNERBQTRELEtBQUssR0FBRyxDQUFDLENBQUM7U0FDbkYsRUFDRCxHQUFHLEVBQUU7O1lBRUgsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFFdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDO1NBQzdELENBQUMsQ0FBQzs7Ozs7OztJQVFULE9BQU8sQ0FBQyxPQUFPOztRQUdiLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTs7WUFHckQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQ0FBb0MsTUFBTSxHQUFHLENBQUMsQ0FBQTs7WUFHMUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7O1lBR3JCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUVuQixFQUFFLENBQUMsTUFBTSxFQUFFLEVBQUU7O1lBRVYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsTUFBTSxHQUFHLENBQUMsQ0FBQTs7U0FHM0QsQ0FBQyxDQUFDO0tBQ0o7OztZQWhGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIscXZDQUFzQzthQUN2Qzs7OztZQU5RLFlBQVk7WUFIWixRQUFROzs7b0JBYWQsS0FBSztzQkFHTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmdiTW9kYWwgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IFBvc3RJdGVtIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2ludGVyZmFjZXMvcG9zdC1pdGVtJztcclxuaW1wb3J0IHsgRGVsZXRlUG9zdFJlcXVlc3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvcmVxdWVzdHMvZGVsZXRlLXBvc3QtcmVxdWVzdCc7XHJcbmltcG9ydCB7IFBvc3RzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3Bvc3RzLnNlcnZpY2UnO1xyXG5cclxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwb3N0LWl0ZW0tZGVsZXRlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RlbGV0ZS5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgRGVsZXRlQ29tcG9uZW50IHtcblxuICAvLyBUaGUgcG9zdCBpdGVtIG1vZGVsLlxuICBASW5wdXQoKSBtb2RlbDogUG9zdEl0ZW07XG5cbiAgLy8gQW4gZXZlbnQgZW1pdHRlciBmb3IgcG9zdCBkZWxldGlvbiBub3RpZmljYXRpb24uXG4gIEBPdXRwdXQoKVxyXG4gIGRlbGV0ZWQ6IEV2ZW50RW1pdHRlcjxQb3N0SXRlbT4gPSBuZXcgRXZlbnRFbWl0dGVyPFBvc3RJdGVtPigpO1xuXG4gIC8vIEFuIGluZGljYXRpb24gZm9yIGN1cnJlbnQgcHJvY2Vzc2luZyBzdGF0ZS5cbiAgZGVsZXRpbmcgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBvc3RzU2VydmljZTogUG9zdHNTZXJ2aWNlLCBwcml2YXRlIG1vZGFsU2VydmljZTogTmdiTW9kYWwpIHsgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgdGhlIHBvc3QgaXRlbS5cbiAgICogKi9cbiAgcHVibGljIGRlbGV0ZUl0ZW0oKSB7XG4gICAgXG4gICAgLy8gQ3JlYXRlIHRoZSByZXF1ZXN0LlxuICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgRGVsZXRlUG9zdFJlcXVlc3QodGhpcy5tb2RlbC5pZCk7XG5cbiAgICAvLyBDYWxsIHRoZSBzZXJ2aWNlLlxuICAgIHRoaXMucG9zdHNTZXJ2aWNlLmRlbGV0ZShyZXF1ZXN0KVxuICAgICAgLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgLy8gQ2hlY2sgZm9yIHN1Y2Nlc3NmdWwgcmVzcG9uc2UuXG4gICAgICAgIGlmIChyZXNwb25zZS5pZCA9PT0gdGhpcy5tb2RlbC5pZCkge1xuXG4gICAgICAgICAgY29uc29sZS5sb2coYEludm9raW5nIGRlbGV0ZSBwb3N0IGl0ZW0gcmVxdWVzdCBjb21wbGV0ZWQgc3VjZXNzZnVsbHkuYCk7XG5cbiAgICAgICAgICAvLyBFbWl0IHRoZSBkZWxldGVkIGV2ZW50LlxuICAgICAgICAgIHRoaXMuZGVsZXRlZC5lbWl0KHRoaXMubW9kZWwpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGBJbnZva2luZyBkZWxldGUgcG9zdCBpdGVtIHJlcXVlc3QgY29tcGxldGVkIHdpdGggZXJyb3IuYCk7XG4gICAgICAgIH1cblxuICAgICAgfSxcbiAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgIFxuXG4gICAgICAgICAgY29uc29sZS5sb2coYEludm9raW5nIGRlbGV0ZSBwb3N0IGl0ZW0gcmVxdWVzdCBlbmNvdW50ZXJlZCAgYW4gZXJyb3IuICR7ZXJyb3J9LmApO1xuICAgICAgICB9LFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgLy8gU2V0IHRoZSBwcm9jZXNzaW5nIHN0YXRlLlxyXG4gICAgICAgICAgdGhpcy5kZWxldGluZyA9IGZhbHNlO1xuXG4gICAgICAgICAgY29uc29sZS5sb2coYENvbXBsZXRlZCBJbnZva2luZyBkZWxldGUgcG9zdCBpdGVtIHJlcXVlc3QuYCk7XG4gICAgICAgIH0pO1xuXG4gIH1cblxuICAvKipcclxuICAgKiBPcGVuIGRlbGV0aW9uIGNvbmZpcm1hdGlvbiBkaWFsb2cgbW9kYWwuXHJcbiAgICogQHBhcmFtIGNvbnRlbnQgVGhlIG1vZGFsIHRlbXBsYXRlIHRvIHNob3cuXHJcbiAgICovXG4gIGNvbmZpcm0oY29udGVudCkge1xyXG5cclxuICAgIC8vIENhbGwgbW9kYWwgc2VydmljZSBhbmQgb3BlbiB0aGUgc3BlY2ZpZWQgdGVtcGxhdGUgaW4gYSBtb2RhbC5cclxuICAgIHRoaXMubW9kYWxTZXJ2aWNlLm9wZW4oY29udGVudCkucmVzdWx0LnRoZW4oKHJlc3VsdCkgPT4ge1xyXG5cclxuICAgICAgLy8gQ29uZmlybWF0aW9uIGFwcHJvdmVkLlxyXG4gICAgICBjb25zb2xlLmxvZyhgQ29uZmlybWF0aW9uIG1vZGFsIGFwcHJvdmVkIHdpdGggJHtyZXN1bHR9LmApXHJcblxyXG4gICAgICAvLyBTZXQgdGhlIHByb2Nlc3Npbmcgc3RhdGUuXHJcbiAgICAgIHRoaXMuZGVsZXRpbmcgPSB0cnVlO1xyXG5cclxuICAgICAgLy8gRGVsZXRlIHBvc3QgaXRlbS5cclxuICAgICAgdGhpcy5kZWxldGVJdGVtKCk7XHJcblxyXG4gICAgfSwgKHJlYXNvbikgPT4ge1xyXG4gICAgICAgIC8vIENvbmZpcm1hdGlvbiBkaXNtaXNzZWQuXHJcbiAgICAgICAgY29uc29sZS5sb2coYENvbmZpcm1hdGlvbiBtb2RhbCBjbG9zZWQgd2l0aCAke3JlYXNvbn0uYClcclxuXHJcbiAgICAgICAgLy8gRG8gbm90aGluZy5cclxuICAgIH0pO1xyXG4gIH1cbn1cbiJdfQ==