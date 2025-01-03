import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/inappticket.module').then(m => m.InappticketModule)
  },
  {
    path: 'surveyform',
    loadChildren: () => import('./surveyform/surveyform.module').then(m => m.SurveyformModule)
  },
  {
    path: 'feedbackform',
    loadChildren: () => import('./feedbackform/feedbackform.module').then(m => m.FeedbackformModule)
  },
  {
    path: 'drafttemplate',
    loadChildren: () => import('./drafttemplate/exticket.module').then(m => m.ExticketModule)
  },
  {
    path: 'template',
    loadChildren: () => import('./template/exticket.module').then(m => m.ExticketModule)
  },
  {
    path: 'commonsearch',
    loadChildren: () => import('./commonsearch/inappticket.module').then(m => m.InappticketModule)
  },
  {
    path: 'exticket',
    loadChildren: () => import('./exticket/exticket.module').then(m => m.ExticketModule)
  },
  {
    path: 'reportentitywise',
    loadChildren: () => import('./reportentitywise/reportentitywise.module').then(m => m.ReportentitywiseModule)
  },
  {
    path: 'mobilesupportfromphone',
    loadChildren: () => import('./mobilesupportfromphone/exticket.module').then(m => m.ExticketModule)
  },
  {
    path: 'reportticketsummary',
    loadChildren: () => import('./reportticketsummary/reportticketsummary.module').then(m => m.ReportticketsummaryModule)
  },
  {
    path: 'reportemail',
    loadChildren: () => import('./reportemail/reportemail.module').then(m => m.ReportemailModule)
  },
  {
    path: 'inappticket',
    loadChildren: () => import('./inappticket/inappticket.module').then(m => m.InappticketModule)
  },
  {
    path: 'inappchangerequestform',
    loadChildren: () => import('./inappchangerequestform/inappticket.module').then(m => m.InappticketModule)
  },
  {
    path: 'changerequestform',
    loadChildren: () => import('./changerequestform/inappticket.module').then(m => m.InappticketModule)
  },
  {
    path: 'ticket',
    loadChildren: () => import('./ticket/ticket.module').then(m => m.TicketModule)
  },
  {
    path: 'sla',
    loadChildren: () => import('./slaticket/slaticket.module').then(m => m.SlaticketModule)
  },

  {
    path: 'searchfaq',
    loadChildren: () => import('./searchfaq/searchfaq.module').then(m => m.SearchfaqModule)
  },


  {
    path: 'createticket',
    loadChildren: () => import('./createticket/createticket.module').then(m => m.CreateticketModule)
  },

  {
    path: 'reports',
    loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule)
  },
  {
    path: 'emailrequest',
    loadChildren: () => import('./emailrequest/emailrequest.module').then(m => m.EmailrequestModule)
  },
  {
    path: 'smsrequest',
    loadChildren: () => import('./smsrequest/smsrequest.module').then(m => m.SmsrequestModule)
  },
  {
    path: 'knowledgebase',
    loadChildren: () => import('./knowledgebase/knowledgebase.module').then(m => m.KnowledgebaseModule)
  },
  {
    path: 'exesearchticket',
    loadChildren: () => import('./exesearchticket/exesearchticket.module').then(m => m.ExesearchticketModule)
  },
  {
    path: 'nodalofficer',
    loadChildren: () => import('./nodalofficer/nodalofficer.module').then(m => m.NodalofficerModule)
  },
 
  {
    path: 'fieldengineer',
    loadChildren: () => import('./fieldengineer/fieldengineer.module').then(m => m.FieldengineerModule)
  },
  {
    path: 'executiveviewprofile',
    loadChildren: () => import('./executiveviewprofile/executiveviewprofile.module').then(m => m.ExecutiveviewprofileModule)
  },
  {
    path: 'shiftcon',
    loadChildren: () => import('./shiftcon/shiftcon.module').then(m => m.ShiftconModule)
  },
  {
    path: 'escalatelevel',
    loadChildren: () => import('./escalatelevel/escalatelevel.module').then(m => m.EscalatelevelModule)
  },
  {
    path: 'helpdeskexecutive',
    loadChildren: () => import('./helpdeskexecutive/helpdeskexecutive.module').then(m => m.HelpdeskexecutiveModule)
  },
  {
    path: 'helpdeskusermgmt',
    loadChildren: () => import('./helpdeskusermgmt/helpdeskusermgmt.module').then(m => m.HelpdeskusermgmtModule)
  },
  {
    path: 'shiftconfiguration',
    loadChildren: () => import('./shiftconfiguration/shiftconfiguration.module').then(m => m.ShiftconfigurationModule)
  },
  {
    path: 'possasset',
    loadChildren: () => import('./possasset/possasset.module').then(m => m.PossassetModule)
  },
  {
    path: 'posdamage',
    loadChildren: () => import('./posdamage/posdamage.module').then(m => m.PosdamageModule)
  },
  {
    path: 'returnasset',
    loadChildren: () => import('./returnasset/returnasset.module').then(m => m.ReturnassetModule)
  },
  {
    path: 'devicelost',
    loadChildren: () => import('./devicelost/devicelost.module').then(m => m.DevicelostModule)
  },
  {
    path: 'devicereturn',
    loadChildren: () => import('./devicereturn/devicereturn.module').then(m => m.DevicereturnModule)
  },
  {
    path: 'devicedamage',
    loadChildren: () => import('./devicedamage/devicelost.module').then(m => m.DevicelostModule)
  },
  {
    path: 'stockin-eal',
    loadChildren: () => import('./stockin-eal/stockin-eal.module').then(m => m.StockinEalModule)
  },
  {
    path: 'stockoverview',
    loadChildren: () => import('./stockoverview/stockoverview.module').then(m => m.StockoverviewModule)
  },
   {
    path: 'ealrequestmapped',
    loadChildren: () => import('./ealrequestmapped/ealrequestmapped.module').then(m => m.EalrequestmappedModule)
  },
  {
    path: 'ealrequest',
    loadChildren: () => import('./ealrequest/ealrequest.module').then(m => m.EalrequestModule)
  },
  {
    path: 'wastage',
    loadChildren: () => import('./wastage/wastage.module').then(m => m.WastageModule)
  },
  
];
 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelpdeskRoutingModule { }    
