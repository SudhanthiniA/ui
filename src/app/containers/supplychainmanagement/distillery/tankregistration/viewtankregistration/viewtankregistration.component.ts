import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AlertService, TankregistartionService, WorkflowcofigService, MasterapiService, DocumentUploadService, AuthService } from '@app/services';
import { PreviewService } from '@appServices/preview.service';
import { apiUrls } from '@appEnv/apiurls';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import * as fileSaver from 'file-saver';

@Component({
  selector: 'app-viewtankregistration',
  templateUrl: './viewtankregistration.component.html',
  styleUrls: ['./viewtankregistration.component.scss']
})
export class ViewtankregistrationComponent implements OnInit {

  regviewform: FormGroup;
  addedit: string;
  isModified: boolean;
  formSubmitted: boolean;
  viewId;
  tankregobj: any = [];
  logactive: boolean = false;
  logshow: any[] = []
  workflowdata: any;
  tankapplicationnumber: any;
  requestdate: any;  // need to rvm

  uploadDocList: any[] = [];

  tankregobjt = {
    newtankreg: '',
    requestdate: '',
    tankusage: '',
    tankrawmetireal: '',
    tankname: '',
    metirealofcontration: '',
    tanktype: '',
    tankcovertype: '',
    tankshape: '',
    hight: '',
    Width: '',
    innerdiametor: '',
    tankcapacity: '',
    status: '',
    chart_file: '',
    chart_file_source: '',
    document_file_source: '',
    document_file: '',
    applicationNumber: '',
    newtankcatogry:"",


  };

  constructor(private route: ActivatedRoute,
    private datepipe: DatePipe,
    private TankRegistrationService: TankregistartionService,
    private workflowservice: WorkflowcofigService,
    private router: Router, private preview: PreviewService,
    private MasterapiService: MasterapiService,
    private alert: AlertService, private documentUploadService: DocumentUploadService,
    private authService: AuthService, private formBuilder: FormBuilder
  ) { }
  ngOnInit() {
    // this.getapplicationnumber();
    sessionStorage.setItem('nextId','TR')
    this.buildFormGrp();
    console.log('preview', this.preview.setData)
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.viewId = params.Id;
        this.setData(this.viewId);
      } else {
        this.setData();
      }
    });
    this.addedit = this.router.url.includes('preview') == true ? 'Preview' : 'View';
    // this.requestdate = this.datepipe.transform(this.preview.setData.requestDate, 'dd-MMM-yyyy')

  }

  buildFormGrp() {
    this.regviewform = this.formBuilder.group({
      gaugeChart: ['',Validators.required],
      gaugeChartFiles: [''],
      supprtDocs: ['',Validators.required],
      supportDocsFiles: ['']

    })
  }

  getFormCntr(element) {
    return this.regviewform.get(element);
  }

  downloadDocument(uuid, documentName) {

    if (uuid && documentName) {
      this.documentUploadService.downloadDocument(uuid, documentName).subscribe((resp: any) => {
        // const blob: any = new Blob([resp], { type: 'image/jpeg; charset=utf-8' });
        fileSaver.saveAs(resp, documentName);
      },
        (error: any) => this.alert.showError('Error downloading the file', 'Error'),
        () => console.info('File downloaded successfully')
      );
    } else {
      this.alert.showError('File not available', 'Error');
    }

  }

  setData(id?: any) {
    // let data =`?applicationNumber=${id}&registrationType=${id}`
    if (id) {
      this.TankRegistrationService.getTanRegById(id).subscribe((responceData: any) => {

        if (responceData.content) {
          this.uploadDocList = responceData.content.tankRegistrationDetails.tankDocumentList;
          this.tankregobj.applicationNumber = responceData.content.applicationNumber;
          this.tankregobjt.newtankreg = '';
          // this.tankregobjt.requestdate = responceData.content.tankRegistrationDetails.requestDate ? this.datepipe.transform(responceData.content.tankRegistrationDetails.requestDate.join('-'),'dd-MMM-yyyy') : '';
          this.tankregobjt.tankusage = responceData.content.tankRegistrationDetails.tankUsageGroupDto ? responceData.content.tankRegistrationDetails.tankUsageGroupDto.name : '-';
          this.tankregobjt.tankrawmetireal = responceData.content.tankRegistrationDetails.tankRawMaterialDto ? responceData.content.tankRegistrationDetails.tankRawMaterialDto.name : '-';
          this.tankregobjt.tankname = responceData.content.tankRegistrationDetails.tankName ? responceData.content.tankRegistrationDetails.tankName : '-';
          this.tankregobjt.metirealofcontration = responceData.content.tankRegistrationDetails.tankMaterialDto ? responceData.content.tankRegistrationDetails.tankMaterialDto.name : '-';
          this.tankregobjt.tanktype = responceData.content.tankRegistrationDetails.tankTypeDto ? responceData.content.tankRegistrationDetails.tankTypeDto.name : '-';
          this.tankregobjt.tankcovertype = responceData.content.tankRegistrationDetails.tankCoverTypeDto ? responceData.content.tankRegistrationDetails.tankCoverTypeDto.name : '-';
          this.tankregobjt.tankshape = responceData.content.tankRegistrationDetails.tankShapeDto ? responceData.content.tankRegistrationDetails.tankShapeDto.name : '-';
          this.tankregobjt.hight = responceData.content.tankRegistrationDetails.height ? responceData.content.tankRegistrationDetails.height : '-';
          this.tankregobjt.Width = responceData.content.tankRegistrationDetails.width ? responceData.content.tankRegistrationDetails.width : '-';
          this.tankregobjt.innerdiametor = responceData.content.tankRegistrationDetails.innerDiameter ? responceData.content.tankRegistrationDetails.innerDiameter : '-';
          this.tankregobjt.tankcapacity = responceData.content.tankRegistrationDetails.capacity ? responceData.content.tankRegistrationDetails.capacity : '-';
          this.tankregobjt.status = responceData.content.status ? responceData.content.status : '-';
          this.tankregobjt.newtankcatogry = responceData.content.tankRegistrationDetails.tankUsageGroupDto.tankCatagory? responceData.content.tankRegistrationDetails.tankUsageGroupDto.tankCatagory.name : '-';
          this.tankregobjt.requestdate =  this.datepipe.transform(responceData.content.tankRegistrationDetails.requestDate, 'yyyy-MM-dd');


        }
        this.tankregobj = responceData.content;
        console.log('approvel flag ==>>', this.tankregobj.isShowButtons);

        // const createdDate = this.datepipe.transform(this.tankregobj.createdDate, 'dd/MM/yyyy hh:mm:ss');
        // const modifiedDate = this.datepipe.transform(this.tankregobj.modifiedDate, 'dd/MM/yyyy hh:mm:ss');
        // if (createdDate === modifiedDate) {
        //   this.isModified = false;
        // } else {
        //   this.isModified = true;
        // }
        if (this.tankregobj.applicationNumber) {
          this.workflowservice.getapprovallogs(this.tankregobj.applicationNumber)
            .subscribe((resp: any) => {
              if (resp) {
                if (resp.length > 0) {
                  this.logactive = true;;
                  this.logshow = resp
                  console.log(this.logshow, 'logshow test')
                }

              }

            })
        }

        this.workflowservice.getworkflowbydesignation('DISTILLERY', 'DISTILLERY_TANK_REGISTRATION').subscribe((resp: any) => {
          this.workflowdata = resp.content

        })
        this.tankregobj.createdOn = this.datepipe.transform(this.tankregobj.createdDate, 'yyyy-MM-dd');
        this.tankregobj.modifiedOn = this.datepipe.transform(this.tankregobj.modifiedDate, 'yyyy-MM-dd');
      })
    } else {
      if (this.preview.setData.tankId) {
        console.log('preview data', this.preview.setData)
        const data = `?id=${this.preview.setData.tankId}`;
        this.MasterapiService.get(`${apiUrls.getTankTypeById}${data}`).then((responceData: any) => {
          this.tankregobj.tankName = responceData.data ? responceData.data.name : null;
        }).catch((err: any) => {
          console.log('\n err...', err);
        });
      }
      if (this.preview.setData.gradeId) {
        const data = `?id=${this.preview.setData.gradeId}`;
        this.MasterapiService.get(`${apiUrls.getGradeById}${data}`).then((responceData: any) => {
          this.tankregobj.gradeName = responceData.data ? responceData.data.name : null;
        }).catch((err: any) => {
          console.log('\n err...', err);
        });
      }
      if (this.preview.setData.materialId) {
        console.log('material', this.preview.setData.materialId);
        const data = `${this.preview.setData.materialId}`;
        this.MasterapiService.get(`${apiUrls.getTankMaterialById}${data}`).then((responceData: any) => {
          console.log('material', responceData);

          this.tankregobj.materialName = responceData.data ? responceData.data.name : null;
        }).catch((err: any) => {
          console.log('\n err...', err);
        });
      }
      this.tankregobj = this.preview.setData;
      console.log(this.tankregobj);
    }
  }

  gaugeFilelist = [];
  onFileChange(event, sourceName, form) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];

      this.regviewform.patchValue({
        [sourceName]: file
      });
    }
  }



  // async uploadUnitAddrFiles(applicationNo) {
  //   const files = this.gaugeFilelist;
  //   const form = this.regviewform;

  //   if (files.length === 0) {
  //     return [];
  //   }
  //   console.log('files::', files);

  //   const formData = new FormData();
  //   // tslint:disable-next-line: prefer-for-of
  //   for (let i = 0; i < files.length; i++) {
  //     const fileStr = files[i];
  //     const fileSrc = form.get(fileStr).value;
  //     console.log('fileSrc::', fileSrc);

  //     formData.append('files[' + i + '].name', fileSrc.fileFor);
  //     formData.append('files[' + i + '].file', fileSrc);
  //   }

  //   formData.append('moduleName', 'Distillery');
  //   formData.append('screenName', 'Tank Registration');
  //   formData.append('applicationNumber', applicationNo);

  //   console.log('formData::', formData);

  //   this.authService.fileUploadFlag = true;
  //   const res: any = await this.documentUploadService.uploadDocuments(formData);
  //   this.authService.fileUploadFlag = false;
  //   return res;
  // }


  async getapplicationnumber() {
    if (this.viewId) {
      console.log(this.tankregobj.applicationNumber, 'jfghjkljhgfgh')
      return this.tankregobj['applicationNumber'];
    } else {

      this.TankRegistrationService.getapplicationnumbers('PT').subscribe((res: any) => {
        this.tankapplicationnumber = res.content;
      })
      if (!this.tankapplicationnumber) {
        this.alert.showError('Error while getting application number', 'Error');
        return;
      }
      return this.tankapplicationnumber
    }
  }



  async uploadDocuments(applicationNo, fileArrList) {
    const formData = new FormData();
    let uploadFlag = false;
    for (let i = 0; i < fileArrList.length; i++) {
      if (this.regviewform.get(fileArrList[i].fileSource).value) {
        uploadFlag = true;
        formData.append('files[' + i + '].name', fileArrList[i].name);
        formData.append('files[' + i + '].file', this.regviewform.get(fileArrList[i].fileSource).value);
      }
    }

    formData.append('moduleName', 'distillery');
    formData.append('screenName', 'tankregistration');
    formData.append('applicationNumber', applicationNo);

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
          uuid: item.uuid

        }
      })
      return uploadDoc;
    } else {
      return null;
    }
  }





  async feedback(data, form) {
    
          const applicationnumber = await this.getapplicationnumber()
      //   let applicationNo =  this.tankapplicationnumber ;
      //   console.log('applicationNoRes1::', applicationNo);
      //   applicationNo ? applicationNo : null
      //   console.log('applicationNoRes1::', applicationNo);
      // if (applicationNo.length > 0) {
      //   const applicantDocuments = [
      //     { name: 'Gauge Chart', fileSource: 'chart_file_source' },
      //     { name: 'Supporting Document', fileSource: 'document_file_source' },

      //   ]
      //   const applicantDocumentsUploadedDetails = this.uploadDocuments(applicationNo, applicantDocuments);
      //   console.log('applicantDocumentsUploadedDetails::', applicantDocumentsUploadedDetails);

      const approveObj = {

        // "applicationNumber": this.tankapplicationnumber,
        "applicationNumber":applicationnumber,
        "comments": 'verify',
        "event": data,
        "isDigitalSignature": this.workflowdata.isDigitalSignature,
        "level": this.workflowdata.level,
        "id": parseInt(this.viewId),
        // "applicantDocumentList": applicantDocumentsUploadedDetails       
      };
      this.TankRegistrationService.approveTanReg(approveObj).subscribe((responseData: any) => {
        if (responseData) {
          this.alert.showSuccess(responseData.userDisplayMesg, 'Success');
          this.router.navigate(['/supplychainmanagement/distillery/tankoverview']);
        } else {
          this.alert.showError(responseData.userDisplayMesg, 'error');
        }
      })
    
  }
  getPrint() {
    let url = `transportgeneration/generatePrintViewById?id=403&code=MF4`;
    this.TankRegistrationService.getPrintData(url).subscribe((responceData: any) => {
      const newBlob = new Blob([responceData], { type: 'application/pdf' });
      if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(newBlob);
        return;
      }
      const data = window.URL.createObjectURL(newBlob);
      const link = document.createElement('a');
      link.href = data;
      link.download = 'TankRegistration'
      link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
      return true;
    })
  }


  async uploaddoc() {

    const applicationNo = await this.getapplicationnumber();
    if (applicationNo.length > 0) {
      const applicantDocuments = [
        { name: 'Gauge Chart', fileSource: 'gaugeChartFiles' },
        { name: 'Supporting Document', fileSource: 'supportDocsFiles' },

      ]
      const applicantDocumentsUploadedDetails = await this.uploadDocuments(applicationNo, applicantDocuments);
      const uploadObj = {
        comments: "",
        tankRegistrationDetails: {
          tankDocumentList: applicantDocumentsUploadedDetails,
        },
        applicationNumber: applicationNo,
        id: parseInt(this.viewId),
        event: 'AUDIT_SUBMIT'
      }

      return uploadObj

      // await this.uploaddocs(uploadObj, regviewform);


    }

  }

  async uploaddocs(form) {
    this.formSubmitted = false;
    if (form.valid === false) {
      this.formSubmitted = true;
      this.alert.showError('Please Upload Documents','error')
    } else {
      const payload = await this.uploaddoc()
      await this.TankRegistrationService.approveTanReg(payload).subscribe((responseData: any) => {
        if (responseData) {
          this.alert.showSuccess(responseData.userDisplayMesg, 'Success');
          this.router.navigate(['/supplychainmanagement/distillery/tankoverview']);
        } else {
          this.alert.showError(responseData.userDisplayMesg, 'error');
        }
      })
    }
  }
}
