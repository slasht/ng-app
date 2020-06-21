import { Component, Input, EventEmitter, Output } from '@angular/core';
import { PostItem } from '../models/interfaces/post-item';
import { PostsService } from '../services/posts.service';
import { DeletePostRequest } from '../models/requests/delete-post-request';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent {

  // The post item model.
  @Input() model: PostItem;

  // An event emitter for post deletion notification.
  @Output()
  delete: EventEmitter<PostItem> = new EventEmitter<PostItem>();

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
          this.delete.emit(this.model);
        }
        else {
          console.log(`Invoking delete post item request completed with error.`);
        }

      },
        (error) => {
        

          console.log(`Invoking delete post item request encountered  an error. ${error}.`);
        },
        () => {
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
