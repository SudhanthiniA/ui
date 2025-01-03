import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InventoryMasterService } from '@app/services';

@Component({
  selector: 'app-viewsubcategory',
  templateUrl: './viewsubcategory.component.html',
  styleUrls: ['./viewsubcategory.component.scss']
})
export class ViewsubcategoryComponent implements OnInit {

  subCategoryList: Array<any> = [];
  subCategoryObj: any = {};
  viewId: any;
  date: any;
  isModified: any;

  constructor(
    private route: ActivatedRoute,
    private inventoryMasterService: InventoryMasterService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.viewId = params.Id;
        this.setData(this.viewId);
      }
    });
  }

  setData(id) {
    this.inventoryMasterService.getSubCategoryById(id)
      .subscribe((resp: any) => {
        this.subCategoryObj = resp.data;
        if (resp.data.active) {
          this.subCategoryObj.active = 'Active';
        } else {
          this.subCategoryObj.active = 'InActive';
        }
      });
  }
}
