import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditPd11Component } from './addedit-pd11.component';

describe('AddeditPd11Component', () => {
  let component: AddeditPd11Component;
  let fixture: ComponentFixture<AddeditPd11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditPd11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditPd11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
