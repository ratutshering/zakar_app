import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Image2PageRoutingModule } from './image2-routing.module';

import { Image2Page } from './image2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Image2PageRoutingModule
  ],
  declarations: [Image2Page]
})
export class Image2PageModule {}
