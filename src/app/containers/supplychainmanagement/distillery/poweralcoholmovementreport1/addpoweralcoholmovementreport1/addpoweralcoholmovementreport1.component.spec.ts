import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addpoweralcoholmovementreport1Component } from './addpoweralcoholmovementreport1.component';

describe('Addpoweralcoholmovementreport1Component', () => {
  let component: Addpoweralcoholmovementreport1Component;
  let fixture: ComponentFixture<Addpoweralcoholmovementreport1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addpoweralcoholmovementreport1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addpoweralcoholmovementreport1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
