import { EventEmitter, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PostItem } from '../../models/interfaces/post-item';
import { PostsService } from '../../services/posts.service';
export declare class UpdateComponent implements OnInit {
    private postsService;
    private modalService;
    postItem: PostItem;
    model: PostItem;
    updated: EventEmitter<PostItem>;
    updating: boolean;
    constructor(postsService: PostsService, modalService: NgbModal);
    ngOnInit(): void;
    /**
     * Update the post item.
     * */
    updateItem(): void;
    /**
     * Open update dialog modal.
     * @param content The modal template to show.
     */
    open(content: any): void;
    /**
     * Submit the update new post item form.
     * */
    onSubmit(): void;
}
