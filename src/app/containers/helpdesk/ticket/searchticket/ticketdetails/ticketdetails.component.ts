import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ticketService } from '@app/services/helpdesk/tickets.service';

@Component({
  selector: 'app-ticketdetails',
  templateUrl: './ticketdetails.component.html',
  styleUrls: ['./ticketdetails.component.scss']
})
export class TicketdetailsComponent implements OnInit {
  editId: any;
  obj: any;
  status:any;
  constructor(private route: ActivatedRoute, private Service:ticketService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
      }
    });
  }
  setData(id) {
    this.Service.getTicketsbyId(id).subscribe(responceData => {
      this.obj = responceData.data;
    })
  }
}
