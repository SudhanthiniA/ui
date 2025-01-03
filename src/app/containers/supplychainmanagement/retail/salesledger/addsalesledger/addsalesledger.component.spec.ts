import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsalesledgerComponent } from './addsalesledger.component';

describe('AddsalesledgerComponent', () => {
  let component: AddsalesledgerComponent;
  let fixture: ComponentFixture<AddsalesledgerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddsalesledgerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsalesledgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
