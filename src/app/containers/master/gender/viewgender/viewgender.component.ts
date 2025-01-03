import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GenderService } from '@app/services';

@Component({
  selector: 'app-viewgender',
  templateUrl: './viewgender.component.html',
  styleUrls: ['./viewgender.component.scss']
})
export class ViewgenderComponent implements OnInit {

  addedit: any;
  genderObj: any = {
    code : '',
    name : '',
    status : true
  };
  date: any;

  editId: any;
  formSubmitted = false;
  // statId: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private genderService: GenderService,
  ) { }

  ngOnInit() {
    this.genderObj.status = true;
    this.route.params.subscribe(params => {
      if (params.id) {
        this.editId = params.id;
        this.setData(this.editId);
      }
    });
    this.addedit = this.router.url.includes('add') == true ? 'Add' : 'View';
  }

  setData(id) {
    this.genderService.getGenderById(id).subscribe((responceData: any) => {
      console.log(responceData);
      this.genderObj = responceData.data;
    });
  }

  navigateliquorList() {
    this.router.navigate(['/master/gender/list']);
  }
}
