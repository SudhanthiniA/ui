import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Addeditmf9fortnightComponent } from './addeditmf9fortnight/addeditmf9fortnight.component';
import { Viewmf9fortnightComponent } from './viewmf9fortnight/viewmf9fortnight.component';
import { Previewmf9fortnightComponent } from './previewmf9fortnight/previewmf9fortnight.component';
import { Mf9fortnightComponent } from './mf9fortnight.component';


const routes: Routes = [
  {
    path:'add',
    component: Addeditmf9fortnightComponent
  },
  {
    path:'edit/:Id',
    component: Addeditmf9fortnightComponent
  },
  {
    path:'view',
    component: Viewmf9fortnightComponent
  },
  {
    path:'preview',
    component: Previewmf9fortnightComponent
  },
  {
    path:'list',
    component: Mf9fortnightComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Mf9fortnightRoutingModule { }
