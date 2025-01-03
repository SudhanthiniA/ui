import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addflb5FormComponent } from './addflb5-form.component';

describe('Addflb5FormComponent', () => {
  let component: Addflb5FormComponent;
  let fixture: ComponentFixture<Addflb5FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addflb5FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addflb5FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
