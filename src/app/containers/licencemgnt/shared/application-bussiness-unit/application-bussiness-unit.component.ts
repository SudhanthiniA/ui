import { Component, OnInit, Input } from '@angular/core';
import { DocumentUploadService, AlertService } from '@app/services';
import { LicenseConstants } from '@app/containers/licencemgnt/license.constants';
import * as fileSaver from 'file-saver';
import * as _ from 'lodash';

interface BusinessUnitDetails {
  firmTypeCode: string;
  firmCompanyName: string;
  firmCompanyPanNumber: string;
  gstNumber: string;
  
  firmLicenseNumber: string;
  licenseValidityDate: string;
  itrAssesmentYearCode: string;
  itrAssessmentYearDesc: string;
  previusItrUploadReason: string;
  anuualTurnOver: string;
  annualProductionCapacity: string;
  stateSupplyCode: string;
  stateSupplyDesc: string; 
  stateQuantitySupply: string;
  previusItrViewReason: string;

  businessUnitDocumentList: [];
}

interface Address {
  addressIdentifier: string;
  country: string;
  districtCode: string;
  districtDesc: string;
  locality: string;
  localityType: string;
  pinCode: string;
  stateCode: string;
  stateDesc: string;
  street: string;
  tahsilCode: string;
  tahsilDesc: string;
}

@Component({
  selector: 'app-application-bussiness-unit',
  templateUrl: './application-bussiness-unit.component.html',
  styleUrls: ['./application-bussiness-unit.component.scss']
})
export class ApplicationBussinessUnitComponent implements OnInit {

  licenseConsts = LicenseConstants;

  @Input()
  public cardTitle: string;

  @Input()
  public businessUnitDetails: BusinessUnitDetails;

  @Input()
  public appliPremisesAddr: Address;
  
  constructor(
    private docUplSer: DocumentUploadService,
    private alert: AlertService,
  ) { }

  ngOnInit() {
  }

  isFileExists(fileFor) {

    let res = false;
    if (this.businessUnitDetails) {

      const fileArr = this.businessUnitDetails.businessUnitDocumentList;
      res = fileArr.find((resp: any) => resp.name === fileFor);
    }

    return res;
  }

  downloadDocument(fileFor) {

    if (this.businessUnitDetails) {

      const fileArr = this.businessUnitDetails.businessUnitDocumentList;
      const fileObj = fileArr.find((resp: any) => resp.name === fileFor);

      const { uuid, documentName } = fileObj;

      if (uuid && documentName) {
        this.docUplSer.downloadDocument(uuid, documentName).subscribe(
          (resp: any) => fileSaver.saveAs(resp, documentName),
          (error: any) => this.alert.showError('Error downloading the file'),
          () => console.info('File downloaded successfully')
        );
      } else {
        this.alert.showError('File not available');
      }
    } else {
      this.alert.showError('File details not found');
    }
  }

}
