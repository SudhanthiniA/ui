import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmailrequestService } from '@app/services/helpdesk/emailrequest.service';

@Component({
  selector: 'app-viewemail',
  templateUrl: './viewemail.component.html',
  styleUrls: ['./viewemail.component.scss']
})
export class ViewemailComponent implements OnInit {

  editId: any;
  registrationobj: any;

  constructor(private route: ActivatedRoute, private Service:EmailrequestService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
      }
    });
  }
  setData(id) {
    this.Service.getByidemailrequestList(id).subscribe(responceData => {
      console.log(responceData);
      this.registrationobj = responceData.data;
    })
  }

}
