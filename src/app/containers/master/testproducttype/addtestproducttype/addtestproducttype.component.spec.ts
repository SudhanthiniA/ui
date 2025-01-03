import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtestproducttypeComponent } from './addtestproducttype.component';

describe('AddtestproducttypeComponent', () => {
  let component: AddtestproducttypeComponent;
  let fixture: ComponentFixture<AddtestproducttypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtestproducttypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtestproducttypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
