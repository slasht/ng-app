/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { GetPostsRequest } from '../models/requests/get-posts-request';
var HomeComponent = /** @class */ (function () {
    function HomeComponent(postsService) {
        this.postsService = postsService;
    }
    /**
     * @return {?}
     */
    HomeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var request = new GetPostsRequest(50);
        // Set loading state.
        this.loading = true;
        // Call the service and retrieve posts.
        this.postsService.getPosts(request)
            .subscribe(function (response) {
            // Set the items returned in the response.
            // Set the items returned in the response.
            _this.postItems = response.items;
        }, function (error) {
            console.log("Invoking get posts request encountered  an error. " + error + ".");
        }, function () {
            // Set loading state.
            // Set loading state.
            _this.loading = false;
            console.log("Completed invoking get posts request.");
        });
    };
    /**
    * Create the specified post item on view.
    * @param event The triggered event containing the post item to create.
    */
    /**
     * Create the specified post item on view.
     * @param {?} event The triggered event containing the post item to create.
     * @return {?}
     */
    HomeComponent.prototype.create = /**
     * Create the specified post item on view.
     * @param {?} event The triggered event containing the post item to create.
     * @return {?}
     */
    function (event) {
        // Add the item to top of the posts collection.
        this.postItems.unshift(event);
    };
    /**
    * Update the specified post item on view.
    * @param event The triggered event containing the post item to update.
    */
    /**
     * Update the specified post item on view.
     * @param {?} event The triggered event containing the post item to update.
     * @return {?}
     */
    HomeComponent.prototype.update = /**
     * Update the specified post item on view.
     * @param {?} event The triggered event containing the post item to update.
     * @return {?}
     */
    function (event) {
        // Update the item in the posts collection.
        this.postItems[this.postItems.findIndex(function (x) { return x.id === event.id; })] = event;
    };
    /**
     * Delete the specified post item from view.
     * @param event The triggered event containing the post item to delete.
     */
    /**
     * Delete the specified post item from view.
     * @param {?} event The triggered event containing the post item to delete.
     * @return {?}
     */
    HomeComponent.prototype.delete = /**
     * Delete the specified post item from view.
     * @param {?} event The triggered event containing the post item to delete.
     * @return {?}
     */
    function (event) {
        // Remove the item from the posts collection.
        this.postItems.splice(this.postItems.indexOf(event), 1);
    };
    HomeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'posts-home',
                    template: "<section>\n  <div class=\"container\">\n    <h2 class=\"text-center\">\n      My Posts\n    </h2>\n\n    <!-- Loading spinner -->\n    <div *ngIf=\"loading\" class=\"fa fa-spinner fa-spin spinner\"></div>\n\n    <!-- Create -->\n    <post-item-create (created)=\"create($event)\"></post-item-create>\n\n    <div *ngFor=\"let postItem of postItems\">\n\n      <!-- Post item -->\n      <post-item [model]=\"postItem\"></post-item>\n\n      <!-- Update -->\n      <post-item-update [postItem]=\"postItem\" (updated)=\"update($event)\"></post-item-update>\n   \n      <!-- Delete -->\n      <post-item-delete [model]=\"postItem\" (deleted)=\"delete($event)\"></post-item-delete>\n\n\n    </div>\n\n\n\n  </div>\n</section>\n",
                    styles: ["section{padding:20px;width:100%;height:100%;background-color:#6cd37d;color:#383838}section btn{margin-left:100px}"]
                }] }
    ];
    /** @nocollapse */
    HomeComponent.ctorParameters = function () { return [
        { type: PostsService }
    ]; };
    return HomeComponent;
}());
export { HomeComponent };
if (false) {
    /** @type {?} */
    HomeComponent.prototype.loading;
    /** @type {?} */
    HomeComponent.prototype.postItems;
    /** @type {?} */
    HomeComponent.prototype.postsService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9wb3N0cy8iLCJzb3VyY2VzIjpbImxpYi9ob21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUV6RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7O0lBZXJFLHVCQUFvQixZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztLQUFLOzs7O0lBR25ELGdDQUFROzs7SUFBUjtRQUFBLGlCQXlCQzs7UUF0QkMsSUFBTSxPQUFPLEdBQUcsSUFBSSxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7O1FBR3hDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDOztRQUdwQixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7YUFDaEMsU0FBUyxDQUFDLFVBQUMsUUFBUTs7WUFHbEIsQUFEQSwwQ0FBMEM7WUFDMUMsS0FBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDO1NBQ2pDLEVBQ0MsVUFBQyxLQUFLO1lBRUosT0FBTyxDQUFDLEdBQUcsQ0FBQyx1REFBcUQsS0FBSyxNQUFHLENBQUMsQ0FBQztTQUM1RSxFQUNEOztZQUVFLEFBREEscUJBQXFCO1lBQ3JCLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBRXJCLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUNBQXVDLENBQUMsQ0FBQztTQUN0RCxDQUFDLENBQUM7S0FDUjtJQUVEOzs7TUFHRTs7Ozs7O0lBQ0YsOEJBQU07Ozs7O0lBQU4sVUFBTyxLQUFlOztRQUVwQixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUMvQjtJQUdEOzs7TUFHRTs7Ozs7O0lBQ0YsOEJBQU07Ozs7O0lBQU4sVUFBTyxLQUFlOztRQUVwQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEVBQUUsS0FBSyxLQUFLLENBQUMsRUFBRSxFQUFqQixDQUFpQixDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7S0FDMUU7SUFFRDs7O09BR0c7Ozs7OztJQUNILDhCQUFNOzs7OztJQUFOLFVBQU8sS0FBZTs7UUFFcEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDekQ7O2dCQXJFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLDZ0QkFBb0M7O2lCQUVyQzs7OztnQkFSUSxZQUFZOzt3QkFEckI7O1NBVWEsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQb3N0c1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9wb3N0cy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUG9zdEl0ZW0gfSBmcm9tICcuLi9tb2RlbHMvaW50ZXJmYWNlcy9wb3N0LWl0ZW0nO1xyXG5pbXBvcnQgeyBHZXRQb3N0c1JlcXVlc3QgfSBmcm9tICcuLi9tb2RlbHMvcmVxdWVzdHMvZ2V0LXBvc3RzLXJlcXVlc3QnO1xyXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Bvc3RzLWhvbWUnLFxuICB0ZW1wbGF0ZVVybDogJy4vaG9tZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2hvbWUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAvLyBMb2FkaW5nIGluZGljYXRpb24uXG4gIGxvYWRpbmc6IGJvb2xlYW47XG5cbiAgLy8gVGhlIHBvc3QgaXRlbXMgdG8gc2hvdy5cbiAgcG9zdEl0ZW1zOiBQb3N0SXRlbVtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcG9zdHNTZXJ2aWNlOiBQb3N0c1NlcnZpY2UpIHsgfVxuXG5cbiAgbmdPbkluaXQoKSB7XHJcblxuICAgIC8vIENyZWF0ZSBnZXQgcG9zdHMgcmVxdWVzdC5cbiAgICBjb25zdCByZXF1ZXN0ID0gbmV3IEdldFBvc3RzUmVxdWVzdCg1MCk7XHJcblxyXG4gICAgLy8gU2V0IGxvYWRpbmcgc3RhdGUuXG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuXHJcbiAgICAvLyBDYWxsIHRoZSBzZXJ2aWNlIGFuZCByZXRyaWV2ZSBwb3N0cy5cclxuICAgIHRoaXMucG9zdHNTZXJ2aWNlLmdldFBvc3RzKHJlcXVlc3QpXG4gICAgICAuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xuXG4gICAgICAgIC8vIFNldCB0aGUgaXRlbXMgcmV0dXJuZWQgaW4gdGhlIHJlc3BvbnNlLlxuICAgICAgICB0aGlzLnBvc3RJdGVtcyA9IHJlc3BvbnNlLml0ZW1zO1xuICAgICAgfSxcbiAgICAgICAgKGVycm9yKSA9PiB7XG5cbiAgICAgICAgICBjb25zb2xlLmxvZyhgSW52b2tpbmcgZ2V0IHBvc3RzIHJlcXVlc3QgZW5jb3VudGVyZWQgIGFuIGVycm9yLiAke2Vycm9yfS5gKTtcbiAgICAgICAgfSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIC8vIFNldCBsb2FkaW5nIHN0YXRlLlxuICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuXG4gICAgICAgICAgY29uc29sZS5sb2coYENvbXBsZXRlZCBpbnZva2luZyBnZXQgcG9zdHMgcmVxdWVzdC5gKTtcbiAgICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIENyZWF0ZSB0aGUgc3BlY2lmaWVkIHBvc3QgaXRlbSBvbiB2aWV3LlxyXG4gICogQHBhcmFtIGV2ZW50IFRoZSB0cmlnZ2VyZWQgZXZlbnQgY29udGFpbmluZyB0aGUgcG9zdCBpdGVtIHRvIGNyZWF0ZS5cclxuICAqL1xyXG4gIGNyZWF0ZShldmVudDogUG9zdEl0ZW0pIHtcclxuICAgIC8vIEFkZCB0aGUgaXRlbSB0byB0b3Agb2YgdGhlIHBvc3RzIGNvbGxlY3Rpb24uXHJcbiAgICB0aGlzLnBvc3RJdGVtcy51bnNoaWZ0KGV2ZW50KTtcclxuICB9XHJcblxyXG5cclxuICAvKipcclxuICAqIFVwZGF0ZSB0aGUgc3BlY2lmaWVkIHBvc3QgaXRlbSBvbiB2aWV3LlxyXG4gICogQHBhcmFtIGV2ZW50IFRoZSB0cmlnZ2VyZWQgZXZlbnQgY29udGFpbmluZyB0aGUgcG9zdCBpdGVtIHRvIHVwZGF0ZS5cclxuICAqL1xyXG4gIHVwZGF0ZShldmVudDogUG9zdEl0ZW0pIHtcclxuICAgIC8vIFVwZGF0ZSB0aGUgaXRlbSBpbiB0aGUgcG9zdHMgY29sbGVjdGlvbi4gICAgXHJcbiAgICB0aGlzLnBvc3RJdGVtc1t0aGlzLnBvc3RJdGVtcy5maW5kSW5kZXgoeCA9PiB4LmlkID09PSBldmVudC5pZCldID0gZXZlbnQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEZWxldGUgdGhlIHNwZWNpZmllZCBwb3N0IGl0ZW0gZnJvbSB2aWV3LlxyXG4gICAqIEBwYXJhbSBldmVudCBUaGUgdHJpZ2dlcmVkIGV2ZW50IGNvbnRhaW5pbmcgdGhlIHBvc3QgaXRlbSB0byBkZWxldGUuXHJcbiAgICovXHJcbiAgZGVsZXRlKGV2ZW50OiBQb3N0SXRlbSkge1xyXG4gICAgLy8gUmVtb3ZlIHRoZSBpdGVtIGZyb20gdGhlIHBvc3RzIGNvbGxlY3Rpb24uXHJcbiAgICB0aGlzLnBvc3RJdGVtcy5zcGxpY2UodGhpcy5wb3N0SXRlbXMuaW5kZXhPZihldmVudCksIDEpO1xyXG4gIH1cclxuXHJcbn1cbiJdfQ==