import { GalleryItem } from "../interfaces/gallery-item";

/**
 *  The get gallery request model.
 * @param max The max items to retrieve.
 * */
export class GetGalleryRequest {
  constructor(public max: number = 9999) { }
}

/**
 *  The get gallery response model.
 * */
export class GetGalleryResponse {
  constructor(public items: GalleryItem[]) { }
}
