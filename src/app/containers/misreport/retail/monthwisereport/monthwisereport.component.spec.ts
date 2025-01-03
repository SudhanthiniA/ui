import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthwisereportComponent } from './monthwisereport.component';

describe('MonthwisereportComponent', () => {
  let component: MonthwisereportComponent;
  let fixture: ComponentFixture<MonthwisereportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthwisereportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthwisereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
