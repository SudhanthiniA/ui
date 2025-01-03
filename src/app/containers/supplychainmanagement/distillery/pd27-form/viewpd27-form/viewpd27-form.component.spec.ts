import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewpd27FormComponent } from './viewpd27-form.component';

describe('Viewpd27FormComponent', () => {
  let component: Viewpd27FormComponent;
  let fixture: ComponentFixture<Viewpd27FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewpd27FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewpd27FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
