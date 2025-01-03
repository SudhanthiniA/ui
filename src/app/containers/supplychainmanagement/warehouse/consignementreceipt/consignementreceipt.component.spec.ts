import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsignementreceiptComponent } from './consignementreceipt.component';

describe('ConsignementreceiptComponent', () => {
  let component: ConsignementreceiptComponent;
  let fixture: ComponentFixture<ConsignementreceiptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsignementreceiptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsignementreceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
