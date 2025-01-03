import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddotproductionplanComponent } from './addotproductionplan.component';

describe('AddotproductionplanComponent', () => {
  let component: AddotproductionplanComponent;
  let fixture: ComponentFixture<AddotproductionplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddotproductionplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddotproductionplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
