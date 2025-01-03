import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonPopupComponent } from '@app/_shared/common-popup/common-popup.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertService, DistileryService, WorkflowcofigService, PreviewService } from '@app/services';

@Component({
  selector: 'app-viewindentforblend',
  templateUrl: './viewindentforblend.component.html',
  styleUrls: ['./viewindentforblend.component.scss']
})
export class ViewindentforblendComponent implements OnInit {
  licenseTypes: any;
  indentforblend: any;
  userId: any;
  entityType: any;
  viewId: any;
  addedit: any;
  logactive: boolean = false;
  logshow: any[] = [];
  workflowdata: any;
  formSubmitted = false;
  curDate = new Date();

  constructor(private router: Router,
    private route: ActivatedRoute,
    private worfFlowService: WorkflowcofigService,
    private distilleryservice: DistileryService,
    private alert: AlertService,
    private modalService: NgbModal,
    private preview: PreviewService) { }

  ngOnInit() {
    this.getLicenseType();
    this.userId = localStorage.getItem('USER_ID');
    this.entityType = localStorage.getItem('EntityType');
    this.route.params.subscribe((params) => {
      if (params.Id) {
        this.viewId = params.Id
        this.setData(this.viewId);
      } else {
        this.setData();
      }
    });
    this.addedit = this.router.url.includes('preview') == true ? 'Preview' : 'View';
  }

  setData(id?) {
    if (id) {
      this.distilleryservice.getIndentBlendById(id).subscribe((responceData: any) => {
        const data = responceData.content;
        this.indentforblend = data;
        this.indentforblend.indentforblendDate = data.indentForBlendDetails.requestDate;
        this.indentforblend.bottlingAppNumber = data.applicationNumber;
        this.indentforblend.consignee = data.indentForBlendDetails.consignee;
        this.indentforblend.licenseType = data.indentForBlendDetails.fromLicenseType;
        this.indentforblend.licenseNumber = data.indentForBlendDetails.fromLicenseNumber;
        this.getlicensedata(this.indentforblend.licenseType);
        this.indentforblend.unitName = data.indentForBlendDetails.toLicenseType;
          this.getTolicensedata(this.indentforblend.unitName);
        this.indentforblend.brandCode = data.indentForBlendDetails.brandCode;
        this.indentforblend.liquorType = data.indentForBlendDetails.liquorTypeCode;
        this.indentforblend.subLiquorType = data.indentForBlendDetails.subLiquorTypeCode;
        this.indentforblend.brandName = data.indentForBlendDetails.brandValue;
        this.indentforblend.liquorTypeName = data.indentForBlendDetails.liquorTypeValue;
        this.indentforblend.subLiquorTypeName = data.indentForBlendDetails.subLiquorTypeValue;
        this.indentforblend.quantityofBlend = data.indentForBlendDetails.quantityOfBlend;
        this.indentforblend.strength = data.indentForBlendDetails.strength;
        if (this.indentforblend.applicationNumber) {
          this.worfFlowService.getapprovallogs(this.indentforblend.applicationNumber)
            .subscribe((resp: any) => {
              if (resp) {
                if (resp.length > 0) {
                  this.logactive = true;
                  this.logshow = resp;
                }
              }
            })
        }
        this.worfFlowService.getworkflowbydesignation('DISTILLERY', 'DISTILLERY_INDENT_FOR_BLEND').subscribe((resp: any) => {
          this.workflowdata = resp.content
        });
      });
    }
    else {
      this.indentforblend = this.preview.setData;
      this.viewId = this.preview.setData.id;
    }
  }

  getLicenseType() {
    this.distilleryservice.getTempLicense().subscribe((resp: any) => {
      this.licenseTypes = resp.content;
    });
  }

  getlicensedata(data) {
    let findedData = this.licenseTypes.find(i => i.LicenseType === data);
    if (typeof findedData === 'undefined') {
      return null;
    }
    this.indentforblend.licenseNumber = findedData.LicenseNumber;
    this.indentforblend.address = findedData.Address;
    return findedData;
  }

  getTolicensedata(data) {
    let findedData = this.licenseTypes.find(i => i.LicenseType === data);
    if (typeof findedData === 'undefined') {
      return null;
    }
    this.indentforblend.toLicenseNumber = findedData.LicenseNumber;
    this.indentforblend.unitAddress = findedData.Address;
    this.indentforblend.district = findedData.District;
    return findedData;
  }

  feedback(data, form) {
    this.formSubmitted = false;
    if (form.valid === false) {
      this.formSubmitted = true;
    } else {
      const approveObj = {
        comments: 'sample',
        event: data,
        id: parseInt(this.viewId),
        level: this.workflowdata ? this.workflowdata.level : 'Level 2',
        applicationNumber: this.indentforblend.applicationNumber,
        isDigitalSignature: this.workflowdata ? this.workflowdata.isDigitalSignature : true,
      };
      const modalRef = this.modalService.open(CommonPopupComponent);
      modalRef.result.then(respData => {
        if (respData) {
          this.distilleryservice.addIndent(approveObj).subscribe((responseData: any) => {
            if (responseData.responseCode == 200) {
              this.alert.showSuccess(responseData.responseMessage, 'Success');
              this.router.navigate(['/supplychainmanagement/distillery/indentforblend/list']);
            } else {
              this.alert.showError(responseData.userDisplayMesg, 'error');
            }
          })
        }
      }).catch(err => {
        console.log('\n err...', err);
      });
    }
  }

}
