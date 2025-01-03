import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pd20-wholesale',
  templateUrl: './pd20-wholesale.component.html',
  styleUrls: ['./pd20-wholesale.component.scss']
})
export class Pd20WholesaleComponent implements OnInit {
  @ViewChild('nonMaintenance', { static: false }) nonMaintenance;
  constructor() { }

  ngOnInit() {
  }
  nonMaintenanceModal() {
    this.nonMaintenance.show()
  }
}
