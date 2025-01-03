import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B17FormComponent } from './b17-form.component';

describe('B17FormComponent', () => {
  let component: B17FormComponent;
  let fixture: ComponentFixture<B17FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B17FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B17FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
