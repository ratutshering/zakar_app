import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BirthsignPage } from './birthsign.page';

const routes: Routes = [
  {
    path: '',
    component: BirthsignPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BirthsignPageRoutingModule {}
