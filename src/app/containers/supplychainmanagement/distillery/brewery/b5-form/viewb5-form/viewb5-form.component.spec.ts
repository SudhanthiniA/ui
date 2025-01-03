import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewb5FormComponent } from './viewb5-form.component';

describe('Viewb5FormComponent', () => {
  let component: Viewb5FormComponent;
  let fixture: ComponentFixture<Viewb5FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewb5FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewb5FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
