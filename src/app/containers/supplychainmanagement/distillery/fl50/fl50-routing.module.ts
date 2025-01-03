import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DealerregistrationComponent } from './dealerregistration/dealerregistration.component';
import { AdddealerregistrationComponent } from './dealerregistration/adddealerregistration/adddealerregistration.component';
import { ViewdealerregistrationComponent } from './dealerregistration/viewdealerregistration/viewdealerregistration.component';
import { DispatchtodealerComponent } from './dispatchtodealer/dispatchtodealer.component';
import { AdddispatchtodealerComponent } from './dispatchtodealer/adddispatchtodealer/adddispatchtodealer.component';
import { ViewdispatchtodealerComponent } from './dispatchtodealer/viewdispatchtodealer/viewdispatchtodealer.component';
import { FinalgatepassComponent } from './finalgatepass/finalgatepass.component';
import { AddfinalgatepassComponent } from './finalgatepass/addfinalgatepass/addfinalgatepass.component';
import { ViewfinalgatepassComponent } from './finalgatepass/viewfinalgatepass/viewfinalgatepass.component';
import { TransfertoplantComponent } from './transfertoplant/transfertoplant.component';
import { AddtransfertoplantComponent } from './transfertoplant/addtransfertoplant/addtransfertoplant.component';
import { ViewtransfertoplantComponent } from './transfertoplant/viewtransfertoplant/viewtransfertoplant.component';
import { RecevingfromplantComponent } from './recevingfromplant/recevingfromplant.component';
import { AddrecevingfromplantComponent } from './recevingfromplant/addrecevingfromplant/addrecevingfromplant.component';
import { ViewrecevingfromplantComponent } from './recevingfromplant/viewrecevingfromplant/viewrecevingfromplant.component';
import { TransofspirittobottlingvatComponent } from './transofspirittobottlingvat/transofspirittobottlingvat.component';
import { AddtransofspirittobottlingvatComponent } from './transofspirittobottlingvat/addtransofspirittobottlingvat/addtransofspirittobottlingvat.component';
import { ViewtransofspirittobottlingvatComponent } from './transofspirittobottlingvat/viewtransofspirittobottlingvat/viewtransofspirittobottlingvat.component';
import { BoxingComponent } from './boxing/boxing.component';
import { AddboxingComponent } from './boxing/addboxing/addboxing.component';
import { ViewboxingComponent } from './boxing/viewboxing/viewboxing.component';
import { DrafttpComponent } from './drafttp/drafttp.component';
import { AdddrafttpComponent } from './drafttp/adddrafttp/adddrafttp.component';
import { ViewdrafttpComponent } from './drafttp/viewdrafttp/viewdrafttp.component';
import { FinaltpComponent } from './finaltp/finaltp.component';
import { AddfinaltpComponent } from './finaltp/addfinaltp/addfinaltp.component';
import { ViewfinaltpComponent } from './finaltp/viewfinaltp/viewfinaltp.component';
import { DispatchComponent } from './dispatch/dispatch.component';
import { EditdispatchComponent } from './dispatch/editdispatch/editdispatch.component';
import { ViewdispatchComponent } from './dispatch/viewdispatch/viewdispatch.component';

import { BrandlabeloverviewComponent } from './brandlabeloverview/brandlabeloverview.component';
import { ViewbrandlabeloverviewComponent } from './brandlabeloverview/viewbrandlabeloverview/viewbrandlabeloverview.component';

import { BottlingproductionplanComponent } from './bottlingproductionplan/bottlingproductionplan.component';
import { AddbottlingproductionplanComponent } from './bottlingproductionplan/addbottlingproductionplan/addbottlingproductionplan.component';
import { ViewbottlingproductionplanComponent } from './bottlingproductionplan/viewbottlingproductionplan/viewbottlingproductionplan.component';
import { MappedbottlingproductionplanComponent } from './bottlingproductionplan/mappedbottlingproductionplan/mappedbottlingproductionplan.component';
import { BottlingproductionplanlistComponent } from './bottlingproductionplan/bottlingproductionplanlist/bottlingproductionplanlist.component';
import { BlendingproducationapplicationComponent } from './blendingproducationapplication/blendingproducationapplication.component';
import { AddblendingproducationapplicationComponent } from './blendingproducationapplication/addblendingproducationapplication/addblendingproducationapplication.component';
import { ViewblendingproducationapplicationComponent } from './blendingproducationapplication/viewblendingproducationapplication/viewblendingproducationapplication.component';
import { ApprovalblendingproducationapplicationComponent } from './blendingproducationapplication/approvalblendingproducationapplication/approvalblendingproducationapplication.component';
import { BlendingprocessComponent } from './blendingprocess/blendingprocess.component';
import { AddblendingprocessComponent } from './blendingprocess/addblendingprocess/addblendingprocess.component';
import { ViewblendingprocessComponent } from './blendingprocess/viewblendingprocess/viewblendingprocess.component';
import { ApprovalblendingprocessComponent } from './blendingprocess/approvalblendingprocess/approvalblendingprocess.component';

const routes: Routes = [
  {
    path : 'dealerregistration',
    component : DealerregistrationComponent
  },
  {
    path : 'dealerregistration/add',
    component : AdddealerregistrationComponent
  },
  {
    path : 'dealerregistration/view',
    component : ViewdealerregistrationComponent
  },
  {
    path : 'dispatchtodealer',
    component : DispatchtodealerComponent
  },
  {
    path : 'dispatchtodealer/add',
    component : AdddispatchtodealerComponent
  },
  {
    path : 'dispatchtodealer/view',
    component : ViewdispatchtodealerComponent
  },
  {
    path : 'finalgatepass',
    component : FinalgatepassComponent
  },
  {
    path : 'finalgatepass/add',
    component : AddfinalgatepassComponent
  },
  {
    path : 'finalgatepass/view',
    component : ViewfinalgatepassComponent
  },
  {
    path : 'transfertoplant',
    component : TransfertoplantComponent
  },
  {
    path : 'transfertoplant/add',
    component : AddtransfertoplantComponent
  },
  {
    path : 'transfertoplant/view',
    component : ViewtransfertoplantComponent
  },
  {
    path : 'recevingfromplant',
    component : RecevingfromplantComponent
  },
  {
    path : 'recevingfromplant/add',
    component : AddrecevingfromplantComponent
  },
  {
    path : 'recevingfromplant/view',
    component : ViewrecevingfromplantComponent
  },
  {
    path : 'transofspirittobottlingvat',
    component : TransofspirittobottlingvatComponent
  },
  {
    path : 'transofspirittobottlingvat/add',
    component : AddtransofspirittobottlingvatComponent
  },
  {
    path : 'transofspirittobottlingvat/view',
    component : ViewtransofspirittobottlingvatComponent
  },
  {
    path : 'boxing',
    component : BoxingComponent
  },
  {
    path : 'boxing/add',
    component : AddboxingComponent
  },
  {
    path : 'boxing/view',
    component : ViewboxingComponent
  },
  {
    path : 'drafttp',
    component : DrafttpComponent
  },
  {
    path : 'drafttp/add',
    component : AdddrafttpComponent
  },
  {
    path : 'drafttp/view',
    component : ViewdrafttpComponent
  },
  {
    path : 'finaltp',
    component : FinaltpComponent
  },
  {
    path : 'finaltp/add',
    component : AddfinaltpComponent
  },
  {
    path : 'finaltp/view',
    component : ViewfinaltpComponent
  },
  {
    path : 'dispatch',
    component : DispatchComponent
  },
  {
    path : 'dispatch/edit',
    component : EditdispatchComponent
  },
  {
    path : 'dispatch/view',
    component : ViewdispatchComponent
  },
  {
    path : 'brandlabeloverview',
    component : BrandlabeloverviewComponent
  },
  {
    path : 'brandlabeloverview/view',
    component : ViewbrandlabeloverviewComponent
  },
  {
    path : 'bottlingproductionplan',
    component : BottlingproductionplanComponent
  },
  {
    path : 'bottlingproductionplan/add',
    component : AddbottlingproductionplanComponent
  },
  {
    path : 'bottlingproductionplan/view',
    component : ViewbottlingproductionplanComponent
  },
  {
    path : 'bottlingproductionplan/mapped',
    component : MappedbottlingproductionplanComponent
  },
  {
    path : 'bottlingproductionplan/applist',
    component : BottlingproductionplanlistComponent
  },
  {
    path : 'blendingproducationapplication',
    component : BlendingproducationapplicationComponent
  },
  {
    path : 'blendingproducationapplication/add',
    component : AddblendingproducationapplicationComponent
  },
  {
    path : 'blendingproducationapplication/view',
    component : ViewblendingproducationapplicationComponent
  },
  {
    path : 'blendingproducationapplication/approval',
    component : ApprovalblendingproducationapplicationComponent
  },
  {
    path : 'blendingprocess',
    component : BlendingprocessComponent
  },
  {
    path : 'blendingprocess/add',
    component : AddblendingprocessComponent
  },
  {
    path : 'blendingprocess/view',
    component : ViewblendingprocessComponent
  },
  {
    path : 'blendingprocess/approval',
    component : ApprovalblendingprocessComponent
  },
{
  path: 'fl50stockin',
  loadChildren: () => import('./fl50stockin/fl50stockin.module').then(m => m.Fl50stockinModule)
}
]
 
@NgModule({
  imports: 
  [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Fl50RoutingModule { }
