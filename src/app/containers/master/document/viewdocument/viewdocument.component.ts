import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { apiUrls } from '@appEnv/apiurls';
import { DocumentTypeService } from '@app/services';

@Component({
  selector: 'app-viewdocument',
  templateUrl: './viewdocument.component.html',
  styleUrls: ['./viewdocument.component.scss']
})
export class ViewdocumentComponent implements OnInit {

  documentObj: any = {};
  isModified: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private docTypeService: DocumentTypeService,
    private datePipe: DatePipe
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getdocumenttypeById(params.id);
      }
    });
  }

  getdocumenttypeById(id) {
    const url = apiUrls.getDocbyid + id;
    this.docTypeService.getdocById(id).subscribe((responceData: any) => {
      this.documentObj = responceData.data;
      const createdDate = this.datePipe.transform(this.documentObj.createdDate, 'yyyy-MM-dd HH:mm:ss');
      const modifiedDate = this.datePipe.transform(this.documentObj.modifiedDate, 'yyyy-MM-dd HH:mm:ss');
      if (createdDate === modifiedDate || modifiedDate === 'null') {
        this.isModified = false;
      } else {
        this.isModified = true;
      }
      if (responceData.data.active) {
        this.documentObj.active = 'Active';

      } else {
        this.documentObj.active = 'InActive';

      }
    });
  }
}
