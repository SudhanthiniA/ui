import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTankShapeComponent } from './add-tank-shape.component';

describe('AddTankShapeComponent', () => {
  let component: AddTankShapeComponent;
  let fixture: ComponentFixture<AddTankShapeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTankShapeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTankShapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
