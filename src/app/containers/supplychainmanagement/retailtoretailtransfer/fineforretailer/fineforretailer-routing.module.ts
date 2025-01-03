import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FineforretailerComponent } from './fineforretailer.component';
import { AddfineforretailComponent } from './addfineforretail/addfineforretail.component';
import { DeologinComponent } from './deologin/deologin.component';
import { DeoeditComponent } from './deoedit/deoedit.component';


const routes: Routes = [
  { path: 'list', component: FineforretailerComponent },

  { path: 'add', component: AddfineforretailComponent },
  { path: 'deolist', component: DeologinComponent },
  { path: 'deoedit', component: DeoeditComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FineforretailRoutingModule { }
