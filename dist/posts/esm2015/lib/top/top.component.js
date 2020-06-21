/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { GetPostsRequest } from '../models/requests/get-posts-request';
import { PostsService } from '../services/posts.service';
export class TopComponent {
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
        const request = new GetPostsRequest(10);
        // Call the service and retrieve posts.
        this.postsService.getPosts(request)
            .subscribe((response) => {
            // Set the items returned in the response.
            this.postItems = response.items;
        }, (error) => {
            console.log(`Invoking get posts top request encountered  an error. ${error}.`);
        }, () => {
            console.log(`Completed invoking get posts top request.`);
        });
    }
}
TopComponent.decorators = [
    { type: Component, args: [{
                selector: 'posts-top',
                template: "<section>\n  <div class=\"container\">\n    <div *ngFor=\"let postItem of postItems\">\n      <!-- Post item -->\n      <post-item [model]=\"postItem\"></post-item>\n    </div>\n  </div>\n</section>\n"
            }] }
];
/** @nocollapse */
TopComponent.ctorParameters = () => [
    { type: PostsService }
];
if (false) {
    /** @type {?} */
    TopComponent.prototype.postItems;
    /** @type {?} */
    TopComponent.prototype.postsService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9wLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Bvc3RzLyIsInNvdXJjZXMiOlsibGliL3RvcC90b3AuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRWxELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFNekQsTUFBTTs7OztJQUtKLFlBQW9CLFlBQTBCO1FBQTFCLGlCQUFZLEdBQVosWUFBWSxDQUFjO0tBQUs7Ozs7SUFHbkQsUUFBUTs7UUFHTixNQUFNLE9BQU8sR0FBRyxJQUFJLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQzs7UUFHeEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO2FBQ2hDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFOztZQUd0QixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUM7U0FDakMsRUFDQyxDQUFDLEtBQUssRUFBRSxFQUFFO1lBRVIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5REFBeUQsS0FBSyxHQUFHLENBQUMsQ0FBQztTQUNoRixFQUNELEdBQUcsRUFBRTtZQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsMkNBQTJDLENBQUMsQ0FBQztTQUMxRCxDQUFDLENBQUM7S0FDUjs7O1lBL0JGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsb05BQW1DO2FBQ3BDOzs7O1lBTFEsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBvc3RJdGVtIH0gZnJvbSAnLi4vbW9kZWxzL2ludGVyZmFjZXMvcG9zdC1pdGVtJztcclxuaW1wb3J0IHsgR2V0UG9zdHNSZXF1ZXN0IH0gZnJvbSAnLi4vbW9kZWxzL3JlcXVlc3RzL2dldC1wb3N0cy1yZXF1ZXN0JztcclxuaW1wb3J0IHsgUG9zdHNTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvcG9zdHMuc2VydmljZSc7XHJcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncG9zdHMtdG9wJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RvcC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgVG9wQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAvLyBUaGUgcG9zdCBpdGVtcyB0byBzaG93LlxuICBwb3N0SXRlbXM6IFBvc3RJdGVtW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwb3N0c1NlcnZpY2U6IFBvc3RzU2VydmljZSkgeyB9XG5cblxuICBuZ09uSW5pdCgpIHtcclxuXG4gICAgLy8gQ3JlYXRlIGdldCBwb3N0cyByZXF1ZXN0LlxuICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgR2V0UG9zdHNSZXF1ZXN0KDEwKTtcclxuXHJcbiAgICAvLyBDYWxsIHRoZSBzZXJ2aWNlIGFuZCByZXRyaWV2ZSBwb3N0cy5cclxuICAgIHRoaXMucG9zdHNTZXJ2aWNlLmdldFBvc3RzKHJlcXVlc3QpXG4gICAgICAuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xuXG4gICAgICAgIC8vIFNldCB0aGUgaXRlbXMgcmV0dXJuZWQgaW4gdGhlIHJlc3BvbnNlLlxuICAgICAgICB0aGlzLnBvc3RJdGVtcyA9IHJlc3BvbnNlLml0ZW1zO1xuICAgICAgfSxcbiAgICAgICAgKGVycm9yKSA9PiB7XG5cbiAgICAgICAgICBjb25zb2xlLmxvZyhgSW52b2tpbmcgZ2V0IHBvc3RzIHRvcCByZXF1ZXN0IGVuY291bnRlcmVkICBhbiBlcnJvci4gJHtlcnJvcn0uYCk7XG4gICAgICAgIH0sXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhgQ29tcGxldGVkIGludm9raW5nIGdldCBwb3N0cyB0b3AgcmVxdWVzdC5gKTtcbiAgICAgICAgfSk7XHJcbiAgfVxyXG59XG4iXX0=