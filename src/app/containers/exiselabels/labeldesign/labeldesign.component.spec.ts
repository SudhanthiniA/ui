import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabeldesignComponent } from './labeldesign.component';

describe('LabeldesignComponent', () => {
  let component: LabeldesignComponent;
  let fixture: ComponentFixture<LabeldesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabeldesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabeldesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
