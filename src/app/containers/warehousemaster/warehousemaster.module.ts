import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { DatePipe } from '@angular/common';

import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { WarehousemasterRoutingModule } from './warehousemaster-routing.module';
import { MasterapiService } from '@app/services';
import { AdvanceDutyComponent } from './advance-duty/advance-duty.component';


export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  imports: [
    SharedModule,
    WarehousemasterRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [DatePipe],
  declarations: [ ]
})

export class WarehousemasterModule {

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