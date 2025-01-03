import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addb13formComponent } from './addb13form.component';

describe('Addb13formComponent', () => {
  let component: Addb13formComponent;
  let fixture: ComponentFixture<Addb13formComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addb13formComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addb13formComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
