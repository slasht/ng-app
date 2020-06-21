import { Contact } from "../interfaces/contact";
import { APIResponse } from "./api-response";

/**
 *  The contact request model.
 * */
export class ContactRequest {
  constructor(private contact: Contact) { }
}

/**
 *  The contact response model.
 * */
export class ContactResponse extends APIResponse {
  constructor(isSucess: boolean, message: string) {
    super(isSucess, message);
  }
}
