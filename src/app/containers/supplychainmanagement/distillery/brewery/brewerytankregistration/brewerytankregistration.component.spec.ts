import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrewerytankregistrationComponent } from './brewerytankregistration.component';

describe('BrewerytankregistrationComponent', () => {
  let component: BrewerytankregistrationComponent;
  let fixture: ComponentFixture<BrewerytankregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrewerytankregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrewerytankregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
