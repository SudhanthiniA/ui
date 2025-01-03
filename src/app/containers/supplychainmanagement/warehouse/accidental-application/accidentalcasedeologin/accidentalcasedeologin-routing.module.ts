import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccidentalcasedeologinComponent } from './accidentalcasedeologin.component';
import { AddaccidentalcasedeologinComponent } from './addaccidentalcasedeologin/addaccidentalcasedeologin.component';
import { ViewaccidentalcasedeologinComponent } from './viewaccidentalcasedeologin/viewaccidentalcasedeologin.component';
import { PreviewaccidentalcasedeologinComponent } from './previewaccidentalcasedeologin/previewaccidentalcasedeologin.component';

const routes: Routes = [ 
  {
    path : 'list',
    component : AccidentalcasedeologinComponent
  },
  {
    path : 'add',
    component : AddaccidentalcasedeologinComponent
  },
  {
    path : 'view',
    component : ViewaccidentalcasedeologinComponent
  }  ,
  {
    path : 'preview',
    component : PreviewaccidentalcasedeologinComponent
  }
];  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccidentalcasedeologinRoutingModule { }
