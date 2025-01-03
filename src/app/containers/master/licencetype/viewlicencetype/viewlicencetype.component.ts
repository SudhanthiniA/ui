import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { LicenseTypeService } from '@app/services';

@Component({
  selector: 'app-viewlicencetype',
  templateUrl: './viewlicencetype.component.html',
  styleUrls: ['./viewlicencetype.component.scss']
})
export class ViewlicencetypeComponent implements OnInit {
  licencetypeObj: any;
  viewId: any;
  date: any;

  constructor(
    private route: ActivatedRoute,
    private licensetypeService: LicenseTypeService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.viewId = params.Id;
        this.setData(this.viewId);
      }
    });
  }

  setData(id) {
    this.licensetypeService.getLicenseTypeById(id).subscribe((responceData: any) => {
      console.log(responceData);
      this.licencetypeObj = responceData.data;
    });
  }

}
