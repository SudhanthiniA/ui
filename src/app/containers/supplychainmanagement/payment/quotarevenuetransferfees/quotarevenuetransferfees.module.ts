import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { QuotarevenuetransferfeesRoutingModule } from './quotarevenuetransferfees-routing.module';
import { QuotarevenuetransferfeesComponent } from './quotarevenuetransferfees.component';
import { AddquotarevenuetransferfeesComponent } from './addquotarevenuetransferfees/addquotarevenuetransferfees.component';
import { EditquotarevenuetransferfeesComponent } from './editquotarevenuetransferfees/editquotarevenuetransferfees.component';
import { ViewquotarevenuetransferfeesComponent } from './viewquotarevenuetransferfees/viewquotarevenuetransferfees.component';



@NgModule({
  declarations: [QuotarevenuetransferfeesComponent, AddquotarevenuetransferfeesComponent, EditquotarevenuetransferfeesComponent, ViewquotarevenuetransferfeesComponent],
  imports: [
    CommonModule,
    SharedModule,
    QuotarevenuetransferfeesRoutingModule
  ]
})
export class QuotarevenuetransferfeesModule { }
