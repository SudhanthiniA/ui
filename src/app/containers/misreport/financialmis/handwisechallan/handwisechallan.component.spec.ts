import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {  HandwisechallanComponent } from './handwisechallan.component';

describe('HandwisechallanComponent', () => {
  let component: HandwisechallanComponent;
  let fixture: ComponentFixture<HandwisechallanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandwisechallanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandwisechallanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
