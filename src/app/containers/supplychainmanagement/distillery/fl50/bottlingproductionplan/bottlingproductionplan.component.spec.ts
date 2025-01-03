import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottlingproductionplanComponent } from './bottlingproductionplan.component';

describe('BottlingproductionplanComponent', () => {
  let component: BottlingproductionplanComponent;
  let fixture: ComponentFixture<BottlingproductionplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottlingproductionplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottlingproductionplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
