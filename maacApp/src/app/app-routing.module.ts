import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'obra1', loadChildren: './obra1/obra1.module#Obra1PageModule' },
  { path: 'obra2', loadChildren: './obra2/obra2.module#Obra2PageModule' },
  { path: 'obra3', loadChildren: './obra3/obra3.module#Obra3PageModule' },
  { path: 'obra4', loadChildren: './obra4/obra4.module#Obra4PageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
