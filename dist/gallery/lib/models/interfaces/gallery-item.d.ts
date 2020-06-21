/**
 *  The gallery item.
 * */
export interface GalleryItem {
    /**
     * The album id of the item.
     */
    albumId: number;
    /**
    * The id of the item.
    */
    id: number;
    /**
    * The title of the item.
    */
    title: string;
    /**
    * The image url of the item.
    */
    url: string;
    /**
    * The thumbnail image url of the item.
    */
    thumbnailUrl: string;
}
