import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DistileryService } from '@app/services';

@Component({
  selector: 'app-view-importpermit',
  templateUrl: './view-importpermit.component.html',
  styleUrls: ['./view-importpermit.component.scss']
})
export class ViewImportpermitComponent implements OnInit {

  viewimportpermitobj: any = {}
  editId: any;
  addedit: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private distileryService: DistileryService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getimportpermitById(params.id);
        this.viewimportpermitobj.id = params.id;
        this.editId = params.id;
      } else {
        this.viewimportpermitobj = JSON.parse(sessionStorage.getItem('viewimportpermitobj'));
      }
    });
    this.addedit = this.router.url.includes('preview') === true ? 'Preview' : 'View';
  }
  getimportpermitById(id?) {
    this.distileryService.getimportprtbyid(id).subscribe((response: any) => {
      if (response.status === 's') {
        this.viewimportpermitobj = response.data;
      }
    });
  }
}
