import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService, InventoryMasterService } from '@app/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '../../../../_shared/common-popup/common-popup.component'

@Component({
  selector: 'app-additemmaster',
  templateUrl: './additemmaster.component.html',
  styleUrls: ['./additemmaster.component.scss']
})
export class AdditemmasterComponent implements OnInit {
  addedit: any;
  curDate = new Date();
  name: any;
  itemList: Array<any> = [];
  itemObj: any = {
    code: '',
    name: '',
    description: '',
    isActive: true
  };
  editId: any;
  formSubmitted = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal,
    private inventoryMasterService: InventoryMasterService,
    private alert: AlertService,
  ) { }

  ngOnInit() {
    this.addedit = this.router.url.includes('add') == true ? 'Add' : 'Edit';
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
      }
    });
  }

  setData(id) {
    this.inventoryMasterService.getItemById(id).subscribe((responceData: any) => {
      console.log(responceData);
      this.itemObj = responceData.data;
    });
  }

  addItem(itemForm) {
    this.formSubmitted = true;
    const postParam = {
      code: this.itemObj.code,
      id: this.editId,
      name: this.itemObj.name,
      description: this.itemObj.description,
      isActive: this.itemObj.isActive
    };
    if (this.editId) {
      postParam['modifiedBy'] = sessionStorage.getItem('loggeduser');
      postParam['id'] = this.editId;
    } else {
      postParam['createdBy'] = sessionStorage.getItem('loggeduser');
    }

    if (itemForm.valid) {
      const modalRef = this.modalService.open(CommonPopupComponent);
      console.log(modalRef.result)
      modalRef.result.then(respData => {
        if (respData) {
          ((this.editId) ? this.inventoryMasterService.updateItem(postParam) : this.inventoryMasterService.addItem(postParam))
            .subscribe((responseData: any) => {
              if (responseData.status == 's') {
                this.alert.showSuccess(responseData.userDisplayMesg, 'Success');
                this.router.navigate(['inventory/itemmaster/list']);
              } else {
                this.alert.showError(responseData.userDisplayMesg, 'error');
              }
            });
        }
      }).catch(err => {
        console.log('\n err...', err);
      });
    }
  }

  navigateItemList() {
    this.router.navigate(['inventory/itemmaster/list']);
  }

}
