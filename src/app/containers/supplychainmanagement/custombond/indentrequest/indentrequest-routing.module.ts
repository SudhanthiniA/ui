import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewindentrequestComponent } from './viewindentrequest/viewindentrequest.component';
import { IndentrequestComponent } from './indentrequest.component';
import { AddindentrequestComponent } from './addindentrequest/addindentrequest.component';
import { AddindentrequestcancellationComponent } from './addindentrequestcancellation/addindentrequestcancellation.component';

const routes: Routes = [
  { path: 'list', component: IndentrequestComponent},
  {path: 'add', component:AddindentrequestComponent},
  {path: 'addcancle', component:AddindentrequestcancellationComponent},
  {path: 'view', component:ViewindentrequestComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndentrequestRoutingModule { }
