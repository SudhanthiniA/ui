import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbottlingproductionplanComponent } from './viewbottlingproductionplan.component';

describe('ViewbottlingproductionplanComponent', () => {
  let component: ViewbottlingproductionplanComponent;
  let fixture: ComponentFixture<ViewbottlingproductionplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewbottlingproductionplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbottlingproductionplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
