import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddspiritpermitforecloseComponent } from './addspiritpermitforeclose.component';

describe('AddspiritpermitforecloseComponent', () => {
  let component: AddspiritpermitforecloseComponent;
  let fixture: ComponentFixture<AddspiritpermitforecloseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddspiritpermitforecloseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddspiritpermitforecloseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
