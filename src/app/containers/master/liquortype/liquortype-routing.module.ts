import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LiquortypeComponent } from './liquortype.component';
import { AddeditliquortypeComponent } from './addeditliquortype/addeditliquortype.component';
import { ViewliquortypeComponent } from './viewliquortype/viewliquortype.component';


const routes: Routes = [
  { path: 'list', component: LiquortypeComponent },
  { path: 'add', component: AddeditliquortypeComponent },
  { path: 'edit/:id', component: AddeditliquortypeComponent },
  { path: 'view', component: ViewliquortypeComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LiquortypeRoutingModule { }
