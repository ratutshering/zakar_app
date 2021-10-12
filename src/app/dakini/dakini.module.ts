import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DakiniPageRoutingModule } from './dakini-routing.module';

import { DakiniPage } from './dakini.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DakiniPageRoutingModule
  ],
  declarations: [DakiniPage]
})
export class DakiniPageModule {}
