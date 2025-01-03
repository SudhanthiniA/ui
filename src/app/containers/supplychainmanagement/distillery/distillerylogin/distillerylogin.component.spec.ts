import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistilleryloginComponent } from './distillerylogin.component';

describe('DistilleryloginComponent', () => {
  let component: DistilleryloginComponent;
  let fixture: ComponentFixture<DistilleryloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistilleryloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistilleryloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
