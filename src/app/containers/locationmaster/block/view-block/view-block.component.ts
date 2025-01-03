import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlockMasterService } from '@app/services';
@Component({
  selector: 'app-view-block',
  templateUrl: './view-block.component.html',
  styleUrls: ['./view-block.component.scss']
})
export class ViewBlockComponent implements OnInit {
  countryData: any;
  stateData: any;
  districtData: any;
  blockObject: any = {};
  formSubmitted = false;
  constructor(
    private route: ActivatedRoute,
    private blockService: BlockMasterService
  ) { }

  ngOnInit() {
    this.blockObject.status = true;
    this.blockObject.country = '';
    this.blockObject.state = '';
    this.blockObject.district = '';
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getBlockById(params.id);
        this.blockObject.id = params.id;
      }
    });
  }

  getBlockById(id) {
    this.blockService.getblockById(id).subscribe((responceData: any) => {
      this.blockObject = responceData.data;
      this.blockObject.country = this.blockObject.countryResponseDto.countryName;
      this.blockObject.state = this.blockObject.stateResponseDto.stateName;
      this.blockObject.district = this.blockObject.districtName;
      this.blockObject.taulk = this.blockObject.talukName;
    });
  }

}
