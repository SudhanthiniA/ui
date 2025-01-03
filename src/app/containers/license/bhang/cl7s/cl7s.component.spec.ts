import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cl7sComponent } from './cl7s.component';

describe('Cl7sComponent', () => {
  let component: Cl7sComponent;
  let fixture: ComponentFixture<Cl7sComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cl7sComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cl7sComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
