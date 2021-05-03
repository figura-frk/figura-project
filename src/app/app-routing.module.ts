import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutPageModule} from './modules/about-page/about-page.module';
import { CommonModule } from '@angular/common';
import { ContactModule} from './modules/contact/contact.module';
import {StoreModule} from './modules/store/store.module';

const routes: Routes = [
  { path: '',
  component: StoreModule},
  { path: '',
  component: AboutPageModule},
  {path: '',
  component: CommonModule},
  {path: '',
  component: ContactModule}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
