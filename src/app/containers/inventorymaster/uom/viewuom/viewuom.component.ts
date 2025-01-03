import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InventoryMasterService } from '@app/services';

@Component({
  selector: 'app-viewuom',
  templateUrl: './viewuom.component.html',
  styleUrls: ['./viewuom.component.scss']
})
export class ViewuomComponent implements OnInit {
  uomList: Array<any> = [];
  uomObj: any;
  viewId: any;

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
    this.inventoryMasterService.getUomById(id).subscribe((responceData: any) => {
      console.log(responceData);
      this.uomObj = responceData.data;
      if (responceData.data.active) {
        this.uomObj.active = 'Active';
      } else {
        this.uomObj.active = 'InActive';
      }
    });
  }
}
