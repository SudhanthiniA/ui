import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService, PreviewService } from '@app/services';
import { CommonPopupComponent } from '@app/_shared/common-popup/common-popup.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-addexportindentliquor',
  templateUrl: './addexportindentliquor.component.html',
  styleUrls: ['./addexportindentliquor.component.scss']
})
export class AddexportindentliquorComponent implements OnInit {
  addedit: any;
  exportList: Array<any> = [];
  exportObj: any = {};
  editId: any;
  formSubmitted = false;

  brands = [{ id: 1, name: 'Brand Name 1' }, { id: 2, name: 'Brand Name 2' }];
  packageTypes = [{ id: 1, name: 'Package Type 1' }, { id: 2, name: 'Package Type 2' }];
  importorUnits = [{ id: 1, name: 'Unit 1' }, { id: 2, name: 'Unit 2' }];
  ExportNames = [{ id: 1, name: 'Name 1' }, { id: 2, name: 'Name 2' }];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal,
    private alert: AlertService,
    private preview: PreviewService
  ) { }

  ngOnInit() {
    this.exportObj.brandId = '';
    this.exportObj.packageTypeId = '';
    this.exportObj.unitId = '';
    this.exportObj.exportUnitId = '';
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        // this.setData(this.editId);
      } else if (this.preview.setData) {
        this.exportObj = this.preview.setData;
      }
    });
    this.addedit = this.router.url.includes('add') == true ? 'Add' : 'Edit';
  }

  addExportIndent(indentForm) {
    this.formSubmitted = false;
    if (indentForm.valid === false) {
      this.formSubmitted = true;
    } else {
      const modalRef = this.modalService.open(CommonPopupComponent);
      modalRef.result.then(respData => {
        if (respData) {
          this.alert.showSuccess('done', 'success');
          this.router.navigate(['supplychainmanagement/distillery/exportindentliquor/list']);
        }
      }).catch(err => {
        console.log('\n err...', err);
      });
    }
  }

  navigateList() {
    this.router.navigate(['supplychainmanagement/distillery/exportindentliquor/list']);
  }
  navigatePreview() {
    this.preview.setData = this.exportObj;
    this.router.navigate(['supplychainmanagement/distillery/exportindentliquor/preview']);
  }

}
