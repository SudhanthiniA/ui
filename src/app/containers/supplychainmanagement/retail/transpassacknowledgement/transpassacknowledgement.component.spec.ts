import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranspassacknowledgementComponent } from './transpassacknowledgement.component';

describe('TranspassacknowledgementComponent', () => {
  let component: TranspassacknowledgementComponent;
  let fixture: ComponentFixture<TranspassacknowledgementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranspassacknowledgementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranspassacknowledgementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
