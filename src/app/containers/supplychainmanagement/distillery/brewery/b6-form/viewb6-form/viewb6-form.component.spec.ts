import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewb6FormComponent } from './viewb6-form.component';

describe('Viewb6FormComponent', () => {
  let component: Viewb6FormComponent;
  let fixture: ComponentFixture<Viewb6FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewb6FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewb6FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
