import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FeetypeService } from '@app/services';

@Component({
  selector: 'app-view-feetype',
  templateUrl: './view-feetype.component.html',
  styleUrls: ['./view-feetype.component.scss']
})
export class ViewFeetypeComponent implements OnInit {

  addedit: any;
  feetypeObj: any = {
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
    private feetypeService: FeetypeService,
  ) { }

  ngOnInit() {
    this.feetypeObj.status = true;
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
    this.feetypeService.getFeetypeById(id).subscribe((responceData: any) => {
      console.log(responceData);
      this.feetypeObj = responceData.data;
    });
  }

  navigateliquorList() {
    this.router.navigate(['/master/feetype/list']);
  }
}
