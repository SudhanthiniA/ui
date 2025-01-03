import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pd30FormComponent } from './pd30-form.component';

describe('Pd30FormComponent', () => {
  let component: Pd30FormComponent;
  let fixture: ComponentFixture<Pd30FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pd30FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pd30FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
