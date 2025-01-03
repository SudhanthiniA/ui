import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from '@appThemeLayout/admin/admin.component';
import { PageNotFoundComponent } from './containers/page-not-found/page-not-found.component';
import { AuthGuardService } from '@appServices/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./containers/authentication/authentication.module')
      .then(m => m.AuthenticationModule)
  },
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard/analytics',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        canActivate: [AuthGuardService],
        loadChildren: () => import('./containers/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'location',
        // canActivate: [AuthGuardService],
        loadChildren: () => import('./containers/locationmaster/locationmasters.module')
          .then(m => m.LocationMastersModule)
      },
      {
        path: 'inventory',
        // canActivate: [AuthGuardService],
        loadChildren: () => import('./containers/inventorymaster/inventorymaster.module')
          .then(m => m.InventorymasterModule)
      },
      {
        path: 'master',
        // canActivate: [AuthGuardService],
        loadChildren: () => import('./containers/master/masters.module').then(m => m.MastersModule)
      },
      {
        path: 'usermanagement',
        // canActivate: [AuthGuardService],
        loadChildren: () => import('./containers/usermanagement/usermanagement.module')
          .then(m => m.UsermanagementModule)
      },
      {
        path: 'register',
        // canActivate: [AuthGuardService],
        loadChildren: () => import('./containers/registermanagement/registermanagement.module')
          .then(m => m.RegistermanagementModule)
      },
      {
        path: 'supplychainmanagement',
        // canActivate: [AuthGuardService],
        loadChildren: () => import('./containers/supplychainmanagement/supplychainmanagement.module')
          .then(m => m.SupplychainmanagementModule)
      },
      // {
      //   path: 'alertandcase-management',
      //   canActivate: [AuthGuardService],
      //   loadChildren: () => import('./containers/alertandcase-management/alertandcase-management.module')
      //     .then(m => m.AlertandcaseManagementModule)
      // },
      // {
      //   path: 'payandreconcillation',
      //   canActivate: [AuthGuardService],
      //   loadChildren: () => import('./containers/payandreconcillation/payandreconcillation.module')
      //     .then(m => m.PayandreconcillationModule)
      // },
      // {
      //   path: 'passandpermit',
      //   canActivate: [AuthGuardService],
      //   loadChildren: () => import('./containers/passandpermit/passandpermit.module')
      //     .then(m => m.PassandpermitModule)
      // },
      {
        path: 'exiselabel',
        // canActivate: [AuthGuardService],
        loadChildren: () => import('./containers/exiselabels/exiselabels.module')
          .then(m => m.ExiselabelsModule)
      },
      // {
      //   path: 'qr-generation',
      //   canActivate: [AuthGuardService],
      //   loadChildren: () => import('./containers/qr-generation/qr-generation.module')
      //     .then(m => m.QrGenerationModule)
      // },
      {
        path: 'indentmanagement',
        // canActivate: [AuthGuardService],
        loadChildren: () => import('./containers/indentmanagement/indentmanagement.module')
          .then(m => m.LiquorIndentmanagementModule)
      },
      // {
      //   path: 'controlregulation',
      //   canActivate: [AuthGuardService],
      //   loadChildren: () => import('./containers/controlregulation/controlregulation.module')
      //     .then(m => m.ControlregulationModule)
      // },
      // {
      //   path: 'vigilenceenforcement',
      //   canActivate: [AuthGuardService],
      //   loadChildren: () => import('./containers/vigilenceenforcement/vigilenceenforcement.module')
      //     .then(m => m.VigilenceenforcementModule)
      // },
      // {
      //   path: 'grievance',
      //   canActivate: [AuthGuardService],
      //   loadChildren: () => import('./containers/grievance/grievance.module').then(m => m.GrievanceModule)
      // },
      {
        path: 'report',
        // canActivate: [AuthGuardService],
        loadChildren: () => import('./containers/report/report.module').then(m => m.ReportModule)
      },
      {
        path: 'misreport',
        // canActivate: [AuthGuardService],
        loadChildren: () => import('./containers/misreport/misreport.module').then(m => m.MisreportModule)
      },
      {
        path: 'helpdesk',
        // canActivate: [AuthGuardService],
        loadChildren: () => import('./containers/helpdesk/helpdesk.module').then(m => m.HelpdeskModule)
      },
      {
        path: 'grievancemaster',
        // canActivate: [AuthGuardService],
        loadChildren: () => import('./containers/grievancemaster/grievance.module').then(m => m.GrievanceModule)
      },
      {
        path: 'helpdeskmaster',
        // canActivate: [AuthGuardService],
        loadChildren: () => import('./containers/helpdeskmaster/helpdeskmaster.module').then(m => m.HelpDeskMastersModule)
      },
      {
        path: 'licencemgnt',
        // canActivate: [AuthGuardService],
        loadChildren: () => import('./containers/licencemgnt/licencemgnt.module')
          .then(m => m.LicencemgntModule)
      },
      {
        path: 'licenseupdate',
        // canActivate: [AuthGuardService],
        loadChildren: () => import('./containers/licencemgnt/licencemgnt.module')
          .then(m => m.LicencemgntModule)
      },
      {
        path: 'license',
        // canActivate: [AuthGuardService],
        loadChildren: () => import('./containers/license/license.module').then(m => m.LicenseModule)
      },
      {
        path: 'gpsgeofencing',
        // canActivate: [AuthGuardService],
        loadChildren: () => import('./containers/gpsgeofencing/gpsgeofencing.module')
          .then(m => m.GpsgeofencingModule)
      },
      {
        path: 'masterwarehouse',
        // canActivate: [AuthGuardService],
        loadChildren: () => import('./containers/warehousemaster/warehousemaster.module').then(m => m.WarehousemasterModule)
      },
      {
        path: 'notification',
        // canActivate: [AuthGuardService],
        loadChildren: () => import('./containers/notification/notification.module').then(m => m.NotificationModule)
      },
      {
        path: 'customer',
        // canActivate: [AuthGuardService],
        loadChildren: () => import('./containers/customer/customer.module').then(m => m.CustomerModule)
      },
      {
        path: 'registration',
        // canActivate: [AuthGuardService],
        loadChildren: () => import('./containers/registration/registration.module').then(m => m.RegistrationModule)
      },
      {
        path: 'grievance',
        // canActivate: [AuthGuardService],
        loadChildren: () => import('./containers/grievance/grievance.module').then(m => m.GrievanceModule)
      },
      {
        path: 'digilock',
        // canActivate: [AuthGuardService],
        loadChildren: () => import('./containers/digilock/digilock.module').then(m => m.DigilockModule)
      },
      {
        path: 'cctv',
        // canActivate: [AuthGuardService],
        loadChildren: () => import('./containers/cctv/cctv.module').then(m => m.CctvModule)
      },
      {
        path: 'admin',
        // canActivate: [AuthGuardService],
        loadChildren: () => import('./containers/admin/admin.module').then(m => m.AdminModule)
      },
      {
        path: 'vts',
        // canActivate: [AuthGuardService],
        loadChildren: () => import('./containers/vts/vts.module').then(m => m.VtsModule)
      }
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }

  // Wildcard route for a 404 page

  // {
  //   path: '',
  //   loadChildren: () => import('./demo/pages/authentication/authentication.module').then(m => m.AuthenticationModule)
  //   // component: AuthComponent,
  //   // children: [
  //   //   {
  //   //     path: 'auth',
  //   //     loadChildren: () => import('./demo/pages/authentication/authentication.module').then(module => module.AuthenticationModule)
  //   //   },
  //   //   // {
  //   //   //   path: 'maintenance',
  //   //   //   loadChildren: () => import('./demo/pages/maintenance/maintenance.module').then(module => module.MaintenanceModule)
  //   //   // }
  //   // ]
  // },
  // {
  //   path: 'auth',
  //   loadChildren: () => import('./demo/pages/authentication/authentication.module').then(m => m.AuthenticationModule)
  // },
  // {
  //   path: 'basic',
  //   loadChildren: () => import('./demo/ui-elements/ui-basic/ui-basic.module').then(module => module.UiBasicModule)
  // },
  // {
  //   path: 'forms',
  //   loadChildren: () => import('./demo/pages/form-elements/form-elements.module').then(module => module.FormElementsModule)
  // },
  // {
  //   path: 'tbl-bootstrap',
  //   loadChildren: () => import('./demo/pages/tables/tbl-bootstrap/tbl-bootstrap.module').then(module => module.TblBootstrapModule)
  // },
  // {
  //   path: 'charts',
  //   loadChildren: () => import('./demo/pages/core-chart/core-chart.module').then(module => module.CoreChartModule)
  // },
  // {
  //   path: 'sample-page',
  //   loadChildren: () => import('./demo/pages/sample-page/sample-page.module').then(module => module.SamplePageModule)
  // },

  // {
  //   path: 'layout',
  //   canActivate: [ AuthGuardService ],
  //   loadChildren: () => import('./demo/pages/layout/layout.module').then(m => m.LayoutModule)
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuardService]
})
export class AppRoutingModule { }
