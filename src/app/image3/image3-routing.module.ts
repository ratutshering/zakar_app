import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Image3Page } from './image3.page';

const routes: Routes = [
  {
    path: '',
    component: Image3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Image3PageRoutingModule {}
