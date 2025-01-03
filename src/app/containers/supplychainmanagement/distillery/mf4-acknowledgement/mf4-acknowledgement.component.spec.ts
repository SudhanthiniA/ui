import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mf4AcknowledgementComponent } from './mf4-acknowledgement.component';

describe('Mf4AcknowledgementComponent', () => {
  let component: Mf4AcknowledgementComponent;
  let fixture: ComponentFixture<Mf4AcknowledgementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mf4AcknowledgementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mf4AcknowledgementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
