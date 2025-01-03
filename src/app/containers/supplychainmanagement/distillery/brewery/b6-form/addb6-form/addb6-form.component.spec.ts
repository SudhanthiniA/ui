import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addb6FormComponent } from './addb6-form.component';

describe('Addb6FormComponent', () => {
  let component: Addb6FormComponent;
  let fixture: ComponentFixture<Addb6FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addb6FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addb6FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
