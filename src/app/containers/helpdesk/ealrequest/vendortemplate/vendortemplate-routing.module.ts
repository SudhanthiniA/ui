import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendortemplateComponent } from './vendortemplate.component';
import { AddvendortemplateComponent } from './addvendortemplate/addvendortemplate.component';
import { ViewvendortemplateComponent } from './viewvendortemplate/viewvendortemplate.component';

const routes: Routes = [
  { path: '', component: VendortemplateComponent },
  { path: 'add', component: AddvendortemplateComponent },
  { path: 'view', component: ViewvendortemplateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendortemplateRoutingModule { }
