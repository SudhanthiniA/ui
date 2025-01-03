import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Orderpickupnew2Component } from './orderpickupnew2.component';

describe('Orderpickupnew2Component', () => {
  let component: Orderpickupnew2Component;
  let fixture: ComponentFixture<Orderpickupnew2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Orderpickupnew2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Orderpickupnew2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
