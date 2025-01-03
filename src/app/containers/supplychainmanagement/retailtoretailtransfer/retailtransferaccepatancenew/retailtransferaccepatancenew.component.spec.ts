import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailtransferaccepatancenewComponent } from './retailtransferaccepatancenew.component';

describe('RetailtransferaccepatancenewComponent', () => {
  let component: RetailtransferaccepatancenewComponent;
  let fixture: ComponentFixture<RetailtransferaccepatancenewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailtransferaccepatancenewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailtransferaccepatancenewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
