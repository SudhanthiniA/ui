import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TemplateUploadService } from '@app/services';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  editId: any;
  isModified: any;
  model: any = {
    name: '',
    code: '',
    status: true
  };

  constructor(private route: ActivatedRoute,
    private templateService: TemplateUploadService,
    private datePipe: DatePipe) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.editId = params.id;
        this.setData(this.editId);
      }
    });
  }

  setData(id) {
    this.templateService.viewtempalte(id)
      .subscribe((resp: any) => {
        this.model = resp.data;
        console.log(this.model);
        
        const createdDate = this.datePipe.transform(this.model.createdDate, 'yyyy-MM-dd HH:mm:ss');
        const modifiedDate = this.datePipe.transform(this.model.modifiedDate, 'yyyy-MM-dd HH:mm:ss');
        if (createdDate === modifiedDate || modifiedDate === 'null') {
          this.isModified = false;
        } else {
          this.isModified = true;
        }
        if (resp.data.status) {
          this.model.status = 'Active';
        } else {
          this.model.status = 'InActive';
        }
      });
  }
}

