import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddhbrlicenseComponent } from './addhbrlicense.component';

describe('AddhbrlicenseComponent', () => {
  let component: AddhbrlicenseComponent;
  let fixture: ComponentFixture<AddhbrlicenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddhbrlicenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddhbrlicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
