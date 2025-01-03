import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountpurchaserComponent } from './accountpurchaser.component';

describe('AccountpurchaserComponent', () => {
  let component: AccountpurchaserComponent;
  let fixture: ComponentFixture<AccountpurchaserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountpurchaserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountpurchaserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
