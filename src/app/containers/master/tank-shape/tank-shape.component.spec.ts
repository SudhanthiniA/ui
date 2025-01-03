import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TankShapeComponent } from './tank-shape.component';

describe('TankShapeComponent', () => {
  let component: TankShapeComponent;
  let fixture: ComponentFixture<TankShapeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TankShapeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TankShapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
