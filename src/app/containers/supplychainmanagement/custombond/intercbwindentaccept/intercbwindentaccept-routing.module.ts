import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntercbwindentacceptComponent } from './intercbwindentaccept.component';
import { ViewintercbwindentacceptComponent } from './viewintercbwindentaccept/viewintercbwindentaccept.component';

const routes: Routes = [
  { path: 'list', component: IntercbwindentacceptComponent},
  {path: 'view', component:ViewintercbwindentacceptComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntercbwindentacceptRoutingModule { }
