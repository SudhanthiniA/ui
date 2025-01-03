import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewflb4FormComponent } from './viewflb4-form.component';

describe('Viewflb4FormComponent', () => {
  let component: Viewflb4FormComponent;
  let fixture: ComponentFixture<Viewflb4FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewflb4FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewflb4FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
