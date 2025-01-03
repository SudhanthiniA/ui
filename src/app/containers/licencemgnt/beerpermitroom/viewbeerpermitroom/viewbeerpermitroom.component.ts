import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { LicenseConfigService, AlertService } from '@app/services';

@Component({
  selector: 'app-viewbeerpermitroom',
  templateUrl: './viewbeerpermitroom.component.html',
  styleUrls: ['./viewbeerpermitroom.component.scss']
})
export class ViewbeerpermitroomComponent implements OnInit {

  list: any;
  entityCode: string;
  licenseTypeCode: string;
  indentAcceptList: [];
  indentRequestList: [];

  constructor(
    private service: LicenseConfigService,
    private alert: AlertService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params);
      if (params.entityCode) {
        this.entityCode = params.entityCode;
        this.licenseTypeCode = params.licenseTypeCode;
        this.getLicenseConfig();
      }
    });
  }

  getLicenseConfig() {
    this.service.findApplicationConfigurationByKey(this.entityCode, this.licenseTypeCode)
      .subscribe((resp: any) => {
        console.log(resp);
        const { errorCode: respCode, userDisplayMesg: respMsg, data: respCont } = resp;
        if (respCode === 200) {
          this.list = respCont;
          this.list.dateTime = formatDate(this.list.dateTime, 'dd-MM-yyyy', 'en');
          if (this.list.licenseMappingEntityList.length) {
            this.indentAcceptList = this.list.licenseMappingEntityList.filter(function (obj) {
              return obj.mappingType !== 'INITIATE';
            });
            this.indentRequestList = this.list.licenseMappingEntityList.filter(function (obj) {
              return obj.mappingType !== 'ACCEPT';
            });
          }

        } else {
          this.alert.showError(respMsg);
        }
      });
  }


  cancel() {
    this.router.navigate(['/licencemgnt/configuration/list']);
  }

}
