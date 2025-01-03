import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TankcleaningComponent } from './tankcleaning.component';

describe('TankcleaningComponent', () => {
  let component: TankcleaningComponent;
  let fixture: ComponentFixture<TankcleaningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TankcleaningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TankcleaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
