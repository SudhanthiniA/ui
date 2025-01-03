import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExportpassoutsideupComponent } from './exportpassoutsideup.component';

const routes: Routes = [
  { path: 'list', component: ExportpassoutsideupComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExportpassoutsideupRoutingModule { }
