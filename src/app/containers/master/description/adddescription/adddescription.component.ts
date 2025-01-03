import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FeetypeService, HeadcodeService, AlertService, PatternService } from '@app/services';
import { DescriptionService } from '@app/services/masters/description.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '@app/_shared/common-popup/common-popup.component';
@Component({
    selector: 'app-adddescription',
    templateUrl: './adddescription.component.html',
    styleUrls: ['./adddescription.component.scss']
})
export class AddDescriptionComponent implements OnInit {
    addedit: any;
    curDate = new Date();
    name: any;
    descriptionList: Array<any> = [];
    descriptionObj: any = {
        code: '',
        name: '',
        feetypeid: '',
        headid: '',
        isActive: true
    };
    date: any;
    editId: any;
    formSubmitted = false;
    feeTypeList: any = [];
    headCodeList: any = [];

    constructor(private route: ActivatedRoute,
        private router: Router,
        private service: DescriptionService,
        private feeType: FeetypeService,
        private headCode: HeadcodeService,
        private modalService: NgbModal,
        private alert: AlertService,
        public patternService: PatternService) {
    }

    ngOnInit() {
        this.feeType.getAllFeetype().subscribe((resp: any) => {
            this.feeTypeList = resp.data;
        });
        this.headCode.getAllHeadcode().subscribe((resp: any) => {
            this.headCodeList = resp.data;
        });
        this.descriptionObj.isActive = true;
        this.route.params.subscribe(params => {
            if (params.Id) {
                this.editId = params.Id;
                this.setData(this.editId);
            }
        });
        this.addedit = this.router.url.includes('add') == true ? 'Add' : 'Edit';
    }

    setData(id) {
        this.service.getDescriptionById(id).subscribe((resp: any) => {
            this.descriptionObj = resp.data;
            console.log(this.descriptionObj);
            this.descriptionObj.feetypeid = resp.data.feetypeid;
            this.descriptionObj.headid = resp.data.headid;
        });
    }

    addDescription(descriptionForm) {
        this.formSubmitted = false;
        if (descriptionForm.valid === false) {
            this.formSubmitted = true;
        } else {
            const postParam = {
                code: this.descriptionObj.code,
                name: this.descriptionObj.name,
                feetypeid: this.descriptionObj.feetypeid,
                headid: this.descriptionObj.headid,
                isActive: this.descriptionObj.isActive,
            };
            if (this.editId) {
                postParam['id'] = this.editId;
            }
            const modalRef = this.modalService.open(CommonPopupComponent);
            modalRef.result.then(respData => {
                if (respData) {
                    ((this.editId) ? this.service.putDescription(postParam) : this.service.postDescription(postParam))

                        .subscribe((responceData: any) => {
                            if (responceData.status == 's') {
                                this.alert.showSuccess(responceData.userDisplayMesg, 'Success');
                                this.router.navigate(['/master/description/list']);
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
    navigateDescriptionList() {
        this.router.navigate(['/master/description/list']);
    }

}

