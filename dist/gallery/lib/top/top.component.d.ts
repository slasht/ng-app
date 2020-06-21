import { OnInit } from '@angular/core';
import { GalleryItem } from '../models/interfaces/gallery-item';
import { GalleryService } from '../services/gallery.service';
export declare class TopComponent implements OnInit {
    private galleryService;
    galleryItems: GalleryItem[];
    constructor(galleryService: GalleryService);
    ngOnInit(): void;
}
