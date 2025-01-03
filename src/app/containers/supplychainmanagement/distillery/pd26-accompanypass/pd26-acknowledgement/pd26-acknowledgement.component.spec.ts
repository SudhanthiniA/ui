import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pd26AcknowledgementComponent } from './pd26-acknowledgement.component';

describe('Pd26AcknowledgementComponent', () => {
  let component: Pd26AcknowledgementComponent;
  let fixture: ComponentFixture<Pd26AcknowledgementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pd26AcknowledgementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pd26AcknowledgementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
