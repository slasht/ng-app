import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MenuComponent } from './menu/menu.component';
import { IntroComponent } from './intro/intro.component';
import { HomeComponent } from './home/home.component';
import { ContactModule } from './contact/contact.module';

import { GalleryModule } from 'gallery';
import { PostsModule } from 'posts';


@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    HomeComponent,
    MenuComponent
  ],
  imports: [
    ContactModule,
    
    GalleryModule,
    PostsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
