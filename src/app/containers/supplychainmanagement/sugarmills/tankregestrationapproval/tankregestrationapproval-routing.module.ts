import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TankregelistComponent } from './tankregelist/tankregelist.component';
import { TankregeviewComponent} from './tankregeview/tankregeview.component';

const routes: Routes = [
  { path: 'list', component: TankregelistComponent},
  { path: 'tankviewapproval' ,component:TankregeviewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TankregestrationapprovalRoutingModule { }
