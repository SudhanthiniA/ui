import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AlertService, TankRegistrationService } from '@app/services';
import { PreviewService } from '@appServices/preview.service';
import { apiUrls } from '@appEnv/apiurls';
import { MasterapiService } from '@app/services';
import { WorkflowcofigService } from '@app/services/ware-house/workflowcofig.service';
@Component({
  selector: 'app-viewtankregistration',
  templateUrl: './viewtankregistration.component.html',
  styleUrls: ['./viewtankregistration.component.scss']
})
export class ViewtankregistrationComponent implements OnInit {
  addedit: string;
  isModified: boolean;
  formSubmitted: boolean;
  viewId;
  tankregobj: any = [];
  materialType: any;
  materialname: any;
  workflowobj: any;
  logactive: boolean = false;
  logshow: any;

  constructor(
    private route: ActivatedRoute,
    private datepipe: DatePipe,
    private TankRegistrationService: TankRegistrationService,
    private router: Router, 
    private preview: PreviewService,
    private MasterapiService: MasterapiService,
    private wrokflowconfig: WorkflowcofigService,
    private alert: AlertService
    ) { }
  ngOnInit() {
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

  }
  getAllTankMaterial(id) {

    const data = id;
    this.MasterapiService.get(`${apiUrls.getTankMaterialById}${data}`).then((responceData: any) => {
      console.log('material', responceData);
      this.materialname = responceData.data
    })
  }

  setData(id?: any) {

    if (id) {
      this.TankRegistrationService.getTanRegById(id).subscribe((responceData: any) => {
        this.tankregobj = responceData.data;
        if (this.tankregobj.applicationNo) {
          this.wrokflowconfig.getapprovallogs(this.tankregobj.applicationNo)
            .subscribe((resp: any) => {

              if (resp.length > 0) {
                this.logactive = true;;
                this.logshow = resp
              }
            })
        }
        console.log('preview data', this.tankregobj);
        this.getAllTankMaterial(this.tankregobj.materialId)
        const createdDate = this.datepipe.transform(this.tankregobj.createdDate, 'dd/MM/yyyy hh:mm:ss');
        const modifiedDate = this.datepipe.transform(this.tankregobj.modifiedDate, 'dd/MM/yyyy hh:mm:ss');
        if (createdDate === modifiedDate) {
          this.isModified = false;
        } else {
          this.isModified = true;
        }
        this.tankregobj.createdOn = this.datepipe.transform(this.tankregobj.createdDate, 'yyyy-MM-dd hh:mm:ss');
        this.tankregobj.modifiedOn = this.datepipe.transform(this.tankregobj.modifiedDate, 'yyyy-MM-dd hh:mm:ss');
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

    this.wrokflowconfig.getworkflowbydesignation('SUGAR_MILL','SUGARMILL_TANK_REGISTRATION').subscribe((resp: any) => {
      this.workflowobj = resp.content
    })
  }

  feedback(data, form) {
    this.formSubmitted = false;
    if (form.valid === false) {
      this.formSubmitted = true;
    } else {
      const approveObj = {
        feedback: this.tankregobj.feedbacks,
        remarks: this.tankregobj.remarks,
        status: data,
        tankRegistrationId: this.viewId
      };
      this.TankRegistrationService.approveTanReg(approveObj).subscribe((responseData: any) => {
        if (responseData.status == 's') {
          this.alert.showSuccess(responseData.userDisplayMesg, 'Success');
          this.router.navigate(['/supplychainmanagement/sugarmills/tankregistration/list']);
        } else {
          this.alert.showError(responseData.userDisplayMesg, 'error');
        }
      })
    }
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
}
