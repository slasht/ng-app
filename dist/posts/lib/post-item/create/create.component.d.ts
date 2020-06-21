import { EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PostItem } from '../../models/interfaces/post-item';
import { PostsService } from '../../services/posts.service';
export declare class CreateComponent {
    private postsService;
    private modalService;
    model: PostItem;
    created: EventEmitter<PostItem>;
    creating: boolean;
    constructor(postsService: PostsService, modalService: NgbModal);
    /**
     * Create the post item.
     * */
    createItem(): void;
    /**
     * Open creation dialog modal.
     * @param content The modal template to show.
     */
    open(content: any): void;
    /**
     * Submit the create new post item form.
     * */
    onSubmit(): void;
}
