import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CumulativesaledutyComponent } from './cumulativesaleduty/cumulativesaleduty.component';
import { CsdpermitComponent } from './csdpermit/csdpermit.component';
import { DispatchfromcbwComponent } from './dispatchfromcbw/dispatchfromcbw.component';
import { DispatchfrombioComponent } from './dispatchfrombio/dispatchfrombio.component';
import { SalebranddispatchfromunitComponent } from './salebranddispatchfromunit/salebranddispatchfromunit.component';
import { DutytransportpassbrandwiseComponent } from './dutytransportpassbrandwise/dutytransportpassbrandwise.component';
import { DutytransportpasswiseComponent } from './dutytransportpasswise/dutytransportpasswise.component';
import { CbwstockreportComponent } from './cbwstockreport/cbwstockreport.component';
import { DispatchofdistillerybreweryComponent } from './dispatchofdistillerybrewery/dispatchofdistillerybrewery.component';
 
const routes: Routes = [
  { path: 'cumulativesaleduty', component: CumulativesaledutyComponent, },
  { path: 'csdpermit', component: CsdpermitComponent, },
  { path: 'dispatchfromcbw', component: DispatchfromcbwComponent, },
  { path: 'dispatchfrombio', component: DispatchfrombioComponent, },
  { path: 'salebranddispatchfromunit', component: SalebranddispatchfromunitComponent, }, 
  { path: 'dutytransportpassbrandwise', component: DutytransportpassbrandwiseComponent, },
  { path: 'dutytransportpasswise', component: DutytransportpasswiseComponent, },
  { path: 'cbwstockreport', component: CbwstockreportComponent, },
  { path: 'dispatchofdistillerybrewery', component: DispatchofdistillerybreweryComponent, },

  {
    path: 'distillerybrewery',
    loadChildren: () => import('./distillerybrewery/distillerybrewery.module').then(m => m.DistillerybreweryModule)
  },
  {
    path: 'reportonplan',
    loadChildren: () => import('./reportonplan/reportonplan.module').then(m => m.ReportonplanModule)
  },
  {
    path: 'districtwisesale',
    loadChildren: () => import('./districtwisesale/districtwisesale.module').then(m => m.DistrictwisesaleModule)
  },
  {
    path: 'specialfee',
    loadChildren: () => import('./specialfee/specialfee.module').then(m => m.SpecialfeeModule)
  },
  {
    path: 'saleincase',
    loadChildren: () => import('./saleincase/saleincase.module').then(m => m.SaleincaseModule)
  },
  {
    path: 'saledistrictwise',
    loadChildren: () => import('./saledistrictwise/saledistrictwise.module').then(m => m.SaledistrictwiseModule)
  },
  {
    path: 'permitreports',
    loadChildren: () => import('./permitreports/permitreports.module').then(m => m.PermitreportsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductionunitRoutingModule { }
