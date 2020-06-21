/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { DeletePostRequest } from '../models/requests/delete-post-request';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
export class PostItemComponent {
    /**
     * @param {?} postsService
     * @param {?} modalService
     */
    constructor(postsService, modalService) {
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
    deleteItem() {
        /** @type {?} */
        const request = new DeletePostRequest(this.model.id);
        // Call the service.
        this.postsService.delete(request)
            .subscribe((response) => {
            // Check for successful response.
            if (response.id === this.model.id) {
                console.log(`Invoking delete post item request completed sucessfully.`);
                this.delete.emit(this.model);
            }
            else {
                console.log(`Invoking delete post item request completed with error.`);
            }
        }, (error) => {
            console.log(`Invoking delete post item request encountered  an error. ${error}.`);
        }, () => {
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
PostItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'post-item',
                template: "<div class=\"card m-3\">\n\n  <div class=\"card-body\">\n    <h4 class=\"card-title\">{{ model.title | uppercase}}</h4>\n\n    <p>{{ model.body }}</p>\n  </div>  \n</div>\n\r\n",
                styles: [""]
            }] }
];
/** @nocollapse */
PostItemComponent.ctorParameters = () => [
    { type: PostsService },
    { type: NgbModal }
];
PostItemComponent.propDecorators = {
    model: [{ type: Input }],
    delete: [{ type: Output }]
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdC1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Bvc3RzLyIsInNvdXJjZXMiOlsibGliL3Bvc3QtaXRlbS9wb3N0LWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXZFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUUzRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFPdEQsTUFBTTs7Ozs7SUFVSixZQUFvQixZQUEwQixFQUFVLFlBQXNCO1FBQTFELGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQVU7O3NCQUg3QyxJQUFJLFlBQVksRUFBWTt3QkFFbEQsS0FBSztLQUNtRTs7Ozs7O0lBSzVFLFVBQVU7O1FBR2YsTUFBTSxPQUFPLEdBQUcsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDOztRQUdyRCxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7YUFDOUIsU0FBUyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7O1lBRXRCLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUVsQyxPQUFPLENBQUMsR0FBRyxDQUFDLDBEQUEwRCxDQUFDLENBQUM7Z0JBQ3hFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUM5QjtZQUNELElBQUksQ0FBQyxDQUFDO2dCQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMseURBQXlELENBQUMsQ0FBQzthQUN4RTtTQUVGLEVBQ0MsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUdSLE9BQU8sQ0FBQyxHQUFHLENBQUMsNERBQTRELEtBQUssR0FBRyxDQUFDLENBQUM7U0FDbkYsRUFDRCxHQUFHLEVBQUU7WUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLDhDQUE4QyxDQUFDLENBQUM7U0FDN0QsQ0FBQyxDQUFDOzs7Ozs7O0lBUVQsT0FBTyxDQUFDLE9BQU87O1FBR2IsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFOztZQUdyRCxPQUFPLENBQUMsR0FBRyxDQUFDLG9DQUFvQyxNQUFNLEdBQUcsQ0FBQyxDQUFBO1lBRTFELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDOztZQUVyQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7U0FFbkIsRUFBRSxDQUFDLE1BQU0sRUFBRSxFQUFFOztZQUdWLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0NBQWtDLE1BQU0sR0FBRyxDQUFDLENBQUE7O1NBRzNELENBQUMsQ0FBQztLQUNKOzs7WUF6RUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQiw0TEFBeUM7O2FBRTFDOzs7O1lBVFEsWUFBWTtZQUdaLFFBQVE7OztvQkFVZCxLQUFLO3FCQUdMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUG9zdEl0ZW0gfSBmcm9tICcuLi9tb2RlbHMvaW50ZXJmYWNlcy9wb3N0LWl0ZW0nO1xyXG5pbXBvcnQgeyBQb3N0c1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9wb3N0cy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRGVsZXRlUG9zdFJlcXVlc3QgfSBmcm9tICcuLi9tb2RlbHMvcmVxdWVzdHMvZGVsZXRlLXBvc3QtcmVxdWVzdCc7XHJcblxyXG5pbXBvcnQgeyBOZ2JNb2RhbCB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcclxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwb3N0LWl0ZW0nLFxuICB0ZW1wbGF0ZVVybDogJy4vcG9zdC1pdGVtLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcG9zdC1pdGVtLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUG9zdEl0ZW1Db21wb25lbnQge1xuXG4gIC8vIFRoZSBwb3N0IGl0ZW0gbW9kZWwuXG4gIEBJbnB1dCgpIG1vZGVsOiBQb3N0SXRlbTtcblxuICAvLyBBbiBldmVudCBlbWl0dGVyIGZvciBwb3N0IGRlbGV0aW9uIG5vdGlmaWNhdGlvbi5cbiAgQE91dHB1dCgpXHJcbiAgZGVsZXRlOiBFdmVudEVtaXR0ZXI8UG9zdEl0ZW0+ID0gbmV3IEV2ZW50RW1pdHRlcjxQb3N0SXRlbT4oKTtcblxuICBkZWxldGluZyA9IGZhbHNlO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBvc3RzU2VydmljZTogUG9zdHNTZXJ2aWNlLCBwcml2YXRlIG1vZGFsU2VydmljZTogTmdiTW9kYWwpIHsgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgdGhlIHBvc3QgaXRlbS5cbiAgICogKi9cbiAgcHVibGljIGRlbGV0ZUl0ZW0oKSB7XG4gICAgXG4gICAgLy8gQ3JlYXRlIHRoZSByZXF1ZXN0LlxuICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgRGVsZXRlUG9zdFJlcXVlc3QodGhpcy5tb2RlbC5pZCk7XG5cbiAgICAvLyBDYWxsIHRoZSBzZXJ2aWNlLlxuICAgIHRoaXMucG9zdHNTZXJ2aWNlLmRlbGV0ZShyZXF1ZXN0KVxuICAgICAgLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgLy8gQ2hlY2sgZm9yIHN1Y2Nlc3NmdWwgcmVzcG9uc2UuXG4gICAgICAgIGlmIChyZXNwb25zZS5pZCA9PT0gdGhpcy5tb2RlbC5pZCkge1xuXG4gICAgICAgICAgY29uc29sZS5sb2coYEludm9raW5nIGRlbGV0ZSBwb3N0IGl0ZW0gcmVxdWVzdCBjb21wbGV0ZWQgc3VjZXNzZnVsbHkuYCk7XG4gICAgICAgICAgdGhpcy5kZWxldGUuZW1pdCh0aGlzLm1vZGVsKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhgSW52b2tpbmcgZGVsZXRlIHBvc3QgaXRlbSByZXF1ZXN0IGNvbXBsZXRlZCB3aXRoIGVycm9yLmApO1xuICAgICAgICB9XG5cbiAgICAgIH0sXG4gICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICBcblxuICAgICAgICAgIGNvbnNvbGUubG9nKGBJbnZva2luZyBkZWxldGUgcG9zdCBpdGVtIHJlcXVlc3QgZW5jb3VudGVyZWQgIGFuIGVycm9yLiAke2Vycm9yfS5gKTtcbiAgICAgICAgfSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGBDb21wbGV0ZWQgSW52b2tpbmcgZGVsZXRlIHBvc3QgaXRlbSByZXF1ZXN0LmApO1xuICAgICAgICB9KTtcblxuICB9XG5cbiAgLyoqXHJcbiAgICogT3BlbiBkZWxldGlvbiBjb25maXJtYXRpb24gZGlhbG9nIG1vZGFsLlxyXG4gICAqIEBwYXJhbSBjb250ZW50IFRoZSBtb2RhbCB0ZW1wbGF0ZSB0byBzaG93LlxyXG4gICAqL1xuICBjb25maXJtKGNvbnRlbnQpIHtcclxuXHJcbiAgICAvLyBDYWxsIG1vZGFsIHNlcnZpY2UgYW5kIG9wZW4gdGhlIHNwZWNmaWVkIHRlbXBsYXRlIGluIGEgbW9kYWwuXHJcbiAgICB0aGlzLm1vZGFsU2VydmljZS5vcGVuKGNvbnRlbnQpLnJlc3VsdC50aGVuKChyZXN1bHQpID0+IHtcclxuXHJcbiAgICAgIC8vIENvbmZpcm1hdGlvbiBhcHByb3ZlZC5cclxuICAgICAgY29uc29sZS5sb2coYENvbmZpcm1hdGlvbiBtb2RhbCBhcHByb3ZlZCB3aXRoICR7cmVzdWx0fS5gKVxyXG5cclxuICAgICAgdGhpcy5kZWxldGluZyA9IHRydWU7XHJcbiAgICAgIC8vIERlbGV0ZSBwb3N0IGl0ZW0uXHJcbiAgICAgIHRoaXMuZGVsZXRlSXRlbSgpO1xyXG5cclxuICAgIH0sIChyZWFzb24pID0+IHtcclxuXHJcbiAgICAgICAgLy8gQ29uZmlybWF0aW9uIGRpc21pc3NlZC5cclxuICAgICAgICBjb25zb2xlLmxvZyhgQ29uZmlybWF0aW9uIG1vZGFsIGNsb3NlZCB3aXRoICR7cmVhc29ufS5gKVxyXG5cclxuICAgICAgICAvLyBEbyBub3RoaW5nLlxyXG4gICAgfSk7XHJcbiAgfVxufVxuIl19