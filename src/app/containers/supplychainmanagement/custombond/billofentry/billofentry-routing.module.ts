import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddbillofentryComponent } from './addbillofentry/addbillofentry.component';
import { ViewbillofentryComponent } from './viewbillofentry/viewbillofentry.component';
import { BillofentryComponent } from './billofentry.component';
import { PreviewbillofentryComponent } from './previewbillofentry/previewbillofentry.component';

const routes: Routes = [
  { path: 'list', component: BillofentryComponent},
  {path: 'add', component: AddbillofentryComponent},
  {path: 'view', component:ViewbillofentryComponent},
  {path: 'preview', component:PreviewbillofentryComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillofentryRoutingModule { }
