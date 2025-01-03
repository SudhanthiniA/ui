import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbrandregistrationComponent } from './addbrandregistration.component';

describe('AddbrandregistrationComponent', () => {
  let component: AddbrandregistrationComponent;
  let fixture: ComponentFixture<AddbrandregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddbrandregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbrandregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
