/**
 *  The delete post request model.
 * */
export class DeletePostRequest {

  /**
   *  Initializes a new instance of the DeletePostRequest class.
   * @param id The id of the post item to be deleted.
   */
  constructor(public id: number) { }
}

/**
 *  The delete post response model.
 * */
export class DeletePostResponse {

  /**
   * Initializes a new instance of the DeletePostResponse class.
   * @param id The id of the deleted post item.
   */
  constructor(public id: number) { }
}
