import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogingactivitylogComponent } from './logingactivitylog.component';


const routes: Routes = [
  {
    path: 'list',
    component: LogingactivitylogComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogingactivitylogRoutingModule { }
