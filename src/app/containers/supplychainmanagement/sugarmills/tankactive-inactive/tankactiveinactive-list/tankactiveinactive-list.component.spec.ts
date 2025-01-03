import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TankactiveinactiveListComponent } from './tankactiveinactive-list.component';

describe('TankactiveinactiveListComponent', () => {
  let component: TankactiveinactiveListComponent;
  let fixture: ComponentFixture<TankactiveinactiveListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TankactiveinactiveListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TankactiveinactiveListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
