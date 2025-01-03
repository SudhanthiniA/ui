import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddspiritpurchaseindentComponent } from './addspiritpurchaseindent.component';

describe('AddspiritpurchaseindentComponent', () => {
  let component: AddspiritpurchaseindentComponent;
  let fixture: ComponentFixture<AddspiritpurchaseindentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddspiritpurchaseindentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddspiritpurchaseindentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
