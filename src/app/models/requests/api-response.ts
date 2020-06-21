/**
 *  The API base response model.
 * */
export class APIResponse {
  constructor(public isSucess: boolean, public message: string) { }
}
