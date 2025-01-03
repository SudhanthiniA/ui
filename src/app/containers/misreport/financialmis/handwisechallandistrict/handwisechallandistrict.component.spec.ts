import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {  HandwisechallandistrictComponent } from './handwisechallandistrict.component';

describe('HandwisechallandistrictComponent', () => {
  let component: HandwisechallandistrictComponent;
  let fixture: ComponentFixture<HandwisechallandistrictComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandwisechallandistrictComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandwisechallandistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
