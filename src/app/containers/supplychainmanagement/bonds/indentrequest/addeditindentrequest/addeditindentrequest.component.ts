import { Component, OnInit } from '@angular/core';
import { ApiService } from '@app/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addeditindentrequest',
  templateUrl: './addeditindentrequest.component.html',
  styleUrls: ['./addeditindentrequest.component.scss']
})
export class AddeditindentrequestComponent implements OnInit {
  indent = {
    recieptnumber: '',
    date: '',
    productname: '',
    grade: '',
    requestion: '',
    measurement: '',
  };
  constructor(private apiservice: ApiService, private route: Router) { }

  ngOnInit() {
  }
  saveindent() {
    const postingData = {
      recieptnumber: this.indent.recieptnumber,
      date: this.indent.date,
      productname: this.indent.productname,
      grade: this.indent.grade,
      requestion: this.indent.requestion,
      measurement: this.indent.measurement,
      created_on : new Date(),
      created_by: 'Admin',
      modified_on : new Date(),
      modified_by: 'Admin',
    };
    this.apiservice.post('indentrequest', postingData).then((resp: any) => {
      this.route.navigate(['supplychainmanagement/bonds/indentrequest/list']);
    });
  }
}
