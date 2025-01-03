import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TankdismentleComponent } from './tankdismentle.component';

describe('TankdismentleComponent', () => {
  let component: TankdismentleComponent;
  let fixture: ComponentFixture<TankdismentleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TankdismentleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TankdismentleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
