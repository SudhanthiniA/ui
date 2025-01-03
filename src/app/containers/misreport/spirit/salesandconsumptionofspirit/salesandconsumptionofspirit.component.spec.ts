import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesandconsumptionofspiritComponent } from './salesandconsumptionofspirit.component';

describe('SalesandconsumptionofspiritComponent', () => {
  let component: SalesandconsumptionofspiritComponent;
  let fixture: ComponentFixture<SalesandconsumptionofspiritComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesandconsumptionofspiritComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesandconsumptionofspiritComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
