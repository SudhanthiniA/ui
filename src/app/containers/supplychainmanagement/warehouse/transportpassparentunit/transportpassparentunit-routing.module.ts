import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransportpassparentunitComponent } from './transportpassparentunit.component';
import { AddtransportpassparentunitComponent } from './addtransportpassparentunit/addtransportpassparentunit.component';
import { ViewtransportpassparentunitComponent } from './viewtransportpassparentunit/viewtransportpassparentunit.component';
import { EdittransportpassparentunitComponent } from './edittransportpassparentunit/edittransportpassparentunit.component';

const routes: Routes = [ 
  { path: 'list', component: TransportpassparentunitComponent },
  { path: 'add', component: AddtransportpassparentunitComponent },
  { path: 'view', component: ViewtransportpassparentunitComponent },
  { path: 'edit', component: EdittransportpassparentunitComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransportpassparentunitRoutingModule { }
