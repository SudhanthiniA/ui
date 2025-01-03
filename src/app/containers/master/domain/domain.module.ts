import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomainRoutingModule } from './domain-routing.module';
import { DomainComponent } from './domain.component';
import { AddeditdomainComponent } from './addeditdomain/addeditdomain.component';
import { ViewdomainComponent } from './viewdomain/viewdomain.component';
import { SharedModule } from '@appThemeShared/shared.module';

@NgModule({
  declarations: [DomainComponent, AddeditdomainComponent, ViewdomainComponent],
  imports: [
    CommonModule,
    SharedModule,
    DomainRoutingModule
  ]
})
export class DomainModule { }
