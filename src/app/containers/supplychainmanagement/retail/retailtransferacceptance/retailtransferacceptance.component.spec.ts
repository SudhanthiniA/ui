import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailtransferacceptanceComponent } from './retailtransferacceptance.component';

describe('RetailtransferacceptanceComponent', () => {
  let component: RetailtransferacceptanceComponent;
  let fixture: ComponentFixture<RetailtransferacceptanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailtransferacceptanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailtransferacceptanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
