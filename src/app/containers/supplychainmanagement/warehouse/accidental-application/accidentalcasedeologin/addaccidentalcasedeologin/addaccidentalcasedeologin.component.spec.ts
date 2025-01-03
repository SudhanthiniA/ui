import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddaccidentalcasedeologinComponent } from './addaccidentalcasedeologin.component';

describe('AddaccidentalcasedeologinComponent', () => {
  let component: AddaccidentalcasedeologinComponent;
  let fixture: ComponentFixture<AddaccidentalcasedeologinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddaccidentalcasedeologinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddaccidentalcasedeologinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
