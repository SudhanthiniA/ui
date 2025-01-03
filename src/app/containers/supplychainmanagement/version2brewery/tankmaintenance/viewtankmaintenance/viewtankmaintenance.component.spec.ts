import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtankmaintenanceComponent } from './viewtankmaintenance.component';

describe('ViewtankmaintenanceComponent', () => {
  let component: ViewtankmaintenanceComponent;
  let fixture: ComponentFixture<ViewtankmaintenanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewtankmaintenanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewtankmaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
