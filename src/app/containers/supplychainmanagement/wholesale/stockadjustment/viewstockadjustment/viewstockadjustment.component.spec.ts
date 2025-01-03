import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewstockadjustmentComponent } from './viewstockadjustment.component';

describe('ViewstockadjustmentComponent', () => {
  let component: ViewstockadjustmentComponent;
  let fixture: ComponentFixture<ViewstockadjustmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewstockadjustmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewstockadjustmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
