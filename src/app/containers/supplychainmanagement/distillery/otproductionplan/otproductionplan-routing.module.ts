import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { OtproductionplanComponent } from './otproductionplan.component';

const routes: Routes = [
  {path: 'list', component: OtproductionplanComponent},
  {path: 'add', component: AddComponent},
  {
    path: 'edit/:id',
    component: AddComponent
  },
  {path: 'view', component: ViewComponent},
  {path: 'preview', component: ViewComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtproductionplanRoutingModule { }
