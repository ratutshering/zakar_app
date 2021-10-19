import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Image1PageRoutingModule } from './image1-routing.module';

import { Image1Page } from './image1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Image1PageRoutingModule
  ],
  declarations: [Image1Page]
})
export class Image1PageModule {}
