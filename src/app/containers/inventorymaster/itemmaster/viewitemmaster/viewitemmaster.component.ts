import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InventoryMasterService } from '@app/services';

@Component({
  selector: 'app-viewitemmaster',
  templateUrl: './viewitemmaster.component.html',
  styleUrls: ['./viewitemmaster.component.scss']
})
export class ViewitemmasterComponent implements OnInit {

  itemList: Array<any> = [];
  itemObj: any;
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
    this.inventoryMasterService.getItemById(id).subscribe((responceData: any) => {
      console.log(responceData);
      this.itemObj = responceData.data;
    });
  }
}
