import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DropdownConfigService, AlertService } from '@app/services';

@Component({
  selector: 'app-view-relation',
  templateUrl: './view-relation.component.html',
  styleUrls: ['./view-relation.component.scss']
})
export class ViewRelationComponent implements OnInit {

  filterCode: string;
  filterSubCode: string;
  dependMasterData: any;
  dependMasterDatas: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertService,
    private dropDownService: DropdownConfigService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params);
      // code,subCode
      if (params.code && params.subCode) {
        this.filterCode = params.code;
        this.filterSubCode = params.subCode;
        this.getMappingDropDownData();
      }
    });
  }

  getMappingDropDownData() {
    this.dropDownService.findDependentValuesMasterOnMaster(this.filterCode, this.filterSubCode).subscribe((resp: any) => {
      console.log('resp.data::', resp.data);
      this.dependMasterDatas = resp.data;
      this.dependMasterData = this.dependMasterDatas[0];
    });
  }

}
