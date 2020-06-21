import { Component, OnInit } from '@angular/core';
import { PostItem } from '../models/interfaces/post-item';
import { GetPostsRequest } from '../models/requests/get-posts-request';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'posts-top',
  templateUrl: './top.component.html'
})
export class TopComponent implements OnInit {

  // The post items to show.
  postItems: PostItem[];

  constructor(private postsService: PostsService) { }


  ngOnInit() {

    // Create get posts request.
    const request = new GetPostsRequest(10);

    // Call the service and retrieve posts.
    this.postsService.getPosts(request)
      .subscribe((response) => {

        // Set the items returned in the response.
        this.postItems = response.items;
      },
        (error) => {

          console.log(`Invoking get posts top request encountered  an error. ${error}.`);
        },
        () => {
          console.log(`Completed invoking get posts top request.`);
        });
  }
}
