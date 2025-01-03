import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailflComponent } from './retailfl.component';

describe('RetailflComponent', () => {
  let component: RetailflComponent;
  let fixture: ComponentFixture<RetailflComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailflComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailflComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
