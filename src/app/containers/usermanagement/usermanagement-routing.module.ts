import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'user',
    loadChildren: () => import('./usermanage/usermanage.module').then(m => m.UsermanageModule)
  },
  {
    path: 'role',
    loadChildren: () => import('./rolemanage/rolemanage.module').then(m => m.RolemanageModule)
  },
  {
    path: 'officerprofile',
    loadChildren: () => import('./officerprofile/officeruser.module').then(m => m.OfficeruserModule)
  },
  {
    path: 'departmentuserreport',
    loadChildren: () => import('./departmentuserreport/departmentuserreport.module').then(m => m.DepartmentuserreportModule)
  },
  {
    path: 'entity',
    loadChildren: () => import('./entity/rolemanage.module').then(m => m.RolemanageModule)
  },
  {
    path: 'workflowmanagement',
    loadChildren: () => import('./workflowmanagement/workflowmanagement.module').then(m => m.WorkflowmanagementModule)
  },
  {
    path: 'designation',
    loadChildren: () => import('./designationmanage/designationmanage.module').then(m => m.DesignationmanageModule)
  },
  {
    path: 'citizenuser',
    loadChildren: () => import('./citizenuser/citizenuser.module').then(m => m.CitizenuserModule)
  },
  {
    path: 'officeruser',
    loadChildren: () => import('./officeruser/officeruser.module').then(m => m.OfficeruserModule)
  },
  {
    path: 'entitysubuser',
    loadChildren: () => import('./entitysubuser/entitysubuser.module').then(m => m.EntitysubuserModule)
  },
  {
    path: 'adminuser',
    loadChildren: () => import('./adminuser/adminuser.module').then(m => m.AdminuserModule)
  },
  {
    path: 'helpdeskprofile',
    loadChildren: () => import('./helpdeskprofile/helpdeskprofile.module').then(m => m.HelpdeskprofileModule)
  },
  {
    path: 'adminprofile',
    loadChildren: () => import('./adminprofile/adminprofile.module').then(m => m.AdminprofileModule)
  },
  {
    path: 'departmentuser',
    loadChildren: () => import('./departmentuser/departmentuser.module').then(m => m.DepartmentuserModule)
  },
  {
    path: 'usermanagementdeactivate',
    loadChildren: () => import('./usermanagementdeactivate/usermanagementdeactivate.module').then(m => m.UsermanagementdeactivateModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsermanagementRoutingModule { }
