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
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'image1',
    loadChildren: () => import('./image1/image1.module').then( m => m.Image1PageModule)
  },
  {
    path: 'image2',
    loadChildren: () => import('./image2/image2.module').then( m => m.Image2PageModule)
  },
  {
    path: 'image3',
    loadChildren: () => import('./image3/image3.module').then( m => m.Image3PageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
