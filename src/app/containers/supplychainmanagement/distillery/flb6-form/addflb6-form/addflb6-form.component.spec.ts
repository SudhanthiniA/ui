import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addflb6FormComponent } from './addflb6-form.component';

describe('Addflb6FormComponent', () => {
  let component: Addflb6FormComponent;
  let fixture: ComponentFixture<Addflb6FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addflb6FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addflb6FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
