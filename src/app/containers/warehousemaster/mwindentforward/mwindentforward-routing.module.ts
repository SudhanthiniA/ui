import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MwindentforwardComponent } from './mwindentforward.component';
import { AddmwindentforwardComponent } from './addmwindentforward/addmwindentforward.component';
import { ViewmwindentforwardComponent } from './viewmwindentforward/viewmwindentforward.component';
import { EditComponent } from './edit/edit.component';
import { MwsubindentComponent } from './mwsubindent/mwsubindent.component';

const routes: Routes = [
  { path: 'list', component: MwindentforwardComponent },
  { path: 'add', component: AddmwindentforwardComponent },
  { path: 'view', component: ViewmwindentforwardComponent },
  { path: 'edit', component: EditComponent },
  { path: 'subindent', component: MwsubindentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MwindentforwardRoutingModule { }
