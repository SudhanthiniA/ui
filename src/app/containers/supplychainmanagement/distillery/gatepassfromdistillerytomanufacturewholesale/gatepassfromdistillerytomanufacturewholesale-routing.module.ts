import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { AddgatepassfromdistillerytomanufacturewholesaleComponent } from './addgatepassfromdistillerytomanufacturewholesale/addgatepassfromdistillerytomanufacturewholesale.component';
// import { ViewgatepassfromdistillerytomanufacturewholesaleComponent } from './viewgatepassfromdistillerytomanufacturewholesale/viewgatepassfromdistillerytomanufacturewholesale.component';
import { GatepassfromdistillerytomanufacturewholesaleComponent } from './gatepassfromdistillerytomanufacturewholesale.component';

const routes: Routes = [
  { path: 'list', component: GatepassfromdistillerytomanufacturewholesaleComponent},
  // {path: 'add', component: AddgatepassfromdistillerytomanufacturewholesaleComponent},
  // {path: 'view', component: ViewgatepassfromdistillerytomanufacturewholesaleComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GatepassfromdistillerytomanufacturewholesaleRoutingModule { }
