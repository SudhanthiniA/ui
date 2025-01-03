import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTankShapeComponent } from './view-tank-shape.component';

describe('ViewTankShapeComponent', () => {
  let component: ViewTankShapeComponent;
  let fixture: ComponentFixture<ViewTankShapeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTankShapeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTankShapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
