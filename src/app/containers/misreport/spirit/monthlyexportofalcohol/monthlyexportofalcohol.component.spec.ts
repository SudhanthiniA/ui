import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyexportofalcoholComponent } from './monthlyexportofalcohol.component';

describe('MonthlyexportofalcoholComponent', () => {
  let component: MonthlyexportofalcoholComponent;
  let fixture: ComponentFixture<MonthlyexportofalcoholComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyexportofalcoholComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyexportofalcoholComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
