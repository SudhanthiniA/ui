import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DivisionService } from '@app/services';

@Component({
  selector: 'app-view-division',
  templateUrl: './view-division.component.html',
  styleUrls: ['./view-division.component.scss']
})
export class ViewDivisionComponent implements OnInit {

  addedit: any;
  divisionObj: any = {
    code: '',
    name: '',
    status: true
  };
  date: any;

  editId: any;
  formSubmitted = false;
  // statId: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private divisionService: DivisionService,
  ) { }

  ngOnInit() {
    this.divisionObj.status = true;
    this.route.params.subscribe(params => {
      if (params.id) {
        this.editId = params.id;
        console.log('--->' + this.editId);
        this.setData(this.editId);
      }
    });
    this.addedit = this.router.url.includes('add') == true ? 'Add' : 'View';
  }

  setData(id) {
    this.divisionService.getDivisionById(id).subscribe((responceData: any) => {
      console.log(responceData);
      this.divisionObj = responceData.data;
    });
  }

  navigateliquorList() {
    this.router.navigate(['/master/division/list']);
  }
}
