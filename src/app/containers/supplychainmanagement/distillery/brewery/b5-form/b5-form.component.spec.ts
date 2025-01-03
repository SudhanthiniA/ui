import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B5FormComponent } from './b5-form.component';

describe('B5FormComponent', () => {
  let component: B5FormComponent;
  let fixture: ComponentFixture<B5FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B5FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B5FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
