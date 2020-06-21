import { PostItem } from "../interfaces/post-item";
/**
 *  The update post request model.
 * */
export declare class UpdatePostRequest {
    postItem: PostItem;
    /**
     *  Initializes a new instance of the UpdatePostRequest class.
     * @param postItem The post item to be updated.
     */
    constructor(postItem: PostItem);
}
/**
 *  The delete post response model.
 * */
export declare class UpdatePostResponse {
    postItem: PostItem;
    /**
     * Initializes a new instance of the DeletePostResponse class.
     * @param postItem The updated post item.
     */
    constructor(postItem: PostItem);
}
