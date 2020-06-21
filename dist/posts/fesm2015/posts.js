import { from, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModal, NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Component, Injectable, EventEmitter, Output, Input, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class PostsComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
PostsComponent.decorators = [
    { type: Component, args: [{
                selector: 'posts',
                template: "<!-- Page Content  -->\n<div id=\"content\">\n\n  <router-outlet></router-outlet>\n\n</div>\n"
            }] }
];
/** @nocollapse */
PostsComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 *  The get posts request model.
 *
 */
class GetPostsRequest {
    /**
     *  Initializes a new instance of the GetPostsRequest class.
     * @param {?=} max The max items to retrieve.
     */
    constructor(max = 9999) {
        this.max = max;
    }
}
/**
 *  The get posts response model.
 *
 */
class GetPostsResponse {
    /**
     *  Initializes a new instance of the GetPostsResponse class.
     * @param {?} items The retrieved post items.
     */
    constructor(items) {
        this.items = items;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 *  The create post request model.
 *
 */
class CreatePostRequest {
    /**
     *  Initializes a new instance of the CreatePostRequest class.
     * @param {?} postItem The post item to be created.
     */
    constructor(postItem) {
        this.postItem = postItem;
    }
}
/**
 *  The create post response model.
 *
 */
class CreatePostResponse {
    /**
     * Initializes a new instance of the CreatePostResponse class.
     * @param {?} id The id of newly created post item.
     */
    constructor(id) {
        this.id = id;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 *  The delete post request model.
 *
 */
class DeletePostRequest {
    /**
     *  Initializes a new instance of the DeletePostRequest class.
     * @param {?} id The id of the post item to be deleted.
     */
    constructor(id) {
        this.id = id;
    }
}
/**
 *  The delete post response model.
 *
 */
class DeletePostResponse {
    /**
     * Initializes a new instance of the DeletePostResponse class.
     * @param {?} id The id of the deleted post item.
     */
    constructor(id) {
        this.id = id;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 *  The get post response model.
 *
 */
class GetPostResponse {
    /**
     * Initializes a new instance of the GetPostResponse class.
     * @param {?} item The retrieved post item.
     */
    constructor(item) {
        this.item = item;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 *  The update post request model.
 *
 */
class UpdatePostRequest {
    /**
     *  Initializes a new instance of the UpdatePostRequest class.
     * @param {?} postItem The post item to be updated.
     */
    constructor(postItem) {
        this.postItem = postItem;
    }
}
/**
 *  The delete post response model.
 *
 */
class UpdatePostResponse {
    /**
     * Initializes a new instance of the DeletePostResponse class.
     * @param {?} postItem The updated post item.
     */
    constructor(postItem) {
        this.postItem = postItem;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class PostsService {
    /**
     * @param {?} _httpClient
     */
    constructor(_httpClient) {
        this._httpClient = _httpClient;
        /**
         * Get all post items.
         */
        this.getPosts = (request) => {
            return this._httpClient.get(`${this.actionUrl}/posts`).pipe(map((items) => {
                // Create and return a response with the returned items.
                return new GetPostsResponse(items.slice(0, request.max));
            }), catchError(err => {
                return throwError(err);
            }));
        };
        /**
         *  Get a specified post item.
         * @param request The request data.
         */
        this.getPost = (request) => {
            // Invoke a get request.
            return this._httpClient.get(`${this.actionUrl}/posts/${request.id}`).pipe(map((item) => {
                // Create and return response with the returned item.
                return new GetPostResponse(item);
            }), catchError(err => {
                return throwError(err);
            }));
        };
        // Set the API url.
        this.actionUrl = 'https://jsonplaceholder.typicode.com';
    }
    /**
     * Create a new  post item.
     * @param {?} request The request data.
     * @return {?}
     */
    create(request) {
        // Invoke a post request.
        return this._httpClient.post(`${this.actionUrl}/posts/`, request).pipe(map((response) => {
            // Create and return response with the created item id.
            return new CreatePostResponse(response.id);
        }), catchError(err => {
            return throwError(err);
        }));
    }
    /**
     * Updates a post item.
     * @param {?} request The request data.
     * @return {?}
     */
    update(request) {
        // Invoke a put request.
        return this._httpClient.put(`${this.actionUrl}/posts/${request.postItem.id}`, request.postItem).pipe(map((response) => {
            // Create and return response with the created item id.
            return new UpdatePostResponse(response);
        }), catchError(err => {
            return throwError(err);
        }));
    }
    /**
     * Deletes a post item.
     * @param {?} request The request data.
     * @return {?}
     */
    delete(request) {
        // Invoke a delete request.
        return from(fetch(`${this.actionUrl}/posts/${request.id}`, {
            method: 'DELETE'
        }))
            .pipe(map((response) => {
            console.log(response);
            // Create and return response with the returned item.
            return new DeletePostResponse(request.id);
        }), catchError(err => {
            return throwError(err);
        }));
    }
}
PostsService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
PostsService.ctorParameters = () => [
    { type: HttpClient }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class TopComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class HomeComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class CreateComponent {
    /**
     * @param {?} postsService
     * @param {?} modalService
     */
    constructor(postsService, modalService) {
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
    createItem() {
        // Set the processing state.
        this.creating = true;
        /** @type {?} */
        const request = new CreatePostRequest(this.model);
        // Call the service.
        this.postsService.create(request)
            .subscribe((response) => {
            // Check for successful response.
            if (response.id > 0) {
                console.log(`Invoking create post item request completed sucessfully.`);
                // Emit the created event.
                this.created.emit(this.model);
            }
            else {
                console.log(`Invoking create post item request completed with error.`);
            }
        }, (error) => {
            console.log(`Invoking create post item request encountered  an error. ${error}.`);
        }, () => {
            // Set the processing state.
            this.creating = false;
            console.log(`Completed Invoking create post item request.`);
        });
    }
    /**
     * Open creation dialog modal.
     * @param {?} content The modal template to show.
     * @return {?}
     */
    open(content) {
        // Call modal service and open the specfied template in a modal.
        this.modalService.open(content).result.then((result) => {
            // Modal approved.
            console.log(`Creation modal approved with ${result}.`);
        }, (reason) => {
            // Modal dismissed.
            console.log(`Creation modal closed with ${reason}.`);
            // Do nothing.
        });
    }
    /**
     * Submit the create new post item form.
     *
     * @return {?}
     */
    onSubmit() {
        // Create post item.
        this.createItem();
        // Close open modals.
        this.modalService.dismissAll();
    }
}
CreateComponent.decorators = [
    { type: Component, args: [{
                selector: 'post-item-create',
                template: "<button class=\"btn btn-success m-3\" (click)=\"open(create)\" [disabled]=\"creating\"><i *ngIf=\"creating\" class=\"fa fa-spinner fa-spin\"></i> <i class=\"fas fa-plus\"></i> New</button>\n\n<!-- Create Post Item Modal -->\n<ng-template #create let-modal>\n  <form name=\"form\" #f=\"ngForm\" novalidate (ngSubmit)=\"onSubmit()\">\n\n\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\" id=\"confirmation-modal\">\n        <i class=\"far fa-newspaper\"></i>\n\n\n        Post Creation\n      </h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('dismissed')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <p><strong>Please fill all details below</strong></p>\n\n\n      <!-- Title -->\n      <div class=\"form-group\">\n        <label for=\"title\">Title</label>\n        <input type=\"text\" class=\"form-control\" name=\"title\" [(ngModel)]=\"model.title\" #title=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && title.invalid }\" maxlength=\"48\" required />\n        <div *ngIf=\"f.submitted && title.invalid\" class=\"invalid-feedback\">\n          <div *ngIf=\"title.errors.required\">Title is required</div>\n        </div>\n      </div>\n\n      <!-- Body -->\n      <div class=\"form-group\">\n        <label for=\"body\">Body</label>\n        <textarea  rows=\"3\" class=\"form-control\" name=\"body\" [(ngModel)]=\"model.body\" #body=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && body.invalid }\" maxlength=\"255\" required></textarea>\n        <div *ngIf=\"f.submitted && body.invalid\" class=\"invalid-feedback\">\n          <div *ngIf=\"body.errors.required\">Body is required</div>\n        </div>\n      </div>\n\n    </div>\n    <div class=\"modal-footer\">\n      <!-- Cancel -->\n      <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"modal.dismiss('cancel click')\">Cancel</button>\n      <!-- Submit -->\n      <button type=\"submit\" class=\"btn btn-primary\">Create</button>\n\n    </div>\n  </form>\n</ng-template>\n"
            }] }
];
/** @nocollapse */
CreateComponent.ctorParameters = () => [
    { type: PostsService },
    { type: NgbModal }
];
CreateComponent.propDecorators = {
    created: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class DeleteComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class PostItemComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class UpdateComponent {
    /**
     * @param {?} postsService
     * @param {?} modalService
     */
    constructor(postsService, modalService) {
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
    ngOnInit() {
        this.model = Object.assign({}, this.postItem);
    }
    /**
     * Update the post item.
     *
     * @return {?}
     */
    updateItem() {
        // Set the processing state.
        this.updating = true;
        /** @type {?} */
        const request = new UpdatePostRequest(this.model);
        // Call the service.
        this.postsService.update(request)
            .subscribe((response) => {
            // Check for successful response.
            if (response.postItem.id === request.postItem.id) {
                console.log(`Invoking update post item request completed sucessfully.`);
                // Emit the updated event.
                this.updated.emit(this.model);
            }
            else {
                console.log(`Invoking update post item request completed with error.`);
            }
        }, (error) => {
            console.log(`Invoking update post item request encountered  an error. ${error}.`);
        }, () => {
            // Set the processing state.
            this.updating = false;
            console.log(`Completed Invoking update post item request.`);
        });
    }
    /**
     * Open update dialog modal.
     * @param {?} content The modal template to show.
     * @return {?}
     */
    open(content) {
        // Call modal service and open the specfied template in a modal.
        this.modalService.open(content).result.then((result) => {
            // Modal approved.
            console.log(`Update modal approved with ${result}.`);
        }, (reason) => {
            // Modal dismissed.
            console.log(`Update modal closed with ${reason}.`);
            // Do nothing.
        });
    }
    /**
     * Submit the update new post item form.
     *
     * @return {?}
     */
    onSubmit() {
        // Update post item.
        this.updateItem();
        // Close open modals.
        this.modalService.dismissAll();
    }
}
UpdateComponent.decorators = [
    { type: Component, args: [{
                selector: 'post-item-update',
                template: "<button class=\"btn btn-primary m-3\" (click)=\"open(update)\" [disabled]=\"updating\"><i *ngIf=\"updating\" class=\"fa fa-spinner fa-spin\"></i>&nbsp;<i class=\"fas fa-edit\"></i> Edit </button>\n\n<!-- Update Post Item Modal -->\n<ng-template #update let-modal>\n  <form name=\"form\" #f=\"ngForm\" novalidate (ngSubmit)=\"onSubmit()\">\n\n\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\" id=\"confirmation-modal\">\n        <i class=\"far fa-newspaper\"></i>\n\n        Post Update\n      </h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('dismissed')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <p><strong>Please fill all details below</strong></p>\n\n      <!-- Title -->\n      <div class=\"form-group\">\n        <label for=\"title\">Title</label>\n        <input type=\"text\" class=\"form-control\" name=\"title\" [(ngModel)]=\"model.title\" #title=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && title.invalid }\" maxlength=\"48\" required />\n        <div *ngIf=\"f.submitted && title.invalid\" class=\"invalid-feedback\">\n          <div *ngIf=\"title.errors.required\">Title is required</div>\n        </div>\n      </div>\n\n      <!-- Body -->\n      <div class=\"form-group\">\n        <label for=\"body\">Body</label>\n        <textarea  rows=\"3\" class=\"form-control\" name=\"body\" [(ngModel)]=\"model.body\" #body=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && body.invalid }\" maxlength=\"255\" required></textarea>\n        <div *ngIf=\"f.submitted && body.invalid\" class=\"invalid-feedback\">\n          <div *ngIf=\"body.errors.required\">Body is required</div>\n        </div>\n      </div>\n\n    </div>\n    <div class=\"modal-footer\">\n      <!-- Cancel -->\n      <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"modal.dismiss('cancel click')\">Cancel</button>\n      <!-- Submit -->\n      <button type=\"submit\" class=\"btn btn-primary\">Update</button>\n\n    </div>\n  </form>\n</ng-template>\n"
            }] }
];
/** @nocollapse */
UpdateComponent.ctorParameters = () => [
    { type: PostsService },
    { type: NgbModal }
];
UpdateComponent.propDecorators = {
    postItem: [{ type: Input }],
    updated: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const routes = [
    {
        path: 'posts', component: PostsComponent, children: [
            { path: '', component: HomeComponent },
            { path: 'home', component: HomeComponent }
        ]
    },
];
class PostsRoutingModule {
}
PostsRoutingModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    RouterModule.forRoot(routes)
                ],
                exports: [
                    RouterModule
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class PostsModule {
}
PostsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    PostsComponent,
                    HomeComponent,
                    TopComponent,
                    PostItemComponent,
                    CreateComponent,
                    UpdateComponent,
                    DeleteComponent
                ],
                imports: [
                    CommonModule,
                    FormsModule,
                    PostsRoutingModule,
                    HttpClientModule,
                    NgbModule.forRoot()
                ],
                exports: [
                    PostsComponent,
                    TopComponent
                ],
                providers: [
                    NgbActiveModal,
                    PostsService
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { PostsComponent, TopComponent, PostsModule, HomeComponent as ɵb, CreateComponent as ɵd, DeleteComponent as ɵf, PostItemComponent as ɵc, UpdateComponent as ɵe, PostsRoutingModule as ɵg, PostsService as ɵa };

//# sourceMappingURL=posts.js.map