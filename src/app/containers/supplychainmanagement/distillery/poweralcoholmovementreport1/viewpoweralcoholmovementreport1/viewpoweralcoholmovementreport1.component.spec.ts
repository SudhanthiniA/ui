import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewpoweralcoholmovementreport1Component } from './viewpoweralcoholmovementreport1.component';

describe('Viewpoweralcoholmovementreport1Component', () => {
  let component: Viewpoweralcoholmovementreport1Component;
  let fixture: ComponentFixture<Viewpoweralcoholmovementreport1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewpoweralcoholmovementreport1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewpoweralcoholmovementreport1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
