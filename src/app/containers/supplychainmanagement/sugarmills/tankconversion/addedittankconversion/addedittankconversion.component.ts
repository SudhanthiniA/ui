import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { apiUrls } from '@appEnv/apiurls';
import { TankConversionService, MasterapiService, AlertService, PreviewService } from '@app/services';
import { CommonPopupComponent } from '@app/_shared/common-popup/common-popup.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-addedittankconversion',
  templateUrl: './addedittankconversion.component.html',
  styleUrls: ['./addedittankconversion.component.scss']
})
export class AddedittankconversionComponent implements OnInit {
  addedit: any;
  curDate = new Date();
  name: any;
  tankconverstionList: Array<any> = [];
  tankconverstionObj: any = {
    tankId: '',
    capacity: '',
    balance: '',
    fromGradeId: '',
    toGradeId: '',
    reasonForConvestion: '',
  };
  date: any;
  tankList: any = [];
  editId: any;
  formSubmitted = false;
  gradeList: any = [];
  data: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal,
    private TankConversionService: TankConversionService,
    private alert: AlertService,
    private masterapiService: MasterapiService,
    private preview: PreviewService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
      } else if (this.preview.setData) {
        this.tankconverstionObj = this.preview.setData;
      }
    });
    this.addedit = this.router.url.includes('add') == true ? 'Add' : 'Edit';
    this.masterapiService.get(`${apiUrls.getAllTank}`).then((responceData: any) => {
      this.tankList = responceData.data;
    }).catch((err: any) => {
      console.log('\n err...', err);
    });
    this.masterapiService.get(`${apiUrls.getAllMolassesType}`).then((responceData: any) => {
      this.gradeList = responceData.data;
    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }

  gettankdetails(id) {
    this.TankConversionService.getTanKDetailsById(id).subscribe((responceData: any) => {
      this.tankconverstionObj.capacity = responceData.data.capacity ? responceData.data.capacity : null;
      this.tankconverstionObj.fromGradeId = responceData.data.gradeId ? responceData.data.gradeId : null;
      this.tankconverstionObj.balance = responceData.data.balance ? responceData.data.balance : null;
    })
  }

  setData(id?) {
    if (id) {
      this.TankConversionService.getTanConById(id).subscribe((responceData: any) => {
        this.tankconverstionObj = responceData.data;
      })
    }
  }

  addtankconvertion(categoryForm, method) {
    this.formSubmitted = false;
    if (categoryForm.valid === false) {
      this.formSubmitted = true;
    } else {
      const modalRef = this.modalService.open(CommonPopupComponent);
      modalRef.result.then(respData => {
        if (respData) {
          if (this.editId) {
            const postParam = {
              id: this.editId,
              tankId: this.tankconverstionObj.tankId,
              capacity: this.tankconverstionObj.capacity,
              balance: this.tankconverstionObj.balance,
              fromGradeId: this.tankconverstionObj.fromGradeId,
              toGradeId: this.tankconverstionObj.toGradeId,
              reasonForConvestion: this.tankconverstionObj.reasonForConvestion,
              status: 1,
              method: method,
              modifiedBy: 'Admin',
            };
            this.TankConversionService.updateTanCon(postParam).subscribe((responseData: any) => {
              this.handleResponse(responseData)
            })
          } else {
            const postParam = {
              tankId: this.tankconverstionObj.tankId,
              capacity: this.tankconverstionObj.capacity,
              balance: this.tankconverstionObj.balance,
              fromGradeId: this.tankconverstionObj.fromGradeId,
              toGradeId: this.tankconverstionObj.toGradeId,
              reasonForConvestion: this.tankconverstionObj.reasonForConvestion,
              status: 1,
              method,
              createdBy: 'Admin',
            };
            this.TankConversionService.addTanCon(postParam).subscribe((responseData: any) => {
              this.handleResponse(responseData)
            })
          }
        }
      }).catch(err => {
        console.log('\n err...', err);
      });
    }
  }
  handleResponse(responceData: any) {
    if (responceData.status == 's') {
      this.alert.showSuccess(responceData.userDisplayMesg, 'Success');
      this.router.navigate(['/supplychainmanagement/sugarmills/tankconversion/list']);
    } else {
      this.alert.showError(responceData.userDisplayMesg, 'error');
    }
  }
  navigatetankconverstionList() {
    this.router.navigate(['supplychainmanagement/sugarmills/tankconversion/list']);
  }
  navigatetankconverstionPreview() {
    this.preview.setData = this.tankconverstionObj;
    this.router.navigate(['supplychainmanagement/sugarmills/tankconversion/preview']);
  }
}
