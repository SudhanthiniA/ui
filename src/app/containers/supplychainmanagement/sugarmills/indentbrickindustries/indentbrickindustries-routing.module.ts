import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndentbrickindustriesComponent } from './indentbrickindustries.component';
import { AddindentbrickindustriesComponent } from './addindentbrickindustries/addindentbrickindustries.component';

const routes: Routes = [
  { path: 'list', component: IndentbrickindustriesComponent },
  { path: 'add', component: AddindentbrickindustriesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndentbrickindustriesRoutingModule { }
