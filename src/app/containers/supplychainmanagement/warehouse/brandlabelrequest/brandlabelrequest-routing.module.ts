import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { 
    path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  { 
    path: 'renewbrand', loadChildren: () => import('./renewbrand/renewbrand.module').then(m => m.RenewbrandModule)
  },
  { 
    path: 'newbrand', loadChildren: () => import('./newbrand/newbrand.module').then(m => m.NewbrandModule)
  },
  { 
    path: 'addedlabels', loadChildren: () => import('./addedlabels/addedlabels.module').then(m => m.AddedlabelsModule)
  },
  { 
    path: 'uploadlabel', loadChildren: () => import('./uploadlabel/uploadlabel.module').then(m => m.UploadlabelModule)
  },
  { 
    path: 'makepayment', loadChildren: () => import('./makepayment/makepayment.module').then(m => m.MakepaymentModule)
  },
  { 
    path: 'applicationstatus', loadChildren: () => import('./applicationstatus/applicationstatus.module').then(m => m.ApplicationstatusModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrandlabelrequestRoutingModule { }
