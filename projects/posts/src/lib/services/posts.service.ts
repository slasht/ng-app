import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { from, Observable, throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { PostItem } from "../models/interfaces/post-item";
import { CreatePostRequest, CreatePostResponse } from "../models/requests/create-post-request";
import { DeletePostRequest, DeletePostResponse } from "../models/requests/delete-post-request";
import { GetPostRequest, GetPostResponse } from "../models/requests/get-post-request";
import { GetPostsRequest, GetPostsResponse } from "../models/requests/get-posts-request";
import { UpdatePostRequest, UpdatePostResponse } from "../models/requests/update-post-request";

@Injectable()
export class PostsService {

  // The API base url.
  private actionUrl: string;

  constructor(private _httpClient: HttpClient) {
    // Set the API url.
    this.actionUrl = 'https://jsonplaceholder.typicode.com';
  }

  /**
   * Get all post items.
   */
  public getPosts = (request: GetPostsRequest): Observable<GetPostsResponse> => {

    return this._httpClient.get(`${this.actionUrl}/posts`).pipe(
      map((items: PostItem[]) => {

        // Create and return a response with the returned items.
        return new GetPostsResponse(items.slice(0, request.max));

      }),
      catchError(err => {
        return observableThrowError(err);
      }));
  }


  /**
   *  Get a specified post item.
   * @param request The request data.
   */
  public getPost = (request: GetPostRequest): Observable<GetPostResponse> => {

    // Invoke a get request.
    return this._httpClient.get(`${this.actionUrl}/posts/${request.id}`).pipe(
      map((item: PostItem) => {

        // Create and return response with the returned item.
        return new GetPostResponse(item);

      }),
      catchError(err => {
        return observableThrowError(err);
      }));
  }

  /**
   * Create a new  post item.
  * @param request The request data.
   */
  create(request: CreatePostRequest): Observable<CreatePostResponse> {

    // Invoke a post request.
    return this._httpClient.post(`${this.actionUrl}/posts/`, request).pipe(
      map((response: any) => {
        // Create and return response with the created item id.
        return new CreatePostResponse(response.id);

      }),
      catchError(err => {
        return observableThrowError(err);
      }));
  }


  /**
 * Updates a post item.
* @param request The request data.
 */
  update(request: UpdatePostRequest): Observable<UpdatePostResponse> {

    // Invoke a put request.
    return this._httpClient.put(`${this.actionUrl}/posts/${request.postItem.id}`, request.postItem).pipe(
      map((response: PostItem) => {
        // Create and return response with the created item id.
        return new UpdatePostResponse(response);

      }),
      catchError(err => {
        return observableThrowError(err);
      }));
  }

  /**
   * Deletes a post item.
  * @param request The request data.
   */
  delete(request: DeletePostRequest): Observable<DeletePostResponse> {

    // Invoke a delete request.
    return from(fetch(`${this.actionUrl}/posts/${request.id}`, {
      method: 'DELETE'
    }))
      .pipe(
        map((response) => {
          console.log(response);
          // Create and return response with the returned item.
          return new DeletePostResponse(request.id);
        }),
        catchError(err => {
          return observableThrowError(err);
        }));
  }
}
