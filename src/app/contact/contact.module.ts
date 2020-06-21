import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './contact.component';
import { ContactService } from '../services/contact.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    ContactService
  ],

  declarations: [
    ContactComponent
  ],
  exports: [

  ],
})
export class ContactModule { }
