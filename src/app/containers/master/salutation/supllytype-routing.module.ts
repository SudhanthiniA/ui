import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SupllytypeComponent } from './supllytype.component';
import { AddeditsupplytypeComponent } from './addeditsupplytype/addeditsupplytype.component';
import { ViewsupplytypeComponent } from './viewsupplytype/viewsupplytype.component';


const routes: Routes = [
  {
    path: 'list',
    component: SupllytypeComponent
  },
  {
    path: 'add',
    component: AddeditsupplytypeComponent
  },
  {
    path: 'edit/:Id',
    component: AddeditsupplytypeComponent
  },
  {
    path: 'view/:Id',
    component: ViewsupplytypeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupllytypeRoutingModule { }
