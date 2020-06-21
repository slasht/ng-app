import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from "rxjs/operators";
import { Contact } from '../models/interfaces/contact';
import { ContactRequest, ContactResponse } from '../models/requests/send-message-request';

@Injectable()
export class ContactService {

  /**
   * Post the contact us model to server.
   * @param model The specified contact model to send.
   */
  public contact = (model: Contact): Observable<ContactResponse> => {

    // Create the request body.
    const body = new ContactRequest(model);

    // Here we would call the server through the injected httpclient, post the contact form and return the response.
    // ...

    // Return the (faked) response.
    return of(new ContactResponse(true, 'Message delivered.')).pipe(delay(1000));
  }

}
