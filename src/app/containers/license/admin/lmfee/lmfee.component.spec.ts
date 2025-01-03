import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {  LmfeeComponent } from './lmfee.component';

describe('LmfeeComponent', () => {
  let component: LmfeeComponent;
  let fixture: ComponentFixture<LmfeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmfeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmfeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
