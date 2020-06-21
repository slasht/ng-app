import { OnInit } from '@angular/core';
import { PostItem } from '../models/interfaces/post-item';
import { PostsService } from '../services/posts.service';
export declare class TopComponent implements OnInit {
    private postsService;
    postItems: PostItem[];
    constructor(postsService: PostsService);
    ngOnInit(): void;
}
