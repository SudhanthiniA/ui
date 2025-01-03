import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsumptionTypeService } from '@app/services';

@Component({
  selector: 'app-view-consuption',
  templateUrl: './view-consuption.component.html',
  styleUrls: ['./view-consuption.component.scss']
})
export class ViewConsuptionComponent implements OnInit {
  consuptionObject: any = {};
  addedit = 'Add';
  constructor(
    private route: ActivatedRoute,
    private consumptionTypeService: ConsumptionTypeService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.getConsuptionById(params.Id);
        this.consuptionObject.Id = params.Id;
        this.addedit = 'View';
      }
    });
  }

  getConsuptionById(id) {
    this.consumptionTypeService.getConsumptionTypeById(id).subscribe((resp: any) => {
      this.consuptionObject = resp.data;
    });
  }
}
