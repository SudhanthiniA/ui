import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpiritpurchaseindentInupIdComponent } from './spiritpurchaseindent-inup-id.component';
import { AddspiritpurchaseindentInupIdComponent } from './addspiritpurchaseindent-inup-id/addspiritpurchaseindent-inup-id.component';
import { ViewspiritpurchaseindentInupIdComponent } from './viewspiritpurchaseindent-inup-id/viewspiritpurchaseindent-inup-id.component';

const routes: Routes = [
  { path: 'list', component: SpiritpurchaseindentInupIdComponent},
  {path: 'add', component: AddspiritpurchaseindentInupIdComponent},
  {path: 'view', component: ViewspiritpurchaseindentInupIdComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpiritpurchaseindentInupIdRoutingModule { }
