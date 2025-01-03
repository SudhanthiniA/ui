import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlendingproductionplanComponent } from './blendingproductionplan.component';

describe('BlendingproductionplanComponent', () => {
  let component: BlendingproductionplanComponent;
  let fixture: ComponentFixture<BlendingproductionplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlendingproductionplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlendingproductionplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
