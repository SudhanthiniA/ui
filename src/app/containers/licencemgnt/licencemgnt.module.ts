import { NgModule } from '@angular/core';
import { LicenseSharedModule } from '@appLicMgnt/license-shared.module';
import { DatePipe } from '@angular/common';

import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { LicencemgntRoutingModule } from './licencemgnt-routing.module';
import { MasterapiService } from '@app/services';
import { ViewLicenseStatusComponent } from './view-license-status/view-license-status.component';
import { OnlinePaymentComponent } from './common/online-payment/online-payment.component';
import { ChallanComponent } from './common/challan/challan.component';
import { AcknowledgementComponent } from './common/acknowledgement/acknowledgement.component';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    ViewLicenseStatusComponent,
    OnlinePaymentComponent,
    ChallanComponent,
    AcknowledgementComponent,
  ],
  imports: [
    LicenseSharedModule,
    LicencemgntRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [DatePipe]
})

export class LicencemgntModule {

  constructor(
    private translate: TranslateService,
    private masterApi: MasterapiService
  ) {
    console.log('MastersModule::');
    console.log('Lang::', this.translate.defaultLang);

    const sessionLang = sessionStorage.getItem('curLang');
    console.log('sessionLang::', sessionLang);
    this.translate.use(sessionLang);

    this.translate.onLangChange.subscribe((ele) => {
      console.log('master-langchange:', ele);
      this.translate.use(ele.lang);
    });

    this.masterApi.langChange.subscribe((lang) => {
      console.log('langChange', lang);
      this.translate.use(lang);
    });
  }
}