import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IssueService } from '@app/services/helpdesk/issueservice';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  editId;obj;
  constructor(private route: ActivatedRoute, private Service: IssueService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.editId = params.id;
      }
    });
    this.getticketstatus();
  }
  getticketstatus() {
    this.Service.getallissuesbyid(this.editId).subscribe(responceData => {
      this.obj = responceData.data;
    })
  }
}
