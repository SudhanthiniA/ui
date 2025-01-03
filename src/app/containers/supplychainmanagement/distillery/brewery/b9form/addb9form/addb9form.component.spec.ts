import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addb9formComponent } from './addb9form.component';

describe('Addb9formComponent', () => {
  let component: Addb9formComponent;
  let fixture: ComponentFixture<Addb9formComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addb9formComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addb9formComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
