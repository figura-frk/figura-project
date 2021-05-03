import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// @ts-ignore
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [
    ContactComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class ContactModule { }
