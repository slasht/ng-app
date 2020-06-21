import { PostItem } from "../interfaces/post-item";

/**
 *  The update post request model.
 * */
export class UpdatePostRequest {

  /**
   *  Initializes a new instance of the UpdatePostRequest class.
   * @param postItem The post item to be updated.
   */
  constructor(public postItem: PostItem) { }
}

/**
 *  The delete post response model.
 * */
export class UpdatePostResponse {

  /**
   * Initializes a new instance of the DeletePostResponse class.
   * @param postItem The updated post item.
   */
  constructor(public postItem: PostItem) { }
}
