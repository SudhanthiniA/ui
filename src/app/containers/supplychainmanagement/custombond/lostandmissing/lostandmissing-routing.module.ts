import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LostandmissingComponent } from './lostandmissing.component';
import { ViewlostandmissingComponent } from './viewlostandmissing/viewlostandmissing.component';

const routes: Routes = [
  { path: 'list', component: LostandmissingComponent },

  {
    path: 'view',
    component: ViewlostandmissingComponent
  }
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LostandmissingRoutingModule { }
