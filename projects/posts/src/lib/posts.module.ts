import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal, NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './post-item/create/create.component';
import { DeleteComponent } from './post-item/delete/delete.component';
import { PostItemComponent } from './post-item/post-item.component';
import { UpdateComponent } from './post-item/update/update.component';
import { PostsRoutingModule } from "./posts-routing.module";
import { PostsComponent } from './posts.component';
import { PostsService } from './services/posts.service';
import { TopComponent } from './top/top.component';

@NgModule({
  declarations: [
    PostsComponent,
    HomeComponent,
    TopComponent,
    PostItemComponent,
    CreateComponent,
    UpdateComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PostsRoutingModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  exports: [
    PostsComponent,
    TopComponent],
  providers: [
    NgbActiveModal,
    PostsService
  ]
})
export class PostsModule { }
