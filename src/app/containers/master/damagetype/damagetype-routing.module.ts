import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdddamagetypeComponent } from './adddamagetype/adddamagetype.component';
import { DamagetypeComponent } from './damagetype.component';
import { ViewdamagetypeComponent } from './viewdamagetype/viewdamagetype.component';

const routes: Routes = [
  { path: 'list', component: DamagetypeComponent },
  { path: 'add', component: AdddamagetypeComponent },
  { path: 'view', component: ViewdamagetypeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DamagetypeRoutingModule { }


