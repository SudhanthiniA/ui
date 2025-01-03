import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TankoverviewComponent } from './tankoverview.component';

describe('TankoverviewComponent', () => {
  let component: TankoverviewComponent;
  let fixture: ComponentFixture<TankoverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TankoverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TankoverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
