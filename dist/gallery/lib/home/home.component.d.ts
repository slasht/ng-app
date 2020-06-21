import { OnInit } from '@angular/core';
import { GalleryItem } from '../models/interfaces/gallery-item';
import { GalleryService } from '../services/gallery.service';
export declare class HomeComponent implements OnInit {
    private galleryService;
    loading: boolean;
    galleryItems: GalleryItem[];
    constructor(galleryService: GalleryService);
    ngOnInit(): void;
}
