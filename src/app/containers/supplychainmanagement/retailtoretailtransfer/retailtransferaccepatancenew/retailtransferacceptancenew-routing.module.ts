import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RetailtransferaccepatancenewComponent } from './retailtransferaccepatancenew.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: 'list', component: RetailtransferaccepatancenewComponent },
  { path: 'view', component: ViewComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RetailtransferacceptancenewRoutingModule { }
