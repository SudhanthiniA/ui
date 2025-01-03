import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FeeMasterService } from '@app/services';

@Component({
  selector: 'app-viewfee',
  templateUrl: './viewfee.component.html',
  styleUrls: ['./viewfee.component.scss']
})
export class ViewfeeComponent implements OnInit {
  categoryObj: any = {};
  editId: any;

  constructor(private route: ActivatedRoute,
    private feeService: FeeMasterService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.setData(params.Id);
      }
    });
  }
  setData(id) {
    this.feeService.getFeeById(id).subscribe(resp => {
      console.log(resp);
      this.categoryObj = resp.data;
      if (resp.data.active) {
        this.categoryObj.active = 'Active';
      } else {
        this.categoryObj.active = 'InActive';
      }
    });
  }
}
