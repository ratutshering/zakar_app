import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Image2Page } from './image2.page';

const routes: Routes = [
  {
    path: '',
    component: Image2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Image2PageRoutingModule {}
