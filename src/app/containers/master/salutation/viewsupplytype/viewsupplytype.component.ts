import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SupplyTypeService } from '@app/services';

@Component({
  selector: 'app-viewsupplytype',
  templateUrl: './viewsupplytype.component.html',
  styleUrls: ['./viewsupplytype.component.scss']
})
export class ViewsupplytypeComponent implements OnInit {

  addedit: any;
  curDate = new Date();
  name: any;
  liquorList: any;
  subBrandObj: any = {
    code: '',
    name: '',
    status: true
  };
  date: any;
  editId: any;
  formSubmitted = false;
  brandList: any;
  constructor(private route: ActivatedRoute, private router: Router, private supplyTypeService: SupplyTypeService) {
  }

  ngOnInit() {

    this.subBrandObj.status = true;
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
      }
    });
    this.addedit = this.router.url.includes('add') == true ? 'Add' : 'View';
  }

  setData(id) {
    this.supplyTypeService.getSupplyTypeById(id).subscribe((responceData: any) => {
      console.log(responceData);
      this.subBrandObj = responceData.data;
    });
  }

  navigateliquorList() {
    this.router.navigate(['/master/supplytype/list']);
  }
}
