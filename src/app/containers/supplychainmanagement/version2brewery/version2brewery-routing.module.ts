import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{
  path: 'tankoverview',
  loadChildren: () => import('./tankoverview/tankoverview.module').then(module => module.TankoverviewModule)
},
{
  path: 'tankdismentle',
  loadChildren: () => import('./tankdismentle/tankdismentle.module').then(module => module.TankdismentleModule)
},
{
  path: 'tankmaintenance',
  loadChildren: () => import('./tankmaintenance/tankmaintenance.module').then(module => module.TankmaintenanceModule)
},
{
  path: 'tankregistration',
  loadChildren: () => import('./tankregistration/tankregistration.module').then(module => module.TankregistrationModule)
},
{
  path: 'tankrepair',
  loadChildren: () => import('./tankrepair/tankrepair.module').then(module => module.TankrepairModule)
},
{
  path: 'tanktransfer',
  loadChildren: () => import('./tanktransfer/tanktransfer.module').then(module => module.TanktransferModule)
},
{
  path: 'tankdismentle',
  loadChildren: () => import('./tankdismentle/tankdismentle.module').then(module => module.TankdismentleModule)
},
{
  path: 'stockactivity',
  loadChildren: () => import('./stockactivity/stockactivity.module').then(module => module.StockactivityModule)
},
{
  path: 'stockavailability',
  loadChildren: () => import('./stockavailability/stockavailability.module').then(module => module.StockavailabilityModule)
},
{
  path: 'intimationbook',
  loadChildren: () => import('./intimationbook/intimationbook.module').then(module => module.IntimationbookModule)
},
{
  path: 'b4-form',
  loadChildren: () => import('./b4-form/b4-form.module').then(module => module.B4FormModule)
},
{
  path: 'applicationfortransfer',
  loadChildren: () => import('./applicationfortransfer/applicationfortransfer.module').then(module => module.ApplicationfortransferModule)
},
{
  path: 'appltransbeerfrmunittobbt',
  loadChildren: () => import('./appltransbeerfrmunittobbt/appltransbeerfrmunittobbt.module').then(module => module.AppltransbeerfrmunittobbtModule)
},
{
  path: 'bottlingplan',
  loadChildren: () => import('./bottlingplan/bottlingplan.module').then(module => module.BottlingplanModule)
},
{
  path: 'dipbook',
  loadChildren: () => import('./dipbook/dipbook.module').then(module => module.DipbookModule)
},
{
  path: 'mstist',
  loadChildren: () => import('./mstist/mstist.module').then(module => module.MstistModule)
},
{
  path: 'tankconversion',
  loadChildren: () => import('./tankconversion/tankconversion.module').then(module => module.TankconversionModule)
},
{
  path: 'brandlabelregbrew',
  loadChildren: () => import('./brandlabelregbrew/brandlabelregbrew.module').then(module => module.BrandlabelregbrewModule)
},
{
  path: 'mstistofspirit',
  loadChildren: () => import('./mstistofspirit/mstistofspirit.module').then(m => m.MstistofspiritModule)
},
{
  path: 'mstistprocess',
  loadChildren: () => import('./mstistprocess/mstistprocess.module').then(m => m.MstistprocessModule)
},
{
  path: 'mstistmolasses',
  loadChildren: () => import('./mstistmolasses/mstistmolasses.module').then(m => m.MstistmolassesModule)
},
{
  path: 'bottlinglineoverview',
  loadChildren: () => import('./bottlinglineoverview/bottlinglineoverview.module').then(m => m.BottlinglineoverviewModule)
},
{
  path: 'bottlinglinerepair',
  loadChildren: () => import('./bottlinglinerepair/bottlinglinerepair.module').then(m => m.BottlinglinerepairModule)
},
{
  path: 'bottlinglinedismantle',
  loadChildren: () => import('./bottlinglinedismantle/bottlinglinedismantle.module').then(m => m.BottlinglinedismantleModule)
},
{
  path: 'bottlinglinemaintenance',
  loadChildren: () => import('./bottlinglinemaintenance/bottlinglinemaintenance.module').then(m => m.BottlinglinemaintenanceModule)
},
{
  path: 'stockinhand',
  loadChildren: () => import('./stockinhand/stockinhand.module').then(m => m.StockinhandModule)
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Version2breweryRoutingModule { }
