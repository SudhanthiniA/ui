import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DistileryService } from '@app/services';

@Component({
  selector: 'app-viewimportrequest',
  templateUrl: './viewimportrequest.component.html',
  styleUrls: ['./viewimportrequest.component.scss']
})
export class ViewimportrequestComponent implements OnInit {

  importrequestObject: any = {};
  addedit: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private distileryService: DistileryService
  ) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      if (params.id) {
        this.getimportrequestById(params.id);
        this.importrequestObject.id = params.id;
      } else {
        this.getimportrequestById();
      }
    });
    this.addedit = this.router.url.includes('preview') === true ? 'Preview' : 'View';
  }

  getimportrequestById(id?) {
    if (id) {
      this.distileryService.getImportreqbyid(id).subscribe((response: any) => {
        if (response.status === 's') {
          this.importrequestObject = response.data;
        }
      });
    } else {
      this.importrequestObject = JSON.parse(sessionStorage.getItem('formdata'));
    }
  }

}
