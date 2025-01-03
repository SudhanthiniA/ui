import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DigitallocksComponent } from './digitallocks.component';
import { ViewdigitallocksComponent } from './viewdigitallocks/viewdigitallocks.component';
import { AddeditdigitallocksComponent } from './addeditdigitallocks/addeditdigitallocks.component';


const routes: Routes = [
  {
    path : 'list',
    component : DigitallocksComponent
  },
  {
    path : 'view',
    component : ViewdigitallocksComponent
  },
  {
    path : 'add',
    component : AddeditdigitallocksComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DigitallocksRoutingModule { }
