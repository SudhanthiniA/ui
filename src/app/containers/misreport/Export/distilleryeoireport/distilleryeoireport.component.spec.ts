import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistilleryeoireportComponent } from './distilleryeoireport.component';

describe('DistilleryeoireportComponent', () => {
  let component: DistilleryeoireportComponent;
  let fixture: ComponentFixture<DistilleryeoireportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistilleryeoireportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistilleryeoireportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
