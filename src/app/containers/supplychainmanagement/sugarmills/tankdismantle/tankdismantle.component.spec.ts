import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TankdismantleComponent } from './tankdismantle.component';

describe('TankdismantleComponent', () => {
  let component: TankdismantleComponent;
  let fixture: ComponentFixture<TankdismantleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TankdismantleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TankdismantleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
