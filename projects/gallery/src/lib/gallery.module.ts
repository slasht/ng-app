import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { GalleryItemComponent } from './gallery-item/gallery-item.component';
import { GalleryRoutingModule } from "./gallery-routing.module";
import { GalleryComponent } from './gallery.component';
import { HomeComponent } from './home/home.component';
import { GalleryService } from './services/gallery.service';
import { TopComponent } from './top/top.component';

@NgModule({
  declarations: [
    GalleryComponent,
    HomeComponent,
    TopComponent,
    GalleryItemComponent    
  ],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  exports: [
    GalleryComponent,
    TopComponent
  ],
  providers: [
    GalleryService
  ]
})
export class GalleryModule { }
