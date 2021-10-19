import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Image1Page } from './image1.page';

const routes: Routes = [
  {
    path: '',
    component: Image1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Image1PageRoutingModule {}
