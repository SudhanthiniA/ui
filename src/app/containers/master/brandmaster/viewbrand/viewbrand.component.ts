import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { BrandMasterService } from '@app/services';

@Component({
  selector: 'app-viewbrand',
  templateUrl: './viewbrand.component.html',
  styleUrls: ['./viewbrand.component.scss']
})
export class ViewbrandComponent implements OnInit {
  editId: any;
  isModified: any;
  categoryObj: any = {
    brandCode: '',
    description: '',
    brandName: '',
    status: true
  };

  constructor(private route: ActivatedRoute,
    private brandService: BrandMasterService,
    private datePipe: DatePipe) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
      }
    });
  }

  setData(id) {
    this.brandService.getBrandMasterById(id)
      .subscribe((resp: any) => {
        this.categoryObj = resp.data;
        const createdDate = this.datePipe.transform(this.categoryObj.createdDate, 'yyyy-MM-dd HH:mm:ss');
        const modifiedDate = this.datePipe.transform(this.categoryObj.modifiedDate, 'yyyy-MM-dd HH:mm:ss');
        if (createdDate === modifiedDate || modifiedDate === 'null') {
          this.isModified = false;
        } else {
          this.isModified = true;
        }
        if (resp.data.active) {
          this.categoryObj.active = 'Active';
        } else {
          this.categoryObj.active = 'InActive';
        }
      });
  }
}
