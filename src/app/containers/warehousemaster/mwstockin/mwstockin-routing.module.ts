import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MwstockinComponent } from './mwstockin.component';
import { AddmwstockinComponent } from './addmwstockin/addmwstockin.component';
import { ViewmmwstockinComponent } from './viewmmwstockin/viewmmwstockin.component';
import { PreviewmwstockinComponent } from './previewmwstockin/previewmwstockin.component';

const routes: Routes = [{ path: 'list', component: MwstockinComponent },
{ path: 'add', component: AddmwstockinComponent },
{ path: 'view', component: ViewmmwstockinComponent },
{ path: 'preview', component: PreviewmwstockinComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MwstockinRoutingModule { }
