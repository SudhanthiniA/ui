import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { MolassesTypeService } from '@app/services';
@Component({
  selector: 'app-view-molassestype',
  templateUrl: './view-molassestype.component.html',
  styleUrls: ['./view-molassestype.component.scss']
})
export class ViewMolassestypeComponent implements OnInit {

  molassesObject: any = {};
  addedit = 'Add';
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private molasessType: MolassesTypeService,
    private datePipe: DatePipe
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.getMolassesById(params.Id);
        this.molassesObject.Id = params.Id;
        this.addedit = 'View';
      }
    });
  }
  getMolassesById(id) {
    this.molasessType.getMolassesById(id).subscribe((responceData: any) => {
      this.molassesObject = responceData.data;
      console.log(this.molassesObject);

    });
  }

}
