import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddshelfsaleComponent } from './addshelfsale.component';

describe('AddshelfsaleComponent', () => {
  let component: AddshelfsaleComponent;
  let fixture: ComponentFixture<AddshelfsaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddshelfsaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddshelfsaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
