import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pd18IdComponent } from './pd18-id.component';

describe('Pd18IdComponent', () => {
  let component: Pd18IdComponent;
  let fixture: ComponentFixture<Pd18IdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pd18IdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pd18IdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
