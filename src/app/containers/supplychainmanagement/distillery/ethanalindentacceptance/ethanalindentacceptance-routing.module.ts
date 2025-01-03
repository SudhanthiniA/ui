import { NgModule } from '@angular/core';
import { EthanalindentacceptanceComponent } from './ethanalindentacceptance.component';
import { Routes, RouterModule } from '@angular/router';
import { ViewethanlindentacceptanceComponent } from './viewethanlindentacceptance/viewethanlindentacceptance.component';

const routes: Routes = [
  { path: 'list', component: EthanalindentacceptanceComponent},
  { path: 'view', component: ViewethanlindentacceptanceComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class EthanalindentacceptanceRoutingModule { }
