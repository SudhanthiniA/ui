import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '@app/services';
import { RawMaterialService } from '@app/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '@app/_shared/common-popup/common-popup.component';


@Component({
  selector: 'app-addeditrawmaterial',
  templateUrl: './addeditrawmaterial.component.html',
  styleUrls: ['./addeditrawmaterial.component.scss']
})
export class AddeditrawmaterialComponent implements OnInit {
  editId: any;
  rawmaterialObj: any = {};
  formSubmitted = false;
  curDate = new Date();
  addedit = 'Add';
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private rawMaterialService: RawMaterialService,
    private alert: AlertService,
    private modalService: NgbModal,
  ) { }

  ngOnInit() {
    this.rawmaterialObj.isActive = true;
    this.route.params.subscribe(params => {
      if (params.id) {
        this.editId = params.id;
        this.setData(this.editId);
      }
    });
    this.addedit = this.router.url.includes('add') == true ? 'Add' : 'Edit';
  }

  setData(id) {
    this.rawMaterialService.getMaterialById(id)
      .subscribe((resp: any) => {
        this.rawmaterialObj = resp.data;
      });
  }

  removeFirstSpace(e) {
    const x = (e.which) ? e.which : e.keyCode;
    if (e.which === 32 && e.target.selectionStart === 0) {
      return false;
    }
  }

  addrawmaterial(rawmaterialForm) {
    this.formSubmitted = false;
    if (rawmaterialForm.valid === false) {
      this.formSubmitted = true;
    } else {
      const postParam = {
        code: this.rawmaterialObj.code,
        name: this.rawmaterialObj.name,
        isActive: this.rawmaterialObj.isActive
      };
      if (this.rawmaterialObj.id) {
        postParam['id'] = this.rawmaterialObj.id;
      }
      const modalRef = this.modalService.open(CommonPopupComponent);
      modalRef.result.then(respData => {
        if (respData) {
          ((this.rawmaterialObj.id) ? this.rawMaterialService.updateRawMaterial(postParam) : this.rawMaterialService.addRawMaterial(postParam))
            .subscribe((responceData: any) => {
              if (responceData.status === 's') {
                this.alert.showSuccess(responceData.userDisplayMesg, 'success');
                this.router.navigate(['/master/rawmaterial/list']);
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
    this.rawMaterialService.getMaterialById(id).subscribe((responceData: any) => {
      this.rawmaterialObj = responceData.data;
    });
  }

}
