import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmworderpickupComponent } from './viewmworderpickup.component';

describe('ViewmworderpickupComponent', () => {
  let component: ViewmworderpickupComponent;
  let fixture: ComponentFixture<ViewmworderpickupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewmworderpickupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmworderpickupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
