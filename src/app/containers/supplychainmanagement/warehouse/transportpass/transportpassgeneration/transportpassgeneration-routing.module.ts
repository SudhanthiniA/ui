import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransportpassgenerationComponent } from './transportpassgeneration.component';
import { AddtransportpassgenerationComponent } from './addtransportpassgeneration/addtransportpassgeneration.component';
import { ViewtransportpassgenerationComponent } from './viewtransportpassgeneration/viewtransportpassgeneration.component';
import { PreviewtransportpassgenerationComponent } from './previewtransportpassgeneration/previewtransportpassgeneration.component';

const routes: Routes = [
  { path: '', component: TransportpassgenerationComponent },
  { path: 'add', component: AddtransportpassgenerationComponent },
  { path : 'edit/:id', component: AddtransportpassgenerationComponent },
  { path: 'view/:id', component: ViewtransportpassgenerationComponent },
  { path: 'preview', component: PreviewtransportpassgenerationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransportpassgenerationRoutingModule { }
