import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbrewerytankregistrationComponent } from './viewbrewerytankregistration.component';

describe('ViewbrewerytankregistrationComponent', () => {
  let component: ViewbrewerytankregistrationComponent;
  let fixture: ComponentFixture<ViewbrewerytankregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewbrewerytankregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbrewerytankregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
