import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocumentComponent } from './document.component';
import { AddeditdocumentComponent } from './addeditdocument/addeditdocument.component';
import { ViewdocumentComponent } from './viewdocument/viewdocument.component';

const routes: Routes = [
  { path: 'list', component: DocumentComponent },
  { path: 'add', component: AddeditdocumentComponent },
  { path: 'edit/:id', component: AddeditdocumentComponent },
  { path: 'view/:id', component: ViewdocumentComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentRoutingModule { }
