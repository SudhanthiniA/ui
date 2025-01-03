import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'groups',
        loadChildren: () => import('./group/grop.module').then(module => module.GroupModule)
      },
      {
        path: 'shiftworking',
        loadChildren: () => import('./shiftworking/shiftconfiguration.module').then(module => module.ShiftconfigurationModule)
      },
      {
        path: 'assettype',
        loadChildren: () => import('./assettype/assetassign.module').then(module => module.AssetassignModule)
      },
      {
        path: 'assetbrand',
        loadChildren: () => import('./assetbrand/assetbrand.module').then(module => module.AssetsbrandModule)
      },
      {
        path: 'accessoriesname',
        loadChildren: () => import('./accessoriesname/accessoriesname.module').then(module => module.AccessoriesnameModule)
      },
      {
        path: 'devicehardwarename',
        loadChildren: () => import('./devicehardwarename/devicehardwarename.module').then(module => module.DevicehardwaredModule)
      },
      {
        path: 'actualproblems',
        loadChildren: () => import('./actualproblems/actualproblem.module').then(module => module.ActualProblemModule)
      },
      {
        path: 'actiontaken',
        loadChildren: () => import('./actiontaken/actiontaken.module').then(module => module.ActionTakenModule)
      },
      {
        path: 'reported',
        loadChildren: () => import('./problemsreported/problemsreported.module').then(module => module.ProbelmReportedModule)
      },
      {
        path: 'subcategory',
        loadChildren: () => import('./subcategory/subcategory.module').then(module => module.SubCategoryModule)
      },
      {
        path: 'faq',
        loadChildren: () => import('./faq/faq.module').then(module => module.FaqModule)
      },
      {
        path: 'category',
        loadChildren: () => import('./category/category.module').then(module => module.CategoryModule)
      },
      {
        path: 'workflow',
        loadChildren: () => import('./workflow/issuedetails.module').then(module => module.IssuedetailsModule)
      },
      {
        path: 'issuedetails',
        loadChildren: () => import('./issuedetails/issuedetails.module').then(module => module.IssuedetailsModule)
      },
      {
        path: 'assetassign',
        loadChildren: () => import('./assetassign/assetassign.module').then(module => module.AssetassignModule)
      },
      {
        path: 'sla',
        loadChildren: () => import('./sla/sla.module').then(module => module.SlaModule)
      },
      {
        path: 'role',
        loadChildren: () => import('./role/role.module').then(module => module.RoleModule)
      },
      {
        path: 'usersettings',
        loadChildren: () => import('./usersettings/usersettings.module').then(module => module.UsersettingsModule)
      },
      {
        path: 'shiftconfig',
        loadChildren: () => import('./shiftconfig/shiftconfig.module').then(module => module.ShiftconfigModule)
      },
      {
        path: 'typeofuser',
        loadChildren: () => import('./typeofuser/typeofuser.module').then(module => module.TypeofuserModule)
      },
      {
        path: 'knowledgebase',
        loadChildren: () => import('./knowledgebase/knowledgebase.module').then(module => module.KnowledgebaseModule)
      },
      {
        path: 'grievancecategory',
        loadChildren: () => import('./grievancecategory/grievancecategory.module').then(module => module.GrievancecategoryModule)
      },
      {
        path: 'issuefrom',
        loadChildren: () => import('./helpdeskissuefrom/helpdeskissuefrom.module').then(module => module.HelpdeskissuefromModule)
      },
      {
            path: 'ticketstatus',
        loadChildren: () => import('./ticketstatus/ticketstatus.module').then(module => module.TicketstatusModule)
      },
      {
        path: 'priority',
        loadChildren: () => import('./priority/priority.module').then(module => module.PriorityModule)
      },
      {
        path: 'subsolution',
        loadChildren: () => import('./subsolution/subcategory.module').then(module => module.SubCategoryModule)
      },
      {
        path: 'deviceaccessoriesstatus',
        loadChildren: () => import('./deviceaccessoriesstatus/deviceaccessoriesstatus.module').then(module => module.DeviceaccessoriesstatusModule)
      },
      {
        path: 'mapassetsandassetsbrand',
        loadChildren: () => import('./mapassetsandassetsbrand/mapassetsandassetsbrand.module').then(module => module.MapassetsandassetsbrandModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelpDeskMasterPageRoutingModule { }
