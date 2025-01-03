import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addb5FormComponent } from './addb5-form.component';

describe('Addb5FormComponent', () => {
  let component: Addb5FormComponent;
  let fixture: ComponentFixture<Addb5FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addb5FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addb5FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
