import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtranspassgenfordistbondwareComponent } from './viewtranspassgenfordistbondware.component';

describe('ViewtranspassgenfordistbondwareComponent', () => {
  let component: ViewtranspassgenfordistbondwareComponent;
  let fixture: ComponentFixture<ViewtranspassgenfordistbondwareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewtranspassgenfordistbondwareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewtranspassgenfordistbondwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
