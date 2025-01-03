import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtproductionplanComponent } from './otproductionplan.component';

describe('OtproductionplanComponent', () => {
  let component: OtproductionplanComponent;
  let fixture: ComponentFixture<OtproductionplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtproductionplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtproductionplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
