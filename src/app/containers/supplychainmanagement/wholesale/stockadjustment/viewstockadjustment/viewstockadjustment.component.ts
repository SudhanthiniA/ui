import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StockadjustmentService } from '@app/services';
@Component({
  selector: 'app-viewstockadjustment',
  templateUrl: './viewstockadjustment.component.html',
  styleUrls: ['./viewstockadjustment.component.scss']
})
export class ViewstockadjustmentComponent implements OnInit {
  stockObj: any;
  stockdata: any;

  constructor(
    private route: ActivatedRoute,
    private stockAdjustment: StockadjustmentService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getById(params.id);
      }
    });
    this.stockObj = JSON.parse(sessionStorage.getItem('formdata'));
    this.stockdata = this.stockObj.productList;

  }
  getById(id) {
    this.stockAdjustment.getById('StockAdjustment/'+id)
      .then((resp: any) => {
        this.stockObj = resp  ;
        this.stockdata = this.stockObj.productList
        console.log(this.stockObj);
        
      });
  }

}
