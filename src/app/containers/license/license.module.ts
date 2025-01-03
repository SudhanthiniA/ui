import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { DatePipe } from '@angular/common';

import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { licenseRoutingModule } from './license-page-routing.module';
import { MasterapiService } from '@app/services';
import { WelcomeComponent } from './welcome/welcome.component';
// import { AddcustombondComponent } from './custombond/addcustombond/addcustombond.component';
// import { ViewcustombondComponent } from './custombond/viewcustombond/viewcustombond.component';
// import { Id3jun22Component } from './wholesale/id3jun22/id3jun22.component';
// import { BhangComponent } from './bhang/bhang.component';
// import { ProfilelicenseeComponent } from './profilelicensee/profilelicensee.component';




export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [WelcomeComponent,   ],
  imports: [
    SharedModule,
    licenseRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [DatePipe],
 
})

export class LicenseModule {

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