import { EventEmitter } from '@angular/core';
import { PostItem } from '../models/interfaces/post-item';
import { PostsService } from '../services/posts.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
export declare class PostItemComponent {
    private postsService;
    private modalService;
    model: PostItem;
    delete: EventEmitter<PostItem>;
    deleting: boolean;
    constructor(postsService: PostsService, modalService: NgbModal);
    /**
     * Delete the post item.
     * */
    deleteItem(): void;
    /**
     * Open deletion confirmation dialog modal.
     * @param content The modal template to show.
     */
    confirm(content: any): void;
}
