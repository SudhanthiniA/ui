import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddeditLiquorComponent } from './addedit-liquor/addedit-liquor.component';
import { LiquorComponent } from './liquor.component';
import { ViewLiquorComponent } from './view-liquor/view-liquor.component';

const routes: Routes = [
  { path: 'list', component: LiquorComponent },
  { path: 'add', component: AddeditLiquorComponent },
  { path: 'edit/:Id', component: AddeditLiquorComponent },
  { path: 'view/:Id', component: ViewLiquorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LiquorRoutingModule { }
