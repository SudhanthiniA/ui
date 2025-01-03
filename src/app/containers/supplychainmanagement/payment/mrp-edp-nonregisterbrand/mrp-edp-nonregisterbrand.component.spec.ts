import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MRPEDPNonregisterbrandComponent } from './mrp-edp-nonregisterbrand.component';

describe('MRPEDPNonregisterbrandComponent', () => {
  let component: MRPEDPNonregisterbrandComponent;
  let fixture: ComponentFixture<MRPEDPNonregisterbrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MRPEDPNonregisterbrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MRPEDPNonregisterbrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
