import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FAQService } from '@app/services/helpdesk/faqservice.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  editId: any;
  registrationobj: any;

  constructor(private route: ActivatedRoute, private Service:FAQService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
      }
    });
  }
  setData(id) {
    this.Service.getByIdfaq(id).subscribe(responceData => {
      console.log(responceData);
      this.registrationobj = responceData.data;
    })
  }
}
