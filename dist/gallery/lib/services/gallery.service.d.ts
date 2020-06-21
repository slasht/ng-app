import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { GetGalleryRequest, GetGalleryResponse } from '../models/requests/get-gallery-request';
export declare class GalleryService {
    private _httpClient;
    private actionUrl;
    constructor(_httpClient: HttpClient);
    /**
     * Get all gallery items.
     */
    get: (request: GetGalleryRequest) => Observable<GetGalleryResponse>;
}
