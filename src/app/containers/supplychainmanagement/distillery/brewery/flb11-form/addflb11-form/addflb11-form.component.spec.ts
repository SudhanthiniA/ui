import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addflb11FormComponent } from './addflb11-form.component';

describe('Addflb11FormComponent', () => {
  let component: Addflb11FormComponent;
  let fixture: ComponentFixture<Addflb11FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addflb11FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addflb11FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
