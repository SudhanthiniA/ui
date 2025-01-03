import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistilleryregreqwithinupComponent } from './distilleryregreqwithinup.component';

describe('DistilleryregreqwithinupComponent', () => {
  let component: DistilleryregreqwithinupComponent;
  let fixture: ComponentFixture<DistilleryregreqwithinupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistilleryregreqwithinupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistilleryregreqwithinupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
