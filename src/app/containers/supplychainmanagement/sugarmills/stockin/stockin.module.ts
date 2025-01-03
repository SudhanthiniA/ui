import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { StockinRoutingModule } from './stockin-routing.module';
import { StockinComponent } from './stockin.component';
import { AddeditstockinComponent } from './addeditstockin/addeditstockin.component';
import { ViewstockinComponent } from './viewstockin/viewstockin.component';
import { PreviewstockComponent } from './previewstock/previewstock.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';


@NgModule({
  declarations: [
    StockinComponent, 
    AddeditstockinComponent, 
    ViewstockinComponent, 
    PreviewstockComponent
  ],
  imports: [
    SharedModule,
    StockinRoutingModule,
    NgbModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
  ]
})
export class StockinModule { }
