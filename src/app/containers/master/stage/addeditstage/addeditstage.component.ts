import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StageMasterService, PatternService, AlertService } from '@app/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '../../../../_shared/common-popup/common-popup.component'

@Component({
  selector: 'app-addeditstage',
  templateUrl: './addeditstage.component.html',
  styleUrls: ['./addeditstage.component.scss']
})
export class AddeditstageComponent implements OnInit {
  stageObj: any = {
    isActive: true
  };
  formSubmitted = false;
  curDate = new Date();
  addedit = 'Add';
  constructor(
    private router: Router,
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private stageService: StageMasterService,
    public patternService: PatternService,
    private alert: AlertService,
  ) { }

  ngOnInit() {
    this.stageObj.isActive = true;
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getStageById(params.id);
        this.stageObj.id = params.id;
        this.addedit = 'Edit';
      }
    });
  }

  removeFirstSpace(e) {
    if (e.which === 32 && e.target.selectionStart === 0) {
      return false;
    }
  }

  addstage(stageForm) {
    this.formSubmitted = true;
    const postParam = {
      code: this.stageObj.code,
      stages: this.stageObj.stages,
      id: this.stageObj.id,
      isActive: this.stageObj.isActive
    };
    if (this.stageObj.id) {
      postParam['modifiedBy'] = sessionStorage.getItem('loggeduser');
      postParam['id'] = this.stageObj.id;
    } else {
      postParam['createdBy'] = sessionStorage.getItem('loggeduser');
    }
    if (stageForm.valid) {
      const modalRef = this.modalService.open(CommonPopupComponent);
      console.log(modalRef.result)
      modalRef.result.then(respData => {
        if (respData) {
          ((this.stageObj.id) ? this.stageService.putStage(postParam) : this.stageService.addStage(postParam))
            .subscribe((respData: any) => {
              if (respData.status == "s") {
                this.alert.showSuccess(respData.userDisplayMesg, 'Success');
                this.router.navigate(['/master/stage/list']);
              } else {
                this.alert.showError(respData.userDisplayMesg, 'error');
              }
            });
        }
      }).catch(err => {
        console.log('\n err...', err);
      });
    }
  }

  getStageById(id) {
    this.stageService.getStageById(id).subscribe((responceData: any) => {
      this.stageObj.isActive = responceData.data.isActive;
      this.stageObj.code = responceData.data.code;
      this.stageObj.stages = responceData.data.stages;
    });
  }
}
