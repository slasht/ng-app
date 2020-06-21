import { PostItem } from "../interfaces/post-item";

/**
 *  The get posts request model.
 * */
export class GetPostsRequest {

  /**
  *  Initializes a new instance of the GetPostsRequest class.
  * @param max The max items to retrieve.
  */
  constructor(public max: number = 9999) { }
}

/**
 *  The get posts response model.
 * */
export class GetPostsResponse {

  /**
   *  Initializes a new instance of the GetPostsResponse class.
   * @param items The retrieved post items.
   */
  constructor(public items: PostItem[]) { }
}
