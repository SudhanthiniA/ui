import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DomainComponent} from './domain.component';
import { AddeditdomainComponent } from './addeditdomain/addeditdomain.component';
import { ViewdomainComponent } from './viewdomain/viewdomain.component';


const routes: Routes = [

  { path: 'list', component: DomainComponent },
  { path: 'add', component: AddeditdomainComponent },
  { path: 'edit/:id', component: AddeditdomainComponent },
  { path: 'view', component: ViewdomainComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DomainRoutingModule { }
