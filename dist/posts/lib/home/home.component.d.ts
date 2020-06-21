import { OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { PostItem } from '../models/interfaces/post-item';
export declare class HomeComponent implements OnInit {
    private postsService;
    loading: boolean;
    postItems: PostItem[];
    constructor(postsService: PostsService);
    ngOnInit(): void;
    /**
    * Create the specified post item on view.
    * @param event The triggered event containing the post item to create.
    */
    create(event: PostItem): void;
    /**
    * Update the specified post item on view.
    * @param event The triggered event containing the post item to update.
    */
    update(event: PostItem): void;
    /**
     * Delete the specified post item from view.
     * @param event The triggered event containing the post item to delete.
     */
    delete(event: PostItem): void;
}
