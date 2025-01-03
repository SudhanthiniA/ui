import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SLAService } from '@app/services/helpdesk/sla.service';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  editId: any;
  registrationobj: any;

  constructor(private route: ActivatedRoute, private Service:SLAService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
      }
    });
  }
  setData(id) {
    this.Service.getByIdslaList(id).subscribe(responceData => {
      console.log(responceData);
      this.registrationobj = responceData.data;
    })
  }

}
