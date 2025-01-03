import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillofentryComponent } from './billofentry.component';

describe('BillofentryComponent', () => {
  let component: BillofentryComponent;
  let fixture: ComponentFixture<BillofentryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillofentryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillofentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
