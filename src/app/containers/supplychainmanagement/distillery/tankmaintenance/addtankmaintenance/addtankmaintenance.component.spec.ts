import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtankmaintenanceComponent } from './addtankmaintenance.component';

describe('AddtankmaintenanceComponent', () => {
  let component: AddtankmaintenanceComponent;
  let fixture: ComponentFixture<AddtankmaintenanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtankmaintenanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtankmaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
