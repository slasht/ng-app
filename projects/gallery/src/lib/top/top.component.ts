import { Component, OnInit } from '@angular/core';
import { GalleryItem } from '../models/interfaces/gallery-item';
import { GetGalleryRequest } from '../models/requests/get-gallery-request';
import { GalleryService } from '../services/gallery.service';

@Component({
  selector: 'gallery-top',
  templateUrl: './top.component.html'
})
export class TopComponent implements OnInit {

  // The gallery items to show.
  galleryItems: GalleryItem[];

  constructor(private galleryService: GalleryService) { }


  ngOnInit() {

    // Create the request.
    const request = new GetGalleryRequest(10);

    // Call the service.
    this.galleryService.get(request)
      .subscribe((response) => {
        // Set the items with the response.
        this.galleryItems = response.items;
      },
        (error) => {

          console.log(`Invoking get gallery top request encountered  an error. ${error}.`);
        },
        () => {
          console.log(`Completed invoking get gallery top request.`);
        });
  }
}
