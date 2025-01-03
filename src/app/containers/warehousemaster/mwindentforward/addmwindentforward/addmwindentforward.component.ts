import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-addmwindentforward',
  templateUrl: './addmwindentforward.component.html',
  styleUrls: ['./addmwindentforward.component.scss']
})
export class AddmwindentforwardComponent implements OnInit {

  @ViewChild('exampleModalCenter', { static: false }) exampleModalCenter;
  constructor() { }

  ngOnInit() {
  }

  addRegistration() {
              this.exampleModalCenter.show()
  }

}
