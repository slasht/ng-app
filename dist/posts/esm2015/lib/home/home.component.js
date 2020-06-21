/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { GetPostsRequest } from '../models/requests/get-posts-request';
export class HomeComponent {
    /**
     * @param {?} postsService
     */
    constructor(postsService) {
        this.postsService = postsService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const request = new GetPostsRequest(50);
        // Set loading state.
        this.loading = true;
        // Call the service and retrieve posts.
        this.postsService.getPosts(request)
            .subscribe((response) => {
            // Set the items returned in the response.
            this.postItems = response.items;
        }, (error) => {
            console.log(`Invoking get posts request encountered  an error. ${error}.`);
        }, () => {
            // Set loading state.
            this.loading = false;
            console.log(`Completed invoking get posts request.`);
        });
    }
    /**
     * Create the specified post item on view.
     * @param {?} event The triggered event containing the post item to create.
     * @return {?}
     */
    create(event) {
        // Add the item to top of the posts collection.
        this.postItems.unshift(event);
    }
    /**
     * Update the specified post item on view.
     * @param {?} event The triggered event containing the post item to update.
     * @return {?}
     */
    update(event) {
        // Update the item in the posts collection.
        this.postItems[this.postItems.findIndex(x => x.id === event.id)] = event;
    }
    /**
     * Delete the specified post item from view.
     * @param {?} event The triggered event containing the post item to delete.
     * @return {?}
     */
    delete(event) {
        // Remove the item from the posts collection.
        this.postItems.splice(this.postItems.indexOf(event), 1);
    }
}
HomeComponent.decorators = [
    { type: Component, args: [{
                selector: 'posts-home',
                template: "<section>\n  <div class=\"container\">\n    <h2 class=\"text-center\">\n      My Posts\n    </h2>\n\n    <!-- Loading spinner -->\n    <div *ngIf=\"loading\" class=\"fa fa-spinner fa-spin spinner\"></div>\n\n    <!-- Create -->\n    <post-item-create (created)=\"create($event)\"></post-item-create>\n\n    <div *ngFor=\"let postItem of postItems\">\n\n      <!-- Post item -->\n      <post-item [model]=\"postItem\"></post-item>\n\n      <!-- Update -->\n      <post-item-update [postItem]=\"postItem\" (updated)=\"update($event)\"></post-item-update>\n   \n      <!-- Delete -->\n      <post-item-delete [model]=\"postItem\" (deleted)=\"delete($event)\"></post-item-delete>\n\n\n    </div>\n\n\n\n  </div>\n</section>\n",
                styles: ["section{padding:20px;width:100%;height:100%;background-color:#6cd37d;color:#383838}section btn{margin-left:100px}"]
            }] }
];
/** @nocollapse */
HomeComponent.ctorParameters = () => [
    { type: PostsService }
];
if (false) {
    /** @type {?} */
    HomeComponent.prototype.loading;
    /** @type {?} */
    HomeComponent.prototype.postItems;
    /** @type {?} */
    HomeComponent.prototype.postsService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9wb3N0cy8iLCJzb3VyY2VzIjpbImxpYi9ob21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUV6RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFPdkUsTUFBTTs7OztJQVFKLFlBQW9CLFlBQTBCO1FBQTFCLGlCQUFZLEdBQVosWUFBWSxDQUFjO0tBQUs7Ozs7SUFHbkQsUUFBUTs7UUFHTixNQUFNLE9BQU8sR0FBRyxJQUFJLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQzs7UUFHeEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7O1FBR3BCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQzthQUNoQyxTQUFTLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTs7WUFHdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDO1NBQ2pDLEVBQ0MsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUVSLE9BQU8sQ0FBQyxHQUFHLENBQUMscURBQXFELEtBQUssR0FBRyxDQUFDLENBQUM7U0FDNUUsRUFDRCxHQUFHLEVBQUU7O1lBRUgsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFFckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO1NBQ3RELENBQUMsQ0FBQztLQUNSOzs7Ozs7SUFNRCxNQUFNLENBQUMsS0FBZTs7UUFFcEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDL0I7Ozs7OztJQU9ELE1BQU0sQ0FBQyxLQUFlOztRQUVwQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7S0FDMUU7Ozs7OztJQU1ELE1BQU0sQ0FBQyxLQUFlOztRQUVwQixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUN6RDs7O1lBckVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsNnRCQUFvQzs7YUFFckM7Ozs7WUFSUSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBvc3RzU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3Bvc3RzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQb3N0SXRlbSB9IGZyb20gJy4uL21vZGVscy9pbnRlcmZhY2VzL3Bvc3QtaXRlbSc7XHJcbmltcG9ydCB7IEdldFBvc3RzUmVxdWVzdCB9IGZyb20gJy4uL21vZGVscy9yZXF1ZXN0cy9nZXQtcG9zdHMtcmVxdWVzdCc7XHJcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncG9zdHMtaG9tZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9ob21lLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaG9tZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIC8vIExvYWRpbmcgaW5kaWNhdGlvbi5cbiAgbG9hZGluZzogYm9vbGVhbjtcblxuICAvLyBUaGUgcG9zdCBpdGVtcyB0byBzaG93LlxuICBwb3N0SXRlbXM6IFBvc3RJdGVtW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwb3N0c1NlcnZpY2U6IFBvc3RzU2VydmljZSkgeyB9XG5cblxuICBuZ09uSW5pdCgpIHtcclxuXG4gICAgLy8gQ3JlYXRlIGdldCBwb3N0cyByZXF1ZXN0LlxuICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgR2V0UG9zdHNSZXF1ZXN0KDUwKTtcclxuXHJcbiAgICAvLyBTZXQgbG9hZGluZyBzdGF0ZS5cbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG5cclxuICAgIC8vIENhbGwgdGhlIHNlcnZpY2UgYW5kIHJldHJpZXZlIHBvc3RzLlxyXG4gICAgdGhpcy5wb3N0c1NlcnZpY2UuZ2V0UG9zdHMocmVxdWVzdClcbiAgICAgIC5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XG5cbiAgICAgICAgLy8gU2V0IHRoZSBpdGVtcyByZXR1cm5lZCBpbiB0aGUgcmVzcG9uc2UuXG4gICAgICAgIHRoaXMucG9zdEl0ZW1zID0gcmVzcG9uc2UuaXRlbXM7XG4gICAgICB9LFxuICAgICAgICAoZXJyb3IpID0+IHtcblxuICAgICAgICAgIGNvbnNvbGUubG9nKGBJbnZva2luZyBnZXQgcG9zdHMgcmVxdWVzdCBlbmNvdW50ZXJlZCAgYW4gZXJyb3IuICR7ZXJyb3J9LmApO1xuICAgICAgICB9LFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgLy8gU2V0IGxvYWRpbmcgc3RhdGUuXG4gICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG5cbiAgICAgICAgICBjb25zb2xlLmxvZyhgQ29tcGxldGVkIGludm9raW5nIGdldCBwb3N0cyByZXF1ZXN0LmApO1xuICAgICAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogQ3JlYXRlIHRoZSBzcGVjaWZpZWQgcG9zdCBpdGVtIG9uIHZpZXcuXHJcbiAgKiBAcGFyYW0gZXZlbnQgVGhlIHRyaWdnZXJlZCBldmVudCBjb250YWluaW5nIHRoZSBwb3N0IGl0ZW0gdG8gY3JlYXRlLlxyXG4gICovXHJcbiAgY3JlYXRlKGV2ZW50OiBQb3N0SXRlbSkge1xyXG4gICAgLy8gQWRkIHRoZSBpdGVtIHRvIHRvcCBvZiB0aGUgcG9zdHMgY29sbGVjdGlvbi5cclxuICAgIHRoaXMucG9zdEl0ZW1zLnVuc2hpZnQoZXZlbnQpO1xyXG4gIH1cclxuXHJcblxyXG4gIC8qKlxyXG4gICogVXBkYXRlIHRoZSBzcGVjaWZpZWQgcG9zdCBpdGVtIG9uIHZpZXcuXHJcbiAgKiBAcGFyYW0gZXZlbnQgVGhlIHRyaWdnZXJlZCBldmVudCBjb250YWluaW5nIHRoZSBwb3N0IGl0ZW0gdG8gdXBkYXRlLlxyXG4gICovXHJcbiAgdXBkYXRlKGV2ZW50OiBQb3N0SXRlbSkge1xyXG4gICAgLy8gVXBkYXRlIHRoZSBpdGVtIGluIHRoZSBwb3N0cyBjb2xsZWN0aW9uLiAgICBcclxuICAgIHRoaXMucG9zdEl0ZW1zW3RoaXMucG9zdEl0ZW1zLmZpbmRJbmRleCh4ID0+IHguaWQgPT09IGV2ZW50LmlkKV0gPSBldmVudDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERlbGV0ZSB0aGUgc3BlY2lmaWVkIHBvc3QgaXRlbSBmcm9tIHZpZXcuXHJcbiAgICogQHBhcmFtIGV2ZW50IFRoZSB0cmlnZ2VyZWQgZXZlbnQgY29udGFpbmluZyB0aGUgcG9zdCBpdGVtIHRvIGRlbGV0ZS5cclxuICAgKi9cclxuICBkZWxldGUoZXZlbnQ6IFBvc3RJdGVtKSB7XHJcbiAgICAvLyBSZW1vdmUgdGhlIGl0ZW0gZnJvbSB0aGUgcG9zdHMgY29sbGVjdGlvbi5cclxuICAgIHRoaXMucG9zdEl0ZW1zLnNwbGljZSh0aGlzLnBvc3RJdGVtcy5pbmRleE9mKGV2ZW50KSwgMSk7XHJcbiAgfVxyXG5cclxufVxuIl19