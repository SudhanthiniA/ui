import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddspiritimportfeesComponent } from './addspiritimportfees.component';

describe('AddspiritimportfeesComponent', () => {
  let component: AddspiritimportfeesComponent;
  let fixture: ComponentFixture<AddspiritimportfeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddspiritimportfeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddspiritimportfeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
