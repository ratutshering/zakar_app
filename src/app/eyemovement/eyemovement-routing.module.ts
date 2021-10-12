import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EyemovementPage } from './eyemovement.page';

const routes: Routes = [
  {
    path: '',
    component: EyemovementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EyemovementPageRoutingModule {}
