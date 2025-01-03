import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TankoverviewlistComponent } from './tankoverviewlist.component';

describe('TankoverviewlistComponent', () => {
  let component: TankoverviewlistComponent;
  let fixture: ComponentFixture<TankoverviewlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TankoverviewlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TankoverviewlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
