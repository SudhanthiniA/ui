import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { Fl50RoutingModule } from './fl50-routing.module';
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

@NgModule({
  declarations: [
    DealerregistrationComponent,
    AdddealerregistrationComponent,
    ViewdealerregistrationComponent,
    DispatchtodealerComponent,
    AdddispatchtodealerComponent,
    ViewdispatchtodealerComponent,
    FinalgatepassComponent,
    AddfinalgatepassComponent,
    ViewfinalgatepassComponent,
    TransfertoplantComponent,
    AddtransfertoplantComponent,
    ViewtransfertoplantComponent,
    RecevingfromplantComponent,
    AddrecevingfromplantComponent,
    ViewrecevingfromplantComponent,
    TransofspirittobottlingvatComponent,
    AddtransofspirittobottlingvatComponent,
    ViewtransofspirittobottlingvatComponent,  
    BoxingComponent,
    AddboxingComponent,
    ViewboxingComponent,
    DrafttpComponent,
    AdddrafttpComponent,
    ViewdrafttpComponent,
    FinaltpComponent,
    AddfinaltpComponent,
    ViewfinaltpComponent,
    AddboxingComponent,
    ViewboxingComponent,
    BrandlabeloverviewComponent,
    ViewbrandlabeloverviewComponent,
    BottlingproductionplanComponent,
    AddbottlingproductionplanComponent,
    ViewbottlingproductionplanComponent,
    MappedbottlingproductionplanComponent,
    BottlingproductionplanlistComponent,
    DispatchComponent,
    EditdispatchComponent,
    ViewdispatchComponent,
    BlendingproducationapplicationComponent,
    AddblendingproducationapplicationComponent,
    ViewblendingproducationapplicationComponent,
    ApprovalblendingproducationapplicationComponent,
    BlendingprocessComponent,
    AddblendingprocessComponent,
    ViewblendingprocessComponent,
    ApprovalblendingprocessComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    Fl50RoutingModule
  ]
})
export class Fl50Module { }
