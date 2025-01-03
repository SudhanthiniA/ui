import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalutationComponent } from './salutation.component';
import { ViewsalutationComponent } from './viewsalutation/viewsalutation.component';

const routes: Routes = [
  {
    path : 'list',
    component : SalutationComponent
  },
  {
    path : 'view',
    component : ViewsalutationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalutationRoutingModule { }
