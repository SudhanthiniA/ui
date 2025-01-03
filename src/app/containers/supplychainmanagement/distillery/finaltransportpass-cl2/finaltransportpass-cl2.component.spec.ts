import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinaltransportpassCl2Component } from './finaltransportpass-cl2.component';

describe('FinaltransportpassCl2Component', () => {
  let component: FinaltransportpassCl2Component;
  let fixture: ComponentFixture<FinaltransportpassCl2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinaltransportpassCl2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinaltransportpassCl2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
