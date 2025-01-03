import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddspiritpurchasepermitIdComponent } from './addspiritpurchasepermit-id.component';

describe('AddspiritpurchasepermitIdComponent', () => {
  let component: AddspiritpurchasepermitIdComponent;
  let fixture: ComponentFixture<AddspiritpurchasepermitIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddspiritpurchasepermitIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddspiritpurchasepermitIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
