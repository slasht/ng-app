import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { PostItemComponent } from './post-item/post-item.component';
import { PostsComponent } from "./posts.component";

const routes: Routes = [
  {
    path: 'posts', component: PostsComponent, children: [
      {path: '', component: HomeComponent},
      {path: 'home', component: HomeComponent}
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
export class PostsRoutingModule {
}
