import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdvsearchlicregComponent } from './advsearchlicreg.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: 'list', component: AdvsearchlicregComponent },
  { path: 'view', component: ViewComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvsearchlicregRoutingModule { }
