import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestComponent } from './request/request.component';
import { AecviewComponent } from './aecview/aecview.component';
import { ApprovalComponent } from './approval/approval.component';
import { GenerateComponent } from './generate/generate.component';

const routes: Routes = [
  { path: 'request', component: RequestComponent },
{ path: 'aecview', component: AecviewComponent },
{ path: 'approval', component: ApprovalComponent },
{ path: 'generate', component: GenerateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Pamr3RoutingModule { }
