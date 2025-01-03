import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmonthlystockComponent } from './addmonthlystock.component';

describe('AddmonthlystockComponent', () => {
  let component: AddmonthlystockComponent;
  let fixture: ComponentFixture<AddmonthlystockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmonthlystockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmonthlystockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
