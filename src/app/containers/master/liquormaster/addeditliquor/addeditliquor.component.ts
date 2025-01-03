import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AlertService } from '@app/services';
import { LiquorCategoryService } from '@app/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '@app/_shared/common-popup/common-popup.component';

@Component({
  selector: 'app-addeditliquor',
  templateUrl: './addeditliquor.component.html',
  styleUrls: ['./addeditliquor.component.scss']
})
export class AddeditliquorComponent implements OnInit {

  addedit: any = 'Add';
  curDate = new Date();
  name: any;
  liquorList: Array<any> = [];
  liquorObj: any = {
  code : '',
  name : '',
  isActive : true
  };
  date: any;

  editId: any;
  formSubmitted = false;
  addedithead: any;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private modalService: NgbModal,
              private datepipe: DatePipe,
              private liquorService: LiquorCategoryService,
              private alert: AlertService) {
  }

  ngOnInit() {
    this.liquorObj.isActive = true;
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
        this.addedit = 'Edit';
      }
    });
   // this.addedit = 'Add';
    //this.router.url.includes('add') == true ? 'Add' : 'Edit';
    // this.addedithead = 
    // this.router.url.includes('add') == true ? 'Enter Below Details to Add Liquor' : 'Enter Below Details to Edit Liquor';

  }

  setData(id) {
    this.liquorService.getLiquorById(id).subscribe((responceData: any) => {
      this.liquorObj = responceData.data;
    });
  }
  addliquor(liquorForm) {
    this.formSubmitted = false;
    if (liquorForm.valid === false) {
      this.formSubmitted = true;
    } else {
      const postParam = {
        code: this.liquorObj.code,
        name: this.liquorObj.name,
        isActive: this.liquorObj.isActive
      };
      if (this.editId) {
        postParam['id'] = this.editId;
      }
      const modalRef = this.modalService.open(CommonPopupComponent);
      modalRef.result.then(respData => {
      if (respData) {
        ((this.editId) ? this.liquorService.updateLiquor(postParam) : this.liquorService.addLiquor(postParam))
      .subscribe((responceData: any) => {
          if (responceData.status == 's') {
            this.alert.showSuccess(responceData.userDisplayMesg, 'Success');
            this.router.navigate(['/master/liquor/list']);
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
  navigateliquorList() {
    this.router.navigate(['master/liquor/list']);
  }
}
