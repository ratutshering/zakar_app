import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'dakini',
    loadChildren: () => import('./dakini/dakini.module').then( m => m.DakiniPageModule)
  },
  {
    path: 'eyemovement',
    loadChildren: () => import('./eyemovement/eyemovement.module').then( m => m.EyemovementPageModule)
  },
  {
    path: 'birthsign',
    loadChildren: () => import('./birthsign/birthsign.module').then( m => m.BirthsignPageModule)
  },
  {
    path: 'ritualdirection',
    loadChildren: () => import('./ritualdirection/ritualdirection.module').then( m => m.RitualdirectionPageModule)
  },
  {
    path: 'cal-modal',
    loadChildren: () => import('./pages/cal-modal/cal-modal.module').then( m => m.CalModalPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
