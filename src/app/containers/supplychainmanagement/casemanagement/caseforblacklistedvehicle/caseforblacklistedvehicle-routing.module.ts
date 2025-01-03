import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CaseforblacklistedvehicleComponent } from './caseforblacklistedvehicle.component';
import { AddcaseforblacklistedvehicleComponent } from './addcaseforblacklistedvehicle/addcaseforblacklistedvehicle.component';
import { ViewcaseforblacklistedvehicleComponent } from './viewcaseforblacklistedvehicle/viewcaseforblacklistedvehicle.component';

const routes: Routes = [
  { path: 'list', component: CaseforblacklistedvehicleComponent },
  { path: 'add', component: AddcaseforblacklistedvehicleComponent },
  { path: 'view', component: ViewcaseforblacklistedvehicleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CaseforblacklistedvehicleRoutingModule { }
