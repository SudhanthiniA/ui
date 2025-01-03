import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnonRegisterbrandEDPMRPComponent } from './addnon-registerbrand-edp-mrp.component';

describe('AddnonRegisterbrandEDPMRPComponent', () => {
  let component: AddnonRegisterbrandEDPMRPComponent;
  let fixture: ComponentFixture<AddnonRegisterbrandEDPMRPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnonRegisterbrandEDPMRPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnonRegisterbrandEDPMRPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
