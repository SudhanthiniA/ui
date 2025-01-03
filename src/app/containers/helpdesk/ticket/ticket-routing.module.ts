import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { 
    path: 'searchticket', 
    loadChildren: () => import('./searchticket/searchticket.module').then(m => m.SearchticketModule) 
  },
  {
  path: 'viewticket', 
    loadChildren: () => import ('./viewticket/viewticket.module').then(m => m.ViewticketModule) 
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketRoutingModule { }
