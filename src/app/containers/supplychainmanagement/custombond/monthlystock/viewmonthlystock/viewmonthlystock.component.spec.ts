import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmonthlystockComponent } from './viewmonthlystock.component';

describe('ViewmonthlystockComponent', () => {
  let component: ViewmonthlystockComponent;
  let fixture: ComponentFixture<ViewmonthlystockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewmonthlystockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmonthlystockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
