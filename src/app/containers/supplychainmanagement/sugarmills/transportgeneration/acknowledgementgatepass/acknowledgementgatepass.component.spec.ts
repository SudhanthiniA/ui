import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcknowledgementgatepassComponent } from './acknowledgementgatepass.component';

describe('AcknowledgementgatepassComponent', () => {
  let component: AcknowledgementgatepassComponent;
  let fixture: ComponentFixture<AcknowledgementgatepassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcknowledgementgatepassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcknowledgementgatepassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
