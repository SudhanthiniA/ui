import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtransitgatepassComponent } from './viewtransitgatepass.component';

describe('ViewtransitgatepassComponent', () => {
  let component: ViewtransitgatepassComponent;
  let fixture: ComponentFixture<ViewtransitgatepassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewtransitgatepassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewtransitgatepassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
