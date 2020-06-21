import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PostItem } from '../../models/interfaces/post-item';
import { UpdatePostRequest } from '../../models/requests/update-post-request';
import { PostsService } from '../../services/posts.service';


@Component({
  selector: 'post-item-update',
  templateUrl: './update.component.html'
})
export class UpdateComponent implements OnInit {

  // The post item model.
  @Input() postItem: PostItem;

  model = {} as PostItem;

  // An event emitter for post creation notification.
  @Output()
  updated: EventEmitter<PostItem> = new EventEmitter<PostItem>();

  // An indication for current processing state.
  updating = false;

  constructor(private postsService: PostsService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.model = { ...this.postItem};
    }

  /**
   * Update the post item.
   * */
  public updateItem() {

    // Set the processing state.
    this.updating = true;

    // Update the request.
    const request = new UpdatePostRequest(this.model);

    // Call the service.
    this.postsService.update(request)
      .subscribe((response) => {
        // Check for successful response.        
        if (response.postItem.id === request.postItem.id) {

          console.log(`Invoking update post item request completed sucessfully.`);

          // Emit the updated event.
          this.updated.emit(this.model);
        }
        else {
          console.log(`Invoking update post item request completed with error.`);
        }
      },
        (error) => {
          console.log(`Invoking update post item request encountered  an error. ${error}.`);
        },
        () => {
          // Set the processing state.
          this.updating = false;

          console.log(`Completed Invoking update post item request.`);
        });

  }

  /**
   * Open update dialog modal.
   * @param content The modal template to show.
   */
  open(content) {

    // Call modal service and open the specfied template in a modal.
    this.modalService.open(content).result.then((result) => {

      // Modal approved.
      console.log(`Update modal approved with ${result}.`)

    }, (reason) => {
      // Modal dismissed.
      console.log(`Update modal closed with ${reason}.`)

      // Do nothing.
    });
  }

  /**
   * Submit the update new post item form.
   * */
  onSubmit() {

    // Update post item.
    this.updateItem();

    // Close open modals.
    this.modalService.dismissAll();

  }
}
