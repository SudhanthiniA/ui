import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DistileryService } from '@app/services';

@Component({
  selector: 'app-viewexportorder',
  templateUrl: './viewexportorder.component.html',
  styleUrls: ['./viewexportorder.component.scss']
})
export class ViewexportorderComponent implements OnInit {

  exportdataObj: any = {};
  addedit: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private distileryService: DistileryService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getexportdataById(params.id);
        this.exportdataObj.id = params.id;
      } else {
        this.getexportdataById();
      }
    });
    this.addedit = this.router.url.includes('preview') === true ? 'Preview' : 'View';
  }

  getexportdataById(id?) {
    if (id) {
      this.distileryService.getExportorderbyid(id).subscribe((response: any) => {
        this.exportdataObj = response.data;
      });
    } else {
      this.exportdataObj = JSON.parse(sessionStorage.getItem('formdata'));
    }
  }

}
