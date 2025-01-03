import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TankmixingComponent } from './tankmixing.component';
import { AddtankconversionComponent } from './addtankconversion/addtankconversion.component';
import { ViewtankconversionComponent } from './viewtankconversion/viewtankconversion.component';

const routes: Routes = [
  { path: 'list', component: TankmixingComponent },
{
  path : 'add',
  component : AddtankconversionComponent
},
{
  path : 'view',
  component : ViewtankconversionComponent
},
{
  path: 'edit/:Id',
  component : AddtankconversionComponent
},
{
  path : 'preview',
  component : ViewtankconversionComponent
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TankmixingRoutingModule { }
