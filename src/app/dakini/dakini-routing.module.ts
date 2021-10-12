import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DakiniPage } from './dakini.page';

const routes: Routes = [
  {
    path: '',
    component: DakiniPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DakiniPageRoutingModule {}
