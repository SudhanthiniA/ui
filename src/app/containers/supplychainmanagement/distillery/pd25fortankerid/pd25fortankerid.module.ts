import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Pd25fortankeridRoutingModule } from './pd25fortankerid-routing.module';
import { Pd25fortankeridComponent } from './pd25fortankerid.component';
import { Addpd25fortankeridComponent } from './addpd25fortankerid/addpd25fortankerid.component';
import { Viewpd25fortankeridComponent } from './viewpd25fortankerid/viewpd25fortankerid.component';
import { Pd26tankeracknowledgementComponent } from './pd26tankeracknowledgement/pd26tankeracknowledgement.component';
import { Pd26tankeracknowledgementaecComponent } from './pd26tankeracknowledgementaec/pd26tankeracknowledgementaec.component';


@NgModule({
  declarations: [Pd25fortankeridComponent, Addpd25fortankeridComponent, Viewpd25fortankeridComponent, Pd26tankeracknowledgementComponent, Pd26tankeracknowledgementaecComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgbModule,
    Pd25fortankeridRoutingModule
  ]
})
export class Pd25fortankeridModule { }
