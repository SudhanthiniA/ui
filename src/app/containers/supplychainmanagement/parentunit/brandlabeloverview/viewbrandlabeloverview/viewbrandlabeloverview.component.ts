import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-viewbrandlabeloverview',
  templateUrl: './viewbrandlabeloverview.component.html',
  styleUrls: ['./viewbrandlabeloverview.component.scss']
})
export class ViewbrandlabeloverviewComponent implements OnInit {

  @ViewChild('uploadModal', { static: false }) uploadModal;
 
  uploadConfirmation() {
    this.uploadModal.show()
  }
  constructor() { }

  ngOnInit() {
  }
}
