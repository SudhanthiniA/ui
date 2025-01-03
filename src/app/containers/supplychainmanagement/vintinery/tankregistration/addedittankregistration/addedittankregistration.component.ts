import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { apiUrls } from '@appEnv/apiurls';
import { CommonPopupComponent } from '@app/_shared/common-popup/common-popup.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  AlertService,
  TankRegistrationService,
  MasterapiService,
  PreviewService,
  WorkflowcofigService,
  CommonService,
  AuthService,
  DocumentUploadService,
  DropdownConfigService
} from '@app/services';

@Component({
  selector: 'app-addedittankregistration',
  templateUrl: './addedittankregistration.component.html',
  styleUrls: ['./addedittankregistration.component.scss']
})
export class AddedittankregistrationComponent implements OnInit {
  tankreqObj: any = {
    "createdBy": "",
    "createdDate": "",
    "modifiedBy": "",
    "modifiedDate": '',
    "capacity": '',
    "entityId": '',
    "gradeId": '',
    "height": '',
    "id": '',
    "innerDiameter": '',
    "materialId": '',
    "method": "",
    "outerDiameter": '',
    "requestDate": "",
    "specification": "",
    "status": '1',
    "tankCoverId": '',
    "tankName": "",
    "tankProductTypeId": '',
    "tankShapeId": '',
    "tankTypeId": '',
    "width": '',
    sendback: '',
    comments: '',

  };
  logactive = false
  rejectid: any;
  editId: any;
  tanks: any;
  formSubmitted = false;
  tankList: any;
  tankGradeList: any;
  materialType: any;
  addedit: any;
  tankshapes: any;
  tankCovererlist: any;
  tankProductypelist: any;
  tanksgrdes = false;
  workflowobj: any;
  logshow: any;
  capacityDocs: any;

  constructor(
    private route: ActivatedRoute,
    private masterapiService: MasterapiService,
    private router: Router,
    private datepipe: DatePipe,
    private modalService: NgbModal,
    private tankRegistrationService: TankRegistrationService,
    private alert: AlertService,
    private wrokflowconfig: WorkflowcofigService,
    private preview: PreviewService,
    private commonService: CommonService,
    private documentUploadService: DocumentUploadService,
    private authService: AuthService,
    private dropDownService: DropdownConfigService
  ) { }

  ngOnInit() {
    this.gettank();
    this.workflow();
    this.getAllTankGrades();
    this.getAllTankMaterial();
    this.gettankcoveredlist();
    this.getAllTankproducttypelist()
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
      } else if (this.preview.setData) {
        this.tankreqObj = this.preview.setData;
        if (this.preview.setData.requestDate) {
          this.tankreqObj.requestDate = this.datepipe.transform(this.preview.setData.requestDate, 'yyyy-MM-dd')
        }
      }
    });
  }

  setData(id?) {
    if (id) {
      this.tankRegistrationService.getTanRegById(id).subscribe((responceData: any) => {
        console.log('respbyid', responceData);
        const data = responceData.data;
        this.tankreqObj = responceData.data;
        const getobj = this.tankProductypelist.find((x: any) => { return x.productCode == data.tankProductTypeCode });
        this.tankreqObj.tankProductTypeId = getobj.id;
        this.tankreqObj.requestDate = this.datepipe.transform(data.reqdate, 'yyyy-MM-dd');
        this.tankreqObj[`tankRegistrationDocumentList`] = data.tankRegistrationDocumentList;
        this.tankreqObj.filedata = data.tankRegistrationDocumentList[0].documentName;
        this.tanksgrdesss(this.tankreqObj.tankProductTypeId);
        this.findTankMaterial(data.materialCode);
        this.findTankShape(data.tankShapeCode);
        this.findTankType(data.tankTypeCode);
        this.findTankCover(data.tankCoverCode);
        this.findTankGradeById(data.gradeCode);

        if (this.tankreqObj.applicationNo) {
          this.wrokflowconfig.getapprovallogs(this.tankreqObj.applicationNo)
            .subscribe((resp: any) => {

              if (resp.length > 0) {
                this.logactive = true;;
                this.logshow = resp
              }
            })
        }
      });
    }
  }

  workflow() {
    let iscustomer = localStorage.getItem('IS_CUSTOMER');
    console.log('is customer', iscustomer)
    if (iscustomer === "false") {
      this.wrokflowconfig.getworkflowbydesignation('SUGAR_MILL', 'SUGARMILL_TANK_REGISTRATION').subscribe((resp: any) => {
        this.workflowobj = resp.content;
      });
    }
  }

  gettank() {
    this.dropDownService.getDropdownByKey('TANK_TYPE')
      .subscribe((resp: any) => {
        if (resp.errorCode === 200) {
            this.tanks = resp.data.downDropDownMasterValueList;
        }
      });
  }

  getAllTankGrades() {
    this.masterapiService.get('molassesType/getAllMolassesType').then((responceData: any) => {
      if (responceData.status === 's') {
        this.tankGradeList = responceData.data;
      }
    });
  }

  gettankcoveredlist() {
    this.dropDownService.getDropdownByKey('TANK_COVER_TYPE')
    .subscribe((resp: any) => {
      if (resp.errorCode === 200) {
          this.tankCovererlist = resp.data.downDropDownMasterValueList;
      }
    });
  }

  getAllTankproducttypelist() {
    this.masterapiService.get('productType/getAllProductType').then((responceData: any) => {
      if (responceData.status === 's') {
        this.tankProductypelist = responceData.data;
      }
    });
  }

  getAllTankMaterial() {
    this.dropDownService.getDropdownByKey('TANK_SHAPE')
      .subscribe((resp: any) => {
        if (resp.errorCode === 200) {
            this.tankshapes = resp.data.downDropDownMasterValueList;
        }
      });
      this.dropDownService.getDropdownByKey('TANK_MATERIAL')
      .subscribe((resp: any) => {
        if (resp.errorCode === 200) {
            this.materialType = resp.data.downDropDownMasterValueList;
        }
      });
  }

  // saveregistration(form, method) {
  //   this.formSubmitted = false;
  //   if (form.valid === false) {
  //     this.formSubmitted = true;
  //     this.alert.showError('Please fill required Fields', 'error');
  //   } else {
  //     const modalRef = this.modalService.open(CommonPopupComponent);
  //     modalRef.result.then(respData => {
  //       if (respData) {
  //         const TankRegistrationService = this.tankRegistrationService;
  //         if (this.editId) {
  //           this.tankreqObj[`modifiedBy`] = 'Admin';
  //           this.tankreqObj[`method`] = method;
  //           this.tankreqObj[`status`] = method;
  //           this.tankreqObj[`entityId`] = 1;
  //           this.tankreqObj[`level`] = 'lkl';
  //           this.tankreqObj[`event`] = 'INITIATE';
  //           this.tankreqObj[`sentBackLevels`] = '';
  //           this.tankreqObj[`comments`] = '';
  //           this.tankreqObj.id = +(this.editId);
  //           delete this.tankreqObj.tankTypeResponseDto
  //           delete this.tankreqObj.tankCoverTypeRespDto
  //           delete this.tankreqObj.productTypeResponseDto
  //           delete this.tankreqObj.tankShapeResponseDto
  //           delete this.tankreqObj.molassesTypeResponseDto
  //           delete this.tankreqObj.tankMaterialResponseDto
  //         } else {
  //           this.tankreqObj[`gradeId`] = +(this.tankreqObj.gradeId)
  //           this.tankreqObj[`materialId`] = +(this.tankreqObj.materialId)
  //           this.tankreqObj[`tankShapeId`] = +(this.tankreqObj.tankShapeId)
  //           this.tankreqObj[`createdBy`] = 'Admin';
  //           this.tankreqObj[`method`] = method;
  //           this.tankreqObj[`status`] = method;
  //           this.tankreqObj[`event`] = 'INITIATE';
  //           this.tankreqObj[`tankTypeId`] = +(this.tankreqObj.tankTypeId);
  //           this.tankreqObj[`tankCoverId`] = +(this.tankreqObj.tankCoverId);
  //           this.tankreqObj[`tankProductTypeId`] = +(this.tankreqObj.tankProductTypeId);
  //           this.tankreqObj[`level`] = this.workflowobj.level;
  //           this.tankreqObj[`sentBackLevels`] = (this.workflowobj.sendback) ? this.workflowobj.sendback : '';
  //           this.tankreqObj[`comments`] = 'Comments';
  //           delete this.tankreqObj.tankShapeResponseDto;
  //           delete this.tankreqObj.tankCoverTypeRespDto
  //           delete this.tankreqObj.productTypeResponseDto
  //           delete this.tankreqObj.molassesTypeResponseDto
  //         }
  //         ((this.editId) ? TankRegistrationService.updateTanReg(this.tankreqObj) : TankRegistrationService.addTanReg(this.tankreqObj)).subscribe((responceData: any) => {
  //           this.handleResponse(responceData);

  //         })
  //       }
  //     }).catch(err => {
  //       console.log('\n err...', err);
  //     });
  //   }
  // }

  handleResponse(responceData: any) {
    if (responceData.status == 's') {
      this.alert.showSuccess(responceData.userDisplayMesg, 'Success');
      this.router.navigate(['/supplychainmanagement/sugarmills/tankregistration/list']);
    } else {
      this.alert.showError(responceData.userDisplayMesg, 'error');
    }
  }

  previewregistration(form) {
    console.log('form data', form, this.tankreqObj)
    this.preview.setData = this.tankreqObj;
    this.router.navigate(['supplychainmanagement/sugarmills/tankregistration/preview']);
  }

  inWords(num, data?: any) {
    // console.log(num, this.commonService.convertToWords(num, data))
    return this.commonService.convertToWords(num, data);
  }

  getcal() {
    this.tankreqObj.capacity = this.tankreqObj.height + this.tankreqObj.width + this.tankreqObj.innerDiameter + this.tankreqObj.outerDiameter;
  }

  tanksgrdesss(Id) {
    const getobj = this.tankProductypelist.find((x: any) => { return x.id == Id });
    this.tankreqObj.tankProductTypeName = getobj.name;
    this.tankreqObj.tankProductTypeCode = getobj.productCode;
    
    if (getobj.name == 'Molasses') {
      this.tanksgrdes = true;
    } else {
      this.tanksgrdes = false;
    }
  }

  approveregistration(form, status) {
    this.formSubmitted = false;
    if (form.valid === false) {
      this.formSubmitted = true;
      this.alert.showError('Please fill required Fields', 'error');
    } else {
      const modalRef = this.modalService.open(CommonPopupComponent);
      console.log(modalRef.result);
      modalRef.result.then(async respData => {
        if (respData) {
          const postingdata = form.value;
          let eventt;
          if (status == 'SUBMITTED' || status == 'DRAFT') {
            if ((this.tankreqObj && this.tankreqObj.status) == 'SENDBACK') {
              eventt = 'SENDBACK'
            } else {
              eventt = "INITIATE"
            }
          } else if (status == 'APPROVED') {
            eventt = "APPROVED"
          } else if (status == 'SENDBACK') {
            eventt = "SENDBACK"
          } else {
            eventt = "REJECTED"
          }
          postingdata['id'] = 0;
          postingdata['gradeCode'] = this.tankreqObj.gradeCode,
            postingdata['gradeValue'] = this.tankreqObj.gradeName,
            postingdata['materialCode'] = this.tankreqObj.materialCode,
            postingdata['materialValue'] = this.tankreqObj.materialName,
            postingdata['tankShapeCode'] = this.tankreqObj.tankShapeCode,
            postingdata['tankShapeValue'] = this.tankreqObj.tankShapeCode,
            postingdata['tankCoverCode'] = this.tankreqObj.tankCoverCode,
            postingdata['tankCoverValue'] = this.tankreqObj.tankCoverName,
            postingdata['tankProductTypeCode'] = this.tankreqObj.tankProductTypeCode,
            postingdata['tankProductTypeValue'] = this.tankreqObj.tankProductTypeName,
            postingdata['tankTypeCode'] = this.tankreqObj.tankTypeCode,
            postingdata['tankTypeValue'] = this.tankreqObj.tankTypeName,
            postingdata['createdBy'] = 0
            postingdata['createdDate'] = new Date(),
            postingdata['height'] = this.tankreqObj.height,
            postingdata['innerDiameter'] = this.tankreqObj.innerDiameter,
            postingdata['outerDiameter'] = this.tankreqObj.outerDiameter,
            postingdata['width'] = this.tankreqObj.width,
            postingdata['modifiedBy'] = 0,
            postingdata['modifiedDate'] = new Date(),
            postingdata['reqdate'] = this.tankreqObj.requestDate,
            postingdata['tankName'] = this.tankreqObj.tankName

            postingdata['tankRegistrationDocumentList'] = await this.uploaddoc(),

            postingdata['event'] = eventt,
            postingdata['status'] = status,
            postingdata['level'] = (this.workflowobj && this.workflowobj.level) ? this.workflowobj.level : 'Level 1',
            postingdata['isDigitalSignature'] = true,
            postingdata['sentBackLevels'] = (this.workflowobj && this.workflowobj.sendback) ? this.workflowobj.sendback : ''
          delete postingdata.tankShapeResponseDto;
          delete postingdata.tankCoverTypeRespDto;
          delete postingdata.productTypeResponseDto;
          delete postingdata.molassesTypeResponseDto;
          delete postingdata.tankMaterialResponseDto;
          delete postingdata.tankTypeResponseDto;
          delete postingdata.filedata;
          
          if (this.editId) {
            postingdata['id'] = parseInt(this.editId);
            postingdata['comments'] = '';
            postingdata['applicationNumber'] = this.tankreqObj.applicationNumber;
            this.tankRegistrationService.addTanReg(postingdata).subscribe((resp: any) => {
              this.handleResponse(resp);
            });
          } else {
            console.log(postingdata, '0000----POSTING DATA----0000')
            this.tankRegistrationService.addTanReg(postingdata).subscribe((resp: any) => {
              this.handleResponse(resp);
            });
          }
        }
      }).catch(err => {
        console.log('\n err...', err);
      });
    }
  }

  sendback(form, method) {
    if (this.rejectid) {
      this.approveregistration(form, method)
    } else {
      this.alert.showError('Please Select Level', 'Error');
    }
  }

  onFileChange(event, sourceName, form) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.capacityDocs = {
        [sourceName]: file
      }
      this.tankreqObj.filedata = event.target.files[0].name;
    }
  }

  async uploadDocuments(fileArrList) {
    const formData = new FormData();
    let uploadFlag = false;
    for (let i = 0; i < fileArrList.length; i++) {
      if (this.capacityDocs[fileArrList[i].fileSource]) {
        uploadFlag = true;
        formData.append('files[' + i + '].name', fileArrList[i].name);
        formData.append('files[' + i + '].file', this.capacityDocs[fileArrList[i].fileSource]);
      }
    }

    formData.append('moduleName', 'sugarmills');
    formData.append('screenName', 'tankregistration');
    // formData.append('applicationNumber', applicationNo);

    console.log('formData::', formData);
    if (uploadFlag) {
      this.authService.fileUploadFlag = true;
      const res: any = await this.documentUploadService.uploadDocuments(formData);
      this.authService.fileUploadFlag = false;
      let uploadDoc = res.map(item => {
        return {
          documentName: item.documentName,
          name: item.name,
          status: true,
          uuid: item.uuid,
          createdBy: 0,
          createdDate: new Date(),
          modifiedBy: 0,
          modifiedDate: new Date(),
          tankRegistration: {},
          id: parseInt(this.editId) ? parseInt(this.editId) : 0
        }
      })
      return uploadDoc;
    } else {
      return null;
    }
  }


  async uploaddoc() {
      const applicantDocuments = [
        { name: 'Tank Registration Document', fileSource: 'tankDocument_file_source' }
      ]
      
      const applicantDocumentsUploadedDetails = await this.uploadDocuments(applicantDocuments);
      const uploadObj = applicantDocumentsUploadedDetails

      return uploadObj
      // await this.uploaddocs(uploadObj, regviewform);
  }

  findTankGradeById(code) {
    const gradeObj = this.tankGradeList.find((x: any) => { return x.code == code });
    this.tankreqObj.gradeName = gradeObj.name;
  }
  findTankMaterial(code) {
    const materialObj = this.materialType.find((x: any) => { return x.code == code });
    this.tankreqObj.materialName = materialObj.name;
  }
  findTankShape(code) {
    const ShapeObj = this.tankshapes.find((x: any) => { return x.code == code });
    this.tankreqObj.tankShapeName = ShapeObj.name;
  }
  findTankCover(code) {
    const tankCover = this.tankCovererlist.find((x: any) => { return x.code == code });
    this.tankreqObj.tankCoverName = tankCover.name;
  }
  findTankType(code) {
    const tankType = this.tanks.find((x: any) => { return x.code == code });
    this.tankreqObj.tankTypeName = tankType.name;
  }
}
