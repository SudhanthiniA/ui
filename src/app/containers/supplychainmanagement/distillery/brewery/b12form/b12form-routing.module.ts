import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { B12formComponent } from './b12form.component';
import { Addb12formComponent } from './addb12form/addb12form.component';
import { Viewb12formComponent } from './viewb12form/viewb12form.component';
import { DraftfinallistComponent } from './draftfinallist/draftfinallist.component';


const routes: Routes = [
  {
    path : 'list',
    component : B12formComponent
  },
  {
    path : 'add',
    component : Addb12formComponent
  },
  {
    path : 'view',
    component : Viewb12formComponent
  },
  {
    path : 'draftfinallist',
    component : DraftfinallistComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class B12formRoutingModule { }
