import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddeditSpiritComponent } from './addedit-spirit/addedit-spirit.component';

import { SpiritTypeComponent } from './spirit-type.component';
import { ViewSpiritComponent } from './view-spirit/view-spirit.component';

const routes: Routes = [
  { path: 'list', component: SpiritTypeComponent },
  { path:'add',component:AddeditSpiritComponent},
  { path:'edit/:id',component:AddeditSpiritComponent},
  { path:'view',component:ViewSpiritComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpiritTypeRoutingModule { }
