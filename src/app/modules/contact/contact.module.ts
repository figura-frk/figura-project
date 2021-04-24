import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { ConatcComponent } from './conatc/conatc.component';



@NgModule({
  declarations: [
    ContactComponent,
    ConatcComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ContactModule { }
