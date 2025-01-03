import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addb4FormComponent } from './addb4-form.component';

describe('Addb4FormComponent', () => {
  let component: Addb4FormComponent;
  let fixture: ComponentFixture<Addb4FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addb4FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addb4FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
