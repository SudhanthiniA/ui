import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tankconversionreport2Component } from './tankconversionreport2.component';

describe('Tankconversionreport2Component', () => {
  let component: Tankconversionreport2Component;
  let fixture: ComponentFixture<Tankconversionreport2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tankconversionreport2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tankconversionreport2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
