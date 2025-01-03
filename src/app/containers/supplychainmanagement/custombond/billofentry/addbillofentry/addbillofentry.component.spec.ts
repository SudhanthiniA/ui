import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbillofentryComponent } from './addbillofentry.component';

describe('AddbillofentryComponent', () => {
  let component: AddbillofentryComponent;
  let fixture: ComponentFixture<AddbillofentryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddbillofentryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbillofentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
