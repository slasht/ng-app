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
 */
GetPostsRequest = /** @class */ (function () {
    /**
    *  Initializes a new instance of the GetPostsRequest class.
    * @param max The max items to retrieve.
    */
    function GetPostsRequest(max) {
        if (max === void 0) { max = 9999; }
        this.max = max;
    }
    return GetPostsRequest;
}());
/**
 *  The get posts request model.
 *
 */
export { GetPostsRequest };
if (false) {
    /** @type {?} */
    GetPostsRequest.prototype.max;
}
/**
 *  The get posts response model.
 *
 */
var /**
 *  The get posts response model.
 *
 */
GetPostsResponse = /** @class */ (function () {
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
 *  The get posts response model.
 *
 */
export { GetPostsResponse };
if (false) {
    /** @type {?} */
    GetPostsResponse.prototype.items;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LXBvc3RzLXJlcXVlc3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9wb3N0cy8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbHMvcmVxdWVzdHMvZ2V0LXBvc3RzLXJlcXVlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFLQTs7OztBQUFBO0lBRUU7OztNQUdFO0lBQ0YseUJBQW1CLEdBQWtCO3dDQUFBO1FBQWxCLFFBQUcsR0FBSCxHQUFHLENBQWU7S0FBSzswQkFYNUM7SUFZQyxDQUFBOzs7OztBQVBELDJCQU9DOzs7Ozs7Ozs7QUFLRDs7OztBQUFBO0lBRUU7OztPQUdHO0lBQ0gsMEJBQW1CLEtBQWlCO1FBQWpCLFVBQUssR0FBTCxLQUFLLENBQVk7S0FBSzsyQkF2QjNDO0lBd0JDLENBQUE7Ozs7O0FBUEQsNEJBT0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQb3N0SXRlbSB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL3Bvc3QtaXRlbVwiO1xyXG5cclxuLyoqXHJcbiAqICBUaGUgZ2V0IHBvc3RzIHJlcXVlc3QgbW9kZWwuXHJcbiAqICovXHJcbmV4cG9ydCBjbGFzcyBHZXRQb3N0c1JlcXVlc3Qge1xyXG5cclxuICAvKipcclxuICAqICBJbml0aWFsaXplcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGUgR2V0UG9zdHNSZXF1ZXN0IGNsYXNzLlxyXG4gICogQHBhcmFtIG1heCBUaGUgbWF4IGl0ZW1zIHRvIHJldHJpZXZlLlxyXG4gICovXHJcbiAgY29uc3RydWN0b3IocHVibGljIG1heDogbnVtYmVyID0gOTk5OSkgeyB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiAgVGhlIGdldCBwb3N0cyByZXNwb25zZSBtb2RlbC5cclxuICogKi9cclxuZXhwb3J0IGNsYXNzIEdldFBvc3RzUmVzcG9uc2Uge1xyXG5cclxuICAvKipcclxuICAgKiAgSW5pdGlhbGl6ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhlIEdldFBvc3RzUmVzcG9uc2UgY2xhc3MuXHJcbiAgICogQHBhcmFtIGl0ZW1zIFRoZSByZXRyaWV2ZWQgcG9zdCBpdGVtcy5cclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgaXRlbXM6IFBvc3RJdGVtW10pIHsgfVxyXG59XHJcbiJdfQ==