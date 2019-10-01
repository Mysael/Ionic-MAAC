import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab1/tab1.module').then(m => m.Tab1PageModule)
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab2/tab2.module').then(m => m.Tab2PageModule)
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab3/tab3.module').then(m => m.Tab3PageModule)
          }
        ]
      },
      {
        path: 'obra1',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../obra1/obra1.module').then(m => m.Obra1PageModule)
          }
        ]
      },
      {
        path: 'obra2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../obra2/obra2.module').then(m => m.Obra2PageModule)
          }
        ]
      },
      {
        path: 'obra3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../obra3/obra3.module').then(m => m.Obra3PageModule)
          }
        ]
      },
      {
        path: 'obra4',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../obra4/obra4.module').then(m => m.Obra4PageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
