(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs'), require('rxjs/operators'), require('@angular/common'), require('@angular/common/http'), require('@angular/forms'), require('@ng-bootstrap/ng-bootstrap'), require('@angular/core'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('posts', ['exports', 'rxjs', 'rxjs/operators', '@angular/common', '@angular/common/http', '@angular/forms', '@ng-bootstrap/ng-bootstrap', '@angular/core', '@angular/router'], factory) :
    (factory((global.posts = {}),global.rxjs,global.rxjs.operators,global.ng.common,global.ng.common.http,global.ng.forms,global.ngBootstrap,global.ng.core,global.ng.router));
}(this, (function (exports,rxjs,operators,common,http,forms,ngBootstrap,core,router) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var PostsComponent = (function () {
        function PostsComponent() {
        }
        /**
         * @return {?}
         */
        PostsComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        PostsComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'posts',
                        template: "<!-- Page Content  -->\n<div id=\"content\">\n\n  <router-outlet></router-outlet>\n\n</div>\n"
                    }] }
        ];
        /** @nocollapse */
        PostsComponent.ctorParameters = function () { return []; };
        return PostsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     *  The get posts request model.
     *
     */
    var /**
     *  The get posts request model.
     *
     */ GetPostsRequest = (function () {
        /**
        *  Initializes a new instance of the GetPostsRequest class.
        * @param max The max items to retrieve.
        */
        function GetPostsRequest(max) {
            if (max === void 0) {
                max = 9999;
            }
            this.max = max;
        }
        return GetPostsRequest;
    }());
    /**
     *  The get posts response model.
     *
     */
    var /**
     *  The get posts response model.
     *
     */ GetPostsResponse = (function () {
        /**
         *  Initializes a new instance of the GetPostsResponse class.
         * @param items The retrieved post items.
         */
        function GetPostsResponse(items) {
            this.items = items;
        }
        return GetPostsResponse;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     *  The create post request model.
     *
     */
    var /**
     *  The create post request model.
     *
     */ CreatePostRequest = (function () {
        /**
         *  Initializes a new instance of the CreatePostRequest class.
         * @param postItem The post item to be created.
         */
        function CreatePostRequest(postItem) {
            this.postItem = postItem;
        }
        return CreatePostRequest;
    }());
    /**
     *  The create post response model.
     *
     */
    var /**
     *  The create post response model.
     *
     */ CreatePostResponse = (function () {
        /**
         * Initializes a new instance of the CreatePostResponse class.
         * @param id The id of newly created post item.
         */
        function CreatePostResponse(id) {
            this.id = id;
        }
        return CreatePostResponse;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     *  The delete post request model.
     *
     */
    var /**
     *  The delete post request model.
     *
     */ DeletePostRequest = (function () {
        /**
         *  Initializes a new instance of the DeletePostRequest class.
         * @param id The id of the post item to be deleted.
         */
        function DeletePostRequest(id) {
            this.id = id;
        }
        return DeletePostRequest;
    }());
    /**
     *  The delete post response model.
     *
     */
    var /**
     *  The delete post response model.
     *
     */ DeletePostResponse = (function () {
        /**
         * Initializes a new instance of the DeletePostResponse class.
         * @param id The id of the deleted post item.
         */
        function DeletePostResponse(id) {
            this.id = id;
        }
        return DeletePostResponse;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     *  The get post response model.
     *
     */
    var /**
     *  The get post response model.
     *
     */ GetPostResponse = (function () {
        /**
         * Initializes a new instance of the GetPostResponse class.
         * @param item The retrieved post item.
         */
        function GetPostResponse(item) {
            this.item = item;
        }
        return GetPostResponse;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     *  The update post request model.
     *
     */
    var /**
     *  The update post request model.
     *
     */ UpdatePostRequest = (function () {
        /**
         *  Initializes a new instance of the UpdatePostRequest class.
         * @param postItem The post item to be updated.
         */
        function UpdatePostRequest(postItem) {
            this.postItem = postItem;
        }
        return UpdatePostRequest;
    }());
    /**
     *  The delete post response model.
     *
     */
    var /**
     *  The delete post response model.
     *
     */ UpdatePostResponse = (function () {
        /**
         * Initializes a new instance of the DeletePostResponse class.
         * @param postItem The updated post item.
         */
        function UpdatePostResponse(postItem) {
            this.postItem = postItem;
        }
        return UpdatePostResponse;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var PostsService = (function () {
        function PostsService(_httpClient) {
            var _this = this;
            this._httpClient = _httpClient;
            /**
             * Get all post items.
             */
            this.getPosts = function (request) {
                return _this._httpClient.get(_this.actionUrl + "/posts").pipe(operators.map(function (items) {
                    // Create and return a response with the returned items.
                    return new GetPostsResponse(items.slice(0, request.max));
                }), operators.catchError(function (err) {
                    return rxjs.throwError(err);
                }));
            };
            /**
             *  Get a specified post item.
             * @param request The request data.
             */
            this.getPost = function (request) {
                // Invoke a get request.
                return _this._httpClient.get(_this.actionUrl + "/posts/" + request.id).pipe(operators.map(function (item) {
                    // Create and return response with the returned item.
                    return new GetPostResponse(item);
                }), operators.catchError(function (err) {
                    return rxjs.throwError(err);
                }));
            };
            // Set the API url.
            this.actionUrl = 'https://jsonplaceholder.typicode.com';
        }
        /**
         * Create a new  post item.
        * @param request The request data.
         */
        /**
         * Create a new  post item.
         * @param {?} request The request data.
         * @return {?}
         */
        PostsService.prototype.create = /**
         * Create a new  post item.
         * @param {?} request The request data.
         * @return {?}
         */
            function (request) {
                // Invoke a post request.
                return this._httpClient.post(this.actionUrl + "/posts/", request).pipe(operators.map(function (response) {
                    // Create and return response with the created item id.
                    return new CreatePostResponse(response.id);
                }), operators.catchError(function (err) {
                    return rxjs.throwError(err);
                }));
            };
        /**
       * Updates a post item.
      * @param request The request data.
       */
        /**
         * Updates a post item.
         * @param {?} request The request data.
         * @return {?}
         */
        PostsService.prototype.update = /**
         * Updates a post item.
         * @param {?} request The request data.
         * @return {?}
         */
            function (request) {
                // Invoke a put request.
                return this._httpClient.put(this.actionUrl + "/posts/" + request.postItem.id, request.postItem).pipe(operators.map(function (response) {
                    // Create and return response with the created item id.
                    return new UpdatePostResponse(response);
                }), operators.catchError(function (err) {
                    return rxjs.throwError(err);
                }));
            };
        /**
         * Deletes a post item.
        * @param request The request data.
         */
        /**
         * Deletes a post item.
         * @param {?} request The request data.
         * @return {?}
         */
        PostsService.prototype.delete = /**
         * Deletes a post item.
         * @param {?} request The request data.
         * @return {?}
         */
            function (request) {
                // Invoke a delete request.
                return rxjs.from(fetch(this.actionUrl + "/posts/" + request.id, {
                    method: 'DELETE'
                }))
                    .pipe(operators.map(function (response) {
                    console.log(response);
                    // Create and return response with the returned item.
                    return new DeletePostResponse(request.id);
                }), operators.catchError(function (err) {
                    return rxjs.throwError(err);
                }));
            };
        PostsService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        PostsService.ctorParameters = function () {
            return [
                { type: http.HttpClient }
            ];
        };
        return PostsService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var TopComponent = (function () {
        function TopComponent(postsService) {
            this.postsService = postsService;
        }
        /**
         * @return {?}
         */
        TopComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var request = new GetPostsRequest(10);
                // Call the service and retrieve posts.
                this.postsService.getPosts(request)
                    .subscribe(function (response) {
                    // Set the items returned in the response.
                    // Set the items returned in the response.
                    _this.postItems = response.items;
                }, function (error) {
                    console.log("Invoking get posts top request encountered  an error. " + error + ".");
                }, function () {
                    console.log("Completed invoking get posts top request.");
                });
            };
        TopComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'posts-top',
                        template: "<section>\n  <div class=\"container\">\n    <div *ngFor=\"let postItem of postItems\">\n      <!-- Post item -->\n      <post-item [model]=\"postItem\"></post-item>\n    </div>\n  </div>\n</section>\n"
                    }] }
        ];
        /** @nocollapse */
        TopComponent.ctorParameters = function () {
            return [
                { type: PostsService }
            ];
        };
        return TopComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var HomeComponent = (function () {
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
            { type: core.Component, args: [{
                        selector: 'posts-home',
                        template: "<section>\n  <div class=\"container\">\n    <h2 class=\"text-center\">\n      My Posts\n    </h2>\n\n    <!-- Loading spinner -->\n    <div *ngIf=\"loading\" class=\"fa fa-spinner fa-spin spinner\"></div>\n\n    <!-- Create -->\n    <post-item-create (created)=\"create($event)\"></post-item-create>\n\n    <div *ngFor=\"let postItem of postItems\">\n\n      <!-- Post item -->\n      <post-item [model]=\"postItem\"></post-item>\n\n      <!-- Update -->\n      <post-item-update [postItem]=\"postItem\" (updated)=\"update($event)\"></post-item-update>\n   \n      <!-- Delete -->\n      <post-item-delete [model]=\"postItem\" (deleted)=\"delete($event)\"></post-item-delete>\n\n\n    </div>\n\n\n\n  </div>\n</section>\n",
                        styles: ["section{padding:20px;width:100%;height:100%;background-color:#6cd37d;color:#383838}section btn{margin-left:100px}"]
                    }] }
        ];
        /** @nocollapse */
        HomeComponent.ctorParameters = function () {
            return [
                { type: PostsService }
            ];
        };
        return HomeComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var CreateComponent = (function () {
        function CreateComponent(postsService, modalService) {
            this.postsService = postsService;
            this.modalService = modalService;
            // The post item model.
            this.model = /** @type {?} */ ({});
            // An event emitter for post creation notification.
            this.created = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'post-item-create',
                        template: "<button class=\"btn btn-success m-3\" (click)=\"open(create)\" [disabled]=\"creating\"><i *ngIf=\"creating\" class=\"fa fa-spinner fa-spin\"></i> <i class=\"fas fa-plus\"></i> New</button>\n\n<!-- Create Post Item Modal -->\n<ng-template #create let-modal>\n  <form name=\"form\" #f=\"ngForm\" novalidate (ngSubmit)=\"onSubmit()\">\n\n\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\" id=\"confirmation-modal\">\n        <i class=\"far fa-newspaper\"></i>\n\n\n        Post Creation\n      </h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('dismissed')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <p><strong>Please fill all details below</strong></p>\n\n\n      <!-- Title -->\n      <div class=\"form-group\">\n        <label for=\"title\">Title</label>\n        <input type=\"text\" class=\"form-control\" name=\"title\" [(ngModel)]=\"model.title\" #title=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && title.invalid }\" maxlength=\"48\" required />\n        <div *ngIf=\"f.submitted && title.invalid\" class=\"invalid-feedback\">\n          <div *ngIf=\"title.errors.required\">Title is required</div>\n        </div>\n      </div>\n\n      <!-- Body -->\n      <div class=\"form-group\">\n        <label for=\"body\">Body</label>\n        <textarea  rows=\"3\" class=\"form-control\" name=\"body\" [(ngModel)]=\"model.body\" #body=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && body.invalid }\" maxlength=\"255\" required></textarea>\n        <div *ngIf=\"f.submitted && body.invalid\" class=\"invalid-feedback\">\n          <div *ngIf=\"body.errors.required\">Body is required</div>\n        </div>\n      </div>\n\n    </div>\n    <div class=\"modal-footer\">\n      <!-- Cancel -->\n      <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"modal.dismiss('cancel click')\">Cancel</button>\n      <!-- Submit -->\n      <button type=\"submit\" class=\"btn btn-primary\">Create</button>\n\n    </div>\n  </form>\n</ng-template>\n"
                    }] }
        ];
        /** @nocollapse */
        CreateComponent.ctorParameters = function () {
            return [
                { type: PostsService },
                { type: ngBootstrap.NgbModal }
            ];
        };
        CreateComponent.propDecorators = {
            created: [{ type: core.Output }]
        };
        return CreateComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var DeleteComponent = (function () {
        function DeleteComponent(postsService, modalService) {
            this.postsService = postsService;
            this.modalService = modalService;
            // An event emitter for post deletion notification.
            this.deleted = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'post-item-delete',
                        template: "<button class=\"btn btn-danger m-3\" (click)=\"confirm(confirmation)\" [disabled]=\"deleting\"><i *ngIf=\"deleting\" class=\"fa fa-spinner fa-spin\"></i>&nbsp; <i class=\"fas fa-trash-alt\"></i> Delete</button>\n\n\n<!-- Confirmation Modal -->\n<ng-template #confirmation let-modal>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"confirmation-modal\">\n      <i class=\"fa fa-exclamation-triangle\"></i>\n      Post Deletion\n    </h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('dismissed')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <p><strong>Are you sure you want to delete <span class=\"text-primary\">\"{{model.title }}\"</span> post?</strong></p>\n    <p>\n      This post will be deleted and would no longer be available.\n      <span class=\"text-danger d-block\">This operation is irreversible!</span>\n    </p>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"modal.dismiss('cancel click')\">Cancel</button>\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"modal.close('Ok click')\">Ok</button>\n\n  </div>\n\n</ng-template>\n"
                    }] }
        ];
        /** @nocollapse */
        DeleteComponent.ctorParameters = function () {
            return [
                { type: PostsService },
                { type: ngBootstrap.NgbModal }
            ];
        };
        DeleteComponent.propDecorators = {
            model: [{ type: core.Input }],
            deleted: [{ type: core.Output }]
        };
        return DeleteComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var PostItemComponent = (function () {
        function PostItemComponent(postsService, modalService) {
            this.postsService = postsService;
            this.modalService = modalService;
            // An event emitter for post deletion notification.
            this.delete = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'post-item',
                        template: "<div class=\"card m-3\">\n\n  <div class=\"card-body\">\n    <h4 class=\"card-title\">{{ model.title | uppercase}}</h4>\n\n    <p>{{ model.body }}</p>\n  </div>  \n</div>\n\r\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        PostItemComponent.ctorParameters = function () {
            return [
                { type: PostsService },
                { type: ngBootstrap.NgbModal }
            ];
        };
        PostItemComponent.propDecorators = {
            model: [{ type: core.Input }],
            delete: [{ type: core.Output }]
        };
        return PostItemComponent;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var UpdateComponent = (function () {
        function UpdateComponent(postsService, modalService) {
            this.postsService = postsService;
            this.modalService = modalService;
            this.model = /** @type {?} */ ({});
            // An event emitter for post creation notification.
            this.updated = new core.EventEmitter();
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
                this.model = __assign({}, this.postItem);
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
            { type: core.Component, args: [{
                        selector: 'post-item-update',
                        template: "<button class=\"btn btn-primary m-3\" (click)=\"open(update)\" [disabled]=\"updating\"><i *ngIf=\"updating\" class=\"fa fa-spinner fa-spin\"></i>&nbsp;<i class=\"fas fa-edit\"></i> Edit </button>\n\n<!-- Update Post Item Modal -->\n<ng-template #update let-modal>\n  <form name=\"form\" #f=\"ngForm\" novalidate (ngSubmit)=\"onSubmit()\">\n\n\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\" id=\"confirmation-modal\">\n        <i class=\"far fa-newspaper\"></i>\n\n        Post Update\n      </h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('dismissed')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <p><strong>Please fill all details below</strong></p>\n\n      <!-- Title -->\n      <div class=\"form-group\">\n        <label for=\"title\">Title</label>\n        <input type=\"text\" class=\"form-control\" name=\"title\" [(ngModel)]=\"model.title\" #title=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && title.invalid }\" maxlength=\"48\" required />\n        <div *ngIf=\"f.submitted && title.invalid\" class=\"invalid-feedback\">\n          <div *ngIf=\"title.errors.required\">Title is required</div>\n        </div>\n      </div>\n\n      <!-- Body -->\n      <div class=\"form-group\">\n        <label for=\"body\">Body</label>\n        <textarea  rows=\"3\" class=\"form-control\" name=\"body\" [(ngModel)]=\"model.body\" #body=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && body.invalid }\" maxlength=\"255\" required></textarea>\n        <div *ngIf=\"f.submitted && body.invalid\" class=\"invalid-feedback\">\n          <div *ngIf=\"body.errors.required\">Body is required</div>\n        </div>\n      </div>\n\n    </div>\n    <div class=\"modal-footer\">\n      <!-- Cancel -->\n      <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"modal.dismiss('cancel click')\">Cancel</button>\n      <!-- Submit -->\n      <button type=\"submit\" class=\"btn btn-primary\">Update</button>\n\n    </div>\n  </form>\n</ng-template>\n"
                    }] }
        ];
        /** @nocollapse */
        UpdateComponent.ctorParameters = function () {
            return [
                { type: PostsService },
                { type: ngBootstrap.NgbModal }
            ];
        };
        UpdateComponent.propDecorators = {
            postItem: [{ type: core.Input }],
            updated: [{ type: core.Output }]
        };
        return UpdateComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var routes = [
        {
            path: 'posts', component: PostsComponent, children: [
                { path: '', component: HomeComponent },
                { path: 'home', component: HomeComponent }
            ]
        },
    ];
    var PostsRoutingModule = (function () {
        function PostsRoutingModule() {
        }
        PostsRoutingModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            router.RouterModule.forRoot(routes)
                        ],
                        exports: [
                            router.RouterModule
                        ]
                    },] }
        ];
        return PostsRoutingModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var PostsModule = (function () {
        function PostsModule() {
        }
        PostsModule.decorators = [
            { type: core.NgModule, args: [{
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
                            common.CommonModule,
                            forms.FormsModule,
                            PostsRoutingModule,
                            http.HttpClientModule,
                            ngBootstrap.NgbModule.forRoot()
                        ],
                        exports: [
                            PostsComponent,
                            TopComponent
                        ],
                        providers: [
                            ngBootstrap.NgbActiveModal,
                            PostsService
                        ]
                    },] }
        ];
        return PostsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.PostsComponent = PostsComponent;
    exports.TopComponent = TopComponent;
    exports.PostsModule = PostsModule;
    exports.ɵb = HomeComponent;
    exports.ɵd = CreateComponent;
    exports.ɵf = DeleteComponent;
    exports.ɵc = PostItemComponent;
    exports.ɵe = UpdateComponent;
    exports.ɵg = PostsRoutingModule;
    exports.ɵa = PostsService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=posts.umd.js.map