import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LowrecoveryfeesComponent } from './lowrecoveryfees.component';
import { AddlowrecoveryfeesComponent } from './addlowrecoveryfees/addlowrecoveryfees.component';
import { EditlowrecoveryfeesComponent } from './editlowrecoveryfees/editlowrecoveryfees.component';
import { ViewlowrecoveryfeesComponent } from './viewlowrecoveryfees/viewlowrecoveryfees.component';


const routes: Routes = [
  { path: 'list', component: LowrecoveryfeesComponent },
  { path: 'add', component: AddlowrecoveryfeesComponent },
  { path: 'edit', component: EditlowrecoveryfeesComponent },
   { path: 'view', component: ViewlowrecoveryfeesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LowrecoveryfeesRoutingModule { }
