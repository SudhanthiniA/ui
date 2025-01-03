import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CasesizeComponent } from './casesize.component';
import { AddcasesizeComponent } from './addcasesize/addcasesize.component';
import { ViewcasesizeComponent } from './viewcasesize/viewcasesize.component';

const routes: Routes = [
  { path: 'list', component: CasesizeComponent },
  { path: 'add', component: AddcasesizeComponent },
  { path: 'view', component: ViewcasesizeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CasesizeRoutingModule { }
