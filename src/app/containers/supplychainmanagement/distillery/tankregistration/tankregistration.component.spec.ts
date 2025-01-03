import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TankregistrationComponent } from './tankregistration.component';

describe('TankregistrationComponent', () => {
  let component: TankregistrationComponent;
  let fixture: ComponentFixture<TankregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TankregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TankregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
