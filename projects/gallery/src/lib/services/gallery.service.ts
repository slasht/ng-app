import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { GalleryItem } from "../models/interfaces/gallery-item";
import { GetGalleryRequest, GetGalleryResponse } from '../models/requests/get-gallery-request';


@Injectable()
export class GalleryService {

  // The API base url.
  private actionUrl: string;

  constructor(private _httpClient: HttpClient) {
    // Set the API url.
    this.actionUrl = 'https://jsonplaceholder.typicode.com';
  }

  /**
   * Get all gallery items.
   */
  public get = (request: GetGalleryRequest): Observable<GetGalleryResponse> => {

    return this._httpClient.get(`${this.actionUrl}/photos`).pipe(
      map((items: GalleryItem[]) => {
        
        // Create and return response with the returned items.
        return new GetGalleryResponse(items.slice(0, request.max));

      }),
      catchError(err => {
        return observableThrowError(err);
      }));
  }
}
