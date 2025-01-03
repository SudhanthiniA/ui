import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewpd8FormComponent } from './viewpd8-form.component';

describe('Viewpd8FormComponent', () => {
  let component: Viewpd8FormComponent;
  let fixture: ComponentFixture<Viewpd8FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewpd8FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewpd8FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
