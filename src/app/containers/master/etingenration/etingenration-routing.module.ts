import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EtingenrationComponent } from './etingenration.component';
import { EtinaddComponent } from './etinadd/etinadd.component';
import { EtinviewComponent } from './etinview/etinview.component';

const routes: Routes = [{ path: 'list', component: EtingenrationComponent },
                        { path: 'add', component: EtinaddComponent},
                        { path:'edit/:Id', component: EtinaddComponent},
                        { path:'view', component: EtinviewComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtingenrationRoutingModule { }
