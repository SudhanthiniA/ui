import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { ApprovalComponent } from './approval/approval.component';
import { Pd25gatepagesforfl41OilmixingrequestComponent } from './pd25gatepagesforfl41-oilmixingrequest.component';

const routes: Routes = [
  { path: 'list', component: Pd25gatepagesforfl41OilmixingrequestComponent },
{ path: 'approval', component: ApprovalComponent },
{ path: 'view', component: ViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Pd25gatepassforfl41OilmixingrequestRoutingModule { }
