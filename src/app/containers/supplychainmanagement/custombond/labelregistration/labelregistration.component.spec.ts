import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelregistrationComponent } from './labelregistration.component';

describe('LabelregistrationComponent', () => {
  let component: LabelregistrationComponent;
  let fixture: ComponentFixture<LabelregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
