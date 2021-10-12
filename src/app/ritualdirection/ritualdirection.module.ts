import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RitualdirectionPageRoutingModule } from './ritualdirection-routing.module';

import { RitualdirectionPage } from './ritualdirection.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RitualdirectionPageRoutingModule
  ],
  declarations: [RitualdirectionPage]
})
export class RitualdirectionPageModule {}
