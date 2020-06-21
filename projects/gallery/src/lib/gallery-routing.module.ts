import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryItemComponent } from "./gallery-item/gallery-item.component";
import { GalleryComponent } from "./gallery.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  {
    path: 'gallery', component: GalleryComponent, children: [
      {path: '', component: HomeComponent},
      {path: 'home', component: HomeComponent},
      {path: 'gallery-item', component: GalleryItemComponent},
    ]
  },
];

@NgModule({
  imports: [    
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class GalleryRoutingModule {
}
