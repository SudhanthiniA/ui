import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Poweralcoholmovementreport1Component } from './poweralcoholmovementreport1.component';

describe('Poweralcoholmovementreport1Component', () => {
  let component: Poweralcoholmovementreport1Component;
  let fixture: ComponentFixture<Poweralcoholmovementreport1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Poweralcoholmovementreport1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Poweralcoholmovementreport1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
