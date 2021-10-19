import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Image3PageRoutingModule } from './image3-routing.module';

import { Image3Page } from './image3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Image3PageRoutingModule
  ],
  declarations: [Image3Page]
})
export class Image3PageModule {}
