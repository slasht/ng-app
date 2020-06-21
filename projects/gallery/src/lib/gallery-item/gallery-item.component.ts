import { Component, Input } from '@angular/core';
import { GalleryItem } from '../models/interfaces/gallery-item';

@Component({
  selector: 'gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.scss']
})
export class GalleryItemComponent {

 @Input() model: GalleryItem;
  constructor() { }

}
