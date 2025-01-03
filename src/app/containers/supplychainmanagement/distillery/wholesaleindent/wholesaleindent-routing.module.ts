import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WholesaleindentComponent } from './wholesaleindent.component';
// import { AddwholesaleindentComponent } from './addwholesaleindent/addwholesaleindent.component';
import { ViewwholesaleindentComponent } from './viewwholesaleindent/viewwholesaleindent.component';


const routes: Routes = [
  {
    path : 'list',
    component : WholesaleindentComponent
  },
  // {
  //   path: 'add',
  //   component : AddwholesaleindentComponent
  // },
  {
    path : 'view',
    component : ViewwholesaleindentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WholesaleindentRoutingModule { }
