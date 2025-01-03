import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsampletestfeesComponent } from './addsampletestfees.component';

describe('AddsampletestfeesComponent', () => {
  let component: AddsampletestfeesComponent;
  let fixture: ComponentFixture<AddsampletestfeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddsampletestfeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsampletestfeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
