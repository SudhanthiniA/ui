import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewflb5FormComponent } from './viewflb5-form.component';

describe('Viewflb5FormComponent', () => {
  let component: Viewflb5FormComponent;
  let fixture: ComponentFixture<Viewflb5FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewflb5FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewflb5FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
