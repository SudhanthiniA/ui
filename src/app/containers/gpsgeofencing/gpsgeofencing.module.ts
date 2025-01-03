import { NgModule } from '@angular/core';
import { LicenseSharedModule } from '@appLicMgnt/license-shared.module';
import { DatePipe } from '@angular/common';

import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { GpsgeofencingRoutingModule } from './gpsgeofencing-routing.module';
import { MasterapiService } from '@app/services';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [ ],
  imports: [
    LicenseSharedModule,
    GpsgeofencingRoutingModule,
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

export class GpsgeofencingModule {

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
 