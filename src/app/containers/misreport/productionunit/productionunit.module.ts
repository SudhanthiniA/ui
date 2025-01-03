import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { ProductionunitRoutingModule } from './productionunit-routing.module';
import { CumulativesaledutyComponent } from './cumulativesaleduty/cumulativesaleduty.component';
import { CsdpermitComponent } from './csdpermit/csdpermit.component';
import { DispatchfromcbwComponent } from './dispatchfromcbw/dispatchfromcbw.component';
import { DispatchfrombioComponent } from './dispatchfrombio/dispatchfrombio.component';
import { SalebranddispatchfromunitComponent } from './salebranddispatchfromunit/salebranddispatchfromunit.component';
import { DutytransportpassbrandwiseComponent } from './dutytransportpassbrandwise/dutytransportpassbrandwise.component';
import { DutytransportpasswiseComponent } from './dutytransportpasswise/dutytransportpasswise.component';
import { CbwstockreportComponent } from './cbwstockreport/cbwstockreport.component';
import { DispatchofdistillerybreweryComponent } from './dispatchofdistillerybrewery/dispatchofdistillerybrewery.component';

@NgModule({
  declarations: [CumulativesaledutyComponent, CsdpermitComponent, DispatchfromcbwComponent, DispatchfrombioComponent, SalebranddispatchfromunitComponent, DutytransportpassbrandwiseComponent, DutytransportpasswiseComponent, CbwstockreportComponent, DispatchofdistillerybreweryComponent, ],
    imports: [
    CommonModule,
    SharedModule,
    ProductionunitRoutingModule,
  
  ]
})
export class ProductionunitModule { }