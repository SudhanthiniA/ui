import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { EntityService } from '@app/services';

@Component({
  selector: 'app-view-entity',
  templateUrl: './view-entity.component.html',
  styleUrls: ['./view-entity.component.scss']
})
export class ViewEntityComponent implements OnInit {
  entityObject: any;
  entityId: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private entityService: EntityService,
    private datePipe: DatePipe
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getEntityById(params.id);
        this.entityId = params.id;
      }
    });
  }

  getEntityById(id) {
    this.entityService.getEntityById(id).subscribe((responceData: any) => {
      this.entityObject = responceData.content;
      if (responceData.content.status) {
        this.entityObject.status = 'Active';
      } else {
        this.entityObject.status = 'InActive';

      }
    });
  }

}
