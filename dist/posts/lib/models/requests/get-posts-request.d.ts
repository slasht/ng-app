import { PostItem } from "../interfaces/post-item";
/**
 *  The get posts request model.
 * */
export declare class GetPostsRequest {
    max: number;
    /**
    *  Initializes a new instance of the GetPostsRequest class.
    * @param max The max items to retrieve.
    */
    constructor(max?: number);
}
/**
 *  The get posts response model.
 * */
export declare class GetPostsResponse {
    items: PostItem[];
    /**
     *  Initializes a new instance of the GetPostsResponse class.
     * @param items The retrieved post items.
     */
    constructor(items: PostItem[]);
}
