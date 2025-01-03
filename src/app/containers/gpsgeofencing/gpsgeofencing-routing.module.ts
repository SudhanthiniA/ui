import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { ChallanComponent } from './common/challan/challan.component';


const routes: Routes = [
  {
    path: 'vehicledetailvts',
    loadChildren: () => import('./vehicledetailvts/vehicledetailvts.module').then(m => m.VehicledetailvtsModule)
  },
  {
    path: 'vechicletracking',
    loadChildren: () => import('./vechicletracking/vechicletracking.module').then(m => m.ViolationtrackvehicleModule)
  },
  {
    path: 'gpsregistervehicle',
    loadChildren: () => import('./gpsregistervehicle/gpsregistervehicle.module').then(m => m.GpsregistervehicleModule)
  },
  {
    path: 'violationtrackvehicle',
    loadChildren: () => import('./violationtrackvehicle/Violationtrackvehicle.module').then(m => m.ViolationtrackvehicleModule)
  },
  {
    path: 'misreportvts',
    loadChildren: () => import('./misreportvts/misreportvts.module').then(m => m.MisreportvtsModule)
  },
  {
    path: 'stopvehiclealert',
    loadChildren: () => import('./stopvehiclealert/stopvehiclealert.module').then(m => m.StopvehiclealertModule)
  },
  {
    path: 'dynamicroutingmap',
    loadChildren: () => import('./dynamicroutingmap/dynamicroutingmap.module').then(m => m.DynamicroutingmapModule)
  },
  {
    path: 'transitpassvehicle',
    loadChildren: () => import('./transitpassvehicle/transitpassvehicle.module').then(m => m.TransitpassvehicleModule)
  },
 
  // {
  //   path: 'challan/:applicationNumber',
  //   component: ChallanComponent,
  // },
  // {
  //   path: 'wholesale',
  //   loadChildren: () => import('./wholesale/wholesale.module').then(m => m.WholesaleModule)
  // }


];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GpsgeofencingRoutingModule { }
