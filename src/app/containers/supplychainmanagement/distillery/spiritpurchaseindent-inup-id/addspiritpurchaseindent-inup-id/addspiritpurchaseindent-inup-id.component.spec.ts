import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddspiritpurchaseindentInupIdComponent } from './addspiritpurchaseindent-inup-id.component';

describe('AddspiritpurchaseindentInupIdComponent', () => {
  let component: AddspiritpurchaseindentInupIdComponent;
  let fixture: ComponentFixture<AddspiritpurchaseindentInupIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddspiritpurchaseindentInupIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddspiritpurchaseindentInupIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
