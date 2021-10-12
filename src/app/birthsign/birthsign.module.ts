import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BirthsignPageRoutingModule } from './birthsign-routing.module';

import { BirthsignPage } from './birthsign.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BirthsignPageRoutingModule
  ],
  declarations: [BirthsignPage]
})
export class BirthsignPageModule {}
