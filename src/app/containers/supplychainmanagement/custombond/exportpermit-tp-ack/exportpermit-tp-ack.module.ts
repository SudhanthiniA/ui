import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { ExportpermitTpAckRoutingModule } from './exportpermit-tp-ack-routing.module';
import { ExportpermitTpAckComponent } from './exportpermit-tp-ack.component';
// import { AddexportpermitComponent } from './addexportpermit/addexportpermit.component';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [ExportpermitTpAckComponent, ViewComponent],
  imports: [
    CommonModule,SharedModule,ExportpermitTpAckRoutingModule
  ]
})
export class ExportpermitTpAckModule { }
