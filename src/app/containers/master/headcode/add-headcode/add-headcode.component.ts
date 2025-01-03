import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService, HeadcodeService, FeetypeService } from '@app/services';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '@app/_shared/common-popup/common-popup.component';

@Component({
  selector: 'app-add-headcode',
  templateUrl: './add-headcode.component.html',
  styleUrls: ['./add-headcode.component.scss']
})
export class AddHeadcodeComponent implements OnInit {

  headcodeObj: any = {
    headCode: '',
    headName: '',
    feeid: '',
    isActive: true
  };
  addedit = 'Add';
  liquorCategoryList: any;
  formSubmitted: boolean;
  feeTypeData: any;
  feetypeDropDownSettings: IDropdownSettings;
  searchValue = null;
  feetypeRequired = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: HeadcodeService,
    private modalService: NgbModal,
    private alert: AlertService,
    private feetypeService: FeetypeService,
  ) { }

  ngOnInit() {
    this.getfeetypelist(null);
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getHeadcodeById(params.id);
        this.headcodeObj.id = params.id;
        this.addedit = 'Edit';
      }
    });
    this.feetypeDropDownSettings = {
      singleSelection: true,
      idField: 'id',
      textField: 'name',
      allowSearchFilter: true,
      closeDropDownOnSelection: true
    };
  }

  getHeadcodeById(id) {
    this.service.getHeadcodeById(id).subscribe((resp: any) => {
      this.headcodeObj = resp.data;
      console.log(this.headcodeObj);
      this.headcodeObj.feetypeObj = resp.data.feeid;
    });
  }

  onItemSelect(item: any) {
    this.feetypeRequired = true;
  }

  onItemDeselect(item: any) {
    this.feetypeRequired = false;
  }

  onFilterChange(item: any) {
    if (item.length > 2) {
      this.searchValue = item;
      this.getfeetypelist(this.searchValue);
    } else {
      this.searchValue = null;
      this.getfeetypelist(this.searchValue);
    }
  }

  onDropDownClose() {
    if (this.searchValue !== null) {
      this.searchValue = null;
      this.getfeetypelist(this.searchValue);
    }
  }

  getfeetypelist(feetypeName) {
    const requestParam = {
      filters: { name: name, isActive: true },
      pageNo: 0, paginationSize: 10
    };
    this.feetypeService.searchFeetype(requestParam).subscribe((resp: any) => {
      if (resp.errorCode === 200) {
        this.feeTypeData = resp.data.contents;
      }
    });
  }

  saveData(headcodeForm) {
    this.formSubmitted = false;
    if (headcodeForm.valid === false || this.feetypeRequired === false) {
      this.formSubmitted = true;
    } else {
      const postParam = {
        id: this.headcodeObj.id,
        headCode: this.headcodeObj.headCode,
        headName: this.headcodeObj.headName,
        feeid: this.headcodeObj.feetypeObj ? this.headcodeObj.feetypeObj[0].id : null,
        isActive: this.headcodeObj.isActive
      };
      const modalRef = this.modalService.open(CommonPopupComponent);
      console.log(modalRef.result);
      modalRef.result.then(respData => {
        if (respData) {
          ((this.headcodeObj.id) ? this.service.updateHeadcode(postParam) : this.service.addHeadcode(postParam))
            .subscribe((resp: any) => {
              if (resp.status === 's') {
                this.alert.showSuccess(resp.userDisplayMesg, 'success');
                this.router.navigate(['/master/headcode/list']);
              } else {
                this.alert.showError(resp.userDisplayMesg, 'error');
              }
            });
        }
      }).catch(err => {
        console.log('\n err...', err);
      });
    }
  }

}
