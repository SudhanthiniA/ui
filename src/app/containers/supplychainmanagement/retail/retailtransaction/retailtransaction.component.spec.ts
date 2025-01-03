import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailtransactionComponent } from './retailtransaction.component';

describe('RetailtransactionComponent', () => {
  let component: RetailtransactionComponent;
  let fixture: ComponentFixture<RetailtransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailtransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailtransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
