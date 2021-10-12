import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RitualdirectionPage } from './ritualdirection.page';

const routes: Routes = [
  {
    path: '',
    component: RitualdirectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RitualdirectionPageRoutingModule {}
