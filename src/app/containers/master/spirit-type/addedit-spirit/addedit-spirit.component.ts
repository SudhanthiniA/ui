import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AlertService } from '@app/services';
import { SpiritService } from '@app/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '@app/_shared/common-popup/common-popup.component';

@Component({
  selector: 'app-addedit-spirit',
  templateUrl: './addedit-spirit.component.html',
  styleUrls: ['./addedit-spirit.component.scss']
})
export class AddeditSpiritComponent implements OnInit {

  spiritTypeObj: any = {};
  formSubmitted = false;
  curDate = new Date();
  addedit = 'Add';
  id: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private spiritService: SpiritService,
    private datePipe: DatePipe,
    private alert: AlertService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.spiritTypeObj.isActive = true;
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getSpiritTypeById(params.id);
        this.id = params.id;
        this.addedit = 'Edit';
      }
    });
  }
  removeFirstSpace(e) {
    const x = (e.which) ? e.which : e.keyCode;
    if (e.which === 32 && e.target.selectionStart === 0) {
      return false;
    }
  }

  addspiritType(producttypeForm) {
    this.formSubmitted = false;
    if (producttypeForm.valid === false) {
      this.formSubmitted = true;
    } else {
      console.log(this.spiritTypeObj);
      const postParam = {
        code: this.spiritTypeObj.code,
        type: this.spiritTypeObj.type,
        isActive: this.spiritTypeObj.isActive,
      };
      if (this.spiritTypeObj.id) {
        postParam['id'] = this.spiritTypeObj.id;
      }
      const modalRef = this.modalService.open(CommonPopupComponent);
      modalRef.result.then(respData => {
        if (respData) {
          ((this.spiritTypeObj.id) ? this.spiritService.updateSpirit(postParam) : this.spiritService.addSpirit(postParam))
            .subscribe((responceData: any) => {
              if (responceData.status == 's') {
                this.alert.showSuccess(responceData.userDisplayMesg, 'Success');
                this.router.navigate(['/master/spirit-type/list']);
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

  getSpiritTypeById(id) {
    this.spiritService.getSpiritById(id).subscribe((responceData: any) => {
      this.spiritTypeObj = responceData.data;
    });
  }

}
