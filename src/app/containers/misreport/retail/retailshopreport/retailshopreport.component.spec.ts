import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailshopreportComponent } from './retailshopreport.component';

describe('RetailshopreportComponent', () => {
  let component: RetailshopreportComponent;
  let fixture: ComponentFixture<RetailshopreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailshopreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailshopreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
