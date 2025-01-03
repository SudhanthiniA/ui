import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B4FormComponent } from './b4-form.component';

describe('B4FormComponent', () => {
  let component: B4FormComponent;
  let fixture: ComponentFixture<B4FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B4FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B4FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
