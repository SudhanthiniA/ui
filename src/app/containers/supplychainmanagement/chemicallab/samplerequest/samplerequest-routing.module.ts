import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SamplerequestComponent } from './samplerequest.component';
import { AddrequestComponent } from './addrequest/addrequest.component';
import { ViewrequestComponent } from './viewrequest/viewrequest.component';
import { ApprovallistComponent } from './approvallist/approvallist.component';
import { ApprovalviewComponent } from './approvalview/approvalview.component';
import { AcceptancelistComponent } from './acceptancelist/acceptancelist.component';
import { AcceptanceviewComponent } from './acceptanceview/acceptanceview.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {
    path : 'list',
    component : SamplerequestComponent
  },
  {
    path : 'add',
    component : AddrequestComponent
  },
  {
    path : 'view',
    component : ViewrequestComponent
  },
  {
    path: 'alltest',
    loadChildren: () => import('./alltest/alltest.module').then(module => module.AlltestModule)
  },
  {
    path: 'test1',
    loadChildren: () => import('./test1/test1.module').then(module => module.Test1Module)
  },
  {
    path: 'test2',
    loadChildren: () => import('./test2/test2.module').then(module => module.Test2Module)
  },
  {
    path: 'test3',
    loadChildren: () => import('./test3/test3.module').then(module => module.Test3Module)
  },
  {
    path: 'test4',
    loadChildren: () => import('./test4/test4.module').then(module => module.Test4Module)
  },
  {
    path: 'test5',
    loadChildren: () => import('./test5/test5.module').then(module => module.Test5Module)
  },
  {
    path: 'test6',
    loadChildren: () => import('./test6/test6.module').then(module => module.Test6Module)
  },
  {
    path: 'test7',
    loadChildren: () => import('./test7/test7.module').then(module => module.Test7Module)
  },
  {
    path: 'test8',
    loadChildren: () => import('./test8/test8.module').then(module => module.Test8Module)
  },
  {
    path: 'test9',
    loadChildren: () => import('./test9/test9.module').then(module => module.Test9Module)
  },
  {
    path: 'test10',
    loadChildren: () => import('./test10/test10.module').then(module => module.Test10Module)
  },
  {
    path: 'test11',
    loadChildren: () => import('./test11/test11.module').then(module => module.Test11Module)
  },
  {
    path: 'test12',
    loadChildren: () => import('./test12/test12.module').then(module => module.Test12Module)
  },
  {
    path : 'approvallist',
    component : ApprovallistComponent
  },
  {
    path : 'approvalview',
    component : ApprovalviewComponent
  },
  {
    path : 'acceptancelist',
    component : AcceptancelistComponent
  },
  {
    path : 'acceptanceview',
    component : AcceptanceviewComponent
  },
  {
    path : 'payment',
    component : PaymentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SamplerequestRoutingModule { }
