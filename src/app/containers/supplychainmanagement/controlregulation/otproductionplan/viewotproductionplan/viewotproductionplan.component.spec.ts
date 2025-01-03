import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewotproductionplanComponent } from './viewotproductionplan.component';

describe('ViewotproductionplanComponent', () => {
  let component: ViewotproductionplanComponent;
  let fixture: ComponentFixture<ViewotproductionplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewotproductionplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewotproductionplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
