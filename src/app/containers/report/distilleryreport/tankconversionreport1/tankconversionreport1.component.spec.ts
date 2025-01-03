import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tankconversionreport1Component } from './tankconversionreport1.component';

describe('Tankconversionreport1Component', () => {
  let component: Tankconversionreport1Component;
  let fixture: ComponentFixture<Tankconversionreport1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tankconversionreport1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tankconversionreport1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
