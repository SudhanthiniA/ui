import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ProductTypeService } from '@app/services';

@Component({
  selector: 'app-view-product-type',
  templateUrl: './view-product-type.component.html',
  styleUrls: ['./view-product-type.component.scss']
})
export class ViewProductTypeComponent implements OnInit {

  producttypeObject: any = {};
  licencetypeData: any;
  licencenameData: any;
  formSubmitted = false;
  curDate = new Date();
  addedit = 'Add';
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductTypeService,
    private datePipe: DatePipe
  ) { }

  ngOnInit() {
    this.producttypeObject.status = true;
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getProductTypeById(params.id);
        this.producttypeObject.id = params.id;
        this.addedit = 'Edit';
      }
    });
  }

  getProductTypeById(id) {
    this.productService.getProductById(id).subscribe((responceData: any) => {
      this.producttypeObject = responceData.data;
      if (responceData.data.status) {
        this.producttypeObject.status = 'Active';

      } else {
        this.producttypeObject.status = 'InActive';

      }
    });
  }

}
