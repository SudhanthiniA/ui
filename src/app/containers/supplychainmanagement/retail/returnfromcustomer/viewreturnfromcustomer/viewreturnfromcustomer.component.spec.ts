import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewreturnfromcustomerComponent } from './viewreturnfromcustomer.component';

describe('ViewreturnfromcustomerComponent', () => {
  let component: ViewreturnfromcustomerComponent;
  let fixture: ComponentFixture<ViewreturnfromcustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewreturnfromcustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewreturnfromcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
