import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewpd23FormComponent } from './viewpd23-form.component';

describe('Viewpd23FormComponent', () => {
  let component: Viewpd23FormComponent;
  let fixture: ComponentFixture<Viewpd23FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewpd23FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewpd23FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
