import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranspassgenfordistbondwareComponent } from './transpassgenfordistbondware.component';

describe('TranspassgenfordistbondwareComponent', () => {
  let component: TranspassgenfordistbondwareComponent;
  let fixture: ComponentFixture<TranspassgenfordistbondwareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranspassgenfordistbondwareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranspassgenfordistbondwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
