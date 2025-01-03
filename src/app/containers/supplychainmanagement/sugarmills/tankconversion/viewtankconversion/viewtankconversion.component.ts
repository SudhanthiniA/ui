import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { apiUrls } from '@appEnv/apiurls';
import { TankConversionService, AlertService, PreviewService, MasterapiService } from '@app/services';

@Component({
  selector: 'app-viewtankconversion',
  templateUrl: './viewtankconversion.component.html',
  styleUrls: ['./viewtankconversion.component.scss']
})
export class ViewtankconversionComponent implements OnInit {
  addedit: any;
  curDate = new Date();
  name: any;
  tankconverstionList: Array<any> = [];
  tankconverstionObj: any = {
    id: '',
    tankName: '',
    tankId: '',
    capacity: '',
    balance: '',
    fromGrade: '',
    toGrade: '',
    reasonForConvestion: '',
    status: '',
    remarks: '',
    feedback: '',
    modifiedOn: '',
    createdOn: '',
    createdBy: '',
    modifiedBy: ''
  };
  editId: any;
  formSubmitted = false;
  gradeList: any;
  tankList: any;

  constructor(
    private route: ActivatedRoute,
    private masterapiService: MasterapiService,
    private router: Router,
    private TankConversionService: TankConversionService,
    private alert: AlertService,
    private preview: PreviewService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
      } else {
        this.setData();
      }
    });
    this.addedit = this.router.url.includes('preview') == true ? 'Preview' : 'View';
  }

  setData(id?: any) {
    if (id) {
      this.TankConversionService.getTanConById(id).subscribe((responceData: any) => {
        this.tankconverstionObj = responceData.data;
      })
    } else {
      if (this.preview.setData) {
        this.tankconverstionObj = this.preview.setData;
        if (this.preview.setData.tankId) {
          const data = `?id=${this.preview.setData.tankId}`;
          this.masterapiService.get(`${apiUrls.getTankTypeById}${data}`).then((responceData: any) => {
            this.tankconverstionObj.tankName = responceData.data ? responceData.data.name : null;
          }).catch((err: any) => {
            console.log('\n err...', err);
          });
        }
        if (this.preview.setData.fromGradeId) {
          const data = `?id=${this.preview.setData.fromGradeId}`;
          this.masterapiService.get(`${apiUrls.getGradeById}${data}`).then((responceData: any) => {
            this.tankconverstionObj.fromGrade = responceData.data ? responceData.data.name : null;
          }).catch((err: any) => {
            console.log('\n err...', err);
          });
        }
        if (this.preview.setData.toGradeId) {
          const data = `?id=${this.preview.setData.toGradeId}`;
          this.masterapiService.get(`${apiUrls.getGradeById}${data}`).then((responceData: any) => {
            this.tankconverstionObj.toGrade = responceData.data ? responceData.data.name : null;
          }).catch((err: any) => {
            console.log('\n err...', err);
          });
        }
      }
    }
  }

  Approvredform(tankconvertionForm, status) {
    if (tankconvertionForm.valid === false) {
      this.formSubmitted = true;
    } else {
      const postParam = {
        tankConversionId: this.tankconverstionObj.id,
        status,
        remarks: this.tankconverstionObj.remarks,
        feedback: this.tankconverstionObj.feedback
      };
      this.TankConversionService.approveTanCon(postParam).subscribe((responseData: any) => {
        if (responseData.status == 's') {
          this.alert.showSuccess(responseData.userDisplayMesg, 'Success');
          this.router.navigate(['/supplychainmanagement/sugarmills/tankconversion/list']);
        } else {
          this.alert.showError(responseData.userDisplayMesg, 'error');
        }
      })
    }
  }

  getPrint() {
    const url = `transportgeneration/generatePrintViewById?id=403&code=MF4`;
    this.TankConversionService.getPrintData(url).subscribe((responceData: any) => {
      const newBlob = new Blob([responceData], { type: 'application/pdf' });
      if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(newBlob);
        return;
      }
      const data = window.URL.createObjectURL(newBlob);
      const link = document.createElement('a');
      link.href = data;
      link.download = 'TankConversion'
      link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
      return true;
    })
  }

  navigatetankconverstionList() {
    this.router.navigate(['supplychainmanagement/sugarmills/tankconversion/list']);
  }

}