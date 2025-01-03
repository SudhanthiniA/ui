import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsettingofcamerasandlogdetailsComponent } from './addsettingofcamerasandlogdetails.component';

describe('AddsettingofcamerasandlogdetailsComponent', () => {
  let component: AddsettingofcamerasandlogdetailsComponent;
  let fixture: ComponentFixture<AddsettingofcamerasandlogdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddsettingofcamerasandlogdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsettingofcamerasandlogdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
