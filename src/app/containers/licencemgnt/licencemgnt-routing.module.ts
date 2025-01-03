import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewLicenseStatusComponent } from './view-license-status/view-license-status.component';
import { OnlinePaymentComponent } from './common/online-payment/online-payment.component';
import { ChallanComponent } from './common/challan/challan.component';
import { AcknowledgementComponent } from './common/acknowledgement/acknowledgement.component';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'viewLicenseStatus',
    component: ViewLicenseStatusComponent,
  },
  {
    path: 'authorizebwfl',
    loadChildren: () => import('./authorize-bwfl/authorize-bwfl.module').then(m => m.AuthorizeBwflModule)
  },
  {
    path: 'payment/:applicationNumber',
    component: OnlinePaymentComponent,
  },
  {
    path: 'challan/:applicationNumber',
    component: ChallanComponent,
  },
  {
    path: 'acknowledgement/:applicationNumber',
    component: AcknowledgementComponent,
  },
  {
    path: 'wholesale',
    loadChildren: () => import('./wholesale/wholesale.module').then(m => m.WholesaleModule)
  },
  {
    path: 'hbr',
    loadChildren: () => import('./hbr-license/hbr-license.module').then(m => m.HBRLicenseModule)
  },
  {
    path: 'eventbarlicense',
    loadChildren: () => import('./eventbar-license/eventbar-license.module').then(m => m.EventbarLicenseModule)
  },
  {
    path: 'bwflparentunit',
    loadChildren: () => import('./bwfl-parent-unit/bwfl-parent-unit.module').then(m => m.BwflParentUnitModule)
  },
  {
    path: 'csdretail',
    loadChildren: () => import('./csdretail/csdretail.module').then(m => m.CsdretailModule)
  },
  {
    path: 'bondwarehouse',
    loadChildren: () => import('./bwfl/bwfl.module').then(m => m.BwflModule)
  },
  {
    path: 'distillery-bottling',
    loadChildren: () => import('./distillery-license/distillery-license.module').then(m => m.DistilleryLicenseModule)
  },
  {
    path: 'distillery-bottling-new',
    loadChildren: () => import('./distillery-license/distillery-license.module').then(m => m.DistilleryLicenseModule)
  },
  {
    path: 'brewery-winery',
    loadChildren: () => import('./brewery-winery/brewery-winery.module').then(m => m.BreweryWineryModule)
  },
  {
    path: 'retailmodel', // retail
    loadChildren: () => import('./retail-license/retail-license.module').then(m => m.RetailLicenseModule)
  },
  {
    path: 'bhang',
    loadChildren: () => import('./bhang/bhang.module').then(m => m.BhangModule)
  },
  {
    path: 'scramental',
    loadChildren: () => import('./scramental/scramental.module').then(m => m.ScramentalModule)
  },
  {
    path: 'csd-retail',
    loadChildren: () => import('./csd-retail/csd-retail.module').then(m => m.CsdRetailModule)
  },
  {
    path: 'sugarmill-license',
    loadChildren: () => import('./sugarmill-license/sugarmill-license.module').then(m => m.SugarmillLicenseModule)
  },
  {
    path: 'masterwarehouse',
    loadChildren: () => import('./masterwarehouse/masterwarehouse.module').then(m => m.MasterwarehouseModule)
  },
  {
    path: 'licenseapproval',
    loadChildren: () => import('./licenseapproval/licenseapproval.module').then(m => m.LicenseapprovalModule)
  },
  {
    path: 'licensepayment',
    loadChildren: () => import('./licensepayment/licensepayment.module').then(m => m.LicensepaymentModule)
  },
  {
    path: 'licenserenewal',
    loadChildren: () => import('./licenserenewal/licenserenewal.module').then(m => m.LicenserenewalModule)
  },
  {
    path: 'licenseacknowledgement',
    loadChildren: () => import('./licenseacknowledgement/licenseacknowledgement.module').then(m => m.LicenseacknowledgementModule)
  },
  {
    path: 'licencecategories',
    loadChildren: () => import('./licencecategories/licencecategories.module').then(m => m.LicencecategoriesModule)
  },
  {
    path: 'licensestatus',
    loadChildren: () => import('./licensestatus/licensestatus.module').then(m => m.LicensestatusModule)
  },
  {
    path: 'configuration',
    loadChildren: () => import('./configuration/configuration.module').then(m => m.ConfigurationModule)
  },
  {
    path: 'master',
    loadChildren: () => import('./master/master.module').then(m => m.MasterModule)
  },
  {
    path: 'narcotic',
    loadChildren: () => import('./narcotic/narcotic.module').then(m => m.NarcoticModule)
  },
  {
    path: 'nira',
    loadChildren: () => import('./nira/nira.module').then(m => m.NiraModule)
  },
  {
    path: 'tariandsendhi',
    loadChildren: () => import('./tariandsendhi/tariandsendhi.module').then(m => m.TariandsendhiModule)
  },
  {
    path: 'industrialalcohol',
    loadChildren: () => import('./industrialalcohol/industrialalcohol.module').then(m => m.IndustrialalcoholModule)
  },
  {
    path: 'flid3',
    loadChildren: () => import('./flid3/flid3.module').then(m => m.Flid3Module)
  },
  {
    path: 'suspension',
    loadChildren: () => import('./suspension/suspension.module').then(m => m.SuspensionModule)
  },
  {
    path: 'bwfparentunitnew',
    loadChildren: () => import('./bwfparentunitnew/bwfparentunitnew.module').then(m => m.BwfparentunitnewModule)
  },
  {
    path: 'registrationofunitsoutsideupforcsdsupply',
    loadChildren: () => import('./registrationofunitsoutsideupforcsdsupply/registrationofunitsoutsideupforcsdsupply.module').then(m => m.RegistrationofunitsoutsideupforcsdsupplyModule)
  },
  {
    path: 'bio1a',
    loadChildren: () => import('./bio1a/bio1a.module').then(m => m.Bio1aModule)
  },
  {
    path: 'beerpermitroom',
    loadChildren: () => import('./beerpermitroom/beerpermitroom.module').then(m => m.BeerpermitroomModule)
  },
  {

    path: 'sacramentalwinepermit',
    loadChildren: () => import('./sacramentalwinepermit/sacramentalwinepermit.module').then(m => m.SacramentalwinepermitModule)
  },
  {
    path: 'sugarmilltender',
    loadChildren: () => import('./sugarmilltender/sugarmilltender.module').then(m => m.SugarmilltenderModule)
  },
  {
    path: 'ndld',
    loadChildren: () => import('./ndld/ndld.module').then(m => m.ndldModule)
  },
  {
    path: 'fl32',
    loadChildren: () => import('./fl32/fl32.module').then(m => m.Fl32Module)
  },
  {
    path: 'nd02permit',
    loadChildren: () => import('./nd02permit/nd02permit.module').then(m => m.Nd02permitModule)
  },
  {
    path: 'ndepermit',
    loadChildren: () => import('./ndepermit/ndepermit.module').then(m => m.NdepermitModule)
  },
  {
    path: 'ma4',
    loadChildren: () => import('./ma-4/ma-4.module').then(m => m.Ma4Module)
  },
  {
    path: 'vintneryretail',
    loadChildren: () => import('./vintneryretail/vintineryretail.module').then(m => m.VintineryretailModule)
  },
  {
    path: 'vintnerytavern',
    loadChildren: () => import('./vintnerytavern/vintinerytavern.module').then(m => m.VintinerytavernModule)
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LicencemgntRoutingModule { }
