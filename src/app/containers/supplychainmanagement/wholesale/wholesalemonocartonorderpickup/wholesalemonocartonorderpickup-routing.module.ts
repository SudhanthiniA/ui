import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WholesalemonocartonorderpickupComponent } from './wholesalemonocartonorderpickup.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'list', component: WholesalemonocartonorderpickupComponent },
  { path: 'edit', component: EditComponent },
  { path: 'view', component: ViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WholesalemonocartonorderpickupRoutingModule { }
