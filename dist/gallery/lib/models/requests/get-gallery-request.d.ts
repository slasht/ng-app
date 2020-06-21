import { GalleryItem } from "../interfaces/gallery-item";
/**
 *  The get gallery request model.
 * @param max The max items to retrieve.
 * */
export declare class GetGalleryRequest {
    max: number;
    constructor(max?: number);
}
/**
 *  The get gallery response model.
 * */
export declare class GetGalleryResponse {
    items: GalleryItem[];
    constructor(items: GalleryItem[]);
}
