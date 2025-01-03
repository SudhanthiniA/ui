import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TankactiveinactiveComponent } from './tankactiveinactive.component';

describe('TankactiveinactiveComponent', () => {
  let component: TankactiveinactiveComponent;
  let fixture: ComponentFixture<TankactiveinactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TankactiveinactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TankactiveinactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
