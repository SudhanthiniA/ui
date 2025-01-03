import { Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-viewbottlingprodplannewup',
  templateUrl: './viewbottlingprodplannewup.component.html',
  styleUrls: ['./viewbottlingprodplannewup.component.scss']
})
export class ViewbottlingprodplannewupComponent implements OnInit {

  @ViewChild('modifyModal', { static: false }) modifyModal;
  

  constructor() { }

  ngOnInit() {
  }
  modifyRequest() {
    this.modifyModal.show()
  }
}
