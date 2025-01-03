import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsupplytypeComponent } from './addsupplytype.component';

describe('AddsupplytypeComponent', () => {
  let component: AddsupplytypeComponent;
  let fixture: ComponentFixture<AddsupplytypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddsupplytypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsupplytypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
