import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DistileryService } from '@app/services';

@Component({
  selector: 'app-view-mf10',
  templateUrl: './view-mf10.component.html',
  styleUrls: ['./view-mf10.component.scss']
})
export class ViewMf10Component implements OnInit {

  molassesEntryObj: any = {};
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
        this.getMolassesEntry(params.id);
        this.molassesEntryObj.id = params.id;
        this.editId = params.id;
        // this.addedit = 'Edit';
      } else {
        this.molassesEntryObj = JSON.parse(sessionStorage.getItem('formdata'));
      }
    });
    this.addedit = this.router.url.includes('preview') === true ? 'Preview' : 'View';
  }

  getMolassesEntry(id){
    this.distileryService.getMf10entrysById(id).subscribe((responceData: any) => {
      this.molassesEntryObj = responceData.data;
    });
  }


}
