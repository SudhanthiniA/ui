import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addb17FormComponent } from './addb17-form.component';

describe('Addb17FormComponent', () => {
  let component: Addb17FormComponent;
  let fixture: ComponentFixture<Addb17FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addb17FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addb17FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
