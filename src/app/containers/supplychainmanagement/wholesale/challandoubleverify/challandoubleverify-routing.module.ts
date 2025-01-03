import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChallandoubleverifyComponent } from './challandoubleverify.component';

const routes: Routes = [{ path: 'list', component: ChallandoubleverifyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChallandoubleverifyRoutingModule { }
