import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SaledistrictwiseComponent } from './saledistrictwise.component';

const routes: Routes = [
  { path: 'list', component: SaledistrictwiseComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaledistrictwiseRoutingModule { }
