import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addflb4FormComponent } from './addflb4-form.component';

describe('Addflb4FormComponent', () => {
  let component: Addflb4FormComponent;
  let fixture: ComponentFixture<Addflb4FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addflb4FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addflb4FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
