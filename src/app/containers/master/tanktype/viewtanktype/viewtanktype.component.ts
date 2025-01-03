import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TankTypeService } from '@app/services'

@Component({
  selector: 'app-viewtanktype',
  templateUrl: './viewtanktype.component.html',
  styleUrls: ['./viewtanktype.component.scss']
})
export class ViewtanktypeComponent implements OnInit {

  tanktypeObj: any = {};
  constructor(
    private route: ActivatedRoute,
    private tanktypeService: TankTypeService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.gettanktypeById(params.id);
      }
    });
  }

  gettanktypeById(id) {
    this.tanktypeService.getTankTypeById(id).subscribe((responceData: any) => {
      this.tanktypeObj = responceData.data;
      if (responceData.status) {
        this.tanktypeObj.status = 'Active';
      } else {
        this.tanktypeObj.status = 'InActive';
      }
    });
  }
}
