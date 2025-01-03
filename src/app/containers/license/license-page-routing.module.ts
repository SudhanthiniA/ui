import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
  
        path: 'common1',
        loadChildren: () => import('./common1/common1.module').then(m => m.Common1Module)
      },
      {
  
        path: 'ds1',
        loadChildren: () => import('./ds1/ds1.module').then(m => m.Ds1Module)
      },
   {
  
    path: 'fl9',
    loadChildren: () => import('./fl9/fl9.module').then(m => m.FL9Module)
  },
  {
  
    path: 'bhang',
    loadChildren: () => import('./bhang/bhang.module').then(m => m.BhangModule)
  },
  {
  
    path: 'fl32',
    loadChildren: () => import('./fl32/fl32.module').then(m => m.Fl32Module)
  },
  {
  
    path: 'importunit',
    loadChildren: () => import('./importunit/importunit.module').then(m => m.ImportunitModule)
  },
  {
  
    path: 'bio1',
    loadChildren: () => import('./bio1/bio1.module').then(m => m.Bio1Module)
  },
  {
  
    path: 'bio0',
    loadChildren: () => import('./bio0/bio1.module').then(m => m.Bio1Module)
  },
  {
    path: 'fl1a',
    loadChildren: () => import('./fl1a/fl1a.module').then(m => m.Fl1aModule)
  },
  {
  
    path: 'mb2',
    loadChildren: () => import('./mb2/mb2.module').then(m => m.Mb2Module)
  },
  {
  
    path: 'mb5',
    loadChildren: () => import('./mb5/mb2.module').then(m => m.Mb2Module)
  },
  {
    path: 'fl1',
    loadChildren: () => import('./fl1/fl1.module').then(m => m.FL1Module)
  },
  {
    path: 'masterwarehouse',
    loadChildren: () => import('./masterwarehouse/masterwarehouse.module').then(m => m.MasterwarehouseModule)
  },
  {
    path: 'custombond1',
    loadChildren: () => import('./custombond/custombond.module').then(m => m.CustombondModule)
  },
{
    path: 'fl9a',
    loadChildren: () => import('./fl9a/fl9.module').then(m => m.FL9Module)
},
 {
    path: 'fl49',
    loadChildren: () => import('./fl49/fl49.module').then(m => m.Fl49Module)
  },
  {
  
    path: 'fl39',
    loadChildren: () => import('./fl39/fl39.module').then(m => m.Fl39Module)
  },
  {
  
    path: 'fl40',
    loadChildren: () => import('./fl40/fl40.module').then(m => m.Fl40Module)
  },
  {
  
    path: 'fl41',
    loadChildren: () => import('./fl41/fl41.module').then(m => m.Fl41Module)
  },
  {
    path: 'fl16',
    loadChildren: () => import('./fl16/fl16.module').then(m => m.Fl16Module)
  },
  {
    path: 'fl17',
    loadChildren: () => import('./fl17/fl17.module').then(m => m.Fl17Module)
  },
  {
    path: 'welcome', component: WelcomeComponent
  },
  {
    path: 'profile',
    loadChildren: () => import('./profilelicensee/profilelicensee.module').then(m => m.ProfilelicenseeModule)
  },
  {
    path: 'vintinery',
    loadChildren: () => import('./vintinery/vintinery.module').then(m => m.VintineryModule)
  },
  {
    path: 'wholesale',
    loadChildren: () => import('./wholesale/wholesale.module').then(m => m.WholesaleModule)
  },
  {
    path: 'retail',
    loadChildren: () => import('./retail/retail.module').then(m => m.RetailModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'hbr',
    loadChildren: () => import('./HBR/hbr.module').then(m => m.HbrModule)
  },
  {
    path: 'fl50',
    loadChildren: () => import('./fl50/fl50.module').then(m => m.Fl50Module)
  },
  {
    path: 'fl51',
    loadChildren: () => import('./fl51/fl51.module').then(m => m.Fl51Module)
  },
  {
    path: 'homebarlicense',
    loadChildren: () => import('./homebarlicense/homebarlicense.module').then(m => m.HomebarlicenseModule)
  },
  {
    path: 'applicantregistration',
    loadChildren: () => import('./applicantregistration/applicantregistration.module').then(m => m.ApplicantregistrationModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class licenseRoutingModule { }
