import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InventoryMasterService } from '@app/services';

@Component({
  selector: 'app-viewgstmaster',
  templateUrl: './viewgstmaster.component.html',
  styleUrls: ['./viewgstmaster.component.scss']
})
export class ViewgstmasterComponent implements OnInit {

  gstList: Array<any> = [];
  gstObj: any;
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
    this.inventoryMasterService.getGstById(id).subscribe((responceData: any) => {
      console.log(responceData);
      this.gstObj = responceData.data;
      if (responceData.data.active) {
        this.gstObj.active = 'Active';
      } else {
        this.gstObj.active = 'InActive';
      }
    });
  }
}
