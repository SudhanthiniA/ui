import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-viewmwindentforward',
  templateUrl: './viewmwindentforward.component.html',
  styleUrls: ['./viewmwindentforward.component.scss']
})
export class ViewmwindentforwardComponent implements OnInit {
  @ViewChild('exampleModalCenter', { static: false }) exampleModalCenter;
  constructor() { }

  ngOnInit() {
  }
  addRegistration() {
    this.exampleModalCenter.show()
}

}
