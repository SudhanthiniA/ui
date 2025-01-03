import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { InventoryMasterService } from '@app/services';

@Component({
  selector: 'app-viewsubproduct',
  templateUrl: './viewsubproduct.component.html',
  styleUrls: ['./viewsubproduct.component.scss']
})
export class ViewsubproductComponent implements OnInit {
  addedit: any;
  name: any;
  productList: any;
  subProductList: any;
  categoryList: any;
  subcategoryList: any;
  subProductObj: any = {};
  editId: any;
  date: any;
  isModified: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private datepipe: DatePipe,
    private inventoryMasterService: InventoryMasterService
  ) { }

  ngOnInit() {
    this.addedit = this.router.url.includes('add') == true ? 'Add' : 'View';
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        // this.getCategory();
        this.setData(this.editId);
      }
    });
  }

  setData(id) {
    this.inventoryMasterService.getSubProductById(id)
      .subscribe((resp: any) => {
        this.subProductObj = resp.data;
        if (resp.data.isActive) {
          this.subProductObj.isActive = 'Active';

        } else {
          this.subProductObj.isActive = 'InActive';
        }
        this.subProductObj.categoryId = resp.data.categoryId ? resp.data.categoryId.name : null;
        this.subProductObj.subCategoryId = resp.data.subCategoryId ? resp.data.subCategoryId.name : null;
        this.subProductObj.productId = resp.data.productId ? resp.data.productId.name : null;
        console.log(this.subProductObj);
      });
  }
}
