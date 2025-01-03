import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TankactiveinactiveViewComponent } from './tankactiveinactive-view.component';

describe('TankactiveinactiveViewComponent', () => {
  let component: TankactiveinactiveViewComponent;
  let fixture: ComponentFixture<TankactiveinactiveViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TankactiveinactiveViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TankactiveinactiveViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
