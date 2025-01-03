import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { MstistComponent } from './mstist.component';
import { AddmstistComponent } from './addmstist/addmstist.component';
import { ViewmstistComponent } from './viewmstist/viewmstist.component';
import { VerificationmstistComponent } from './verificationmstist/verificationmstist.component';


const routes: Routes = [{ path:'list', component: MstistComponent },
                        { path:'add', component: AddmstistComponent},
                        { path:'view', component: ViewmstistComponent},
                        { path:'verify', component: VerificationmstistComponent}
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MstistRoutingModule { }
