import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpaymenttypeComponent } from './viewpaymenttype.component';

describe('ViewpaymenttypeComponent', () => {
  let component: ViewpaymenttypeComponent;
  let fixture: ComponentFixture<ViewpaymenttypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewpaymenttypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewpaymenttypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
