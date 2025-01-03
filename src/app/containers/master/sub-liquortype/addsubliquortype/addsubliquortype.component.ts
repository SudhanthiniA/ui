import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '@app/services';
import { LiquorTypeService } from '@app/services';
import { SubLiquorTypeService } from '@app/services/masters/subliquortype.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '../../../../_shared/common-popup/common-popup.component'
@Component({
  selector: 'app-addsubliquortype',
  templateUrl: './addsubliquortype.component.html',
  styleUrls: ['./addsubliquortype.component.scss']
})
export class AddsubliquortypeComponent implements OnInit {

  rawmaterialObj: any = {};
  formSubmitted = false;
  curDate = new Date();
  addedit: any;
  editId: any;
  subLiquorTypeForm: FormGroup;
  liquorTypeData: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private liquorTypeService: LiquorTypeService,
    private service: SubLiquorTypeService,
    private modalService: NgbModal,
    private alert: AlertService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.buildForm();
    this.getLiquorType();
    this.route.params.subscribe(params => {
      if (params.id) {
        this.editId = params.id;
        this.getrawmaterialById(params.id);
      }
    });
    this.addedit = this.router.url.includes('add') == true ? 'Add' : 'Edit';
  }
  buildForm() {
    this.subLiquorTypeForm = this.fb.group({
      code: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      liquortypeid: [''],
      isActive: [true]
    });
  }
  get f() { return this.subLiquorTypeForm.controls; }
  getLiquorType(pageNo = 0, pageSize = 5) {
    const objtest = {
      filters: {
         isActive: true
      },
      pageNo: 0,
      paginationSize: 5
    };
    this.liquorTypeService.searchLiquorType(objtest).subscribe((responceData: any) => {
      this.liquorTypeData = responceData.data.contents;
    });
  }
  addrawmaterial(form) {
    this.formSubmitted = true;
    if (form.valid) {
      if (this.editId) {
        this.subLiquorTypeForm.value.id = this.editId;
      }
      const modalRef = this.modalService.open(CommonPopupComponent);
      console.log(modalRef.result);
      modalRef.result.then(respData => {
        if (respData) {
          ((this.editId) ? this.service.putSubLiquorType(this.subLiquorTypeForm.value) : this.service.addSubLiquorType(this.subLiquorTypeForm.value)).subscribe((responceData: any) => {
            if (responceData.status === 's') {
              this.alert.showSuccess(responceData.userDisplayMesg, 'success');
              this.router.navigate(['/master/subliquortype/list']);
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

  getrawmaterialById(id) {
    this.service.getSubLiquorTypeById(id).subscribe((responceData: any) => {
      this.subLiquorTypeForm.patchValue({
        code: responceData.data.code,
        name: responceData.data.name,
        liquortypeid: responceData.data.liquorTypeId,
        isActive: responceData.data.isActive,
      });
    });
  }

}
