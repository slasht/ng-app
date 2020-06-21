import { Component, EventEmitter, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PostItem } from '../../models/interfaces/post-item';
import { CreatePostRequest } from '../../models/requests/create-post-request';
import { PostsService } from '../../services/posts.service';


@Component({
  selector: 'post-item-create',
  templateUrl: './create.component.html'
})
export class CreateComponent {

  // The post item model.
  model = {} as PostItem;

  // An event emitter for post creation notification.
  @Output()
  created: EventEmitter<PostItem> = new EventEmitter<PostItem>();

  // An indication for current processing state.
  creating = false;

  constructor(private postsService: PostsService, private modalService: NgbModal) { }

  /**
   * Create the post item.
   * */
  public createItem() {

    // Set the processing state.
    this.creating = true;

    // Create the request.
    const request = new CreatePostRequest(this.model);

    // Call the service.
    this.postsService.create(request)
      .subscribe((response) => {
        // Check for successful response.        
        if (response.id > 0) {

          console.log(`Invoking create post item request completed sucessfully.`);

          // Emit the created event.
          this.created.emit(this.model);
        }
        else {
          console.log(`Invoking create post item request completed with error.`);
        }
      },
        (error) => {
          console.log(`Invoking create post item request encountered  an error. ${error}.`);
        },
        () => {
          // Set the processing state.
          this.creating = false;

          console.log(`Completed Invoking create post item request.`);
        });

  }

  /**
   * Open creation dialog modal.
   * @param content The modal template to show.
   */
  open(content) {

    // Call modal service and open the specfied template in a modal.
    this.modalService.open(content).result.then((result) => {

      // Modal approved.
      console.log(`Creation modal approved with ${result}.`)

    }, (reason) => {
      // Modal dismissed.
      console.log(`Creation modal closed with ${reason}.`)

      // Do nothing.
    });
  }

  /**
   * Submit the create new post item form.
   * */
  onSubmit() {

    // Create post item.
    this.createItem();

    // Close open modals.
    this.modalService.dismissAll();

  }
}
