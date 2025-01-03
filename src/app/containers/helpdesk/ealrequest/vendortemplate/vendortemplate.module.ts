import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { DatePipe } from '@angular/common';
import { VendortemplateComponent } from './vendortemplate.component';
import { AddvendortemplateComponent } from './addvendortemplate/addvendortemplate.component';
import { ViewvendortemplateComponent } from './viewvendortemplate/viewvendortemplate.component';
import { VendortemplateRoutingModule } from './vendortemplate-routing.module';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    VendortemplateRoutingModule
  ],
  providers: [DatePipe],
  declarations: [VendortemplateComponent,AddvendortemplateComponent,ViewvendortemplateComponent]
})
export class VendortemplateModule { }
