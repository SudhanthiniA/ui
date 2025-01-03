import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PdEightComponent } from './pd-eight.component';
import { ViewpdEightComponent } from './viewpd-eight/viewpd-eight.component';
import { AddeditpdEightComponent } from './addeditpd-eight/addeditpd-eight.component';
import { Previewpd8aComponent } from './previewpd8a/previewpd8a.component';


const routes: Routes = [
  {
  path : 'list',
  component : PdEightComponent
},
{
  path : 'view/:id',
  component : ViewpdEightComponent
},
{
  path : 'add',
  component : AddeditpdEightComponent
},
{
  path : 'edit/:id',
  component : AddeditpdEightComponent
},
{
  path : 'preview',
  component : Previewpd8aComponent
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PdEightRoutingModule { }
