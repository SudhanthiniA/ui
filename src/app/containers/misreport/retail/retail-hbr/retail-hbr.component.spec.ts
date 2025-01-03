import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailhbrComponent } from './retail-hbr.component';

describe('RetailhbrComponent', () => {
  let component: RetailhbrComponent;
  let fixture: ComponentFixture<RetailhbrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailhbrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailhbrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
