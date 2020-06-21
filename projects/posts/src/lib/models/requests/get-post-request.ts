import { PostItem } from "../interfaces/post-item";

/**
 *  The get post request model.
 * */
export class GetPostRequest {

  /**
   *  Initializes a new instance of the GetPostRequest class.
   * @param id The id of the post item to be retrieved.
   */
  constructor(public id: number) { }
}

/**
 *  The get post response model.
 * */
export class GetPostResponse {

  /**
   * Initializes a new instance of the GetPostResponse class.
   * @param item The retrieved post item.
   */
  constructor(public item: PostItem) { }
}
