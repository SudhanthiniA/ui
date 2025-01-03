import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DistileryService } from '@app/services';

@Component({
  selector: 'app-view-mf12molassesregister',
  templateUrl: './view-mf12molassesregister.component.html',
  styleUrls: ['./view-mf12molassesregister.component.scss']
})
export class ViewMf12molassesregisterComponent implements OnInit {
  molassesregisterObject: any = {};

  editId: any;
  addedit: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private distileryService: DistileryService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getMolassesRegister(params.id);
        this.molassesregisterObject.id = params.id;
        this.editId = params.id;
        // this.addedit = 'Edit';
      } else {
        this.molassesregisterObject = JSON.parse(sessionStorage.getItem('molassesregister'));
      }
    });
    this.addedit = this.router.url.includes('preview') === true ? 'Preview' : 'View';
  }

  getMolassesRegister(id){
    this.distileryService.getMf12registerById(id).subscribe(responceData => {
      this.molassesregisterObject = responceData['data'];
    });
  }

}
