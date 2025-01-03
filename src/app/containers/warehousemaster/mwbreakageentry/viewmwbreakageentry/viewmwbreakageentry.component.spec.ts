import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmwbreakageentryComponent } from './viewmwbreakageentry.component';

describe('ViewmwbreakageentryComponent', () => {
  let component: ViewmwbreakageentryComponent;
  let fixture: ComponentFixture<ViewmwbreakageentryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewmwbreakageentryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmwbreakageentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
