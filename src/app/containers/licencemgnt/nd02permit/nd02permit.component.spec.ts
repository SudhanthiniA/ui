import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Nd02permitComponent } from './nd02permit.component';

describe('Nd02permitComponent', () => {
  let component: Nd02permitComponent;
  let fixture: ComponentFixture<Nd02permitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Nd02permitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nd02permitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
