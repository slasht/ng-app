import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { CreatePostRequest, CreatePostResponse } from "../models/requests/create-post-request";
import { DeletePostRequest, DeletePostResponse } from "../models/requests/delete-post-request";
import { GetPostRequest, GetPostResponse } from "../models/requests/get-post-request";
import { GetPostsRequest, GetPostsResponse } from "../models/requests/get-posts-request";
import { UpdatePostRequest, UpdatePostResponse } from "../models/requests/update-post-request";
export declare class PostsService {
    private _httpClient;
    private actionUrl;
    constructor(_httpClient: HttpClient);
    /**
     * Get all post items.
     */
    getPosts: (request: GetPostsRequest) => Observable<GetPostsResponse>;
    /**
     *  Get a specified post item.
     * @param request The request data.
     */
    getPost: (request: GetPostRequest) => Observable<GetPostResponse>;
    /**
     * Create a new  post item.
    * @param request The request data.
     */
    create(request: CreatePostRequest): Observable<CreatePostResponse>;
    /**
   * Updates a post item.
  * @param request The request data.
   */
    update(request: UpdatePostRequest): Observable<UpdatePostResponse>;
    /**
     * Deletes a post item.
    * @param request The request data.
     */
    delete(request: DeletePostRequest): Observable<DeletePostResponse>;
}
