import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NavController } from '@ionic/angular';
import { Component, ViewChild} from '@angular/core';



import { Obra1Page } from './obra1.page';
import { Obra2Page } from '../obra2/obra2.page';

const routes: Routes = [
  {
    path: '',
    component: Obra1Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Obra1Page]
})
@Component({
  template: '<ion-nav #myNav [root]="rootPage"></ion-nav>'
})
export class Obra1PageModule {

}
