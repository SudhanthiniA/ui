import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { SalutationRoutingModule } from './salutation-routing.module';
import { SalutationComponent } from './salutation.component';
import { ViewsalutationComponent } from './viewsalutation/viewsalutation.component';



@NgModule({
  declarations: [SalutationComponent, ViewsalutationComponent,],
  imports: [
    CommonModule,
    SharedModule,
    SalutationRoutingModule
  ]
})
export class SalutationModule { }
