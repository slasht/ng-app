import { PostItem } from "../interfaces/post-item";

/**
 *  The create post request model.
 * */
export class CreatePostRequest {

  /**
   *  Initializes a new instance of the CreatePostRequest class.
   * @param postItem The post item to be created.
   */
  constructor(public postItem: PostItem) { }
}

/**
 *  The create post response model.
 * */
export class CreatePostResponse {

  /**
   * Initializes a new instance of the CreatePostResponse class.
   * @param id The id of newly created post item.
   */
  constructor(public id: number) { }
}
