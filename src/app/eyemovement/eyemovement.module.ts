import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EyemovementPageRoutingModule } from './eyemovement-routing.module';

import { EyemovementPage } from './eyemovement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EyemovementPageRoutingModule
  ],
  declarations: [EyemovementPage]
})
export class EyemovementPageModule {}
