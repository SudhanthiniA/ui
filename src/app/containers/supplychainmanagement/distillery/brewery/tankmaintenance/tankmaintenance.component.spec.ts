import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TankmaintenanceComponent } from './tankmaintenance.component';

describe('TankmaintenanceComponent', () => {
  let component: TankmaintenanceComponent;
  let fixture: ComponentFixture<TankmaintenanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TankmaintenanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TankmaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
