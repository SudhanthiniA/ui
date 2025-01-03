import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B6FormComponent } from './b6-form.component';

describe('B6FormComponent', () => {
  let component: B6FormComponent;
  let fixture: ComponentFixture<B6FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B6FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B6FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
