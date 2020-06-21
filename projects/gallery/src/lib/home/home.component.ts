import { Component, OnInit } from '@angular/core';
import { GalleryItem } from '../models/interfaces/gallery-item';
import { GetGalleryRequest } from '../models/requests/get-gallery-request';
import { GalleryService } from '../services/gallery.service';

@Component({
  selector: 'gallery-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // Loading indication.
  loading: boolean;

  // The gallery items to show.
  galleryItems: GalleryItem[];

  constructor(private galleryService: GalleryService) { }


  ngOnInit() {

    // Create the request.
    const request = new GetGalleryRequest(100);

    // Set loading state.
    this.loading = true;

    // Call the service.
    this.galleryService.get(request)
      .subscribe((response) => {
        // Set the items with the response.
        this.galleryItems = response.items;
      },
        (error) => {

          console.log(`Invoking get gallery request encountered  an error. ${error}.`);
        },
        () => {
          // Set loading state.
          this.loading = false;

          console.log(`Completed invoking get gallery request.`);
        });
  }
}
