import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddsubliquortypeComponent } from './addsubliquortype/addsubliquortype.component';
import { SubLiquortypeComponent } from './sub-liquortype.component';
import { ViewsubliquortypeComponent } from './viewsubliquortype/viewsubliquortype.component';

const routes: Routes = [
  { path: 'list', component: SubLiquortypeComponent },
  { path: 'add', component: AddsubliquortypeComponent },
  { path: 'edit/:id', component: AddsubliquortypeComponent },
  { path: 'view/:id', component: ViewsubliquortypeComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubLiquortypeRoutingModule { }
