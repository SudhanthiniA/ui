import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndentmetallurgyandfoundryindustriesComponent } from './indentmetallurgyandfoundryindustries.component';
import { ViewindentmetallurgyandfoundryindustriesComponent } from './viewindentmetallurgyandfoundryindustries/viewindentmetallurgyandfoundryindustries.component';


const routes: Routes = [
  { path: 'list', component: IndentmetallurgyandfoundryindustriesComponent },
  { path: 'view', component: ViewindentmetallurgyandfoundryindustriesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndentmetallurgyandfoundryindustriesRoutingModule { }
