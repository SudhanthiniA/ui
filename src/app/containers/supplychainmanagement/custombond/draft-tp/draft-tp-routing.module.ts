import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DraftTpComponent } from './draft-tp.component';
import { AdddraftTpComponent } from './adddraft-tp/adddraft-tp.component';
import { ViewdraftTpComponent } from './viewdraft-tp/viewdraft-tp.component';

const routes: Routes = [
  { path: 'list', component: DraftTpComponent },
  { path: 'add', component: AdddraftTpComponent },
  { path: 'view', component: ViewdraftTpComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DraftTpRoutingModule { }
