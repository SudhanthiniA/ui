import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pd26AccompanypassComponent } from './pd26-accompanypass.component';

describe('Pd26AccompanypassComponent', () => {
  let component: Pd26AccompanypassComponent;
  let fixture: ComponentFixture<Pd26AccompanypassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pd26AccompanypassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pd26AccompanypassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
