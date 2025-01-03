import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Mf4ReceivedbydistilleryRoutingModule } from './mf4-receivedbydistillery-routing.module';
import { Mf4ReceivedbydistilleryComponent } from './mf4-receivedbydistillery.component';
import { SharedModule } from '@appThemeShared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Mf4RecievedbydistilleryViewComponent } from './mf4-recievedbydistillery-view/mf4-recievedbydistillery-view.component';
import { Mf4RecieddistilleryEditComponent } from './mf4-recieddistillery-edit/mf4-recieddistillery-edit.component';
import { Previewmf4RecivedComponent } from './previewmf4-recived/previewmf4-recived.component';
import { AddComponent } from './add/add.component';
import { AcklistComponent } from './acklist/acklist.component';
import { ApprovalviewComponent } from './approvalview/approvalview.component';


@NgModule({
  declarations: [Mf4ReceivedbydistilleryComponent, Mf4RecievedbydistilleryViewComponent, Mf4RecieddistilleryEditComponent, Previewmf4RecivedComponent, AddComponent, AcklistComponent, ApprovalviewComponent],
  imports: [
    CommonModule,
    SharedModule,
    Mf4ReceivedbydistilleryRoutingModule,
    NgbModule
  ]
})
export class Mf4ReceivedbydistilleryModule { }
