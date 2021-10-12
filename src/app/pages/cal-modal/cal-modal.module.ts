
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalModalPageRoutingModule } from './cal-modal-routing.module';

import { CalModalPage } from './cal-modal.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalModalPageRoutingModule
  ],
  declarations: [CalModalPage]
})
export class CalModalPageModule {}
