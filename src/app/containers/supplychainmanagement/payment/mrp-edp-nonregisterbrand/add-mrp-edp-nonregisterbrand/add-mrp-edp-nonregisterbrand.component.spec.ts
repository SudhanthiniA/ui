import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMRPEDPNonregisterbrandComponent } from './add-mrp-edp-nonregisterbrand.component';

describe('AddMRPEDPNonregisterbrandComponent', () => {
  let component: AddMRPEDPNonregisterbrandComponent;
  let fixture: ComponentFixture<AddMRPEDPNonregisterbrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMRPEDPNonregisterbrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMRPEDPNonregisterbrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
