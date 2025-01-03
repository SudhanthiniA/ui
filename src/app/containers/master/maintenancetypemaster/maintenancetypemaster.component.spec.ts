import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenancetypemasterComponent } from './maintenancetypemaster.component';

describe('MaintenancetypemasterComponent', () => {
  let component: MaintenancetypemasterComponent;
  let fixture: ComponentFixture<MaintenancetypemasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenancetypemasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenancetypemasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
