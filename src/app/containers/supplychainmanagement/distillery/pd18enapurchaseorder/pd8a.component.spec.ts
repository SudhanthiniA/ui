import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pd8aComponent } from './pd8a.component';

describe('Pd8aComponent', () => {
  let component: Pd8aComponent;
  let fixture: ComponentFixture<Pd8aComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pd8aComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pd8aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
