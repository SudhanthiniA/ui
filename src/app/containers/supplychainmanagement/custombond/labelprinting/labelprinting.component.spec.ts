import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelprintingComponent } from './labelprinting.component';

describe('LabelprintingComponent', () => {
  let component: LabelprintingComponent;
  let fixture: ComponentFixture<LabelprintingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelprintingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelprintingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
