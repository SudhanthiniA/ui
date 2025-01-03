import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TankrepairComponent } from './tankrepair.component';

describe('TankrepairComponent', () => {
  let component: TankrepairComponent;
  let fixture: ComponentFixture<TankrepairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TankrepairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TankrepairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
