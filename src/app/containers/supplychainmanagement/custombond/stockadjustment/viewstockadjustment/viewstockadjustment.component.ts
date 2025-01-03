import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StockadjustmentService } from '@app/services';
@Component({
  selector: 'app-viewstockadjustment',
  templateUrl: './viewstockadjustment.component.html',
  styleUrls: ['./viewstockadjustment.component.scss']
})
export class ViewstockadjustmentComponent implements OnInit {
  

  constructor(
    private route: ActivatedRoute,
    private stockAdjustment: StockadjustmentService,
  ) { }

  ngOnInit() {
   

  }
 

}
