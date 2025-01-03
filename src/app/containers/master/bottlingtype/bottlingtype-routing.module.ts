import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BottlingtypeComponent } from './bottlingtype.component';
import { AddbottlingtypeComponent } from './addbottlingtype/addbottlingtype.component';
import { ViewbottlingtypeComponent } from './viewbottlingtype/viewbottlingtype.component';

const routes: Routes = [
  { path: 'list', component: BottlingtypeComponent },
  { path: 'add', component: AddbottlingtypeComponent },
  { path: 'view', component: ViewbottlingtypeComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BottlingtypeRoutingModule { }
