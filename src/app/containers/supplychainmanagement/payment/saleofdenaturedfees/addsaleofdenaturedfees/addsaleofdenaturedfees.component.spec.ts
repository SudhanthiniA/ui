import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsaleofdenaturedfeesComponent } from './addsaleofdenaturedfees.component';

describe('AddsaleofdenaturedfeesComponent', () => {
  let component: AddsaleofdenaturedfeesComponent;
  let fixture: ComponentFixture<AddsaleofdenaturedfeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddsaleofdenaturedfeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsaleofdenaturedfeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
