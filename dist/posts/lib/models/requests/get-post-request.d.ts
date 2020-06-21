import { PostItem } from "../interfaces/post-item";
/**
 *  The get post request model.
 * */
export declare class GetPostRequest {
    id: number;
    /**
     *  Initializes a new instance of the GetPostRequest class.
     * @param id The id of the post item to be retrieved.
     */
    constructor(id: number);
}
/**
 *  The get post response model.
 * */
export declare class GetPostResponse {
    item: PostItem;
    /**
     * Initializes a new instance of the GetPostResponse class.
     * @param item The retrieved post item.
     */
    constructor(item: PostItem);
}
