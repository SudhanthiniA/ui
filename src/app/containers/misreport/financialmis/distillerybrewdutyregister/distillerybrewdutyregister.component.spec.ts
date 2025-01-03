import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistillerybrewdutyregisterComponent } from './distillerybrewdutyregister.component';

describe('DistillerybrewdutyregisterComponent', () => {
  let component: DistillerybrewdutyregisterComponent;
  let fixture: ComponentFixture<DistillerybrewdutyregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistillerybrewdutyregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistillerybrewdutyregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
