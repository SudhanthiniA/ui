import { NgModule } from '@angular/core';
import { MasterPageRoutingModule } from './masters-page-routing.module';
import { SharedModule } from '@appThemeShared/shared.module';
import { DatePipe } from '@angular/common';

import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader, TranslateService  } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { MasterapiService } from '@app/services';




export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  imports: [
    SharedModule,
    MasterPageRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [DatePipe],
  declarations: [] 
  
})

export class MastersModule {

  constructor(
    private translate: TranslateService,
    private masterApi: MasterapiService
  ) {

    // this.translate.use( this.translate.defaultLang );

    // this.translate.use(sessionStorage.getItem('curLang'));
    // console.log('MastersModule::');
    // console.log('Lang::', this.translate.defaultLang);
    // this.translate.addLangs(['en', 'hi']);
    // this.translate.setDefaultLang( sessionStorage.getItem('curLang') );

    const sessionLang = sessionStorage.getItem('curLang');
    // console.log('sessionLang::', sessionLang );
    this.translate.use( sessionLang );

    this.translate.onLangChange.subscribe((ele) => {
      console.log('master-langchange:', ele);
      this.translate.use(ele.lang);
    });

    this.masterApi.langChange.subscribe( (lang) => {
      console.log('langChange', lang);
      this.translate.use(lang);
    });

    // translate.addLangs(['en', 'hi']);
    // if (sessionStorage.getItem('curLang')) {
    //   console.log('yes curLang =>' + sessionStorage.getItem('curLang'));
    //   translate.setDefaultLang(sessionStorage.getItem('curLang'));
    //   this.translate.use(sessionStorage.getItem('curLang'));
    // } else {
    //   console.log('no curLang');
    //   translate.setDefaultLang('en');
    //   this.translate.use('en');
    // }
  }


}



