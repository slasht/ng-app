import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/interfaces/contact';
import { RequestState, RequestStatus } from '../models/requests/request-status';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})

export class ContactComponent {

  // The contact form model.
  model = {} as Contact;

  // Form submission result.
  public requestResult = new RequestStatus(RequestState.Idle, '');

  // Expose the Enum to template.
  get requestState() { return RequestState; }

  constructor(private contactService: ContactService) { }

  /**
   * Submit the contact form.
   */
  submit() {

    // Set the request result with its current state.
    this.requestResult.requestState = RequestState.Pending;

    // Call the service.
    this.contactService.contact(this.model)
      .subscribe((response) => {
        // Check for successful response.
        if (response.isSucess) {

          // Set the request result with its current state and success message.
          this.requestResult.requestState = RequestState.Success;

          console.log(`Invoking contact request completed sucessfully. ${response.message}.`);
        }
        else {
          // Set the request result with its current state and failure message.
          this.requestResult.requestState = RequestState.Error;

          console.log(`Invoking contact request completed with error. ${response.message}.`);
        }

      },
        (error) => {
          // Set the request result with its current state and failure message.
          this.requestResult.requestState = RequestState.Error;

          console.log(`Invoking contact request encountered  an error. ${error}.`);
        },
        () => {
          console.log(`Completed invoking contact request.`);
        });
  }
}
