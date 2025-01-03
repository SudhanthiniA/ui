import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewb4FormComponent } from './viewb4-form.component';

describe('Viewb4FormComponent', () => {
  let component: Viewb4FormComponent;
  let fixture: ComponentFixture<Viewb4FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewb4FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewb4FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
