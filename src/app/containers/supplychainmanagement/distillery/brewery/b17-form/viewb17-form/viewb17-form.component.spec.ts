import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewb17FormComponent } from './viewb17-form.component';

describe('Viewb17FormComponent', () => {
  let component: Viewb17FormComponent;
  let fixture: ComponentFixture<Viewb17FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewb17FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewb17FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
