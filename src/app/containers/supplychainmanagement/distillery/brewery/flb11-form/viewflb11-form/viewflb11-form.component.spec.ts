import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewflb11FormComponent } from './viewflb11-form.component';

describe('Viewflb11FormComponent', () => {
  let component: Viewflb11FormComponent;
  let fixture: ComponentFixture<Viewflb11FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewflb11FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewflb11FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
