import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoodssubcatmasterComponent } from './goodssubcatmaster.component';
import { AddgoodssubcatmasterComponent } from './addgoodssubcatmaster/addgoodssubcatmaster.component';
import { ViewgoodssubcatmasterComponent } from './viewgoodssubcatmaster/viewgoodssubcatmaster.component';

const routes: Routes = [
  { path: 'list', component: GoodssubcatmasterComponent },
  { path: 'add', component: AddgoodssubcatmasterComponent },
  { path: 'view', component: ViewgoodssubcatmasterComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoodssubcatmasterRoutingModule { }
