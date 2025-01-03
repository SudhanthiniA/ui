import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DamagemasterComponent } from './damagemaster.component';
import { AdddamagemasterComponent } from './adddamagemaster/adddamagemaster.component';
import { ViewdamagemasterComponent } from './viewdamagemaster/viewdamagemaster.component';

const routes: Routes = [
  {
    path: 'list',
    component: DamagemasterComponent
  },
  {
    path: 'add',
    component: AdddamagemasterComponent
  },
  {
    path : 'view',
    component: ViewdamagemasterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DamagemasterRoutingModule { }
