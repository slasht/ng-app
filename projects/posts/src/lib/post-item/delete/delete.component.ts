import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PostItem } from '../../models/interfaces/post-item';
import { DeletePostRequest } from '../../models/requests/delete-post-request';
import { PostsService } from '../../services/posts.service';


@Component({
  selector: 'post-item-delete',
  templateUrl: './delete.component.html'
})
export class DeleteComponent {

  // The post item model.
  @Input() model: PostItem;

  // An event emitter for post deletion notification.
  @Output()
  deleted: EventEmitter<PostItem> = new EventEmitter<PostItem>();

  // An indication for current processing state.
  deleting = false;

  constructor(private postsService: PostsService, private modalService: NgbModal) { }

  /**
   * Delete the post item.
   * */
  public deleteItem() {
    
    // Create the request.
    const request = new DeletePostRequest(this.model.id);

    // Call the service.
    this.postsService.delete(request)
      .subscribe((response) => {
        // Check for successful response.
        if (response.id === this.model.id) {

          console.log(`Invoking delete post item request completed sucessfully.`);

          // Emit the deleted event.
          this.deleted.emit(this.model);
        }
        else {
          console.log(`Invoking delete post item request completed with error.`);
        }

      },
        (error) => {
        

          console.log(`Invoking delete post item request encountered  an error. ${error}.`);
        },
        () => {
          // Set the processing state.
          this.deleting = false;

          console.log(`Completed Invoking delete post item request.`);
        });

  }

  /**
   * Open deletion confirmation dialog modal.
   * @param content The modal template to show.
   */
  confirm(content) {

    // Call modal service and open the specfied template in a modal.
    this.modalService.open(content).result.then((result) => {

      // Confirmation approved.
      console.log(`Confirmation modal approved with ${result}.`)

      // Set the processing state.
      this.deleting = true;

      // Delete post item.
      this.deleteItem();

    }, (reason) => {
        // Confirmation dismissed.
        console.log(`Confirmation modal closed with ${reason}.`)

        // Do nothing.
    });
  }
}
