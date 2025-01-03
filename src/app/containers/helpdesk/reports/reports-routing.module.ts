import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { 
    path: 'ticketsearch', 
    loadChildren: () => import('./ticketsearch/ticketsearch.module').then(m => m.TicketsearchModule) 
  },
 
  { 
    path: 'ticketsummary', 
    loadChildren: () => import('./ticketsummary/ticketsummary.module').then(m => m.TicketsummaryModule) 
  },
  { 
    path: 'ivrrequestsummary', 
    loadChildren: () => import('./ivrrequestsummary/ivrrequestsummary.module').then(m => m.IvrrequestsummaryModule) 
  },
  { 
    path: 'queryticketsummary', 
    loadChildren: () => import('./queryticketsummary/queryticketsummary.module').then(m => m.QueryticketsummaryModule) 
  },
  { 
    path: 'emailreport', 
    loadChildren: () => import('./emailreport/emailreport.module').then(m => m.EmailreportModule) 
  },
  { 
    path: 'chatreport', 
    loadChildren: () => import('./chatreport/chatreport.module').then(m => m.ChatreportModule) 
  },
  { 
    path: 'chatreport', 
    loadChildren: () => import('./noanswerorcalldisconnected/noanswerorcalldisconnected.module').then(m => m.NoanswerorcalldisconnectedModule) 
  },
  { 
    path: 'queryreport', 
    loadChildren: () => import('./queryreport/queryreport.module').then(m => m.QueryreportModule) 
  },
  { 
    path: 'ticketsreport', 
    loadChildren: () => import('./ticketsreport/ticketsreport.module').then(m => m.TicketsreportModule) 
  },
  { 
    path: 'noanswerorcalldisconnected', 
    loadChildren: () => import('./noanswerorcalldisconnected/noanswerorcalldisconnected.module').then(m => m.NoanswerorcalldisconnectedModule) 
  },
  { 
    path: 'reportcomplaint', 
    loadChildren: () => import('./reportcomplaint/reportcomplaint.module').then(m => m.ReportcomplaintModule) 
  },
  { 
    path: 'reportincident', 
    loadChildren: () => import('./reportincident/reportincident.module').then(m => m.ReportincidentModule) 
  },
  { 
    path: 'reportnoansorcalldisconnect', 
    loadChildren: () => import('./reportnoansorcalldisconnect/reportnoansorcalldisconnect.module').then(m => m.ReportnoansorcalldisconnectModule) 
  },
  { 
    path: 'reportquery', 
    loadChildren: () => import('./reportquery/reportquery.module').then(m => m.ReportqueryModule) 
  },
  { 
    path: 'reportservicerequest', 
    loadChildren: () => import('./reportservicerequest/reportservicerequest.module').then(m => m.ReportservicerequestModule) 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
