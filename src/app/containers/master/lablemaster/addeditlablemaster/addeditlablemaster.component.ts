import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '@app/services';
import { LabelService } from '@app/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '@app/_shared/common-popup/common-popup.component';



@Component({
  selector: 'app-addeditlablemaster',
  templateUrl: './addeditlablemaster.component.html',
  styleUrls: ['./addeditlablemaster.component.scss']
})
export class AddeditlablemasterComponent implements OnInit {

  addedit: any;
  curDate = new Date();
  name: any;
  lableList: Array<any> = [];
  lableObj: any = {
    code: '',
    name: '',
    isActive: true
  };
  date: any;

  editId: any;
  formSubmitted = false;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private alert: AlertService,
              private modalService: NgbModal,
              private labelService: LabelService) {
  }

  ngOnInit() {
    this.lableObj.isActive = true;
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.getByid(this.editId);
      }
    });
    this.addedit = this.router.url.includes('add') == true ? 'Add' : 'Edit';

  }

  getByid(id) {
    this.labelService.getLabelById(id).subscribe((responceData: any) => {
      console.log(responceData);
      this.lableObj = responceData.data;
    });
  }
  addLable(lableForm) {
    this.formSubmitted = false;
    if (lableForm.valid === false) {
      this.formSubmitted = true;
    } else {
      const postParam = {
        code: this.lableObj.code,
        name: this.lableObj.name,
        id: this.editId,
        isActive: this.lableObj.isActive
      };
      if (this.editId) {
        postParam['id'] = this.editId;
      }
      const modalRef = this.modalService.open(CommonPopupComponent);
      modalRef.result.then(respData => {
      if (respData) {
        ((this.editId) ? this.labelService.updateLable(postParam) : this.labelService.addLable(postParam))
      .subscribe((responceData: any) => {
          if (responceData.status === 's') {
            this.alert.showSuccess(responceData.userDisplayMesg, 'success');
            this.router.navigate(['/master/lablemaster/list']);

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
  navigatelableList() {
    this.router.navigate(['/master/lablemaster/list']);
  }


}
