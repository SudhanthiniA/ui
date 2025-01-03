import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BottlingprodplannewComponent } from './bottlingprodplannew.component';
import { AddbottlingprodplannewComponent } from './addbottlingprodplannew/addbottlingprodplannew.component';
import { ViewbottlingprodplannewComponent } from './viewbottlingprodplannew/viewbottlingprodplannew.component';

const routes: Routes = [{ path:'list', component: BottlingprodplannewComponent },
                        { path:'add', component: AddbottlingprodplannewComponent},
                        { path:'edit/:id', component: AddbottlingprodplannewComponent},
                        { path:'view/:id/:status', component: ViewbottlingprodplannewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BottlingprodplannewRoutingModule { }
