import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewflb6FormComponent } from './viewflb6-form.component';

describe('Viewflb6FormComponent', () => {
  let component: Viewflb6FormComponent;
  let fixture: ComponentFixture<Viewflb6FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewflb6FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewflb6FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
