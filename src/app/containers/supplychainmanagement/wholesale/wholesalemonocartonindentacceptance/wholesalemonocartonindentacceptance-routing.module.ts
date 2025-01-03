import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WholesalemonocartonindentacceptanceComponent } from './wholesalemonocartonindentacceptance.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: 'list', component: WholesalemonocartonindentacceptanceComponent },
  { path: 'view', component: ViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WholesalemonocartonindentacceptanceRoutingModule { }
