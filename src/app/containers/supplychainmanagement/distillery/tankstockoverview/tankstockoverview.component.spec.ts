import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TankstockoverviewComponent } from './tankstockoverview.component';

describe('TankstockoverviewComponent', () => {
  let component: TankstockoverviewComponent;
  let fixture: ComponentFixture<TankstockoverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TankstockoverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TankstockoverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
