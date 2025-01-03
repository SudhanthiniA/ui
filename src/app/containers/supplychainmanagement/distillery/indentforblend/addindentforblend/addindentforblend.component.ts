import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonPopupComponent } from '@app/_shared/common-popup/common-popup.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertService, PreviewService, DistileryService, WorkflowcofigService, PatternService, LiquorTypeService } from '@app/services';
import { SubLiquorTypeService } from '@app/services/masters/subliquortype.service';

@Component({
  selector: 'app-addindentforblend',
  templateUrl: './addindentforblend.component.html',
  styleUrls: ['./addindentforblend.component.scss']
})
export class AddindentforblendComponent implements OnInit {

  curDate = new Date();
  indentforblend: any = {};
  formSubmitted = false;
  addedit: any;
  editId: any;
  applicationNumber: any;
  workflowobj: any;
  licenseTypes: any;
  bottlingPlans: any;
  liquortypeList: any;
  subliquortype: any;
  brandlists: any;
  liqourtypecode: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal,
    private alert: AlertService,
    private datePipe: DatePipe,
    private preview: PreviewService,
    private workflowService: WorkflowcofigService,
    private distService: DistileryService,
    public pattern: PatternService,
    private liquorTypeService: LiquorTypeService,
    private subliquorService: SubLiquorTypeService,
  ) { }

  ngOnInit() {
    this.getliquortype();
    this.getapplicationnumber();
    this.getLicenseType();
    this.getworkflow();
    this.indentforblend.indentforblendDate = this.datePipe.transform(this.curDate, 'yyyy-MM-dd');
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
      } else if (this.preview.setData) {
        this.indentforblend = this.preview.setData
      }
    });
    this.addedit = this.router.url.includes('add') == true ? 'Add' : 'Edit';
  }

  setData(id) { 
    
    this.distService.getIndentBlendById(id).subscribe((responceData: any) => {
      const data = responceData.content;
      this.indentforblend = data;
      this.indentforblend.requestDate = data.indentForBlendDetails.requestDate;
        this.indentforblend.applicationNumber = data.applicationNumber;
        this.indentforblend.consignee = data.indentForBlendDetails.consignee;
        this.indentforblend.licenseType = data.indentForBlendDetails.fromLicenseType;
        this.indentforblend.quantityofBlend = data.indentForBlendDetails.quantityOfBlend;
        this.indentforblend.strength = data.indentForBlendDetails.strength;
        this.indentforblend.fromLicenseNumber = data.indentForBlendDetails.fromLicenseNumber;
        this.getlicensedata(this.indentforblend.licenseType);
        this.indentforblend.unitName = data.indentForBlendDetails.toLicenseType,
        this.getTolicensedata(this.indentforblend.unitName);
        this.indentforblend.liquorType = data.indentForBlendDetails.liquorTypeCode;
        this.indentforblend.subLiquorType = data.indentForBlendDetails.subLiquorTypeCode;
        this.indentforblend.brandCode = data.indentForBlendDetails.brandCode;
        this.getSubLiquorType(data.indentForBlendDetails.liquorTypeCode);
        this.getBrandname(data.indentForBlendDetails.subLiquorTypeCode);
        
    });
  }

  getworkflow(){
    this.workflowService.getworkflowbydesignation('DISTILLERY','DISTILLERY_INDENT_FOR_BLEND').subscribe((resp: any) => {
      this.workflowobj = resp.content
    })
  }

  getapplicationnumber() {
    this.distService.getAppNumber('INDBLEND').subscribe((res: any) => {
      this.applicationNumber = res.content;
    })
  }

  getLicenseType() {
    this.distService.getTempLicense().subscribe((resp: any) => {
      this.licenseTypes = resp.content;
    });
  }

  getlicensedata(data) {
    let findedData = this.licenseTypes.find(i => i.LicenseType === data);
    if (typeof findedData === 'undefined') {
      this.indentforblend.licenseNumber = '';
      this.indentforblend.address = '';
      return null;
    }
    this.indentforblend.licenseNumber = findedData.LicenseNumber;
    this.indentforblend.address = findedData.Address;
    return findedData;
  }

  getTolicensedata(data) {
    let findedData = this.licenseTypes.find(i => i.LicenseType === data);
    if (typeof findedData === 'undefined') {
      this.indentforblend.toLicenseNumber = '';
      this.indentforblend.unitAddress = '';
      this.indentforblend.district = '';
      return null;
    }
    this.indentforblend.toLicenseNumber = findedData.LicenseNumber;
    this.indentforblend.unitAddress = findedData.Address;
    this.indentforblend.district = findedData.District;
    return findedData;
  }

 getliquortype() {
   this.liquorTypeService.getLiquorType().subscribe((responceData: any) => {
       this.liquortypeList = responceData.data;
     });
   }

   getSubLiquorType(data) {
    this.liqourtypecode= data;
    let liqId = this.liquortypeList.find(i => i.code === data).id;
    this.indentforblend.liquorTypeName = this.liquortypeList.find(i => i.code === data).name;

    this.subliquorService.getSubLiquorTypesByLiquorId(liqId).subscribe((resp) => {
      this.subliquortype = resp.data;
    });
   }

   getBrandname(id?) {
    if (id) {
      var subliqourtypecode = this.subliquortype.find(x => x.code === id).code
      this.indentforblend.subLiquorTypeName = this.subliquortype.find(i => i.code === id).name;

    }
    const data = '?licenseNumber=' + this.indentforblend.licenseNumber + '&liquorTypeCode=' + this.liqourtypecode + '&liquorSubTypeCode=' + subliqourtypecode;
    this.getBrandDropdow(data);

  }
  getBrandDropdow(data) {
    this.distService.getBrandDetails(data).subscribe((resp: any) => {
        this.brandlists = resp.content;
      });
  }

  getBrandValue(data) {
    this.indentforblend.brandName = this.brandlists.find(i => i.brandCode === data).brandName;
    this.indentforblend.strength = this.brandlists.find(i => i.brandCode === data).brandStrength;
   }

  // getBottlingPlan(data) {
  //   if ( data.length > 6 ) {
  //   this.distService.getBollingPlan(this.indentforblend.toLicenseNumber, data).subscribe((resp: any) => {
  //     this.bottlingPlans = resp.content;
  //     debugger;
  //     if (typeof this.bottlingPlans === 'undefined') {
  //       this.indentforblend.brandName = '';
  //       this.indentforblend.liquorType = '';
  //       this.indentforblend.subLiquorType = '';
  //       this.indentforblend.productionplanid = '',
  //         this.alert.showWarning('This Production Plan ID is not Valid', 'Warning');
  //     } else {
  //       this.indentforblend.brandName = resp.content.bottlingPlanDetails.brandDetails.brandValue;
  //       this.indentforblend.liquorType = resp.content.bottlingPlanDetails.brandDetails.liquorTypeValue;
  //       this.indentforblend.subLiquorType = resp.content.bottlingPlanDetails.brandDetails.subLiquorTypeValue;
  //       this.indentforblend.productionplanid = resp.content.id;
  //     }
  //   })
  // }
  // }

  save(indentforblendform, status) {
    this.formSubmitted = true;
    const postParam = {
      applicationNumber: this.applicationNumber,
      comments: '',
      event: status,
      isDigitalSignature: this.workflowobj ? this.workflowobj.isDigitalSignature : false,
      level: this.workflowobj ? this.workflowobj.level : 'Level 1',
      indentForBlendDetails: {
        fromLicenseNumber: this.indentforblend.licenseNumber,
        fromLicenseType: this.indentforblend.licenseType,
        quantityOfBlend: this.indentforblend.quantityofBlend,
        requestDate: this.datePipe.transform(this.indentforblend.requestDate, 'dd-MM-yyyy'),
        strength: this.indentforblend.strength,
        toLicenseNumber: this.indentforblend.toLicenseNumber,
        toLicenseType: this.indentforblend.unitName,
        status: status,
        consignee: this.indentforblend.consignee,
        brandCode: this.indentforblend.brandCode,
        brandValue: this.indentforblend.brandName,
        liquorTypeCode: this.indentforblend.liquorType,
        liquorTypeValue: this.indentforblend.liquorTypeName,
        subLiquorTypeCode: this.indentforblend.subLiquorType,
        subLiquorTypeValue: this.indentforblend.subLiquorTypeName,
      },
    }
    if (this.editId) {
      postParam['id'] = parseInt(this.editId);
    }
    else {
      postParam['applicationNumber'] = this.applicationNumber;
    }
    if (indentforblendform.valid) {
      const modalRef = this.modalService.open(CommonPopupComponent);
      modalRef.result.then(respData => {
        if (respData) {
          ((this.editId) ? this.distService.addIndent(postParam) : this.distService.addIndent(postParam))
            .subscribe((responceData: any) => {
              if (responceData.responseCode == 200) {
                this.alert.showSuccess(responceData.responseMessage, 'Success');
                this.router.navigate(['/supplychainmanagement/distillery/indentforblend/list']);
              } else {
                this.alert.showError(responceData.userDisplayMesg, 'error');
              }
            });
        }
      }).catch(err => {
        console.log('\n err...', err);
      });
    }
  }

  navigateList() {
    this.router.navigate(['supplychainmanagement/distillery/indentforblend/list']);
  }

  async navigatePreview(form) {
    if (form.valid === false) {
      this.formSubmitted = true;
      this.alert.showError('Please fill required Fields', 'error');
    } else {
      this.preview.setData = this.indentforblend;
      if(this.editId != ''){
        this.preview.setData.id = this.editId
      }

      this.router.navigate(['/supplychainmanagement/distillery/indentforblend/preview']);
    }
  }

}
