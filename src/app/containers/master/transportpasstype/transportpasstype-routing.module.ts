import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransportpasstypeComponent } from './transportpasstype.component';
import { AddtransportpasstypeComponent } from './addtransportpasstype/addtransportpasstype.component';
import { ViewtransportpasstypeComponent } from './viewtransportpasstype/viewtransportpasstype.component';


const routes: Routes = [
  {
    path: 'list',
    component: TransportpasstypeComponent
  },
  {
    path: 'add',
    component: AddtransportpasstypeComponent
  },
  {
    path : 'view',
    component: ViewtransportpasstypeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TransportpasstypeRoutingModule { }
