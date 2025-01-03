import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbillofentryComponent } from './viewbillofentry.component';

describe('ViewbillofentryComponent', () => {
  let component: ViewbillofentryComponent;
  let fixture: ComponentFixture<ViewbillofentryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewbillofentryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbillofentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
