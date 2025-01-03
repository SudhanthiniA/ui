import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { InventoryMasterService } from '@app/services';

@Component({
  selector: 'app-viewcategory',
  templateUrl: './viewcategory.component.html',
  styleUrls: ['./viewcategory.component.scss']
})

export class ViewcategoryComponent implements OnInit {
  viewId: any;
  date: any;
  addedit: any;
  categoryObj: any = {};
  isModified: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private inventoryMasterService: InventoryMasterService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.viewId = params.Id;
        this.setData(this.viewId);
      }
    });
    this.addedit = this.router.url.includes('add') === true ? 'Add' : 'View';
  }

  setData(id) {
    this.inventoryMasterService.getCategoryById(id)
      .subscribe((resp: any) => {
        this.categoryObj = resp.data;
        // this.isModified = (createdDate === modifiedDate || modifiedDate === 'null') ? false : true;
        this.categoryObj.active = (resp.data.active) ? 'Active' : 'InActive';
      });
  }
}