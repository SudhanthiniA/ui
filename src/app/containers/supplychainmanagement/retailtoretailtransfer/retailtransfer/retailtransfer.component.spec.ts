import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailtransferComponent } from './retailtransfer.component';

describe('RetailtransferComponent', () => {
  let component: RetailtransferComponent;
  let fixture: ComponentFixture<RetailtransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailtransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailtransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
