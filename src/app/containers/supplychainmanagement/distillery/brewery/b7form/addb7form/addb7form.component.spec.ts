import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addb7formComponent } from './addb7form.component';

describe('Addp7formComponent', () => {
  let component: Addb7formComponent;
  let fixture: ComponentFixture<Addb7formComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addb7formComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addb7formComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
