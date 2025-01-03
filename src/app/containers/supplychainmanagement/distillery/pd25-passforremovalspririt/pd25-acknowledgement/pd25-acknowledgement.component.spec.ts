import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pd25AcknowledgementComponent } from './pd25-acknowledgement.component';

describe('Pd25AcknowledgementComponent', () => {
  let component: Pd25AcknowledgementComponent;
  let fixture: ComponentFixture<Pd25AcknowledgementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pd25AcknowledgementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pd25AcknowledgementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
