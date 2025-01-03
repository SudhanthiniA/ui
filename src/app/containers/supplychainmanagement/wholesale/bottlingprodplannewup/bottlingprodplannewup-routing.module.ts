import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BottlingprodplannewupComponent } from './bottlingprodplannewup.component';
import { AddbottlingprodplannewupComponent } from './addbottlingprodplannewup/addbottlingprodplannewup.component';
import { ViewbottlingprodplannewupComponent } from './viewbottlingprodplannewup/viewbottlingprodplannewup.component';

const routes: Routes = [{ path:'list', component: BottlingprodplannewupComponent },
                        { path:'add', component: AddbottlingprodplannewupComponent},
                        { path:'view', component: ViewbottlingprodplannewupComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BottlingprodplannewupRoutingModule { }
