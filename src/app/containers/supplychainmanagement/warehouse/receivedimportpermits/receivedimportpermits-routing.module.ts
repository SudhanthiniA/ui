import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceivedimportpermitsComponent } from './receivedimportpermits.component'; 
import { ViewreceivedimportpermitsComponent } from './viewreceivedimportpermits/viewreceivedimportpermits.component';

const routes: Routes = [{ path: 'list', component: ReceivedimportpermitsComponent }, 
                        { path: 'view/:id/:status', component: ViewreceivedimportpermitsComponent},];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceivedimportpermitsRoutingModule { }
