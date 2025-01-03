import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { StockinnewComponent } from './stockinnew.component';
import { AddstockinnewComponent } from './addstockinnew/addstockinnew.component';
import { ViewstockinnewComponent } from './viewstockinnew/viewstockinnew.component';
import { PreviewdamagemissingComponent } from './previewdamagemissing/previewdamagemissing.component'; 

const routes: Routes = [
  { path: 'list', component: StockinnewComponent },
{
  path : 'add',
  component : AddstockinnewComponent
},
{
  path : 'edit/:id',
  component : AddstockinnewComponent
},
{
  path : 'view/:id',
  component : ViewstockinnewComponent
},
{
  path : 'preview',
  component : PreviewdamagemissingComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockinnewRoutingModule { }
