import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { PostItem } from '../models/interfaces/post-item';
import { GetPostsRequest } from '../models/requests/get-posts-request';

@Component({
  selector: 'posts-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // Loading indication.
  loading: boolean;

  // The post items to show.
  postItems: PostItem[];

  constructor(private postsService: PostsService) { }


  ngOnInit() {

    // Create get posts request.
    const request = new GetPostsRequest(50);

    // Set loading state.
    this.loading = true;

    // Call the service and retrieve posts.
    this.postsService.getPosts(request)
      .subscribe((response) => {

        // Set the items returned in the response.
        this.postItems = response.items;
      },
        (error) => {

          console.log(`Invoking get posts request encountered  an error. ${error}.`);
        },
        () => {
          // Set loading state.
          this.loading = false;

          console.log(`Completed invoking get posts request.`);
        });
  }

  /**
  * Create the specified post item on view.
  * @param event The triggered event containing the post item to create.
  */
  create(event: PostItem) {
    // Add the item to top of the posts collection.
    this.postItems.unshift(event);
  }


  /**
  * Update the specified post item on view.
  * @param event The triggered event containing the post item to update.
  */
  update(event: PostItem) {
    // Update the item in the posts collection.    
    this.postItems[this.postItems.findIndex(x => x.id === event.id)] = event;
  }

  /**
   * Delete the specified post item from view.
   * @param event The triggered event containing the post item to delete.
   */
  delete(event: PostItem) {
    // Remove the item from the posts collection.
    this.postItems.splice(this.postItems.indexOf(event), 1);
  }

}
