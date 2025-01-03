import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { InventoryMasterService } from '@app/services';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.scss']
})
export class ViewproductComponent implements OnInit {
  addedit: any;
  name: any;
  productList: Array<any> = [];
  categoryList: any;
  subcategoryList: any;
  productObj: any;
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
        this.setData(this.editId);
      }
    });
  }

  setData(id) {
    this.inventoryMasterService.getProductById(id)
      .subscribe((resp: any) => {
        this.productObj = resp.data;
        console.log(this.productObj);
        const createdDate = this.datepipe.transform(this.productObj.createdDate, 'yyyy-MM-dd HH:mm:ss');
        const modifiedDate = this.datepipe.transform(this.productObj.modifiedDate, 'yyyy-MM-dd HH:mm:ss');
        this.isModified = (createdDate === modifiedDate || modifiedDate === 'null') ? false : true;
        this.productObj.categoryId = resp.data.categoryId ? resp.data.categoryId.name : null;
        this.productObj.subCategoryId = resp.data.subCategoryId ? resp.data.subCategoryId.name : null;
      });
  }
}
