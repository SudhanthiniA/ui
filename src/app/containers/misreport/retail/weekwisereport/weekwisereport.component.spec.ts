import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekwisereportComponent } from './weekwisereport.component';

describe('WeekwisereportComponent', () => {
  let component: WeekwisereportComponent;
  let fixture: ComponentFixture<WeekwisereportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeekwisereportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekwisereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
