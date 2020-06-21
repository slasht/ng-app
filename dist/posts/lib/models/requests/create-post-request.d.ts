import { PostItem } from "../interfaces/post-item";
/**
 *  The create post request model.
 * */
export declare class CreatePostRequest {
    postItem: PostItem;
    /**
     *  Initializes a new instance of the CreatePostRequest class.
     * @param postItem The post item to be created.
     */
    constructor(postItem: PostItem);
}
/**
 *  The create post response model.
 * */
export declare class CreatePostResponse {
    id: number;
    /**
     * Initializes a new instance of the CreatePostResponse class.
     * @param id The id of newly created post item.
     */
    constructor(id: number);
}
