import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BottlingproplannewComponent } from './bottlingproplannew.component';
import { AddbottlingproplannewComponent } from './addbottlingproplannew/addbottlingproplannew.component';
import { ViewbottlingproplannewComponent } from './viewbottlingproplannew/viewbottlingproplannew.component';

const routes: Routes = [{ path:'list', component: BottlingproplannewComponent },
                        { path:'add', component: AddbottlingproplannewComponent},
                        { path:'edit/:Id', component: AddbottlingproplannewComponent},
                        { path:'view/:Id', component: ViewbottlingproplannewComponent},
                        { path:'preview', component: ViewbottlingproplannewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BottlingproplannewRoutingModule { }
